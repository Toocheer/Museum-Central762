<template>
  <div class="search-box">
    <input
      ref="input"
      aria-label="Search"
      :value="query"
      :class="{ focused: focused }"
      :placeholder="placeholder"
      autocomplete="off"
      spellcheck="false"
      @input="query = $event.target.value"
      @focus="focused = true"
      @blur="focused = false"
      @keyup.enter="go(focusIndex)"
      @keyup.up="onUp"
      @keyup.down="onDown"
    />
    <ul v-if="showSuggestions" class="suggestions" :class="{ 'align-right': alignRight }" @mouseleave="unfocus">
      <li
        v-for="(s, i) in suggestions"
        :key="i"
        class="suggestion"
        :class="{ focused: i === focusIndex }"
        @mousedown="go(i)"
        @mouseenter="focus(i)"
      >
        <a :href="s.path + s.slug">
          <!-- <div v-if="s.parentPageTitle" class="parent-page-title" v-html="s.parentPageTitle" /> -->
          <div>
            <div class="page-title">{{ s.title }}</div>
            <!-- prettier-ignore -->
            <div v-if="s.headingStr" class="header">
              {{ s.headingDisplay.prefix }}<span class="highlight">{{ s.headingDisplay.highlightedContent }}</span>{{ s.headingDisplay.suffix }}
            </div>
            <!-- prettier-ignore -->
            <div v-if="s.contentStr" class="result mt-2 subtext">
              {{ s.contentDisplay.prefix }}<span class="highlight">{{ s.contentDisplay.highlightedContent }}</span>{{ s.contentDisplay.suffix }}
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import flexsearchSvc from '../services/flexsearchSvc'

// see https://vuepress.vuejs.org/plugin/option-api.html#clientdynamicmodules
import hooks from '@dynamic/hooks'

/* global SEARCH_MAX_SUGGESTIONS, SEARCH_PATHS, SEARCH_HOTKEYS */
export default {
  name: 'SearchBox',
  props: {
    placeholder: {
      required: true
    }
  },
  data() {
    return {
      query: '',
      focused: false,
      focusIndex: 0,
      suggestions: null,
    }
  },
  computed: {
    queryTerms() {
      if (!this.query) return []
      const result = flexsearchSvc
        .normalizeString(this.query)
        .split(/[^\p{L}\p{N}_]+/iu)
        .filter(t => t)
      return result
    },
    showSuggestions() {
      return this.focused && this.suggestions && this.suggestions.length
    },

    // make suggestions align right when there are not enough items
    alignRight() {
      const navCount = (this.$site.themeConfig.nav || []).length
      const repo = this.$site.repo ? 1 : 0
      return navCount + repo <= 2
    },
  },
  watch: {
    query() {
      this.getSuggestions()
    },
  },
  /* global OPTIONS */
  mounted() {
    const options = OPTIONS || {}
    flexsearchSvc.buildIndex(this.$site.pages, options)
    // set query from URL
    const params = this.urlParams()
    if (params) {
      const query = params.get('query')
      if (query) {
        this.query = decodeURI(query)
        this.focused = true
      }
    }
  },
  methods: {
    async getSuggestions() {
      if (!this.query || !this.queryTerms.length) {
        this.suggestions = []
        return
      }
      let suggestions = await flexsearchSvc.match(
        this.query,
        this.queryTerms,
        this.$site.themeConfig.searchMaxSuggestions || 10,
      )
      if (hooks.processSuggestions) {
        // augment suggestions with user-provided function
        suggestions = await hooks.processSuggestions(suggestions, this.query, this.queryTerms)
      }
      this.suggestions = suggestions.map(s => ({
        ...s,
        headingDisplay: highlight(s.headingStr, s.headingHighlight),
        contentDisplay: highlight(s.contentStr, s.contentHighlight),
      }))
    },
    getPageLocalePath(page) {
      for (const localePath in this.$site.locales || {}) {
        if (localePath !== '/' && page.path.indexOf(localePath) === 0) {
          return localePath
        }
      }
      return '/'
    },
    isSearchable(page) {
      let searchPaths = SEARCH_PATHS
      // all paths searchables
      if (searchPaths === null) {
        return true
      }
      searchPaths = Array.isArray(searchPaths) ? searchPaths : new Array(searchPaths)
      return (
        searchPaths.filter(path => {
          return page.path.match(path)
        }).length > 0
      )
    },
    onUp() {
      if (this.showSuggestions) {
        if (this.focusIndex > 0) {
          this.focusIndex--
        } else {
          this.focusIndex = this.suggestions.length - 1
        }
      }
    },
    onDown() {
      if (this.showSuggestions) {
        if (this.focusIndex < this.suggestions.length - 1) {
          this.focusIndex++
        } else {
          this.focusIndex = 0
        }
      }
    },
    go(i) {
      if (!this.showSuggestions) {
        return
      }
      if (hooks.onGoToSuggestion) {
        const result = hooks.onGoToSuggestion(i, this.suggestions[i], this.query, this.queryTerms)
        if (result === true) return
      }
      if (this.suggestions[i].external) {
        window.open(this.suggestions[i].path + this.suggestions[i].slug, '_blank')
      } else {
        this.$router.push(this.suggestions[i].path + this.suggestions[i].slug)
        this.query = ''
        this.focusIndex = 0
        this.focused = false

        // reset query param
        const params = this.urlParams()
        if (params) {
          params.delete('query')
          const paramsString = params.toString()
          const newState = window.location.pathname + (paramsString ? `?${paramsString}` : '')
          history.pushState(null, '', newState)
        }
      }
    },
    focus(i) {
      this.focusIndex = i
    },
    unfocus() {
      this.focusIndex = -1
    },
    urlParams() {
      if (!window.location.search) {
        return null
      }
      return new URLSearchParams(window.location.search)
    },
  },
}

function highlight(str, strHighlight) {
  if (!str) return {}
  if (!strHighlight) return { prefix: str }
  const [start, length] = strHighlight
  const end = start + length

  const prefix = str.slice(0, start)
  const highlightedContent = str.slice(start, end)
  const suffix = str.slice(end)
  return { prefix, highlightedContent, suffix }
}
</script>

<style lang="stylus">
.search-box
  margin 0 0.5em
  display flex
  position relative
  flex-grow 1
  justify-content center
  input
    cursor text
    width 100%
    height: 2rem
    display inline-block
    border-radius 5px
    font-size 0.9rem
    padding 0 0.5rem 0 2rem
    outline none
    transition all .2s ease
    background url(../assets/search.svg) 0.6rem 0.5rem no-repeat
    background-size 1rem
  .suggestions
    width 100%
    display block
    position absolute
    top 2 rem
    border-radius 10px
    margin 0 -1em
    padding 0.4rem
    list-style-type none
  .suggestion
    line-height 1.4
    padding 0.6rem
    border-radius 10px
    cursor pointer
    a
      white-space normal
      .page-title
        font-size 0.8em
      .header
        font-weight bolder
      .result
        font-size 0.8em
      .highlight
        color #df494f
        font-weight bold

@media(min-width: 992px)
  .search-box
    justify-content start
    input
      width 24em
    .suggestions
      width 24em
</style>
