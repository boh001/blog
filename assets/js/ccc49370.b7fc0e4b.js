"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[249],{500:(e,n,t)=>{t.r(n),t.d(n,{default:()=>S});var i=t(9474),a=t(8923),s=t(8107),o=t(2189),l=t(9861),r=t(8208),c=t(4793),d=t(82),u=t(5829),m=t(3274);function g(e){const{nextItem:n,prevItem:t}=e;return(0,m.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,d.T)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[t&&(0,m.jsx)(u.A,{...t,subLabel:(0,m.jsx)(d.A,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer Post"})}),n&&(0,m.jsx)(u.A,{...n,subLabel:(0,m.jsx)(d.A,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older Post"}),isNext:!0})]})}function h(){const{assets:e,metadata:n}=(0,l.e)(),{title:t,description:i,date:a,tags:o,authors:r,frontMatter:c}=n,{keywords:d}=c,u=e.image??c.image;return(0,m.jsxs)(s.be,{title:t,description:i,keywords:d,image:u,children:[(0,m.jsx)("meta",{property:"og:type",content:"article"}),(0,m.jsx)("meta",{property:"article:published_time",content:a}),r.some((e=>e.url))&&(0,m.jsx)("meta",{property:"article:author",content:r.map((e=>e.url)).filter(Boolean).join(",")}),o.length>0&&(0,m.jsx)("meta",{property:"article:tag",content:o.map((e=>e.label)).join(",")})]})}var f=t(8012);function v(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const i=t.slice(2,e.level);e.parentIndex=Math.max(...i),t[e.level]=n}));const i=[];return n.forEach((e=>{const{parentIndex:t,...a}=e;t>=0?n[t].children.push(a):i.push(a)})),i}function p(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:i}=e;return n.flatMap((e=>{const n=p({toc:e.children,minHeadingLevel:t,maxHeadingLevel:i});return function(e){return e.level>=t&&e.level<=i}(e)?[{...e,children:n}]:n}))}function x(e){const n=e.getBoundingClientRect();return n.top===n.bottom?x(e.parentNode):n}function b(e,n){let{anchorTopOffset:t}=n;const i=e.find((e=>x(e).top>=t));if(i){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(x(i))?i:e[e.indexOf(i)-1]??null}return e[e.length-1]??null}function j(){const e=(0,i.useRef)(0),{navbar:{hideOnScroll:n}}=(0,f.p)();return(0,i.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function L(e){const n=(0,i.useRef)(void 0),t=j();(0,i.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:i,linkActiveClassName:a,minHeadingLevel:s,maxHeadingLevel:o}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(i),l=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const i=[];for(let a=n;a<=t;a+=1)i.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(i.join()))}({minHeadingLevel:s,maxHeadingLevel:o}),r=b(l,{anchorTopOffset:t.current}),c=e.find((e=>r&&r.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(a),e.classList.add(a),n.current=e):e.classList.remove(a)}(e,e===c)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,t])}var C=t(9558);function H(e){let{toc:n,className:t,linkClassName:i,isChild:a}=e;return n.length?(0,m.jsx)("ul",{className:a?void 0:t,children:n.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(C.A,{to:`#${e.id}`,className:i??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(H,{isChild:!0,toc:e.children,className:t,linkClassName:i})]},e.id)))}):null}const N=i.memo(H);function A(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:a="table-of-contents__link",linkActiveClassName:s,minHeadingLevel:o,maxHeadingLevel:l,...r}=e;const c=(0,f.p)(),d=o??c.tableOfContents.minHeadingLevel,u=l??c.tableOfContents.maxHeadingLevel,g=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return(0,i.useMemo)((()=>p({toc:v(n),minHeadingLevel:t,maxHeadingLevel:a})),[n,t,a])}({toc:n,minHeadingLevel:d,maxHeadingLevel:u});return L((0,i.useMemo)((()=>{if(a&&s)return{linkClassName:a,linkActiveClassName:s,minHeadingLevel:d,maxHeadingLevel:u}}),[a,s,d,u])),(0,m.jsx)(N,{toc:g,className:t,linkClassName:a,...r})}const _={tableOfContents:"tableOfContents_Bfcv",docItemContainer:"docItemContainer_Tedc"},k="table-of-contents__link toc-highlight",y="table-of-contents__link--active";function I(e){let{className:n,...t}=e;return(0,m.jsx)("div",{className:(0,a.A)(_.tableOfContents,"thin-scrollbar",n),children:(0,m.jsx)(A,{...t,linkClassName:k,linkActiveClassName:y})})}var w=t(6748);function O(){return(0,m.jsx)(d.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function T(){return(0,m.jsx)(d.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function E(){return(0,m.jsx)(w.A,{children:(0,m.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var P=t(6850);function B(e){let{className:n}=e;return(0,m.jsx)(P.A,{type:"caution",title:(0,m.jsx)(O,{}),className:(0,a.A)(n,o.G.common.unlistedBanner),children:(0,m.jsx)(T,{})})}function M(e){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(E,{}),(0,m.jsx)(B,{...e})]})}function R(e){let{sidebar:n,children:t}=e;const{metadata:i,toc:a}=(0,l.e)(),{nextItem:s,prevItem:o,frontMatter:d,unlisted:u}=i,{hide_table_of_contents:h,toc_min_heading_level:f,toc_max_heading_level:v}=d;return(0,m.jsxs)(r.A,{sidebar:n,toc:!h&&a.length>0?(0,m.jsx)(I,{toc:a,minHeadingLevel:f,maxHeadingLevel:v}):void 0,children:[u&&(0,m.jsx)(M,{}),(0,m.jsx)(c.A,{children:t}),(s||o)&&(0,m.jsx)(g,{nextItem:s,prevItem:o})]})}function S(e){const n=e.content;return(0,m.jsx)(l.i,{content:e.content,isBlogPostPage:!0,children:(0,m.jsxs)(s.e3,{className:(0,a.A)(o.G.wrapper.blogPages,o.G.page.blogPostPage),children:[(0,m.jsx)(h,{}),(0,m.jsx)(R,{sidebar:e.sidebar,children:(0,m.jsx)(n,{})})]})})}}}]);