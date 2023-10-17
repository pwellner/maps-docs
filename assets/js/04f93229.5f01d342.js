"use strict";(self.webpackChunkmap_docs=self.webpackChunkmap_docs||[]).push([[4847],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,l(l({ref:t},i),{},{components:n})):r.createElement(f,l({ref:t},i))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2172:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={custom_edit_url:"https://github.com/rnmapbox/maps/blob/main/src/components/Image.tsx"},l=void 0,s={unversionedId:"components/Image",id:"components/Image",title:"Image",description:"props",source:"@site/docs/components/Image.md",sourceDirName:"components",slug:"/components/Image",permalink:"/docs/components/Image",draft:!1,editUrl:"https://github.com/rnmapbox/maps/blob/main/src/components/Image.tsx",tags:[],version:"current",frontMatter:{custom_edit_url:"https://github.com/rnmapbox/maps/blob/main/src/components/Image.tsx"},sidebar:"componentSidebar",previous:{title:"HeatmapLayer",permalink:"/docs/components/HeatmapLayer"},next:{title:"ImageSource",permalink:"/docs/components/ImageSource"}},c={},p=[{value:"props",id:"props",level:2},{value:"name",id:"name",level:3},{value:"sdf",id:"sdf",level:3},{value:"stretchX",id:"stretchx",level:3},{value:"stretchY",id:"stretchy",level:3},{value:"content",id:"content",level:3},{value:"scale",id:"scale",level:3},{value:"children",id:"children",level:3}],i={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Image } from '@rnmapbox/maps';\n\nImage\n\n")),(0,a.kt)("h2",{id:"props"},"props"),(0,a.kt)("h3",{id:"name"},"name"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"string\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"required"),"\nID of the image"),(0,a.kt)("h3",{id:"sdf"},"sdf"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"boolean\n")),(0,a.kt)("p",null,"Make image an sdf optional - see ",(0,a.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/help/troubleshooting/using-recolorable-images-in-mapbox-maps/"},"SDF icons")),(0,a.kt)("h3",{id:"stretchx"},"stretchX"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"Array\n")),(0,a.kt)("p",null,"An array of two-element arrays, consisting of two numbers that represent, the from position and the to position of areas that can be stretched horizontally."),(0,a.kt)("h3",{id:"stretchy"},"stretchY"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"Array\n")),(0,a.kt)("p",null,"An array of two-element arrays, consisting of two numbers that represent, the from position and the to position of areas that can be stretched vertically."),(0,a.kt)("h3",{id:"content"},"content"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"tuple\n")),(0,a.kt)("p",null,"An array of four numbers, with the first two specifying the left, top\ncorner, and the last two specifying the right, bottom corner. If present, and if the\nicon uses icon-text-fit, the symbol's text will be fit inside the content box."),(0,a.kt)("h3",{id:"scale"},"scale"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"number\n")),(0,a.kt)("p",null,"Scale factor for the image."),(0,a.kt)("h3",{id:"children"},"children"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"ReactElement\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"required"),"\nSingle react native view rendering the image"))}u.isMDXComponent=!0}}]);