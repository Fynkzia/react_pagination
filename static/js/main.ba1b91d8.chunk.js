(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{10:function(e,c,a){},12:function(e,c,a){"use strict";a.r(c);var t=a(5),n=a.n(t),i=a(4),l=a(1);a(10);function r(e,c){for(var a=[],t=e;t<=c;t+=1)a.push(t);return a}var s=a(2),o=a.n(s),j=a(0),d=Object(l.memo)((function(e){var c=e.perPage,a=e.total,t=e.currentPage,n=e.onPageChange,i=Math.ceil(a/c),l=r(1,i);return Object(j.jsxs)("ul",{className:"pagination",children:[Object(j.jsx)("li",{className:o()("page-item",{disabled:1===t}),children:Object(j.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":1===t,onClick:function(){n(t>1?t-1:t)},children:"\xab"})}),l.map((function(e){return Object(j.jsx)("li",{className:o()("page-item",{active:t===e}),children:Object(j.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),onClick:function(){n(e)},children:e})},e)})),Object(j.jsx)("li",{className:o()("page-item",{disabled:t===i}),children:Object(j.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":t===i,onClick:function(){n(t<i?t+1:t)},children:"\xbb"})})]})})),u=r(1,42).map((function(e){return"Item ".concat(e)})),b=Object(l.memo)((function(){var e=u.length,c=Object(l.useState)(5),a=Object(i.a)(c,2),t=a[0],n=a[1],s=Object(l.useState)(1),o=Object(i.a)(s,2),b=o[0],m=o[1],h=Math.min(t*b,e),p=t*(b-1)+1,O=Object(l.useMemo)((function(){return r(p,h)}),[p,h]),g=Object(l.useCallback)((function(e){m(e)}),[]);return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{children:"Items with Pagination"}),Object(j.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(b," (items ").concat(p," - ").concat(h," of ").concat(e,")")}),Object(j.jsxs)("div",{className:"form-group row",children:[Object(j.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(j.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",value:t,onChange:function(e){n(+e.target.value),m(1)},children:[Object(j.jsx)("option",{value:3,children:"3"}),Object(j.jsx)("option",{value:5,children:"5"}),Object(j.jsx)("option",{value:10,children:"10"}),Object(j.jsx)("option",{value:20,children:"20"})]})}),Object(j.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(j.jsx)(d,{total:e,perPage:t,currentPage:b,onPageChange:g}),Object(j.jsx)("ul",{children:O.map((function(e){return Object(j.jsx)("li",{"data-cy":"item",children:"Item ".concat(e)},e)}))})]})}));n.a.render(Object(j.jsx)(b,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.ba1b91d8.chunk.js.map