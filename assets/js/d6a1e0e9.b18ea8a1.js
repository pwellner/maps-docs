"use strict";(self.webpackChunkmap_docs=self.webpackChunkmap_docs||[]).push([[5392],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),i=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=i(r),d=o,g=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(g,c(c({ref:t},p),{},{components:r})):n.createElement(g,c({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,c[1]=s;for(var i=2;i<a;i++)c[i]=r[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7179:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>i});var n=r(7462),o=(r(7294),r(3905));const a={custom_edit_url:"https://github.com/rnmapbox/maps/blob/main/src/components/ImageSource.tsx"},c=void 0,s={unversionedId:"components/ImageSource",id:"components/ImageSource",title:"ImageSource",description:"ImageSource is a content source that is used for a georeferenced raster image to be shown on the map.",source:"@site/docs/components/ImageSource.md",sourceDirName:"components",slug:"/components/ImageSource",permalink:"/docs/components/ImageSource",draft:!1,editUrl:"https://github.com/rnmapbox/maps/blob/main/src/components/ImageSource.tsx",tags:[],version:"current",frontMatter:{custom_edit_url:"https://github.com/rnmapbox/maps/blob/main/src/components/ImageSource.tsx"},sidebar:"componentSidebar",previous:{title:"Image",permalink:"/docs/components/Image"},next:{title:"Images",permalink:"/docs/components/Images"}},l={},i=[{value:"props",id:"props",level:2},{value:"id",id:"id",level:3},{value:"existing",id:"existing",level:3},{value:"url",id:"url",level:3},{value:"coordinates",id:"coordinates",level:3},{value:"children",id:"children",level:3}],p={toc:i},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { ImageSource } from '@rnmapbox/maps';\n\nImageSource\n\n")),(0,o.kt)("p",null,"ImageSource is a content source that is used for a georeferenced raster image to be shown on the map.\nThe georeferenced image scales and rotates as the user zooms and rotates the map"),(0,o.kt)("h2",{id:"props"},"props"),(0,o.kt)("h3",{id:"id"},"id"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"string\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"required"),"\nA string that uniquely identifies the source."),(0,o.kt)("h3",{id:"existing"},"existing"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"boolean\n")),(0,o.kt)("p",null,"The id refers to en existing source in the style. Does not create a new source."),(0,o.kt)("h3",{id:"url"},"url"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"number | string\n")),(0,o.kt)("p",null,"An HTTP(S) URL, absolute file URL, or local file URL to the source image.\nGifs are currently not supported."),(0,o.kt)("h3",{id:"coordinates"},"coordinates"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"tuple\n")),(0,o.kt)("p",null,"The top left, top right, bottom right, and bottom left coordinates for the image."),(0,o.kt)("h3",{id:"children"},"children"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"React.ReactElement | React.ReactElement[]\n")),(0,o.kt)("p",null,"FIX ME NO DESCRIPTION"))}m.isMDXComponent=!0}}]);