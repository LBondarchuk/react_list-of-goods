(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s,r=n(4),c=n.n(r),o=n(5),i=n(6),a=n(8),l=n(7),u=n(3),b=n(1),d=(n(13),n(14),n(0)),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(s||(s={}));var j=function(t){Object(a.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={isReversed:!1,sortType:0},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.isReversed,r=e.sortType,c=function(t,e){var n=e.sortType,r=e.isReversed,c=Object(u.a)(t),o=s.ALPHABET,i=s.LENGTH,a=s.NONE;switch(n){case i:c.sort((function(t,e){return t.length-e.length}));break;case o:c.sort((function(t,e){return t.localeCompare(e)}));break;case a:c=Object(u.a)(t)}return r&&c.reverse(),console.log(n,r),c}(h,{sortType:r,isReversed:n}),o=s.ALPHABET,i=s.LENGTH,a=s.NONE;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"section content",children:[Object(d.jsxs)("div",{className:"buttons",children:[Object(d.jsx)("button",{onClick:function(){return t.setState({sortType:o})},type:"button",className:"button is-info ".concat(r===o?"":"is-light"),children:"Sort alphabetically"}),Object(d.jsx)("button",{type:"button",className:"button is-success ".concat(r===i?"":"is-light"),onClick:function(){return t.setState({sortType:i})},children:"Sort by length"}),Object(d.jsx)("button",{type:"button",className:"button is-warning ".concat(n?"":"is-light"),onClick:function(){return t.setState((function(t){return{isReversed:!t.isReversed}}))},children:"Reverse"}),(n||0!==r)&&Object(d.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){t.setState({sortType:a,isReversed:!1})},children:"Reset"})]}),Object(d.jsx)("ul",{children:Object(d.jsx)("ul",{children:c.map((function(t){return Object(d.jsx)("li",{"data-cy":"Good",children:t})}))})})]})})}}]),n}(b.Component);c.a.render(Object(d.jsx)(j,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.98c4fe54.chunk.js.map