(window.webpackJsonp=window.webpackJsonp||[]).push([[14,17],{237:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return u})),n.d(e,"c",(function(){return o}));n(91);const s=/#.*$/,i=/\.(md|html)$/,a=/\/$/,r=/^[a-z]+:/i;function l(t){return decodeURI(t).replace(s,"").replace(i,"")}function c(t){return r.test(t)}function u(t){if(c(t))return t;const e=t.match(s),n=e?e[0]:"",i=l(t);return a.test(i)?t:i+".html"+n}function o(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},244:function(t,e,n){},256:function(t,e,n){"use strict";n(244)},263:function(t,e,n){"use strict";n.r(e);var s=n(237),i={name:"NavLink",props:{item:{required:!0}},computed:{link(){return Object(s.a)(this.item.link)},exact(){return this.$site.locales?Object.keys(this.$site.locales).some(t=>t===this.link):"/"===this.link},isBlankTarget(){return"_blank"===this.target},isInternal(){return!Object(s.b)(this.link)&&!this.isBlankTarget},target(){return this.item.target?this.item.target:Object(s.b)(this.link)?"_blank":""}}},a=(n(256),n(15)),r=Object(a.a)(i,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"nav-item"},[t.isInternal?e("RouterLink",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact}},[e("span",[t._v(t._s(t.item.text))]),t._v(" "),e("span",{staticClass:"subtext ms-2"},[t._v(t._s(t.item.subtext))])]):e("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.target}},[e("span",[t._v(t._s(t.item.text))]),t._v(" "),e("span",{staticClass:"subtext ms-2"},[t._v(t._s(t.item.subtext))])])],1)}),[],!1,null,null,null);e.default=r.exports},285:function(t,e,n){"use strict";n.r(e);var s=n(237),i={name:"NavLinks",components:{NavLink:n(263).default},computed:{userNav(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav(){const{locales:t}=this.$site;if(t&&Object.keys(t).length>1){const e=this.$page.path,n=this.$router.options.routes,s=this.$site.themeConfig.locales||{},i={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(t).map(i=>{const a=t[i],r=s[i]&&s[i].label||a.lang;let l;return a.lang===this.$lang?l=e:(l=e.replace(this.$localeConfig.path,i),n.some(t=>t.path===l)||(l=i)),{text:r,link:l}})};return[...this.userNav,i]}return this.userNav},userLinks(){return(this.nav||[]).map(t=>Object.assign(Object(s.c)(t),{items:(t.items||[]).map(s.c)}))}}},a=n(15),r=Object(a.a)(i,(function(){var t=this._self._c;return t("nav",{staticClass:"collapse navbar-collapse",staticStyle:{"justify-content":"flex-end"},attrs:{id:"navbarNavDropdown"}},[t("ul",{staticClass:"navbar-nav"},this._l(this.userLinks,(function(e){return t("li",[t("NavLink",{attrs:{item:e}})],1)})),0)])}),[],!1,null,null,null);e.default=r.exports}}]);