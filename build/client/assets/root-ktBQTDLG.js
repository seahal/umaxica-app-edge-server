import{r as n,j as e}from"./jsx-runtime-56DGgGmo.js";import{a as x,b as p,_ as y,M as S,L as j,S as f}from"./components-BVODvgJn.js";import{a as w,b as g,O as M}from"./index-B4IxLV5s.js";/**
 * @remix-run/react v2.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let a="positions";function k({getKey:s,...l}){let{isSpaMode:c}=x(),o=w(),u=g();p({getKey:s,storageKey:a});let d=n.useMemo(()=>{if(!s)return null;let t=s(o,u);return t!==o.key?t:null},[]);if(c)return null;let m=((t,h)=>{if(!window.history.state||!window.history.state.key){let r=Math.random().toString(32).slice(2);window.history.replaceState({key:r},"")}try{let i=JSON.parse(sessionStorage.getItem(t)||"{}")[h||window.history.state.key];typeof i=="number"&&window.scrollTo(0,i)}catch(r){console.error(r),sessionStorage.removeItem(t)}}).toString();return n.createElement("script",y({},l,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${m})(${JSON.stringify(a)}, ${JSON.stringify(d)})`}}))}function b({children:s}){return e.jsxs("html",{lang:"en",children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.jsx(S,{}),e.jsx(j,{})]}),e.jsxs("body",{children:[e.jsx("h1",{children:"Remix and Rails Project"}),e.jsx("hr",{}),e.jsx(M,{}),e.jsx(k,{}),e.jsx(f,{})]})]})}export{b as Layout};
