(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[857],{2609:function(e,r,t){Promise.resolve().then(t.bind(t,2710)),Promise.resolve().then(t.bind(t,4820)),Promise.resolve().then(t.bind(t,9907)),Promise.resolve().then(t.bind(t,6954)),Promise.resolve().then(t.bind(t,8353)),Promise.resolve().then(t.bind(t,7703)),Promise.resolve().then(t.bind(t,8696))},2355:function(e,r,t){"use strict";t.d(r,{Z:function(){return c}});var n=t(7316),u=t(166);function c(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=(0,n.CR)(e=>{let{lenis:r}=e;return r});(0,u.Z)(()=>{let r=r=>{t.__isStopped||e(r)};if(t)return t.on("scroll",r),e(t),()=>{t.off("scroll",r)}},[t,e,[...r]])}},74:function(e,r,t){"use strict";var n=t(8924),u=t(7619),c=t(6281),i=t(7726),l=t(9288),o=t(8867),s=t(2355),a=t(659),f=t(166);let d={mediaQueries:Object.values(l.S),relativeRatio:!1,offset:[[.5,.5],[1,0]],easingFunction:e=>e};r.Z=function(e,r){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:d,l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];t={...d,...t};let v=(0,n.useRef)(window.pageYOffset),h=(0,n.useRef)(!1),m=(0,o.Z)(!0),R=(0,n.useRef)(0),g=(0,n.useRef)(0),b=(0,n.useRef)(0),Z=(0,n.useRef)(0),x=(0,n.useRef)(!1),p=t.offset[0],w=p[0],y=p[1],$=t.offset[1],S=$[0],k=$[1],H=(0,n.useRef)(null),P=(0,n.useRef)(null);(0,i.Z)(e=>{H.current=e}),(0,c.Z)(e,r=>{var t,n,u,c;b.current=(null===(n=r.borderBoxSize)||void 0===n?void 0:null===(t=n[0])||void 0===t?void 0:t.inlineSize)||e.current.offsetWidth,Z.current=(null===(c=r.borderBoxSize)||void 0===c?void 0:null===(u=c[0])||void 0===u?void 0:u.blockSize)||e.current.offsetHeight,x.current=!0}),(0,f.Z)(()=>{P.current=document.body},[]),(0,c.Z)(P,()=>{h.current=H.current&&-1!==t.mediaQueries.indexOf(H.current),h.current&&(g.current=e.current?(0,a.uy)(e.current):0),x.current=!0},[H.current]),(0,s.Z)(e=>{let{animatedScroll:r}=e;v.current=r||0});let _=(0,n.useCallback)(()=>{if(h.current&&e.current&&m.current.documentHeight&&Z.current){let e=x.current?1:t.ease||1,n=w*Z.current-y*m.current.documentHeight,u=S*Z.current-k*m.current.documentHeight;R.current+=((v.current-(n+g.current))/(u-n)-R.current)*e,x.current=!1,r((null==t?void 0:t.easingFunction)?t.easingFunction(R.current):R.current,{easing:e,originalRatio:R.current,scrollY:v.current,top:g.current,height:Z.current,viewport:m.current})}else R.current=0,r(R.current,{originalRatio:R.current,scrollY:v.current,top:g.current,height:Z.current,viewport:m.current})},l);(0,u.Z)(_)}},8660:function(e,r,t){"use strict";var n=t(7316),u=t(8924),c=t(7882);r.Z=e=>{let[r,t]=(0,n.kk)(e=>[e.addSlice,e.removeSlice],c.X);(0,u.useEffect)(()=>{let n=null==e?void 0:e.current;if(n)return r(n),()=>{t(n)}},[e.current,r,t])}},4820:function(e,r,t){"use strict";t.r(r),t.d(r,{ParallaxMedia:function(){return d}});var n=t(1468),u=t(8370),c=t(8924),i=t(6221);let l={current:void 0};var o=t(74),s=t(9288),a=t(2297);let f=(0,c.forwardRef)((e,r)=>{let{children:t,useViewportRatio:u,scaleToFit:f,offset:d=[[.5,.5],[1,0]],x:v=0,y:h=0,scaleInit:m=1,rotateInit:R=0,rotate:g=0,className:b,easingFunction:Z=e=>e,transform:x,mediaQueries:p=Object.values(s.S),as:w="div",unit:y="px",disableTouchDevice:$=!0}=e,S=(0,c.useRef)(null),k=(0,c.useRef)(R),H=(0,c.useRef)(0),P=(0,c.useRef)(0),_=(0,c.useRef)(0),C=(0,c.useRef)(null),j=(0,c.useRef)(null),N=(0,c.useRef)(!1),O=(0,i.Z)(!0),M=!!$&&(void 0===l.current&&(l.current=!window.matchMedia("(hover: hover)").matches),l.current);return(0,o.Z)(S,(e,r)=>{let{scrollY:t,top:n,height:c,viewport:i,originalRatio:l}=r;H.current=c;let o=p.includes(null==O?void 0:O.current)&&!1===M;if(!o)return!1;let s=u?v*i.innerWidth:v,d=u?h*i.documentHeight:h,b=m;if(f){let e=(i.documentHeight-c)/2,r=i.documentHeight+c;b+=Math.max(1,(c+2*(e*(2*d)/r))/c)-1}let Z=n-t,w=i.documentHeight;if(P.current=e*(void 0!==v?v:0)*(u?Math.abs(s):1),_.current=e*(void 0!==h?h:0)*(u?Math.abs(d):1),g||R){let e=-g*Z/w+R;k.current=e}let $={x:(0,a.ch)(P.current),y:(0,a.ch)(_.current),rotate:g},z=Z+_.current,E=z+c>=0&&z<=w||Z+c>=0&&Z<=w,F={ratio:e,originalRatio:l,ref:S,top:n,height:c,viewport:i,inView:E,enabled:!1},Y=k.current?` rotate(${k.current}deg)`:"";S.current&&E&&($.x!==C.current||$.y!==j.current)?(S.current.style.transform=x?x($,{...F,enabled:!0}):`translate3d(${$.x}${y},${$.y}${y},0)${Y} scale(${b})`,S.current.style.willChange="transform",N.current=!0):S.current&&!E&&N.current&&(S.current.style.transform=x?x($,F):`translate(${$.x}${y},${$.y}${y})${Y} scale(${b})`,S.current.style.willChange="",N.current=!1),C.current=$.x,j.current=$.y},{offset:d,easingFunction:Z,mediaQueries:p},[v,h,x,Z]),(0,n.jsx)(w,{ref:e=>{S.current=e,r&&(r.current=e)},className:b,children:t})}),d=e=>{let{as:r="div",distance:t=100,useViewportRatio:c=!1,clip:i=!0,offset:l=[[.5,.5],[1,0]],children:o,scrollProps:s={},className:a,...d}=e;return(0,n.jsx)(r,{...d,className:(0,u.Z)(a,i&&"overflow-clip"),children:(0,n.jsx)(f,{...s,y:t,useViewportRatio:c,offset:l,scaleToFit:!0,children:o})})}},8696:function(e,r,t){"use strict";t.r(r),t.d(r,{Slice:function(){return l}});var n=t(1468),u=t(8660),c=t(8370),i=t(8924);let l=(0,i.forwardRef)((e,r)=>{let{children:t,className:l,as:o="section",isDark:s,type:a}=e,f=(0,i.useRef)();s||void 0===s||(0,u.Z)(f);let d=(0,i.useCallback)(e=>{f.current=e,r&&(r.current=e)},[]);return(0,n.jsx)(o,{ref:d,className:(0,c.Z)(l),"data-type":!1,children:t})})}},function(e){e.O(0,[425,487,631,954,703,561,195,744],function(){return e(e.s=2609)}),_N_E=e.O()}]);