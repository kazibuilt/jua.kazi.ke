(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7618:function(e,n,i){"use strict";i(7294);var t=i(5577),r=i(5893);n.Z=function(){var e="".concat(t._d.replace(".cdn","").slice(0,-6),"documents/");return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"setup-repo",children:[(0,r.jsx)("h1",{children:"Good job!"}),(0,r.jsx)("h2",{children:"You're halfway done with setting up your Prismic website"}),(0,r.jsxs)("h4",{children:["Just visit your ",(0,r.jsx)("a",{href:e,children:"Prismic dashboard"})," and add some content there"]})]})})}},2649:function(e,n,i){"use strict";i.r(n),i.d(n,{__N_SSG:function(){return N},default:function(){return Z}});var t=i(7294),r=i(9008),s=i.n(r),a=i(5833),c=i(5637),o=i(6372),u=i(7618),d=i(7812),h=i(1482),_=i.n(h),l=i(7340),m=i(5275),f=i(5926),x=i(4184),v=i.n(x),j=i(5548),p=i(5893),w=function(e){var n=e.medias,i=(0,t.useRef)(),r=(0,t.useRef)(n.map(function(e){return!1})),s=(0,t.useState)(),a=s[0],c=s[1],o=(0,t.useState)((0,d.Z)(r.current)),u=o[0],h=o[1];return(0,f.Z)(function(e){i.current=e.innerWidth},!0),(0,p.jsx)("div",{className:_().main,onMouseMove:function(e){var t=e.clientX/i.current,s=n.length*t|0;r.current[s]=!0,c(s),r.current[s]!==u[s]&&h((0,d.Z)(r.current))},children:n&&n.map(function(e,n){return e.video_sd&&e.video_hd?(0,p.jsx)(j.Z,{className:v()(_().media,n===a&&_().active),playing:n===a,disableInView:!0,srcs:[{src:e.video_sd,width:640},{src:e.video_hd,width:1280}]},n):e.image&&e.image.url?(0,p.jsx)(m.Z,{className:v()(_().media,n===a&&_().active),fluid:(0,l.YW)(e.image,{portrait:e.image.portrait}),loading:"none",visible:u[n],fadeIn:!1},n):void 0})})},b=i(2001),g=i.n(b),N=!0,Z=function(e){var n=e.data;return n?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(s(),{children:(0,p.jsx)("title",{children:a.RichText.asText(n.title)})}),(0,p.jsx)(c.Z,{image:n.hero,bottomText:n.hero_bottom_text,className:g().hero,children:(0,p.jsx)(w,{medias:n.hero_medias})}),(0,p.jsx)(o.Z,{slices:n.body})]}):(0,p.jsx)(u.Z,{})}},5557:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(2649)}])},1482:function(e){e.exports={main:"MediasMouse_main__bChdz",media:"MediasMouse_media__WG_uW",active:"MediasMouse_active__QrRm4"}},2001:function(e){e.exports={hero:"index_hero__kJfPu"}}},function(e){e.O(0,[637,372,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);