(window.webpackJsonp=window.webpackJsonp||[]).push([[5,2,3],{299:function(t,e,r){"use strict";r.r(e);var n={},o=(r(306),r(46)),component=Object(o.a)(n,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("footer",[e("div",{staticClass:"list"},[e("ul",[e("li",[t._v("Address")]),t._v(" "),e("li",[t._v("Jl. sudirman 32")]),t._v(" "),e("li",[t._v("brand@gmail.com")]),t._v(" "),e("li",[t._v("(021) 2552-xxxx")])]),t._v(" "),e("ul",[e("li",[t._v("Collection")]),t._v(" "),e("li",[t._v("Sneakers")]),t._v(" "),e("li",[t._v("Shoes")]),t._v(" "),e("li",[t._v("Slip on")]),t._v(" "),e("li",[t._v("Boots")])]),t._v(" "),e("ul",[e("li",[t._v("Pages")]),t._v(" "),e("li",[t._v("Home")]),t._v(" "),e("li",[t._v("Collections")]),t._v(" "),e("li",[t._v("Brands")]),t._v(" "),e("li",[t._v("Sale")])])]),t._v(" "),e("p",[e("span",[t._v("Copyright")]),t._v(" © 2022, Make with ♥ by\n    "),e("span",[t._v("Jason")])])])}],!1,null,"07af204b",null);e.default=component.exports;installComponents(component,{Footer:r(299).default})},300:function(t,e,r){t.exports=r.p+"img/cart.ea633c7.svg"},301:function(t,e,r){var content=r(305);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(81).default)("c21b138e",content,!0,{sourceMap:!1})},302:function(t,e,r){var content=r(307);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(81).default)("736d79aa",content,!0,{sourceMap:!1})},303:function(t,e,r){"use strict";r.r(e);r(38),r(17);var n={computed:{userData:function(){return this.$store.getters.getUserData},cart:function(){var t=this;return this.$store.getters.getCart.filter((function(e){return e.userId===t.userData.userId}))}},methods:{logout:function(){this.$store.dispatch("userLogout"),this.cart=[]},toggleNavbar:function(){document.querySelector(".burgerMenu").classList.toggle("closes"),document.querySelector(".background").classList.toggle("closes"),document.querySelector(".menuNavbar").classList.toggle("closes")}}},o=(r(304),r(46)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("header",[e("nav",[e("nuxtLink",{attrs:{tag:"h2",to:"/"}},[t._v("Shoes "),e("span",[t._v("Collections")])]),t._v(" "),e("ul",[e("li",[t._v("Home")]),t._v(" "),e("li",[t._v("Collections")]),t._v(" "),e("li",[t._v("Sale")]),t._v(" "),e("nuxtLink",{attrs:{tag:"li",to:"/cart"}},[t._v("\n        Cart\n        "),e("img",{attrs:{src:r(300),alt:"cart"}}),t._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:t.cart.length>0,expression:"cart.length > 0"}]})]),t._v(" "),t.userData.userName?e("nuxtLink",{attrs:{tag:"li",to:"/admin"}},[t._v(t._s(t.userData.userName))]):t._e(),t._v(" "),t.userData.userName?e("li",{on:{click:t.logout}},[t._v("Logout")]):e("nuxtLink",{attrs:{tag:"li",to:"/login"}},[t._v("Login")])],1),t._v(" "),e("div",{staticClass:"menuNavbar",on:{click:t.toggleNavbar}},[e("div"),t._v(" "),e("div"),t._v(" "),e("div")]),t._v(" "),e("div",{staticClass:"burgerMenu"},[e("ul",[e("li",[t._v("Home")]),t._v(" "),e("li",[t._v("Collections")]),t._v(" "),e("li",[t._v("Sale")]),t._v(" "),e("nuxtLink",{attrs:{tag:"li",to:"/cart"}},[t._v("\n          Cart\n          "),e("img",{attrs:{src:r(300),alt:"cart"}})]),t._v(" "),t.userData.userName?e("nuxtLink",{attrs:{tag:"li",to:"/admin"}},[t._v(t._s(t.userData.userName))]):t._e(),t._v(" "),t.userData.userName?e("li",{on:{click:t.logout}},[t._v("Logout")]):e("nuxtLink",{attrs:{tag:"li",to:"/login"}},[t._v("Login")])],1)]),t._v(" "),e("div",{staticClass:"background"})],1)])}),[],!1,null,"6658004d",null);e.default=component.exports},304:function(t,e,r){"use strict";r(301)},305:function(t,e,r){var n=r(80)(!1);n.push([t.i,'.burgerMenu[data-v-6658004d]{position:absolute;top:0;right:0;width:100vw;height:100vh;z-index:1000;transform:translateX(-100px);opacity:0;transition:all .5s linear;visibility:hidden}.burgerMenu.closes[data-v-6658004d]{transform:translateX(0);opacity:1;visibility:visible}.menuNavbar[data-v-6658004d]{z-index:2000;width:50px;display:flex;flex-direction:column;align-items:center;justify-content:center;grid-gap:.5rem;gap:.5rem;display:none}.menuNavbar>div[data-v-6658004d]{width:100%;height:5px;background-color:#fff;transition:all .5s}.menuNavbar.closes div[data-v-6658004d]:nth-of-type(2){visibility:hidden;opacity:0}.menuNavbar.closes div[data-v-6658004d]:first-of-type{transform:rotate(45deg);transform-origin:left}.menuNavbar.closes div[data-v-6658004d]:last-of-type{transform:rotate(-45deg) translate(7px,-30px);transform-origin:right}.background[data-v-6658004d]{border-radius:50%;position:fixed;top:3%;right:6%;z-index:999;background-color:#093545;width:10px;height:10px;transition:all .5s}.background.closes[data-v-6658004d]{transform:scale(300)}.burgerMenu ul[data-v-6658004d]{display:flex;flex-direction:column;align-items:center;justify-content:center;grid-gap:2.5rem;gap:2.5rem;height:100%}@keyframes showScale-6658004d{0%{transform:scale(1)}to{transform:scale(150)}}@keyframes show-6658004d{0%{opacity:0}to{opacity:1}}@keyframes showUl-6658004d{0%{transform:translateX(-100px);opacity:0}to{transform:translateX(0);opacity:1}}.burgerMenu ul li[data-v-6658004d]{font-size:2rem}.burgerMenu ul li img[data-v-6658004d]{width:35px}*[data-v-6658004d]{padding:0;margin:0;box-sizing:border-box;font-family:"Lexend Deca",sans-serif}header[data-v-6658004d]{width:100%}header nav[data-v-6658004d]{display:flex;align-items:center;justify-content:space-between;padding:2rem 5rem;background-color:#093545;width:100%}header nav h2[data-v-6658004d]{font-size:2rem;color:#fff;cursor:pointer}header nav h2 span[data-v-6658004d]{color:#20df7f}header nav ul[data-v-6658004d]{align-items:center;grid-gap:2rem;gap:2rem;list-style:none}header nav ul[data-v-6658004d],header nav ul li[data-v-6658004d]{display:flex;justify-content:center}header nav ul li[data-v-6658004d]{font-size:1.2rem;cursor:pointer!important;color:#fff;align-self:center;grid-gap:.3rem;gap:.3rem;position:relative}header nav ul li img[data-v-6658004d]{width:20px}header nav ul li p[data-v-6658004d]{position:absolute;top:0;right:0;width:8px;height:8px;background-color:red;border-radius:50%}header nav ul li[data-v-6658004d]:last-of-type,header nav ul li[data-v-6658004d]:nth-of-type(5){background-color:#224957;padding:.5rem 1rem;border-radius:100px;color:#fff}header nav>img[data-v-6658004d]{width:30px;display:none}@media only screen and (max-width:1000px){.menuNavbar[data-v-6658004d]{display:flex}header nav ul[data-v-6658004d]{display:none}}@media only screen and (max-width:500px){header nav[data-v-6658004d]{padding-left:2rem;padding-right:2rem}}@media only screen and (max-width:400px){header nav[data-v-6658004d]{padding-left:1rem;padding-right:1rem}header nav h2[data-v-6658004d]{font-size:1.4rem}}',""]),t.exports=n},306:function(t,e,r){"use strict";r(302)},307:function(t,e,r){var n=r(80)(!1);n.push([t.i,'*[data-v-07af204b]{padding:0;margin:0;box-sizing:border-box;font-family:"Lexend Deca",sans-serif}footer[data-v-07af204b]{flex-direction:column;grid-gap:2rem;gap:2rem;padding:2rem 5rem;background-color:#093545;color:#fff}footer[data-v-07af204b],footer .list[data-v-07af204b]{display:flex;align-items:center;justify-content:center;width:100%}footer .list[data-v-07af204b]{flex-wrap:wrap;grid-column-gap:8rem;-moz-column-gap:8rem;column-gap:8rem;grid-row-gap:1.5rem;row-gap:1.5rem}footer .list ul[data-v-07af204b]{list-style:none;text-align:center}footer .list ul li[data-v-07af204b]:first-of-type{font-size:1.2rem;font-weight:700;color:#20df7f}footer .list ul li[data-v-07af204b]:not(:last-of-type){margin-bottom:.5rem}footer p[data-v-07af204b]{font-size:1.2rem;text-align:center}footer p span[data-v-07af204b]{font-weight:700;color:#20df7f}@media only screen and (max-width:550px){footer[data-v-07af204b]{padding-left:2rem;padding-right:2rem}}@media only screen and (max-width:350px){footer p[data-v-07af204b]{font-size:.8rem}}',""]),t.exports=n},310:function(t,e,r){var content=r(324);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(81).default)("892a49be",content,!0,{sourceMap:!1})},320:function(t,e,r){t.exports=r.p+"img/trash.75e7744.svg"},321:function(t,e,r){t.exports=r.p+"img/edit.551980e.svg"},322:function(t,e,r){t.exports=r.p+"img/plus.c9556d3.png"},323:function(t,e,r){"use strict";r(310)},324:function(t,e,r){var n=r(80)(!1);n.push([t.i,'*[data-v-03232544]{padding:0;margin:0;box-sizing:border-box;font-family:"Lexend Deca",sans-serif}#wrapper[data-v-03232544]{min-height:100vh;display:flex;flex-direction:column;align-items:flex-start;justify-content:space-between}main[data-v-03232544]{padding:2rem 5rem;text-align:center;position:relative;width:100%}main h2[data-v-03232544]{font-size:2rem;margin-bottom:1rem}main h2 span[data-v-03232544]{color:#093545}main .productItems[data-v-03232544]{display:grid;width:100%;grid-gap:1rem;gap:1rem;grid-template-columns:repeat(auto-fit,minmax(400px,1fr))}main .productItems .item[data-v-03232544]{display:flex;width:100%;flex-direction:column;align-items:center;justify-content:center;grid-gap:.8rem;gap:.8rem;border-radius:20px;overflow:hidden;border:1px solid rgba(0,0,0,.3)}main .productItems .item img[data-v-03232544]{width:100%;height:200px;-o-object-fit:cover;object-fit:cover}main .productItems .item h3[data-v-03232544]:first-of-type{text-decoration:line-through}main .productItems .item h3[data-v-03232544]:last-of-type{font-size:1.4rem}main .productItems .item button[data-v-03232544]{color:#fff;border:none;outline:none;width:100%;padding:1rem;font-size:1.2rem;cursor:pointer;background-color:#007138;display:flex;align-items:center;justify-content:center;grid-gap:.5rem;gap:.5rem}.buttons[data-v-03232544]{display:grid;grid-template-columns:1fr 1fr;width:100%}.buttons button[data-v-03232544]:first-of-type{background-color:#760000!important}.buttons button img[data-v-03232544]{width:20px!important;height:auto!important}.overlay[data-v-03232544]{position:fixed;top:0;left:0;width:100vw;height:100vh;display:flex;align-items:center;justify-content:center;background-color:rgba(0,0,0,.4)}.overlay .content>*[data-v-03232544]{padding:0;margin:0}.overlay .content[data-v-03232544]{background-color:#fff;color:#000;padding:2rem;flex-direction:column;border-radius:20px;box-shadow:4px 8px 24px rgba(0,0,0,.2)}.modalButtons[data-v-03232544],.overlay .content[data-v-03232544]{display:flex;align-items:center;justify-content:center;grid-gap:1rem;gap:1rem}.modalButtons button[data-v-03232544]{padding:.8rem 1rem;border:none;outline:none;background-color:red;color:#fff;border-radius:10px;cursor:pointer}.modalButtons button[data-v-03232544]:first-of-type{background-color:green!important}.addButton[data-v-03232544]{position:absolute;top:18%;right:5%;background-color:#093545;color:#fff;width:50px;height:50px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer}.addButton img[data-v-03232544]{width:30px}@media only screen and (max-width:600px){main[data-v-03232544]{padding-left:2rem;padding-right:2rem}}@media only screen and (max-width:470px){main[data-v-03232544]{padding-left:1rem;padding-right:1rem}}@media only screen and (max-width:400px){main .productItems[data-v-03232544]{grid-template-columns:1fr}}',""]),t.exports=n},342:function(t,e,r){"use strict";r.r(e);r(38),r(17);var n=r(303),o=r(299),d={name:"IndexPage",middleware:["check-auth","auth"],components:{Navbar:n.default,Footer:o.default},data:function(){return{showOverlay:!1,deleteIndex:0}},methods:{toggleOverlay:function(t,e){this.showOverlay=t,!0===t&&(this.deleteIndex=e)},closeOverlay:function(t){"overlay"===t.target.classList[0]&&this.toggleOverlay(!1,0)},deleteItem:function(){this.$store.dispatch("deleteShoes",this.deleteIndex),this.toggleOverlay(!1,0)}},computed:{shoes:function(){return this.$store.getters.getShoes},userData:function(){return this.$store.getters.getUserData}}},l=(r(323),r(46)),component=Object(l.a)(d,(function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"wrapper"}},[e("Navbar"),t._v(" "),e("main",[t._m(0),t._v(" "),e("div",{staticClass:"productItems"},[t._l(t.shoes.filter((function(e){return e.userId===t.userData.userId})),(function(n){return e("div",{staticClass:"item"},[e("img",{attrs:{src:n.image,alt:""}}),t._v(" "),e("h2",[t._v(t._s(n.title))]),t._v(" "),e("h3",[t._v("\n          "+t._s(new Intl.NumberFormat("Rp",{style:"currency",currency:"idr"}).format(Math.round(1.6*n.price)))+"\n        ")]),t._v(" "),e("h3",[t._v("\n          "+t._s(new Intl.NumberFormat("Rp",{style:"currency",currency:"idr"}).format(n.price))+"\n        ")]),t._v(" "),e("div",{staticClass:"buttons"},[e("button",{on:{click:function(e){return t.toggleOverlay(!0,n.id)}}},[e("img",{attrs:{src:r(320),alt:"trash"}}),t._v(" Delete\n          ")]),t._v(" "),e("nuxt-link",{attrs:{tag:"button",to:{path:"Update",query:{shoes:n}}}},[e("img",{attrs:{src:r(321),alt:"trash"}}),t._v("Edit")])],1)])})),t._v(" "),0===t.shoes.filter((function(e){return e.userId===t.userData.userId})).length?e("h2",[t._v("\n        Shoes not found!!\n      ")]):t._e()],2)]),t._v(" "),e("Footer"),t._v(" "),t.showOverlay?e("div",{staticClass:"overlay",on:{click:t.closeOverlay}},[e("div",{staticClass:"content"},[e("h2",[t._v("Delete Confirmation")]),t._v(" "),e("p",[t._v("are you sure to delete this item?")]),t._v(" "),e("div",{staticClass:"modalButtons"},[e("button",{on:{click:function(e){return t.toggleOverlay(!1,0)}}},[t._v("Cancel")]),t._v(" "),e("button",{on:{click:t.deleteItem}},[t._v("Delete")])])])]):t._e(),t._v(" "),e("NuxtLink",{staticClass:"addButton",attrs:{tag:"button",to:"/add"}},[e("img",{attrs:{src:r(322),alt:"plus"}})])],1)}),[function(){var t=this,e=t._self._c;return e("h2",[t._v("Product "),e("span",[t._v("Sale")])])}],!1,null,"03232544",null);e.default=component.exports;installComponents(component,{Navbar:r(303).default,Footer:r(299).default})}}]);