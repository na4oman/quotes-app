"use strict";(self.webpackChunkreact_router_quotes=self.webpackChunkreact_router_quotes||[]).push([[808],{853:function(e,t,n){n.d(t,{X:function(){return r}});var s=n(683),r=function(e){var t=[];for(var n in e){var r=(0,s.Z)({id:n},e[n]);t.push(r)}return t}},808:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var s=n(791),r=n(871),c=n(504),i="QuoteItem_item__KIH9Y",a=n(184),o=function(e){return(0,a.jsxs)("li",{className:i,children:[(0,a.jsxs)("figure",{children:[(0,a.jsx)("blockquote",{children:(0,a.jsx)("p",{children:e.text})}),(0,a.jsx)("figcaption",{children:e.author})]}),(0,a.jsx)(c.rU,{to:e.id,className:"btn",children:"View Details"})]})},u="QuoteList_list__r06Bo",d="QuoteList_sorting__YPO-n",l=function(e){var t,n,c=(0,r.s0)(),i=(0,r.TH)(),l="asc"===new URLSearchParams(i.search).get("sort"),h=(t=e.quotes,n=l,t.sort((function(e,t){return n?e.text>t.text?1:-1:e.text<t.text?1:-1})));return(0,a.jsxs)(s.Fragment,{children:[(0,a.jsx)("div",{className:d,children:(0,a.jsxs)("button",{onClick:function(){c({pathname:i.pathname,search:"?sort=".concat(l?"desc":"asc")})},children:["Sort ",l?"Descending":"Ascending"]})}),(0,a.jsx)("ul",{className:u,children:h.map((function(e){return(0,a.jsx)(o,{id:e.id,author:e.author,text:e.text},e.id)}))})]})},h=n(920),x=n(556),j="NoQuotesFound_noquotes__SibtO",f=function(){return(0,a.jsxs)("div",{className:j,children:[(0,a.jsx)("p",{children:"No quotes found!"}),(0,a.jsx)(c.rU,{to:"/new-quote",className:"btn",children:"Add a Quote"})]})},_=n(853),m=function(){var e=(0,h.jX)(),t=e.data,n=e.error,s=e.isLoading,r=e.isSuccess,c=(0,_.X)(t);return s?(0,a.jsx)("div",{className:"centered",children:(0,a.jsx)(x.Z,{})}):n?(0,a.jsx)("p",{className:"centered focused",children:n.data}):!r||c&&0!==c.length?(0,a.jsx)("section",{children:(0,a.jsx)(l,{quotes:c})}):(0,a.jsx)(f,{})}}}]);
//# sourceMappingURL=808.aa03cf21.chunk.js.map