"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[970],{25:function(n,e,t){t.d(e,{Hg:function(){return c},V$:function(){return u},q:function(){return o},u3:function(){return a},yK:function(){return i}});var r=t(294).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"b4bd07f1e94011ce6ac66467073c8fb1"}}),c=function(){return r.get("trending/all/day?")},i=function(n){return r.get("movie/".concat(n,"?"))},a=function(n){return r.get("movie/".concat(n,"/credits"))},u=function(n){return r.get("movie/".concat(n,"/reviews"))},o=function(n){return r.get("search/movie?query=".concat(n))}},6:function(n,e,t){t.r(e);var r=t(861),c=t(439),i=t(757),a=t.n(i),u=t(791),o=t(218),s=t(316),f=t(25),l=t(235),p=t(184);e.default=function(){var n=(0,u.useState)([]),e=(0,c.Z)(n,2),t=e[0],i=e[1],d=(0,u.useState)(!1),v=(0,c.Z)(d,2),g=v[0],h=v[1],m=(0,u.useState)(!1),x=(0,c.Z)(m,2),Z=x[0],j=x[1];return(0,u.useEffect)((function(){var n=function(){var n=(0,r.Z)(a().mark((function n(){var e,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,h(!0),j(!1),n.next=5,(0,f.Hg)();case 5:e=n.sent,t=e.data,i(t.results),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),j(!0);case 13:return n.prev=13,h(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[0,10,13,16]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,p.jsxs)("main",{children:[g&&(0,p.jsx)(s.a,{}),(0,p.jsx)("h2",{children:"Trending today"}),Z&&!g&&o.ZP.error("Error loading movies. Please try again later."),(0,p.jsx)(l.Z,{movies:t})]})}},235:function(n,e,t){t.d(e,{Z:function(){return m}});var r,c,i,a,u=t(689),o=t(168),s=t(87),f=t(924),l=f.ZP.ul(r||(r=(0,o.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 30px;\n"]))),p=f.ZP.li(c||(c=(0,o.Z)(["\n  width: calc((100% - 230px) / 6);\n"]))),d=(0,f.ZP)(s.rU)(i||(i=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n"]))),v=f.ZP.p(a||(a=(0,o.Z)(["\n  text-align: center;\n  font-size: 18px;\n  font-weight: 500;\n"]))),g=t.p+"static/media/default-poster.71253f31d01ef6cdd4cc.jpeg",h=t(184),m=function(n){var e=n.movies,t=(0,u.TH)();return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(l,{children:e.map((function(n){var e=n.id,r=n.title,c=n.poster_path;return(0,h.jsx)(p,{children:(0,h.jsxs)(d,{to:"/movies/".concat(e),state:{from:t},children:[(0,h.jsx)("img",{src:c?"https://image.tmdb.org/t/p/w500".concat(c):g,alt:r}),(0,h.jsx)(v,{children:r})]})},e)}))})})}}}]);
//# sourceMappingURL=970.79b10338.chunk.js.map