"use strict";(self.webpackChunkmap_docs=self.webpackChunkmap_docs||[]).push([[8263],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,g=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(g,s(s({ref:t},c),{},{components:n})):r.createElement(g,s({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4393:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={custom_edit_url:"https://github.com/rnmapbox/maps/blob/main/src/components/Images.tsx"},s=void 0,i={unversionedId:"components/Images",id:"components/Images",title:"Images",description:"Images defines the images used in Symbol etc. layers.",source:"@site/docs/components/Images.md",sourceDirName:"components",slug:"/components/Images",permalink:"/docs/components/Images",draft:!1,editUrl:"https://github.com/rnmapbox/maps/blob/main/src/components/Images.tsx",tags:[],version:"current",frontMatter:{custom_edit_url:"https://github.com/rnmapbox/maps/blob/main/src/components/Images.tsx"},sidebar:"componentSidebar",previous:{title:"ImageSource",permalink:"/docs/components/ImageSource"},next:{title:"Light",permalink:"/docs/components/Light"}},p={},l=[{value:"props",id:"props",level:2},{value:"images",id:"images",level:3},{value:"nativeAssetImages",id:"nativeassetimages",level:3},{value:"onImageMissing",id:"onimagemissing",level:3},{value:"id",id:"id",level:3},{value:"children",id:"children",level:3}],c={toc:l},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Images } from '@rnmapbox/maps';\n\nImages\n\n")),(0,a.kt)("p",null,"Images defines the images used in Symbol etc. layers."),(0,a.kt)("h2",{id:"props"},"props"),(0,a.kt)("h3",{id:"images"},"images"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"type Images = {\n  [object Object]: union; /* FIX ME NO DESCRIPTION */\n}\n")),(0,a.kt)("p",null,"Specifies the external images in key-value pairs required for the shape source.\nKeys are names - see iconImage expressions, values can be either urls-s objects\nwith format {uri: 'http://...'}",(0,a.kt)("inlineCode",{parentName:"p"},"or"),"require('image.png')",(0,a.kt)("inlineCode",{parentName:"p"},"or"),"import 'image.png'`"),(0,a.kt)("h3",{id:"nativeassetimages"},"nativeAssetImages"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"Array\n")),(0,a.kt)("p",null,"If you have an asset under Image.xcassets on iOS and the drawables directory on android\nyou can specify an array of string names with assets as the key ",(0,a.kt)("inlineCode",{parentName:"p"},"['pin']"),".\nAdditionally object with keys sdf, and strechX, strechY is supported for ",(0,a.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/help/troubleshooting/using-recolorable-images-in-mapbox-maps/"},"SDF icons")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../examples/SymbolCircleLayer/ShapeSourceIcon"},"Shape Source Icons")),(0,a.kt)("h3",{id:"onimagemissing"},"onImageMissing"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"func\n")),(0,a.kt)("p",null,"Gets called when a Layer is trying to render an image whose key is not present in\nany of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Images")," component of the Map.\n",(0,a.kt)("em",{parentName:"p"},"signature:"),(0,a.kt)("inlineCode",{parentName:"p"},"(imageKey:string) =&gt; void")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../examples/SymbolCircleLayer/ShapeSourceIcon"},"Shape Source Icons")),(0,a.kt)("h3",{id:"id"},"id"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"string\n")),(0,a.kt)("p",null,"FIX ME NO DESCRIPTION"),(0,a.kt)("h3",{id:"children"},"children"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"ReactElement<T> | Array<TypedReactNode<T>> | never\n")),(0,a.kt)("p",null,"FIX ME NO DESCRIPTION"))}u.isMDXComponent=!0}}]);