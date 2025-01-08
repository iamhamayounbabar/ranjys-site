(()=>{var e={};e.id=8813,e.ids=[8813],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},8018:(e,a,s)=>{"use strict";s.a(e,async(e,r)=>{try{s.r(a),s.d(a,{GlobalError:()=>o.a,__next_app__:()=>g,originalPathname:()=>j,pages:()=>u,routeModule:()=>f,tree:()=>x});var t=s(3496),i=s(214),n=s(1470),c=s(2504),l=s(5932),d=s(6550),o=s.n(d),h=s(6979),p={};for(let e in h)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(p[e]=()=>h[e]);s.d(a,p);var m=e([t,i,n]);[t,i,n]=m.then?(await m)():m;let x=["",{children:["shop-cart",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,3496)),"C:\\Users\\Hamayoun Babar\\OneDrive\\Desktop\\foodking-fast-food-restaurant-2024-11-05-03-14-34-utc\\package\\foodking\\app\\shop-cart\\page.js"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,214)),"C:\\Users\\Hamayoun Babar\\OneDrive\\Desktop\\foodking-fast-food-restaurant-2024-11-05-03-14-34-utc\\package\\foodking\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(s.bind(s,1470)),"C:\\Users\\Hamayoun Babar\\OneDrive\\Desktop\\foodking-fast-food-restaurant-2024-11-05-03-14-34-utc\\package\\foodking\\app\\not-found.js"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["C:\\Users\\Hamayoun Babar\\OneDrive\\Desktop\\foodking-fast-food-restaurant-2024-11-05-03-14-34-utc\\package\\foodking\\app\\shop-cart\\page.js"],j="/shop-cart/page",g={require:s,loadChunk:()=>Promise.resolve()},f=new c.AppPageRouteModule({definition:{kind:l.x.APP_PAGE,page:"/shop-cart/page",pathname:"/shop-cart",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:x}});r()}catch(e){r(e)}})},3842:(e,a,s)=>{Promise.resolve().then(s.bind(s,6895))},6895:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>d});var r=s(326),t=s(315),i=s(9588),n=s(5407),c=s(434),l=s(7577);let d=()=>{let[e,a]=(0,l.useState)([{id:1,name:"Deluxe Burger",price:12.99,quantity:2,image:"assets/img/shop-food/s1.png"},{id:2,name:"Margherita Pizza",price:14.99,quantity:1,image:"assets/img/shop-food/s2.png"},{id:3,name:"Caesar Salad",price:8.99,quantity:1,image:"assets/img/shop-food/s3.png"}]),s=()=>e.reduce((e,a)=>e+a.price*a.quantity,0),d=s=>{let r=[...e];r[s].quantity+=1,a(r)},o=s=>{let r=[...e];r[s].quantity>1&&(r[s].quantity-=1,a(r))},h=s=>{a(e.filter((e,a)=>a!==s))};return(0,r.jsxs)(n.default,{children:[r.jsx(i.Z,{pageName:"shop Cart"}),r.jsx("section",{className:"cart-section section-padding fix",children:r.jsx("div",{className:"container",children:(0,r.jsxs)("div",{className:"main-cart-wrapper",children:[r.jsx("div",{className:"row",children:r.jsx("div",{className:"col-12",children:(0,r.jsxs)("div",{className:"cart-wrapper",children:[r.jsx("div",{className:"cart-items-wrapper",children:(0,r.jsxs)("table",{children:[r.jsx("thead",{children:(0,r.jsxs)("tr",{children:[r.jsx("th",{children:"Product"}),r.jsx("th",{children:"Price"}),r.jsx("th",{children:"Quantity"}),r.jsx("th",{children:"Subtotal"}),r.jsx("th",{children:"Remove"})]})}),r.jsx("tbody",{children:e.map((e,a)=>(0,r.jsxs)("tr",{className:"cart-item",children:[(0,r.jsxs)("td",{className:"cart-item-info",children:[r.jsx("img",{src:e.image,alt:e.name}),r.jsx("span",{children:e.name})]}),(0,r.jsxs)("td",{className:"cart-item-price",children:["$"," ",r.jsx("span",{className:"base-price",children:e.price.toFixed(2)})]}),r.jsx("td",{children:(0,r.jsxs)("div",{className:"cart-item-quantity",children:[r.jsx("span",{className:"cart-item-quantity-amount",children:e.quantity}),(0,r.jsxs)("div",{className:"cart-item-quantity-controller",children:[r.jsx(c.default,{href:"#",className:"cart-increment",onClick:e=>{e.preventDefault(),d(a)},children:r.jsx("i",{className:"far fa-caret-up"})}),r.jsx(c.default,{href:"#",className:"cart-decrement",onClick:e=>{e.preventDefault(),o(a)},children:r.jsx("i",{className:"far fa-caret-down"})})]})]})}),(0,r.jsxs)("td",{className:"cart-item-price",children:["$"," ",r.jsx("span",{className:"total-price",children:(e.price*e.quantity).toFixed(2)})]}),r.jsx("td",{className:"cart-item-remove",children:r.jsx(c.default,{href:"#",onClick:e=>{e.preventDefault(),h(a)},children:r.jsx("i",{className:"fas fa-times"})})})]},a))})]})}),(0,r.jsxs)("div",{className:"cart-wrapper-footer",children:[(0,r.jsxs)("form",{onSubmit:e=>e.preventDefault(),children:[r.jsx("input",{type:"text",name:"promo-code",id:"promoCode",placeholder:"Promo code"}),r.jsx(c.default,{href:"#",onClick:e=>{e.preventDefault()},className:"theme-btn border-radius-none",children:"Apply Code"})]}),r.jsx(c.default,{href:"/shop-cart",className:"theme-btn border-radius-none",children:"Update Cart"})]})]})})}),(0,r.jsxs)("div",{className:"row",children:[r.jsx("div",{className:"col-lg-6"}),r.jsx("div",{className:"col-xl-6",children:r.jsx("div",{className:"cart-pragh-box",children:(0,r.jsxs)("div",{className:"cart-graph",children:[r.jsx("h4",{children:"Cart Total"}),(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[r.jsx("span",{children:"Subtotal"}),(0,r.jsxs)("span",{children:["$",s().toFixed(2)]})]}),(0,r.jsxs)("li",{children:[r.jsx("span",{children:"Shipping"}),(0,r.jsxs)("span",{children:["$",e.length>0?"$10.00":"$0.00"]})]}),(0,r.jsxs)("li",{children:[r.jsx("span",{children:"Total"}),(0,r.jsxs)("span",{children:["$",(s()+(e.length>0?10:0)).toFixed(2)]})]})]}),r.jsx("div",{className:"chck",children:r.jsx(c.default,{href:"/checkout",className:"theme-btn border-radius-none",children:"Checkout"})})]})})})]})]})})}),r.jsx(t.Z,{})]})}},315:(e,a,s)=>{"use strict";s.d(a,{Z:()=>t});var r=s(326);let t=()=>(0,r.jsxs)("section",{className:"main-cta-banner-2 section-padding bg-cover",style:{backgroundImage:'url("assets/img/banner/main-cta-bg-2.jpg")'},children:[r.jsx("div",{className:"tomato-shape-left float-bob-y",children:r.jsx("img",{src:"assets/img/tomato.png",alt:"shape-img"})}),r.jsx("div",{className:"chili-shape-right float-bob-y",children:r.jsx("img",{src:"assets/img/chilli.png",alt:"shape-img"})}),r.jsx("div",{className:"container",children:(0,r.jsxs)("div",{className:"main-cta-banner-wrapper-2 d-flex align-items-center justify-content-between",children:[(0,r.jsxs)("div",{className:"section-title mb-0",children:[r.jsx("span",{className:"theme-color-3 wow fadeInUp",children:"crispy, every bite taste"}),(0,r.jsxs)("h2",{className:"text-white wow fadeInUp","data-wow-delay":".3s",children:["30 minutes fast ",r.jsx("br",{}),r.jsx("span",{className:"theme-color-3",children:"delivery"})," challage"]})]}),r.jsx("div",{className:"delivery-man",children:r.jsx("img",{src:"assets/img/delivery-man-2.png",alt:"img"})})]})})]})},9588:(e,a,s)=>{"use strict";s.d(a,{Z:()=>i});var r=s(326),t=s(434);let i=({pageName:e})=>r.jsx("div",{className:"breadcrumb-wrapper bg-cover",style:{backgroundImage:'url("assets/img/banner/breadcrumb.jpg")'},children:r.jsx("div",{className:"container",children:(0,r.jsxs)("div",{className:"page-heading center",children:[r.jsx("h1",{children:e}),(0,r.jsxs)("ul",{className:"breadcrumb-items",children:[r.jsx("li",{children:r.jsx(t.default,{href:"/",children:"Home Page"})}),r.jsx("li",{children:r.jsx("i",{className:"far fa-chevron-right"})}),r.jsx("li",{children:e})]})]})})})},3496:(e,a,s)=>{"use strict";s.a(e,async(e,r)=>{try{s.r(a),s.d(a,{default:()=>e});var t=s(1851);let e=(await (0,t.createProxy)(String.raw`C:\Users\Hamayoun Babar\OneDrive\Desktop\foodking-fast-food-restaurant-2024-11-05-03-14-34-utc\package\foodking\app\shop-cart\page.js`)).default;r()}catch(e){r(e)}},1)}};var a=require("../../webpack-runtime.js");a.C(e);var s=e=>a(a.s=e),r=a.X(0,[2424,1078,647],()=>s(8018));module.exports=r})();