(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{10:function(e,a,c){},12:function(e,a,c){"use strict";c.r(a);var t=c(5),n=c.n(t),i=c(4),l=c(1);c(10);function r(e,a){for(var c=[],t=e;t<=a;t+=1)c.push(t);return c}var s=c(2),o=c.n(s),j=c(0),d=function(e){var a=e.perPage,c=e.total,t=e.currentPage,n=e.onPageChange,i=Math.ceil(c/a),l=r(1,i);return Object(j.jsxs)("ul",{className:"pagination",children:[Object(j.jsx)("li",{className:o()("page-item",{disabled:1===t}),children:Object(j.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":1===t,onClick:function(){n(t>1?t-1:t)},children:"\xab"})}),l.map((function(e){return Object(j.jsx)("li",{className:o()("page-item",{active:t===e}),children:Object(j.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),onClick:function(){n(e)},children:e})},e)})),Object(j.jsx)("li",{className:o()("page-item",{disabled:t===i}),children:Object(j.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":t===i,onClick:function(){n(t<i?t+1:t)},children:"\xbb"})})]})},h=r(1,42).map((function(e){return"Item ".concat(e)})),u=function(){var e=h.length,a=Object(l.useState)(5),c=Object(i.a)(a,2),t=c[0],n=c[1],s=Object(l.useState)(1),o=Object(i.a)(s,2),u=o[0],b=o[1],p=Math.min(t*u,e),m=t*(u-1)+1,g=r(m,p);return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{children:"Items with Pagination"}),Object(j.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(u," (items ").concat(m," - ").concat(p," of ").concat(e,")")}),Object(j.jsxs)("div",{className:"form-group row",children:[Object(j.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(j.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",value:t,onChange:function(e){n(+e.target.value),b(1)},children:[Object(j.jsx)("option",{value:3,children:"3"}),Object(j.jsx)("option",{value:5,children:"5"}),Object(j.jsx)("option",{value:10,children:"10"}),Object(j.jsx)("option",{value:20,children:"20"})]})}),Object(j.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(j.jsx)(d,{total:e,perPage:t,currentPage:u,onPageChange:function(e){b(e)}}),Object(j.jsx)("ul",{children:g.map((function(e){return Object(j.jsx)("li",{"data-cy":"item",children:"Item ".concat(e)},e)}))})]})};n.a.render(Object(j.jsx)(u,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.5ec56fca.chunk.js.map