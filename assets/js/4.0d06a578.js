(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{242:function(t,s,a){},243:function(t,s,a){},244:function(t,s,a){},245:function(t,s,a){},246:function(t,s,a){},249:function(t,s,a){},250:function(t,s,a){},251:function(t,s,a){},252:function(t,s,a){},270:function(t,s,a){"use strict";a(242)},271:function(t,s,a){"use strict";a(243)},272:function(t,s,a){"use strict";a(244)},273:function(t,s,a){"use strict";a(245)},274:function(t,s,a){"use strict";a(246)},276:function(t,s,a){"use strict";a(249)},277:function(t,s,a){"use strict";a(250)},278:function(t,s,a){"use strict";a(251)},279:function(t,s,a){"use strict";a(252)},280:function(t,s,a){"use strict";a.r(s);var i=a(237),e={name:"Notifications",props:{special:{required:!0},updates:{required:!0}},computed:{link(){return Object(i.a)(this.special.link)},exact(){return this.$site.locales?Object.keys(this.$site.locales).some(t=>t===this.link):"/"===this.link},isBlankTarget(){return"_blank"===this.target},isInternal(){return!Object(i.b)(this.link)&&!this.isBlankTarget},target(){return this.special.target?this.special.target:Object(i.b)(this.link)?"_blank":""}}},l=(a(270),a(15)),n=Object(l.a)(e,(function(){var t=this,s=t._self._c;return s("div",{staticClass:"row mt-5"},[t.special?s("div",{staticClass:"col-12 col-md-6 mt-2"},[t.isInternal?s("RouterLink",{attrs:{to:t.link}},[s("div",{staticClass:"alert",style:{background:`url(${t.special.bgImg}),#${t.special.colorBg}`,color:"#"+t.special.color,"background-size":"auto 160px","background-repeat":"no-repeat","background-position":"center right"}},[s("span",[t._v(t._s(t.special.subtitle))]),t._v(" "),s("h3",[t._v(t._s(t.special.title))]),s("br"),t._v(" "),s("small",[t._v(t._s(t.special.description))])])]):s("a",{attrs:{href:t.link,target:t.target}},[s("div",{staticClass:"alert",style:{background:`url(${t.special.bgImg}),#${t.special.colorBg}`,color:"#"+t.special.color,"background-size":"auto 160px","background-repeat":"no-repeat","background-position":"center right"}},[s("span",[t._v(t._s(t.special.subtitle))]),t._v(" "),s("h3",[t._v(t._s(t.special.title))]),s("br"),t._v(" "),s("small",[t._v(t._s(t.special.description))])])])],1):t._e(),t._v(" "),t.special?s("RouterLink",{staticClass:"col-12 col-md-6 mt-2",attrs:{to:"/about/updates"}},[s("div",{staticClass:"alert alert-danger d-flex d-md-block justify update"},[s("span",[t._v(t._s(t.updates.date)+"更新"),s("span",{staticClass:"d-inline d-md-none"},[t._v(" · "+t._s(t.updates.info))])]),t._v(" "),s("span",{staticClass:"d-none d-md-block"},[s("h3",[t._v(t._s(t.updates.info))]),s("br")]),t._v(" "),s("small",{staticClass:"d-none d-md-inline-block"},[t._v("查看更新日志 ›")])])]):s("RouterLink",{staticClass:"update col-12 mt-2",attrs:{to:"/about/updates"}},[s("div",{staticClass:"alert alert-danger d-flex justify update"},[s("span",[t._v(t._s(t.updates.date)+"更新 · "+t._s(t.updates.info))]),t._v(" "),s("small",{staticClass:"d-none d-md-inline-block"},[t._v("查看更新日志 ›")])])])],1)}),[],!1,null,null,null).exports,r={name:"Heropic",props:{item:{required:!0}},computed:{link(){return Object(i.a)(this.item.link)},exact(){return this.$site.locales?Object.keys(this.$site.locales).some(t=>t===this.link):"/"===this.link},isBlankTarget(){return"_blank"===this.target},isInternal(){return!Object(i.b)(this.link)&&!this.isBlankTarget},target(){return this.item.target?this.item.target:Object(i.b)(this.link)?"_blank":""}}},c={name:"Heropics",props:{jumboItems:{required:!0}},components:{Heropic:Object(l.a)(r,(function(){var t=this,s=t._self._c;return t.isInternal?s("RouterLink",{attrs:{to:t.link}},[s("div",{staticClass:"jumbotron jumbotron-fluid jumboheight",style:{background:"linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0),rgba(0,0,0,0.8)),url("+t.item.jumboImg+")","margin-bottom":0}}),t._v(" "),s("div",{staticClass:"carousel-caption"},[s("h5",[t._v(t._s(t.item.title))]),t._v(" "),s("p",[t._v(t._s(t.item.subTitle))])])]):s("a",{attrs:{href:t.link,target:t.target}},[s("div",{staticClass:"jumbotron jumbotron-fluid jumboheight",style:{background:"linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0),rgba(0,0,0,0.8)),url("+t.item.jumboImg+")","margin-bottom":0}}),t._v(" "),s("div",{staticClass:"carousel-caption"},[s("h5",[t._v(t._s(t.item.title))]),t._v(" "),s("p",[t._v(t._s(t.item.subTitle))])])])}),[],!1,null,null,null).exports}},o=(a(271),Object(l.a)(c,(function(){var t=this,s=t._self._c;return s("div",{staticClass:"carousel slide",attrs:{id:"carouselExampleIndicators","data-bs-ride":"carousel","data-bs-interval":"3000"}},[s("div",{staticClass:"carousel-indicators"},t._l(t.jumboItems,(function(t,a){return s("button",{key:a,class:{active:t.isActive},attrs:{type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide-to":a,"aria-label":a}})})),0),t._v(" "),s("div",{staticClass:"carousel-inner"},t._l(t.jumboItems,(function(t){return s("div",{key:t.index,staticClass:"carousel-item",class:{active:t.isActive}},[s("Heropic",{attrs:{item:t}})],1)})),0),t._v(" "),t._m(0),t._v(" "),t._m(1)])}),[function(){var t=this._self._c;return t("button",{staticClass:"carousel-control-prev d-none d-md-flex",attrs:{type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide":"prev","aria-label":"上一个 previous"}},[t("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),this._v(" "),t("span",{staticClass:"visually-hidden"},[this._v("上一个")])])},function(){var t=this._self._c;return t("button",{staticClass:"carousel-control-next d-none d-md-flex",attrs:{type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide":"next","aria-label":"下一个 next"}},[t("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),this._v(" "),t("span",{staticClass:"visually-hidden"},[this._v("下一个")])])}],!1,null,null,null).exports),d={name:"Grid",props:{item:{required:!0}},computed:{link(){return Object(i.a)(this.item.link)},exact(){return this.$site.locales?Object.keys(this.$site.locales).some(t=>t===this.link):"/"===this.link},isBlankTarget(){return"_blank"===this.target},isInternal(){return!Object(i.b)(this.link)&&!this.isBlankTarget},target(){return this.item.target?this.item.target:Object(i.b)(this.link)?"_blank":""}}},u=(a(272),{name:"Grids",props:{categories:{required:!0}},components:{Grid:Object(l.a)(d,(function(){var t=this,s=t._self._c;return t.isInternal?s("RouterLink",{attrs:{to:t.link}},[s("div",{staticClass:"card text-dark ratio homegrid"},[s("img",{staticClass:"card-img index-img",attrs:{src:t.item.bgImg,alt:t.item.title}}),t._v(" "),s("div",{staticClass:"card-img-overlay"},[s("h2",{staticClass:"text-light"},[t._v(t._s(t.item.title))]),t._v(" "),s("h5",{staticClass:"text-light"},[t._v(t._s(t.item.subtitle))]),t._v(" "),s("p",{staticClass:"text-light"},[t._v(t._s(t.item.description))])])])]):s("a",{attrs:{href:t.link,target:t.target}},[s("div",{staticClass:"card text-dark ratio homegrid"},[s("img",{staticClass:"card-img index-img",attrs:{src:t.item.bgImg,alt:t.item.title}}),t._v(" "),s("div",{staticClass:"card-img-overlay"},[s("h2",{staticClass:"text-light"},[t._v(t._s(t.item.title))]),t._v(" "),s("h5",{staticClass:"text-light"},[t._v(t._s(t.item.subtitle))]),t._v(" "),s("p",{staticClass:"text-light"},[t._v(t._s(t.item.description))])])])])}),[],!1,null,null,null).exports}}),m={name:"Home",components:{Notifications:n,Heropics:o,Grids:Object(l.a)(u,(function(){var t=this._self._c;return t("div",{staticClass:"row"},this._l(this.categories,(function(s){return t("div",{staticClass:"col-12 col-sm-6 col-lg-4 mt-3"},[t("Grid",{attrs:{item:s}})],1)})),0)}),[],!1,null,null,null).exports},computed:{data(){return this.$page.frontmatter}}},v=Object(l.a)(m,(function(){var t=this,s=t._self._c;return s("main",{staticClass:"home",attrs:{"aria-labelledby":null}},[s("div",{staticClass:"container-xl"},[s("Notifications",{attrs:{special:t.data.special,updates:t.data.updates}}),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-8 col-12 mt-3"},[s("Heropics",{attrs:{jumboItems:t.data.jumboItems}})],1),t._v(" "),s("div",{staticClass:"col-lg-4 col-12 mt-3"},[t._m(0),t._v(" "),s("Content",{staticClass:"colored bold",attrs:{"slot-key":"preface"}}),t._v(" "),s("br"),t._v(" "),s("Content")],1),t._v(" "),s("div",{staticClass:"col-12 mb-5"},[s("Grids",{attrs:{categories:t.data.categories}})],1)])],1)])}),[function(){var t=this._self._c;return t("h5",[this._v("序言 "),t("span",{staticClass:"ms-2 subtext"},[this._v("Preface")])])}],!1,null,null,null).exports,_={name:"Header",props:{title:{required:!0},subtitle:{required:!0},description:{required:!1},bgImg:{required:!1}}},b=(a(273),Object(l.a)(_,(function(){var t=this,s=t._self._c;return s("div",{staticClass:"container-xl"},[s("div",{staticClass:"jumbotron pt-5 pb-4 mt-6",class:t.bgImg?"hero":"",style:t.bgImg?{"background-image":`linear-gradient(#00000077,#00000077),url('${t.bgImg}')`}:""},[s("div",[s("h2",{staticClass:"d-inline-block bold me-2",class:t.bgImg?"text-light ms-3 ms-lg-5":"",style:t.bgImg?{"font-size":"3em"}:"",domProps:{innerHTML:t._s(t.title)}}),t._v(" "),t.bgImg?s("br"):t._e(),t._v(" "),s("h5",{staticClass:"subtext d-inline-block",class:t.bgImg?"ms-3 ms-lg-5":""},[t._v("\n    "+t._s(t.subtitle)+"\n    ")]),t._v(" "),t.description?s("p",{staticClass:"mt-3",domProps:{innerHTML:t._s(t.description)}}):t._e()])])])}),[],!1,null,null,null).exports),p={name:"Landingpage",components:{Header:b},computed:{data(){return this.$page.frontmatter}}},g=(a(274),Object(l.a)(p,(function(){var t=this,s=t._self._c;return s("main",{staticClass:"page mt-6"},[s("Header",{attrs:{title:t.data.title,subtitle:t.data.subtitle,description:t.data.description}}),t._v(" "),s("div",{staticClass:"container-xl mt-3 mb-5"},[s("div",{staticClass:"row"},t._l(t.data.pages,(function(a){return s("div",{staticClass:"col-12 col-md-3"},[s("RouterLink",{attrs:{to:a.link}},[s("div",{staticClass:"card text-white mt-3 ratio lpratio"},[s("img",{staticClass:"card-img cardlist-img",attrs:{src:a.bgImg}}),t._v(" "),s("div",{staticClass:"card-img-overlay"},[s("p",{staticClass:"badge",class:"text-"+a.color+" bg-"+a.bgColor},[t._v(t._s(a.badge))]),t._v(" "),s("h3",{staticClass:"home",domProps:{innerHTML:t._s(a.title)}})])])])],1)})),0)])],1)}),[],!1,null,null,null).exports),C=(a(247),a(248)),h=a.n(C),f=a(0);f.default.use(h.a);var k={name:"Detail",components:{Header:b},computed:{data(){return this.$page.frontmatter}}},x=(a(276),Object(l.a)(k,(function(){var t=this,s=t._self._c;return s("main",{staticClass:"page mt-6"},[s("Header",{attrs:{title:t.data.title,subtitle:t.data.subtitle,description:t.data.description}}),t._v(" "),s("div",{staticClass:"container-xl mt-3 mb-5"},[s("div",t._l(t.data.items,(function(a){return s("div",{directives:[{name:"viewer",rawName:"v-viewer",value:{toolbar:!1,transition:!1,fullscreen:!1,rotatable:!1},expression:"{\n          toolbar: false,\n          transition: false,\n          fullscreen: false,\n          rotatable: false\n        }"}],staticClass:"row"},[s("Content",{staticClass:"col-12 col-md-4 mt-3 always-padding",attrs:{"slot-key":a.name}}),t._v(" "),a.mainPic?s("div",{staticClass:"col-12 col-md-8 mt-3 d-flex pic padding"},[s("div",{staticClass:"card ratio",style:{"--bs-aspect-ratio":`calc(${a.h} / ${a.w} * 100%)`}},[s("img",{staticClass:"card-img",attrs:{src:a.mainPic.url,alt:a.mainPic.alt}})]),t._v(" "),s("p",{staticClass:"mt-1 subtext"},[t._v(t._s(a.mainPic.alt))])]):t._e(),t._v(" "),t._l(a.pics,(function(i,e){return s("div",{staticClass:"col-12 col-md-4 d-flex pic",class:!a.mainPic&&e<2?"padding":""},[s("div",{staticClass:"card ratio mt-3",style:{"--bs-aspect-ratio":`calc(${a.h} / ${a.w} * 100%)`}},[s("img",{staticClass:"card-img",attrs:{src:i.url,alt:i.alt}})]),t._v(" "),s("p",{staticClass:"mt-1 subtext center",staticStyle:{"text-align":"center"}},[t._v("\n            "+t._s(i.alt)+"\n          ")])])}))],2)})),0),t._v(" "),s("Content")],1)],1)}),[],!1,null,null,null).exports);f.default.use(h.a);var y={name:"Depot",components:{Header:b},computed:{data(){return this.$page.frontmatter}}},j=(a(277),Object(l.a)(y,(function(){var t=this,s=t._self._c;return s("main",{staticClass:"page mt-6"},[s("Header",{attrs:{title:t.data.title,subtitle:t.data.subtitle,bgImg:t.data.mainpic}}),t._v(" "),s("div",{staticClass:"container-xl mt-3 mb-5"},[s("div",{directives:[{name:"viewer",rawName:"v-viewer",value:{toolbar:!1,transition:!1,fullscreen:!1,rotatable:!1},expression:"{\n        toolbar: false,\n        transition: false,\n        fullscreen: false,\n        rotatable: false\n      }"}],staticClass:"row"},[s("div",{staticClass:"col-md-6 col-12"},[s("div",{staticClass:"mt-5 mb-3",attrs:{id:"illustration"}},[s("h3",{staticClass:"d-inline-block bold me-2"},[t._v("图示")]),t._v(" "),s("h5",{staticClass:"subtext d-inline-block"},[t._v("Illustration")]),t._v(" "),s("div",{staticClass:"row"},t._l(t.data.illus,(function(a,i){return s("div",{staticClass:"col-md-6 col-12 d-flex pic"},[s("div",{staticClass:"card ratio",staticStyle:{"--bs-aspect-ratio":"calc(2 / 3 * 100%)"}},[s("img",{staticClass:"card-img",attrs:{src:a.url,alt:a.alt}})]),t._v(" "),s("p",{staticClass:"mt-1 subtext center",staticStyle:{"text-align":"center"}},[t._v("\n                "+t._s(a.alt)+"\n              ")])])})),0)]),t._v(" "),s("div",{staticClass:"mt-5 mb-3",attrs:{id:"intro"}},[s("h3",{staticClass:"d-inline-block bold me-2"},[t._v("概述")]),t._v(" "),s("h5",{staticClass:"subtext d-inline-block"},[t._v("Introduction")]),t._v(" "),s("Content",{attrs:{"slot-key":"概述"}})],1),t._v(" "),s("div",{staticClass:"mt-5 mb-3",attrs:{id:"conservation"}},[s("h3",{staticClass:"d-inline-block bold me-2"},[t._v("保存")]),t._v(" "),s("h5",{staticClass:"subtext d-inline-block"},[t._v("Conservation")]),t._v(" "),s("Content",{attrs:{"slot-key":"保存"}})],1)]),t._v(" "),s("div",{staticClass:"col-md-6 col-12"},[s("div",{staticClass:"mt-5 mb-3",attrs:{id:"production"}},[s("h3",{staticClass:"d-inline-block bold me-2"},[t._v("生产运用")]),t._v(" "),s("h5",{staticClass:"subtext d-inline-block"},[t._v("Production and Service")]),t._v(" "),s("br"),t._v(" "),t._l(t.data.PNS,(function(a){return s("div",{staticClass:"d-inline-flex"},[s("div",{staticClass:"alert alert-info tags"},[t._v("\n              "+t._s(a.name)+"\n              "),s("br"),t._v(" "),s("h5",[t._v(t._s(a.text))])])])}))],2),t._v(" "),s("div",{staticClass:"mt-5 mb-3",attrs:{id:"parameters"}},[s("h3",{staticClass:"d-inline-block bold me-2"},[t._v("性能指标")]),t._v(" "),s("h5",{staticClass:"subtext d-inline-block"},[t._v("Parameters")]),t._v(" "),s("br"),t._v(" "),t._l(t.data.parameters,(function(a){return s("div",{staticClass:"d-inline-flex"},[s("div",{staticClass:"alert alert-danger tags"},[t._v("\n              "+t._s(a.name)+"\n              "),s("br"),t._v(" "),s("h5",[t._v(t._s(a.text))])])])}))],2),t._v(" "),s("div",{staticClass:"mt-5 mb-3",attrs:{id:"appearance"}},[s("h3",{staticClass:"d-inline-block bold me-2"},[t._v("外观参数")]),t._v(" "),s("h5",{staticClass:"subtext d-inline-block"},[t._v("Appearance")]),t._v(" "),s("br"),t._v(" "),t._l(t.data.appearance,(function(a){return s("div",{staticClass:"d-inline-flex"},[s("div",{staticClass:"alert alert-success tags"},[t._v("\n              "+t._s(a.name)+"\n              "),s("br"),t._v(" "),s("h5",[t._v(t._s(a.text))])])])}))],2)]),t._v(" "),s("div",{staticClass:"col-md-6 col-12"},[s("div",{staticClass:"mt-5 mb-3",attrs:{id:"status"}},[s("h3",{staticClass:"d-inline-block bold me-2"},[t._v("现状")]),t._v(" "),s("h5",{staticClass:"subtext d-inline-block"},[t._v("Status")]),t._v(" "),s("div",{staticClass:"row"},t._l(t.data.status,(function(a,i){return s("div",{staticClass:"col-md-6 col-12 d-flex pic"},[s("div",{staticClass:"card ratio",staticStyle:{"--bs-aspect-ratio":"calc(2 / 3 * 100%)"}},[s("img",{staticClass:"card-img",attrs:{src:a.url,alt:a.alt}})]),t._v(" "),s("p",{staticClass:"mt-1 subtext center",staticStyle:{"text-align":"center"}},[t._v("\n                "+t._s(a.alt)+"\n              ")])])})),0)]),t._v(" "),s("div",{staticClass:"mt-5 mb-3",attrs:{id:"images"}},[s("h3",{staticClass:"d-inline-block bold me-2"},[t._v("历史影像")]),t._v(" "),s("h5",{staticClass:"subtext d-inline-block"},[t._v("Images")]),t._v(" "),s("div",{staticClass:"row"},t._l(t.data.images,(function(a,i){return s("div",{staticClass:"col-md-6 col-12 d-flex pic"},[s("div",{staticClass:"card ratio",staticStyle:{"--bs-aspect-ratio":"calc(2 / 3 * 100%)"}},[s("img",{staticClass:"card-img",attrs:{src:a.url,alt:a.alt}})]),t._v(" "),s("p",{staticClass:"mt-1 subtext center",staticStyle:{"text-align":"center"}},[t._v("\n                "+t._s(a.alt)+"\n              ")])])})),0)])]),t._v(" "),s("div",{staticClass:"col-md-6 col-12"},[s("div",{staticClass:"mt-5 mb-3",attrs:{id:"drawing"}},[s("h3",{staticClass:"d-inline-block bold me-2"},[t._v("图纸")]),t._v(" "),s("h5",{staticClass:"subtext d-inline-block"},[t._v("Drawing")]),t._v(" "),s("div",{staticClass:"row"},t._l(t.data.drawing,(function(a,i){return s("div",{staticClass:"col-md-6 col-12 d-flex pic"},[s("div",{staticClass:"card ratio",staticStyle:{"--bs-aspect-ratio":"calc(2 / 3 * 100%)"}},[s("img",{staticClass:"card-img",attrs:{src:a.url,alt:a.alt}})]),t._v(" "),s("p",{staticClass:"mt-1 subtext center",staticStyle:{"text-align":"center"}},[t._v("\n                "+t._s(a.alt)+"\n              ")])])})),0)])])])])],1)}),[],!1,null,null,null).exports),I={name:"Underconstruction",components:{Header:b},computed:{data(){return this.$page.frontmatter}}},w=Object(l.a)(I,(function(){var t=this,s=t._self._c;return s("main",{staticClass:"page mt-6"},[s("Header",{attrs:{title:t.data.title,subtitle:t.data.subtitle,description:t.data.description}}),t._v(" "),s("div",{staticClass:"container-xl mt-3 mb-5"},[s("div",{staticClass:"row",attrs:{id:"maincont"}},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 mt-6 d-flex flex-column justify-content-center",staticStyle:{height:"30vh"}},[s("h1",[t._v("监修中...")]),t._v(" "),s("h5",{staticClass:"subtext"},[t._v("预计博物馆二期建成后开放")]),t._v(" "),s("br"),t._v(" "),s("RouterLink",{staticClass:"colored",attrs:{to:"/"}},[t._v("返回首页 ›")])],1)])])])])],1)}),[],!1,null,null,null).exports,$={name:"Page",components:{Header:b},computed:{data(){return this.$page.frontmatter}}},O=(a(278),Object(l.a)($,(function(){var t=this._self._c;return t("main",{staticClass:"page mt-6"},[t("Header",{attrs:{title:this.data.displaytitle,subtitle:this.data.subtitle,description:this.data.description,bgImg:this.data.mainpic}}),this._v(" "),t("div",{directives:[{name:"viewer",rawName:"v-viewer",value:{toolbar:!1,transition:!1,fullscreen:!1,rotatable:!1},expression:"{\n      toolbar: false,\n      transition: false,\n      fullscreen: false,\n      rotatable: false\n    }"}],staticClass:"main-contents container-xl mt-3 mb-5"},[t("Content")],1)],1)}),[],!1,null,null,null).exports),H=a(253),L=a(254),P={name:"Layout",components:{Home:v,Landingpage:g,Detail:x,Depot:j,Underconstruction:w,Page:O,Navbar:H.a,Footer:L.a}},S=(a(279),Object(l.a)(P,(function(){var t=this._self._c;return t("div",{staticClass:"theme-container"},[t("Navbar"),this._v(" "),"Home"==this.$page.frontmatter.type?t("Home"):"Landingpage"==this.$page.frontmatter.type?t("Landingpage"):"Detail"==this.$page.frontmatter.type?t("Detail"):"Depot"==this.$page.frontmatter.type?t("Depot"):"Underconstruction"==this.$page.frontmatter.type?t("Underconstruction"):t("Page"),this._v(" "),t("Footer")],1)}),[],!1,null,null,null));s.default=S.exports}}]);