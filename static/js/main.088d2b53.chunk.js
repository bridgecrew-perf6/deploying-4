(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__3bnjS",summary:"CartItem_summary__3mRjI",price:"CartItem_price__1LSum",amount:"CartItem_amount__1otq7",actions:"CartItem_actions__3Uaik"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__23qWD",icon:"HeaderCartButton_icon__3CFeY",badge:"HeaderCartButton_badge__1A8hK",bump:"HeaderCartButton_bump__l7eQy"}},function(e,t,n){e.exports={"cart-items":"Cart_cart-items__sfDUY",total:"Cart_total__1cVd_",actions:"Cart_actions__2M51g","button--alt":"Cart_button--alt__2wHmv",button:"Cart_button__1ebGR"}},function(e,t,n){e.exports={meal:"MealItem_meal__2EGeB",description:"MealItem_description__1rdzx",price:"MealItem_price__1OVHH"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__lgeb3",modal:"Modal_modal__2aQey","slide-down":"Modal_slide-down__GWTLb"}},,function(e,t,n){e.exports={header:"Header_header__1mMXx","main-image":"Header_main-image__205q_"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__x4gKC","meals-appear":"AvailableMeals_meals-appear__1aAJp"}},function(e,t,n){e.exports={input:"input_input__ncE3t"}},function(e,t,n){e.exports={form:"MealItemForm_form__3ZozB"}},function(e,t,n){e.exports={card:"Card_card__1D-Ra"}},function(e,t,n){e.exports={summary:"MealsSummary_summary__2EXDD"}},,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(6),c=n.n(a),i=(n(21),n(3)),r=n(1),o=n.n(r),s=n(5),l=n.p+"static/media/meals.46a522b4.jpg",d=n(12),u=n.n(d),m=o.a.createContext(),j=n(2),b="DELETE",O="ONCREASE",x=n(0),p=o.a.createContext(),h={items:[],totalPrice:0,onAdd:function(){},onRemove:function(){}},_=function(e,t){switch(t.type){case O:var n=e.items.findIndex((function(e){return e.id===t.item.id}));if(-1===n){var a=Object(j.a)(Object(j.a)({},t.item),{},{amount:t.amountValue}),c=e.items.concat(a),i=t.item.price*t.amountValue;return e.totalPrice=e.totalPrice+i,Object(j.a)(Object(j.a)({},e),{},{items:c})}var r=t.item.price*t.amountValue,o=e.totalPrice+r,s=e.items.map((function(e,a){return a===n?Object(j.a)(Object(j.a)({},e),{},{amount:e.amount+t.amountValue}):e}));return Object(j.a)(Object(j.a)({},e),{},{items:s,totalPrice:o});case"ADD":var l=e.items.findIndex((function(e){return e.id===t.item.id})),d=e.totalPrice+t.item.price,u=e.items.map((function(e,t){return t===l?Object(j.a)(Object(j.a)({},e),{},{amount:e.amount+1}):e}));return console.log(u,"newItem"),Object(j.a)(Object(j.a)({},e),{},{items:u,totalPrice:d});case b:var m=e.items.find((function(e){return e.id===t.id}));if(1===m.amount){var x=e.items.filter((function(e){return e.id!==t.id}));return Object(j.a)(Object(j.a)({},e),{},{items:x,totalPrice:e.totalPrice-m.price})}var p=e.items.map((function(e){return e.id===t.id?Object(j.a)(Object(j.a)({},e),{},{amount:--e.amount}):e}));return Object(j.a)(Object(j.a)({},e),{},{items:p,totalPrice:e.totalPrice-m.price});default:return e}},f=function(e){var t=Object(r.useReducer)(_,h),n=Object(i.a)(t,2),a=n[0],c=n[1];return Object(x.jsx)(p.Provider,{value:{items:a.items,totalPrice:a.totalPrice,onAdd:function(e){c({type:"ADD",item:e})},onRemove:function(e){c({type:b,id:e})},onIncrease:function(e,t){c({type:O,item:e,amountValue:t})}},children:e.children})},v=function(){return Object(x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(x.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},C=n(7),g=n.n(C),N=function(e){var t=Object(r.useContext)(m).onShow,n=Object(r.useContext)(p).items;return Object(x.jsxs)("button",{className:g.a.button,onClick:t,children:[Object(x.jsx)("span",{className:g.a.icon,children:Object(x.jsx)(v,{})}),Object(x.jsx)("span",{className:g.a.bump,children:"Your Cart"}),Object(x.jsx)("span",{className:g.a.badge,children:n.length})]})},y=function(e){return Object(x.jsxs)(s.Fragment,{children:[console.log(l),Object(x.jsxs)("header",{className:u.a.header,children:[Object(x.jsx)("h1",{children:"ReactMeals"}),Object(x.jsx)(N,{onShowModal:e.onShowModal})]}),Object(x.jsx)("div",{className:u.a["main-image"],children:Object(x.jsx)("img",{src:l,alt:"mealsImage"})})]})},w=n(13),A=n.n(w),M=n(9),P=n.n(M),I=n(14),H=n.n(I),S=function(e){return Object(x.jsxs)("div",{className:H.a.input,children:[Object(x.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(x.jsx)("input",Object(j.a)({},e.input))]})},k=n(15),D=n.n(k),B=function(e){var t=e.data,n=e.id,a=Object(r.useState)(1),c=Object(i.a)(a,2),o=c[0],s=c[1],l=Object(r.useContext)(p).onIncrease;return Object(x.jsxs)("form",{onSubmit:function(e){e.preventDefault()},className:D.a.form,children:[Object(x.jsx)(S,{label:"Amount",input:{id:"amount"+n,type:"number",min:"1",max:"5",step:"1",value:o,onChange:function(e){s(e.target.value)}}}),Object(x.jsx)("button",{onClick:function(e){var t=Number(o);return function(){return l(e,t)}}(t),children:"+Add"})]})},F=function(e){var t="$ ".concat(e.price.toFixed(2));return Object(x.jsxs)("li",{className:P.a.meal,children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("h3",{children:e.name}),Object(x.jsx)("div",{className:P.a.description,children:e.description}),Object(x.jsx)("div",{className:P.a.price,children:t})]}),Object(x.jsx)("div",{children:Object(x.jsx)(B,{id:e.id,data:e})})]})},R=n(16),E=n.n(R),V=function(e){return Object(x.jsx)("div",{className:E.a.card,children:e.children})},z=[{id:"m1",name:"Sushi",description:"Finest fish and veggies",price:22.99},{id:"m2",name:"Schnitzel",description:"A german specialty!",price:16.5},{id:"m3",name:"Barbecue Burger",description:"American, raw, meaty",price:12.99},{id:"m4",name:"Green Bowl",description:"Healthy...and green...",price:18.99}],q=function(){var e=z.map((function(e){return Object(x.jsx)(F,{name:e.name,description:e.description,price:e.price,id:e.id},e.id)}));return Object(x.jsx)("section",{className:A.a.meals,children:Object(x.jsx)(V,{children:Object(x.jsx)("ul",{children:e})})})},G=n(17),T=n.n(G),Y=function(){return Object(x.jsxs)("section",{className:T.a.summary,children:[Object(x.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(x.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(x.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},J=function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(Y,{}),Object(x.jsx)(q,{})]})},L=n(8),K=n.n(L),Q=n(10),U=n.n(Q),W=function(e){var t=Object(r.useContext)(m).onClose,n=function(){return Object(x.jsx)("div",{className:U.a.backdrop,onClick:t})},a=function(e){return Object(x.jsx)("div",{className:U.a.modal,children:Object(x.jsx)("div",{className:U.a.contnent,children:e.children})})},i=document.getElementById("modal-root");return Object(x.jsxs)(s.Fragment,{children:[c.a.createPortal(Object(x.jsx)(n,{}),i),c.a.createPortal(Object(x.jsx)(a,{children:e.children}),i)]})},X=n(4),$=n.n(X),Z=function(e){var t="$".concat(e.price.toFixed(2));return Object(x.jsxs)("li",{className:$.a["cart-item"],children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("h2",{children:e.name}),Object(x.jsxs)("div",{className:$.a.summary,children:[Object(x.jsx)("span",{className:$.a.price,children:t}),Object(x.jsxs)("span",{className:$.a.amount,children:["x ",e.amount]})]})]}),Object(x.jsxs)("div",{className:$.a.actions,children:[Object(x.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(x.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},ee=function(){var e=Object(r.useContext)(m).onClose,t=Object(r.useContext)(p),n=t.onAdd,a=t.onRemove,c=t.items,i=t.totalPrice.toFixed(2),o=c.map((function(e){return Object(x.jsx)(Z,{name:e.name,amount:e.amount,price:e.price,item:e,onAdd:n.bind(null,e),onRemove:a.bind(null,e.id)},e.id)}));return Object(x.jsxs)(W,{children:[o.length>0?o:Object(x.jsx)("p",{children:"No orders found"}),Object(x.jsxs)("div",{className:K.a.total,children:[Object(x.jsx)("span",{children:"Total Price"}),Object(x.jsx)("span",{children:i})]}),Object(x.jsxs)("div",{className:K.a.actions,children:[Object(x.jsx)("button",{className:K.a["button--alt"],onClick:e,children:"close"}),Object(x.jsx)("button",{className:K.a.button,children:"order"})]})]})};var te=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1],c=function(){a(!0)};return Object(x.jsx)(f,{children:Object(x.jsxs)(m.Provider,{value:{onClose:function(){a(!1)},onShow:c},children:[n&&Object(x.jsx)(ee,{}),Object(x.jsx)(y,{onShowModal:c}),Object(x.jsx)("main",{children:Object(x.jsx)(J,{})})]})})};c.a.render(Object(x.jsx)(te,{}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.088d2b53.chunk.js.map