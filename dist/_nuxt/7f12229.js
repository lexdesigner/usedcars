(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{293:function(t,e,n){var content=n(297);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(89).default)("f75db73a",content,!0,{sourceMap:!1})},294:function(t,e,n){var content=n(299);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(89).default)("33484aba",content,!0,{sourceMap:!1})},295:function(t,e,n){t.exports=n.p+"img/logo.d6555b6.gif"},296:function(t,e,n){"use strict";n(293)},297:function(t,e,n){(e=n(88)(!1)).push([t.i,".el-header{display:flex;justify-content:space-between;align-items:center;margin:15px 0 25px;border-bottom:1px solid #e6e6e6;padding:0}.el-header .el-link{vertical-align:top}",""]),t.exports=e},298:function(t,e,n){"use strict";n(294)},299:function(t,e,n){(e=n(88)(!1)).push([t.i,".el-footer{justify-content:space-between;padding:0;border-top:1px solid #e6e6e6;margin-top:35px}.el-footer,.footer-contacts{display:flex;align-items:center}.footer-contacts{justify-content:flex-end}.footer-contacts .email{margin-left:20px}.footer-contacts .email a{color:#333;text-decoration:none}",""]),t.exports=e},300:function(t,e,n){"use strict";n(64);var r={methods:{phoneLocal:function(t){return t.replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/,"$1 ($2) $3-$4-$5")}},computed:{phone:function(){return this.$store.state.info.phone}}},o=n(38),l={computed:{email:function(){return this.$store.state.info.email}}},c={components:{vPhone:Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"phone"},[e("el-link",{attrs:{type:"info",href:"tel:"+this.phone,title:"Позвонить по "+this.phoneLocal(this.phone)}},[this._v(this._s(this.phoneLocal(this.phone)))])],1)}),[],!1,null,"466f98e0",null).exports,vMail:Object(o.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"email"},[e("el-link",{attrs:{type:"info",href:"mailto:"+this.email,title:"Написать на  "+this.email}},[this._v(this._s(this.email))])],1)}),[],!1,null,"9d9cbe98",null).exports},computed:{year:function(){return(new Date).getFullYear()}}},v=(n(298),Object(o.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("el-footer",[e("span",[this._v("© Genser, 2002-"+this._s(this.year))]),this._v(" "),e("div",{staticClass:"footer-contacts"},[e("span",[this._v("Телефон: "),e("b",[e("v-phone")],1)]),this._v(" "),e("v-mail")],1)])}),[],!1,null,null,null));e.a=v.exports},301:function(t,e,n){"use strict";var r={methods:{changeRegion:function(t){this.$store.commit("info/changeRegion",t),this.$store.dispatch("cars/fetch",t)}}},o=(n(296),n(38)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-header",[r("nuxt-link",{attrs:{"no-prefetch":"",to:"/"}},[r("img",{staticClass:"img-responsive",attrs:{src:n(295),alt:"Genser"}})]),t._v(" "),r("el-menu",{attrs:{mode:"horizontal"}},[r("el-menu-item",{attrs:{index:"1"}},[r("nuxt-link",{attrs:{"no-prefetch":"",to:"/advantages/"}},[t._v("НАШИ ПРЕИМУЩЕСТВА")])],1),t._v(" "),r("el-submenu",{attrs:{index:"2"}},[r("template",{slot:"title"},[t._v("ПРОДАТЬ АВТО")]),t._v(" "),r("el-menu-item",{attrs:{index:"2-1"}},[r("nuxt-link",{attrs:{"no-prefetch":"",to:"/sell/"}},[t._v("Оценка автомобиля")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"2-2"}},[r("nuxt-link",{attrs:{"no-prefetch":"",to:"/tradein/"}},[t._v("Trade In")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"2-3"}},[r("nuxt-link",{attrs:{"no-prefetch":"",to:"/buyout/"}},[t._v("Выкуп")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"2-4"}},[r("nuxt-link",{attrs:{"no-prefetch":"",to:"/comission/"}},[t._v("Комиссия")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"2-5"}},[r("nuxt-link",{attrs:{"no-prefetch":"",to:"/corp_clients/"}},[t._v("Корпоративным клиентам")])],1)],2),t._v(" "),r("el-submenu",{attrs:{index:"3"}},[r("template",{slot:"title"},[t._v("КУПИТЬ АВТО")]),t._v(" "),r("el-menu-item",{attrs:{index:"3-1"}},[r("nuxt-link",{attrs:{"no-prefetch":"",to:"/cars/"}},[t._v("Выбрать автомобиль")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"3-2"}},[r("nuxt-link",{attrs:{"no-prefetch":"",to:"/offer_form/"}},[t._v("Заявка на подбор автомобиля")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"3-3"}},[r("nuxt-link",{attrs:{"no-prefetch":"",to:"/cars/soon/"}},[t._v("Скоро в продаже")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"3-4"}},[r("nuxt-link",{attrs:{"no-prefetch":"",to:"/cars/hot/"}},[t._v("Специальные предложения")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"3-5"}},[r("nuxt-link",{attrs:{"no-prefetch":"",to:"/cars/leasing/"}},[t._v("Предложения в лизинг")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"3-5"}},[r("nuxt-link",{attrs:{"no-prefetch":"",to:"/cars/comparison/"}},[t._v("Корзина сравнения")])],1)],2),t._v(" "),r("el-menu-item",{attrs:{index:"5"}},[r("nuxt-link",{attrs:{"no-prefetch":"",to:"/complaintbook/"}},[t._v("ОБРАТНАЯ СВЯЗЬ")])],1)],1),t._v(" "),r("el-dropdown",{attrs:{trigger:"click"},on:{command:t.changeRegion}},[r("span",{staticClass:"el-dropdown-link"},[t._v("\n      Выберите регион:\n      "),r("el-link",{attrs:{type:"primary"}},[t._v(t._s(this.$store.state.info.activeRegion))]),t._v(" "),r("i",{staticClass:"el-icon-arrow-down el-icon--right"})],1),t._v(" "),r("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},t._l(this.$store.state.info.regions,(function(e,n){return r("el-dropdown-item",{key:e+n,attrs:{command:e}},[t._v(t._s(e))])})),1)],1)],1)}),[],!1,null,null,null);e.a=component.exports},302:function(t,e,n){"use strict";var r={props:{path:{type:Array,default:function(){return[]}}}},o=n(38),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[n("el-breadcrumb-item",{attrs:{to:"/"}},[t._v("Главная ")]),t._v(" "),t._l(t.path,(function(link,i){return n("el-breadcrumb-item",{key:link+i,attrs:{to:i+1!=t.path.length&&link.link}},[t._v(t._s(link.title)+"\n  ")])}))],2)}),[],!1,null,"1957a0b0",null);e.a=component.exports},368:function(t,e,n){"use strict";n.r(e);var r=n(301),o=n(302),l=n(300),c={components:{vHeader:r.a,vBreadcrumb:o.a,vFooter:l.a},data:function(){return{title:"Корпоративным клиентам"}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:this.title}]}},computed:{path:function(){return[{link:"".concat(this.$route.path,"/"),title:this.title}]}},created:function(){this.$store.dispatch("cars/fetch",this.activeRegion)}},v=n(38),component=Object(v.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("v-header"),this._v(" "),e("v-breadcrumb",{attrs:{path:this.path}}),this._v(" "),this._m(0),this._v(" "),e("v-footer")],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("h2",[t._v("Корпоративным клиентам")]),t._v(" "),n("p",[t._v("\n      Компания Genser предлагает Вам рассмотреть возможность комплексного\n      решения задач для вашей компании по обновлению автомобильного парка.\n    ")]),t._v(" "),n("p",[t._v("\n      Сотрудничая с нами, Вам не придется беспокоиться о том, что делать с\n      автомобилями, которые отслужили свой срок.\n    ")]),t._v(" "),n("p",[t._v("\n      В зависимости от Ваших пожеланий, мы примем их в зачет стоимости новых\n      по схеме trade-in, выкупим, либо предоставим возможность поставить на\n      комиссию.\n    ")]),t._v(" "),n("p",[t._v("\n      Всем нашим клиентам мы гарантируем высокое качество обслуживания, а\n      также:\n    ")]),t._v(" "),n("ol",[n("li",[t._v("\n        оперативное и комплексное решение всех возникающих вопросов\n        персональным менеджером;\n      ")]),t._v(" "),n("li",[t._v("\n        выезд специалиста для осмотра и оценки состояния автомобилей в удобное\n        для Вас место и время;\n      ")]),t._v(" "),n("li",[t._v("\n        индивидуальный подход в определении оценочной стоимости автомобилей;\n      ")]),t._v(" "),n("li",[t._v("\n        возможность одновременного обмена/выкупа неограниченного количества\n        автомобилей;\n      ")]),t._v(" "),n("li",[t._v("\n        возможность обеспечения доставки автомобилей силами нашей компании, в\n        том числе из регионов;\n      ")])]),t._v(" "),n("p",[t._v("\n      Мы готовы рассмотреть любые схемы сотрудничества и будем рады ответить\n      на все интересующие вопросы.\n    ")]),t._v(" "),n("p",[t._v("Ваш персональный менеджер: "),n("b",[t._v("Островский Семен Александрович")])]),t._v(" "),n("p",[t._v("\n      Офис: "),n("b",[n("a",{attrs:{href:"tel:+74957885858"}},[t._v("+7 (495) 788 58 58")]),t._v(" доб. 7363")])]),t._v(" "),n("p",[t._v("\n      Мобильный: "),n("b",[n("a",{attrs:{href:"tel:+79688280534"}},[t._v("+7 (968) 828-05-34")])])]),t._v(" "),n("p",[t._v("\n      Email:\n      "),n("b",[n("a",{attrs:{href:"mailto:saostrovskiy@hyundai-gns.ru"}},[t._v("saostrovskiy@hyundai-gns.ru")])])])])}],!1,null,null,null);e.default=component.exports}}]);