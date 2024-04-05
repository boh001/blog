"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[196],{2145:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>p,default:()=>i,frontMatter:()=>A,metadata:()=>s,toc:()=>a});var o=n(3274),r=n(9779);const A={slug:"how-to-get-changesets-to-use-turborepo-in-monorepo",authors:"sanghyeon",title:"How to get changesets to use turborepo in monorepo",description:"let you know how to get changesets to use turborepo in monorepo",tags:["turborepo","monorepo","pnpm"],image:"img/turborepo.jpeg"},p=void 0,s={permalink:"/how-to-get-changesets-to-use-turborepo-in-monorepo",source:"@site/blog/2024-04-05.md",title:"How to get changesets to use turborepo in monorepo",description:"let you know how to get changesets to use turborepo in monorepo",date:"2024-04-05T00:00:00.000Z",formattedDate:"April 5, 2024",tags:[{label:"turborepo",permalink:"/tags/turborepo"},{label:"monorepo",permalink:"/tags/monorepo"},{label:"pnpm",permalink:"/tags/pnpm"}],readingTime:2.35,hasTruncateMarker:!0,authors:[{name:"Sanghyeon Kim",title:"Software Engineer",url:"https://github.com/boh001",imageURL:"https://github.com/boh001.png",key:"sanghyeon"}],frontMatter:{slug:"how-to-get-changesets-to-use-turborepo-in-monorepo",authors:"sanghyeon",title:"How to get changesets to use turborepo in monorepo",description:"let you know how to get changesets to use turborepo in monorepo",tags:["turborepo","monorepo","pnpm"],image:"img/turborepo.jpeg"},unlisted:!1,nextItem:{title:'How to fix error "Prettier resolveConfig.sync is not a function"',permalink:"/how-to-fix-error-prettier-resolveConfig-sync"}},u={authorsImageUrls:[void 0]},a=[{value:"TL;DR",id:"tldr",level:2}];function l(t){const e={code:"code",h2:"h2",img:"img",p:"p",...(0,r.R)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"Turborepo",src:n(9856).A+"",width:"310",height:"163"})}),"\n",(0,o.jsx)(e.h2,{id:"tldr",children:"TL;DR"}),"\n",(0,o.jsxs)(e.p,{children:["To get changesets in monorepo, use ",(0,o.jsx)(e.code,{children:"turbo filter"})," command."]})]})}function i(t={}){const{wrapper:e}={...(0,r.R)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(l,{...t})}):l(t)}},9856:(t,e,n)=>{n.d(e,{A:()=>o});const o="data:image/jpeg;base64,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"},9779:(t,e,n)=>{n.d(e,{R:()=>p,x:()=>s});var o=n(9474);const r={},A=o.createContext(r);function p(t){const e=o.useContext(A);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function s(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:p(t.components),o.createElement(A.Provider,{value:e},t.children)}}}]);