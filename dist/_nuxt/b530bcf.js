(window.webpackJsonp=window.webpackJsonp||[]).push([[8,2,3],{299:function(t,e,r){"use strict";r.r(e);var n={},o=(r(306),r(46)),component=Object(o.a)(n,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("footer",[e("div",{staticClass:"list"},[e("ul",[e("li",[t._v("Address")]),t._v(" "),e("li",[t._v("Jl. sudirman 32")]),t._v(" "),e("li",[t._v("brand@gmail.com")]),t._v(" "),e("li",[t._v("(021) 2552-xxxx")])]),t._v(" "),e("ul",[e("li",[t._v("Collection")]),t._v(" "),e("li",[t._v("Sneakers")]),t._v(" "),e("li",[t._v("Shoes")]),t._v(" "),e("li",[t._v("Slip on")]),t._v(" "),e("li",[t._v("Boots")])]),t._v(" "),e("ul",[e("li",[t._v("Pages")]),t._v(" "),e("li",[t._v("Home")]),t._v(" "),e("li",[t._v("Collections")]),t._v(" "),e("li",[t._v("Brands")]),t._v(" "),e("li",[t._v("Sale")])])]),t._v(" "),e("p",[e("span",[t._v("Copyright")]),t._v(" © 2022, Make with ♥ by\n    "),e("span",[t._v("Jason")])])])}],!1,null,"07af204b",null);e.default=component.exports;installComponents(component,{Footer:r(299).default})},300:function(t,e,r){t.exports=r.p+"img/cart.ea633c7.svg"},301:function(t,e,r){var content=r(305);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(81).default)("c21b138e",content,!0,{sourceMap:!1})},302:function(t,e,r){var content=r(307);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(81).default)("736d79aa",content,!0,{sourceMap:!1})},303:function(t,e,r){"use strict";r.r(e);r(38),r(17);var n={computed:{userData:function(){return this.$store.getters.getUserData},cart:function(){var t=this;return this.$store.getters.getCart.filter((function(e){return e.userId===t.userData.userId}))}},methods:{logout:function(){this.$store.dispatch("userLogout"),this.cart=[]},toggleNavbar:function(){document.querySelector(".burgerMenu").classList.toggle("closes"),document.querySelector(".background").classList.toggle("closes"),document.querySelector(".menuNavbar").classList.toggle("closes")}}},o=(r(304),r(46)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("header",[e("nav",[e("nuxtLink",{attrs:{tag:"h2",to:"/"}},[t._v("Shoes "),e("span",[t._v("Collections")])]),t._v(" "),e("ul",[e("li",[t._v("Home")]),t._v(" "),e("li",[t._v("Collections")]),t._v(" "),e("li",[t._v("Sale")]),t._v(" "),e("nuxtLink",{attrs:{tag:"li",to:"/cart"}},[t._v("\n        Cart\n        "),e("img",{attrs:{src:r(300),alt:"cart"}}),t._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:t.cart.length>0,expression:"cart.length > 0"}]})]),t._v(" "),t.userData.userName?e("nuxtLink",{attrs:{tag:"li",to:"/admin"}},[t._v(t._s(t.userData.userName))]):t._e(),t._v(" "),t.userData.userName?e("li",{on:{click:t.logout}},[t._v("Logout")]):e("nuxtLink",{attrs:{tag:"li",to:"/login"}},[t._v("Login")])],1),t._v(" "),e("div",{staticClass:"menuNavbar",on:{click:t.toggleNavbar}},[e("div"),t._v(" "),e("div"),t._v(" "),e("div")]),t._v(" "),e("div",{staticClass:"burgerMenu"},[e("ul",[e("li",[t._v("Home")]),t._v(" "),e("li",[t._v("Collections")]),t._v(" "),e("li",[t._v("Sale")]),t._v(" "),e("nuxtLink",{attrs:{tag:"li",to:"/cart"}},[t._v("\n          Cart\n          "),e("img",{attrs:{src:r(300),alt:"cart"}})]),t._v(" "),t.userData.userName?e("nuxtLink",{attrs:{tag:"li",to:"/admin"}},[t._v(t._s(t.userData.userName))]):t._e(),t._v(" "),t.userData.userName?e("li",{on:{click:t.logout}},[t._v("Logout")]):e("nuxtLink",{attrs:{tag:"li",to:"/login"}},[t._v("Login")])],1)]),t._v(" "),e("div",{staticClass:"background"})],1)])}),[],!1,null,"6658004d",null);e.default=component.exports},304:function(t,e,r){"use strict";r(301)},305:function(t,e,r){var n=r(80)(!1);n.push([t.i,'.burgerMenu[data-v-6658004d]{position:absolute;top:0;right:0;width:100vw;height:100vh;z-index:1000;transform:translateX(-100px);opacity:0;transition:all .5s linear;visibility:hidden}.burgerMenu.closes[data-v-6658004d]{transform:translateX(0);opacity:1;visibility:visible}.menuNavbar[data-v-6658004d]{z-index:2000;width:50px;display:flex;flex-direction:column;align-items:center;justify-content:center;grid-gap:.5rem;gap:.5rem;display:none}.menuNavbar>div[data-v-6658004d]{width:100%;height:5px;background-color:#fff;transition:all .5s}.menuNavbar.closes div[data-v-6658004d]:nth-of-type(2){visibility:hidden;opacity:0}.menuNavbar.closes div[data-v-6658004d]:first-of-type{transform:rotate(45deg);transform-origin:left}.menuNavbar.closes div[data-v-6658004d]:last-of-type{transform:rotate(-45deg) translate(7px,-30px);transform-origin:right}.background[data-v-6658004d]{border-radius:50%;position:fixed;top:3%;right:6%;z-index:999;background-color:#093545;width:10px;height:10px;transition:all .5s}.background.closes[data-v-6658004d]{transform:scale(300)}.burgerMenu ul[data-v-6658004d]{display:flex;flex-direction:column;align-items:center;justify-content:center;grid-gap:2.5rem;gap:2.5rem;height:100%}@keyframes showScale-6658004d{0%{transform:scale(1)}to{transform:scale(150)}}@keyframes show-6658004d{0%{opacity:0}to{opacity:1}}@keyframes showUl-6658004d{0%{transform:translateX(-100px);opacity:0}to{transform:translateX(0);opacity:1}}.burgerMenu ul li[data-v-6658004d]{font-size:2rem}.burgerMenu ul li img[data-v-6658004d]{width:35px}*[data-v-6658004d]{padding:0;margin:0;box-sizing:border-box;font-family:"Lexend Deca",sans-serif}header[data-v-6658004d]{width:100%}header nav[data-v-6658004d]{display:flex;align-items:center;justify-content:space-between;padding:2rem 5rem;background-color:#093545;width:100%}header nav h2[data-v-6658004d]{font-size:2rem;color:#fff;cursor:pointer}header nav h2 span[data-v-6658004d]{color:#20df7f}header nav ul[data-v-6658004d]{align-items:center;grid-gap:2rem;gap:2rem;list-style:none}header nav ul[data-v-6658004d],header nav ul li[data-v-6658004d]{display:flex;justify-content:center}header nav ul li[data-v-6658004d]{font-size:1.2rem;cursor:pointer!important;color:#fff;align-self:center;grid-gap:.3rem;gap:.3rem;position:relative}header nav ul li img[data-v-6658004d]{width:20px}header nav ul li p[data-v-6658004d]{position:absolute;top:0;right:0;width:8px;height:8px;background-color:red;border-radius:50%}header nav ul li[data-v-6658004d]:last-of-type,header nav ul li[data-v-6658004d]:nth-of-type(5){background-color:#224957;padding:.5rem 1rem;border-radius:100px;color:#fff}header nav>img[data-v-6658004d]{width:30px;display:none}@media only screen and (max-width:1000px){.menuNavbar[data-v-6658004d]{display:flex}header nav ul[data-v-6658004d]{display:none}}@media only screen and (max-width:500px){header nav[data-v-6658004d]{padding-left:2rem;padding-right:2rem}}@media only screen and (max-width:400px){header nav[data-v-6658004d]{padding-left:1rem;padding-right:1rem}header nav h2[data-v-6658004d]{font-size:1.4rem}}',""]),t.exports=n},306:function(t,e,r){"use strict";r(302)},307:function(t,e,r){var n=r(80)(!1);n.push([t.i,'*[data-v-07af204b]{padding:0;margin:0;box-sizing:border-box;font-family:"Lexend Deca",sans-serif}footer[data-v-07af204b]{flex-direction:column;grid-gap:2rem;gap:2rem;padding:2rem 5rem;background-color:#093545;color:#fff}footer[data-v-07af204b],footer .list[data-v-07af204b]{display:flex;align-items:center;justify-content:center;width:100%}footer .list[data-v-07af204b]{flex-wrap:wrap;grid-column-gap:8rem;-moz-column-gap:8rem;column-gap:8rem;grid-row-gap:1.5rem;row-gap:1.5rem}footer .list ul[data-v-07af204b]{list-style:none;text-align:center}footer .list ul li[data-v-07af204b]:first-of-type{font-size:1.2rem;font-weight:700;color:#20df7f}footer .list ul li[data-v-07af204b]:not(:last-of-type){margin-bottom:.5rem}footer p[data-v-07af204b]{font-size:1.2rem;text-align:center}footer p span[data-v-07af204b]{font-weight:700;color:#20df7f}@media only screen and (max-width:550px){footer[data-v-07af204b]{padding-left:2rem;padding-right:2rem}}@media only screen and (max-width:350px){footer p[data-v-07af204b]{font-size:.8rem}}',""]),t.exports=n},314:function(t,e,r){var content=r(334);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(81).default)("a5653df6",content,!0,{sourceMap:!1})},333:function(t,e,r){"use strict";r(314)},334:function(t,e,r){var n=r(80)(!1);n.push([t.i,"main[data-v-1de287c1]{display:grid;align-items:flex-start;justify-content:center;grid-template-columns:1fr 2fr;grid-gap:2rem;gap:2rem;padding:2rem 4rem}main img[data-v-1de287c1]{width:400px;height:400px;-o-object-fit:cover;object-fit:cover}main h2[data-v-1de287c1]{font-size:3rem;margin:0}main p[data-v-1de287c1]:first-of-type{text-decoration:line-through;font-size:1.2rem;color:rgba(0,0,0,.5)}main p[data-v-1de287c1]{font-size:1.5rem;margin:0}main .info[data-v-1de287c1]{display:flex;flex-direction:column;align-items:flex-start;justify-content:center;height:100%;grid-gap:1rem;gap:1rem}button[data-v-1de287c1]{border:0;outline:0;background-color:#093545;color:#fff;padding:.5rem 1rem;font-size:1.2rem;border-radius:10px;cursor:pointer}main .info p[data-v-1de287c1]:last-of-type{text-align:justify}.container[data-v-1de287c1]{display:flex;flex-direction:column;align-items:center;justify-content:center}@media only screen and (max-width:900px){main[data-v-1de287c1]{display:flex;flex-direction:column;align-items:center;justify-content:flex-start}main img[data-v-1de287c1]{width:100%;-o-object-fit:cover;object-fit:cover}}@media only screen and (max-width:600px){main[data-v-1de287c1]{padding-left:1rem;padding-right:1rem}}",""]),t.exports=n},345:function(t,e,r){"use strict";r.r(e);r(47);var n=r(303),o=r(299),d={components:{Navbar:n.default,Footer:o.default},middleware:"check-auth",data:function(){return{shoe:this.$route.query.shoes}},methods:{addCart:function(){var data=this.$route.query.shoes;delete data.id,this.$store.dispatch("addUserCart",data)}}},l=(r(333),r(46)),component=Object(l.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("Navbar"),t._v(" "),e("main",[e("img",{attrs:{src:t.shoe.image,alt:t.shoe.name}}),t._v(" "),e("div",{staticClass:"info"},[e("h2",[t._v(t._s(t.shoe.title))]),t._v(" "),e("p",[t._v("Rp. "+t._s(Math.round(1.6*t.shoe.price))+",-")]),t._v(" "),e("p",[t._v("Rp. "+t._s(t.shoe.price)+",-")]),t._v(" "),e("p",[t._v("\n        Lorem ipsum dolor, sit amet consectetur adipisicing elit. A beatae\n        veritatis, consequatur voluptates qui rem cum possimus deserunt dolor\n        fugit sapiente commodi ratione quidem quaerat inventore, maxime\n        voluptatum. Unde, eveniet. Lorem ipsum dolor sit amet consectetur\n        adipisicing elit. Veniam, eum.\n      ")]),t._v(" "),e("button",{on:{click:t.addCart}},[t._v("Add to cart")])])]),t._v(" "),e("Footer")],1)}),[],!1,null,"1de287c1",null);e.default=component.exports;installComponents(component,{Navbar:r(303).default,Footer:r(299).default})}}]);