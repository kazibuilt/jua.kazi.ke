(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[902],{4571:function(e,t,l){Promise.resolve().then(l.bind(l,8953))},8953:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return w}});var r,s=l(1468),a=l(2710),n=l(8370),i=l(8924);let c=(0,i.forwardRef)((e,t)=>{let{clip:l,bleed:r=!1,className:a,children:i}=e;return(0,s.jsx)("div",{ref:t,className:(0,n.Z)(r?"w-full":"grid-container",l&&"overflow-clip",a),children:i})});var o=l(274);let m=e=>{let{children:t,className:l,theme:r="white"}=e;return(0,s.jsx)("span",{className:(0,n.W)("inline-flex items-center h-20 px-8 pt-2","text-10 uppercase text-black leading-tight","white"===r&&"bg-white","grey"===r&&"bg-black/10 text-black/80","dark"===r&&"bg-white/20 text-white","black"===r&&"bg-black text-white",l),children:t})};var d=l(7395),u=l(1017);function x(){return(x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e}).apply(this,arguments)}var h=e=>u.createElement("svg",x({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 9 6"},e),r||(r=u.createElement("path",{fill:"currentColor",d:"M.145 1.48.852.774 4.498 4.42 8.145.773l.707.708-4.354 4.353L.145 1.481Z"}))),b=l(3517),f=l.n(b);let g=e=>{var t;let{links:l,className:r}=e,c=(0,d.useParams)(),o=c.slug,[u,x]=(0,i.useState)(!1),b=(0,i.useRef)(null),g=e=>{b.current&&!b.current.contains(e.target)&&x(!1)};return(0,i.useEffect)(()=>(document.addEventListener("mousedown",g),()=>{document.removeEventListener("mousedown",g)}),[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:(0,n.Z)("lg-max:hidden lg:flex lg:flex-col",r),children:[(0,s.jsx)(m,{variant:"white",className:"mb-20 mr-auto",children:"Legals"}),(0,s.jsx)("ul",{className:(0,n.Z)(r),children:l.map((e,t)=>(0,s.jsx)("li",{children:(0,s.jsxs)(a.Button,{linkInput:e,className:(0,n.Z)("text-10 uppercase","hover:text-black/80 transition-colors",o===e.slug?"text-black":"text-black/20"),children:[(0,s.jsxs)("span",{className:"inline-block span-w-1-wide text-left font-normal text-black text-10",children:["[",t+1,"]"]}),e.label]})},e.slug))})]}),(0,s.jsxs)("div",{className:"lg:hidden lg-max:hidden z-2 bottom-0 left-0 w-full text-black",children:[(0,s.jsxs)("button",{className:(0,n.Z)("flex w-full items-center bg-black text-white justify-between h-52 text-12 font-medium margin-px-1 uppercase","transition-opacity duration-500",u?"opacity-0":"opacity-100"),onClick:()=>x(!0),children:[null===(t=l.find(e=>e.slug===o))||void 0===t?void 0:t.label,(0,s.jsx)("div",{className:"flex items-center justify-center shrink-0 w-22 h-22 rounded ml-10 bg-grey-smooth",children:(0,s.jsx)(h,{className:"w-9 m-auto text-grey-stroke"})})]}),(0,s.jsx)("ul",{ref:b,className:(0,n.Z)("absolute left-0 bottom-0 w-full","transition-transform duration-500 ease-expo-out",u?"translate-y-0":"translate-y-[102%]"),children:l.map((e,t)=>(0,s.jsx)("li",{className:"flex items-center justify-center text-12 font-medium uppercase h-52 bg-white border-b border-black/20",children:(0,s.jsxs)(f(),{href:`/legal/${e.slug}`,className:(0,n.Z)("w-full flex items-center",e.slug===o?"text-black":"text-grey-dark"),onClick:()=>x(!1),children:[(0,s.jsxs)("span",{className:"ml-10 mr-50 text-11 font-normal",children:[t<10?0:"",t+1]}),(0,s.jsx)("span",{children:e.label})]})},e.slug))})]})]})};var p=l(8660),w=e=>{let{title:t,content:l,pages:r}=e,n=(0,i.useRef)(null);return(0,p.Z)(n),(0,s.jsx)("div",{className:"bg-grey-light py-60 lg:py-180",ref:n,children:(0,s.jsxs)(c,{children:[(0,s.jsx)("h1",{className:"w-full lg:span-w-9 text-36 lg:text-60 font-sans text-black font-normal mb-30 lg:mb-120",children:t}),(0,s.jsxs)(a.Button,{href:"#content",theme:"light",variant:"primary",className:"lg:hidden inline-flex items-center mb-60 [&>svg]:hover:text-white",children:["Jump ahead",(0,s.jsxs)("svg",{className:"mb-2 ml-6 text-black",width:"7",height:"8",viewBox:"0 0 7 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("path",{fill:"currentColor",d:"M6.416 3.61 7 4.191l-3.5 3.5-.584-.583z"}),(0,s.jsx)("path",{fill:"currentColor",d:"m0 4.19.583-.583 3.5 3.5-.583.583z"}),(0,s.jsx)("path",{fill:"currentColor",d:"M3.123.308h.825v6.6h-.825z"})]})]}),(0,s.jsxs)("div",{className:"flex",id:"content",children:[(0,s.jsx)(g,{links:r,className:"w-full lg:span-w-7 lg:span-mr-1-wider"}),l&&(0,s.jsx)(o.X,{blocks:l,styles:{normal:"w-full lg:span-w-8 text-10 uppercase text-grey-dark leading-[1.4] my-10 first:mt-0 last:mb-0 [&>li]:mb-30 [&_button]:text-black [&>a]:underline",large:"span-w-12 lg:span-w-8 text-12 uppercase text-dark my-20 first:mt-0 last:mb-0",h2:"w-full lg:span-w-10 flex items-center text-11 uppercase mt-30 first:mt-0 mb-30 before:block before:w-4 before:h-4 before:mr-6 before:bg-black border-t border-black/10 pt-30",h3:"w-full lg:span-w-8 text-11 uppercase text-black lg:tracking-widest font-light first:mt-0",tableStyle:"span-w-12 lg:span-w-10 lg:-span-ml-1-wide mt-20"},className:"w-full lg:span-w-10",imageDesktopWidth:440,imageMobileWidth:400})]})]})})}},8660:function(e,t,l){"use strict";var r=l(7316),s=l(8924),a=l(7882);t.Z=e=>{let[t,l]=(0,r.kk)(e=>[e.addSlice,e.removeSlice],a.X);(0,s.useEffect)(()=>{let r=null==e?void 0:e.current;if(r)return t(r),()=>{l(r)}},[e.current,t,l])}},274:function(e,t,l){"use strict";l.d(t,{X:function(){return Z}});var r=l(1468),s=l(8370),a=l(3447),n=l(2710),i=l(8924),c=l(9302),o=l(9907);let m=e=>{let{image:t,quote:l,author:s,company:a}=e;return(0,r.jsxs)("div",{className:"w-full lg:span-w-12 lg:flex my-60 p-20 lg:border border-black/10 text-24 font-mono uppercase",children:[(0,r.jsxs)("div",{className:"order-1 lg:order-2 lg:ml-20 lg-max:mb-20 lg-max:gap-10",children:[(0,r.jsx)("p",{className:"lg:mb-10 lg-max:after:mt-10 uppercase before:content-['“'] after:content-['”'] after:inline-block before:inline-block",children:l}),(0,r.jsxs)("p",{className:"flex items-center text-10 before:block before:w-4 before:h-4 before:mr-6 before:bg-black",children:[(0,r.jsx)("span",{children:s}),a&&(0,r.jsxs)("span",{className:"text-grey-dark",children:[" (",a,")"]})]})]}),(0,r.jsx)(o.SanityImage,{image:t,className:"lg-max:order-2 lg:order:1 pointer-events-none select-none w-40 h-52 object-cover",mobileWidth:40,desktopWidth:40})]})};var d=l(8353);let u=e=>{var t;let{className:l,selectedTab:a="image",video:n,videoProps:i={},image:c,imageProps:m={},imagePropsMobile:u,desktopOnly:x,desktopWidth:h,mobileWidth:b,width:f,height:g,ratioMobile:p,priority:w,fill:k}=e;if("video"===a&&(null==n?void 0:null===(t=n.srcs)||void 0===t?void 0:t.length)){let{poster:e,...t}=n;return(0,r.jsx)(d.VideoLoop,{posterDesktopWidth:h,posterMobileWidth:b,poster:e,ratio:f&&g&&f/g,fill:k,...t,...i,priority:w,desktopOnly:x,className:(0,s.Z)(l,i.className)})}return"image"===a&&c?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.SanityImage,{image:c,desktopWidth:h,mobileWidth:b,width:f,height:g,fill:k,...m,className:(0,s.Z)(l,m.className),priority:w,desktopOnly:x||!!p}),p&&(0,r.jsx)(o.SanityImage,{image:c,mobileWidth:b,width:f,height:f?f/p|0:g,fill:k,...u||m,className:(0,s.Z)(l,(u||m).className),priority:w,desktopOnly:x,mobileOnly:!0})]}):null};var x=l(6954);let h=e=>{let{slides:t,className:l}=e;return(0,r.jsx)("div",{className:(0,s.Z)("my-60 lg-max:-margin-mx-1",l),children:(0,r.jsx)(x.Slideshow,{className:"w-full overflow-clip",wrapperClassName:"gutter-gap-1",containerClassName:"w-full h-full",snapping:!0,withButtons:!0,controllerClassName:"margin-left-1 margin-right-1 lg:inset-x-20 !bottom-1/2 !top-auto justify-between !translate-y-0 !translate-x-auto !first:ml-40",controllerButtonClassName:"!text-black hover:!text-white",controllerButtonTheme:"light",controllerButtonVariant:"primary",children:t.map((e,l)=>{let{media:a,caption:n,_key:i}=e;return(0,r.jsxs)("article",{className:"w-screen lg:span-w-12 h-fit",children:[(0,r.jsx)(u,{...a,className:"w-screen lg:w-full lg-max:aspect-[375/252]",videoProps:{className:"[&_video]:h-full [&_video]:object-cover"},width:690,height:465,mobileWidth:375,ratioMobile:375/252,desktopWidth:690}),(0,r.jsxs)("div",{className:"flex items-center justify-between mt-10 lg-max:margin-mx-1",children:[(0,r.jsxs)("p",{className:(0,s.Z)("flex items-center before:block before:w-4 before:h-4 before:mr-6 before:bg-black before:rounded-full","text-grey-dark text-10 uppercase"),children:[(0,r.jsxs)("span",{className:"text-black mr-12 normal-case",children:["Fig ",l+1,"."]}),n]}),(0,r.jsxs)("span",{className:"text-10 text-black",children:["[",l+1,"/",t.length,"]"]})]})]},i)})})})};var b=l(7703);let f={normalStyle:"text-10 my-10 first:mt-0 last:mb-0 text-red",listStyle:"text-grey-dark text-10 mt-30",listBulletStyle:"list-disc uppercase [&_button]:text-black [&_li]:mb-2 [&>li]:gutter-ml-1 [&_li]:marker:text-black",listNumberStyle:(0,s.Z)("list-none [&_li]:marker:text-black uppercase mt-30 [&_strong]:font-normal [&_strong]:text-black",'[counter-reset:item] [&_li]:before:inline-block [&_li]:before:span-w-1-wide [&_li]:before:text-black [&_li]:before:[content:counters(item,".")"."] [&_li]:[counter-increment:item]'),listItemStyle:"mb-30 last:mb-0 lg:span-w-9",h2:"text-10 uppercase font-medium mt-40 mb-30 first:mt-0 last:mb-0",h3:"font-serif text-10 mt-40 mb-30 first:mt-0 last:mb-0",tableStyle:"align-left uppercase text-grey text-left",tableRowStyle:"text-9 text-grey-dark text-20 leading-tight","tableRowStyle-0":"!text-12 !text-black uppercase font-medium tracking-wide",tableCellStyle:"border border-grey-dark p-15 uppercase",imageStyle:"my-60"},g=e=>{let{noDom:t=!1,styles:l={},withHeadingAnchorLink:s}=e;return e=>{let{style:a="normal"}=e.node;if(t)return e.children;if(/^h\d/.test(a)){let t=(0,c.lV)(e.node.children[0].text);return(0,r.jsx)(a,{id:t,className:l[a],children:s?(0,r.jsx)("a",{href:`#${t}`,children:e.children}):e.children})}return"blockquote"===a?(0,r.jsx)("blockquote",{className:l.blockquote,children:e.children}):"normal"===a?(0,r.jsx)("p",{className:l.normal||l.normalStyle,children:e.children}):(0,r.jsx)("p",{className:l[a],children:e.children})}},p=e=>{let{noDom:t=!1,styles:l={},imageDesktopWidth:s,imageMobileWidth:a}=e;return e=>{let{value:n}=e;return t?n.asset._ref:(0,r.jsx)(o.SanityImage,{className:l.imageStyle,image:n,alt:n.alt,desktopWidth:s,mobileWidth:a})}},w=e=>{let{noDom:t=!1,styles:l={},imageDesktopWidth:s,imageMobileWidth:a}=e;return e=>{let{value:n}=e;return t?n.asset._ref:(0,r.jsx)(b.VideoPlayer,{className:l.imageStyle,title:n.title,urls:n.video.srcs,poster:n.video.poster,desktopWidth:s,mobileWidth:a})}},k=e=>{let{styles:t={}}=e;return e=>(0,r.jsx)("table",{className:(0,s.Z)(t.tableStyle),children:(0,r.jsx)("tbody",{children:e.value.rows.map((e,l)=>(0,r.jsx)("tr",{className:(0,s.Z)(t.tableRowStyle,t[`tableRowStyle-${l}`]),children:e.cells.map((e,a)=>(0,r.jsx)("td",{className:(0,s.Z)(t.tableCellStyle,t[`tableColumnStyle-${a}`],t[`tableCellStyle-${l}-${a}`]),children:e},`${l}-${a}`))},e._key))})})},j=e=>{let{styles:t}=e;return e=>{let{value:t}=e;return(0,r.jsx)(m,{...t})}},y=e=>{let{styles:t}=e;return e=>{let{value:t}=e;return(0,r.jsx)(h,{slides:t.slides})}},N=e=>{let{noDom:t=!1,styles:l={}}=e;return{bullet:e=>{let{children:a}=e;return t?a:(0,r.jsx)("ul",{className:(0,s.Z)(l.listStyle,l.listBulletStyle),children:a})},number:e=>{let{children:a}=e;return t?a:(0,r.jsx)("ol",{className:(0,s.Z)(l.listStyle,l.listNumberStyle),children:a})}}},v=e=>{let{noDom:t=!1,styles:l={}}=e;return{bullet:e=>{let{children:a}=e;return t?a:(0,r.jsx)("li",{className:(0,s.Z)(l.listItemStyle),children:a})},number:e=>{let{children:a}=e;return t?a:(0,r.jsx)("li",{className:(0,s.Z)(l.listItemStyle),children:a})}}},S=e=>{let{noDom:t=!1,styles:l={},withHeadingAnchorLink:s,imageDesktopWidth:a,imageMobileWidth:i}=e;return{block:g({noDom:t,styles:l,withHeadingAnchorLink:s}),list:N({noDom:t,styles:l}),listItem:v({noDom:t,styles:l}),types:{imageLocaleAlt:p({noDom:t,styles:l,imageDesktopWidth:a,imageMobileWidth:i}),table:k({noDom:t,styles:l}),blockquote:j({styles:l}),gallery:y({styles:l}),videoBlock:w({noDom:t,styles:l,imageDesktopWidth:a,imageMobileWidth:i})},marks:{em:e=>{let{children:s}=e;return t?s:(0,r.jsx)("em",{className:l.emClassName,children:s})},strong:e=>{let{children:s}=e;return t?s:(0,r.jsx)("strong",{className:l.strongClassName,children:s})},link:e=>{let{children:l,value:s}=e;return t?l:(0,r.jsx)(n.Button,{linkInput:s.href,variant:"classicUnderlined",children:l})}}}},Z=(0,i.forwardRef)((e,t)=>{let{as:l="div",blocks:s,noDom:n,styles:i,imageDesktopWidth:c=440,imageMobileWidth:o=390,noDefaultStyles:m,className:d,withHeadingAnchorLink:u=!1}=e;if(!s)return null;let x=S({noDom:n,styles:m?i:{...f,...i},withHeadingAnchorLink:u,imageDesktopWidth:c,imageMobileWidth:o});return(0,r.jsx)(l,{ref:t,className:d,children:(0,r.jsx)(a.YI,{value:s,components:x})})})},9302:function(e,t,l){"use strict";l.d(t,{lV:function(){return r},od:function(){return s}});let r=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-";return e=e.toString().normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().trim().replace(/[^a-z0-9 !\n]/g,"").replace(/^[0-9]+ ?/,"").replace(/\s+/g,t)},s=e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}},function(e){e.O(0,[425,487,447,631,954,703,561,195,744],function(){return e(e.s=4571)}),_N_E=e.O()}]);