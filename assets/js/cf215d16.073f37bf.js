"use strict";(self.webpackChunkmap_docs=self.webpackChunkmap_docs||[]).push([[3577],{3905:(e,r,t)=>{t.d(r,{Zo:()=>i,kt:()=>f});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=a.createContext({}),p=function(e){var r=a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},i=function(e){var r=p(e.components);return a.createElement(c.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},y=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=p(t),y=n,f=u["".concat(c,".").concat(y)]||u[y]||m[y]||o;return t?a.createElement(f,s(s({ref:r},i),{},{components:t})):a.createElement(f,s({ref:r},i))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,s=new Array(o);s[0]=y;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[u]="string"==typeof e?e:n,s[1]=l;for(var p=2;p<o;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},6363:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=t(7462),n=(t(7294),t(3905));const o={title:"Raster Source",tags:[],custom_props:{example_rel_path:"FillRasterLayer/RasterSource.js"},custom_edit_url:"https://github.com/rnmapbox/maps/tree/master/example/src/examples/FillRasterLayer/RasterSource.js"},s=void 0,l={unversionedId:"examples/FillRasterLayer/RasterSource",id:"examples/FillRasterLayer/RasterSource",title:"Raster Source",description:"RasterSource.png}",source:"@site/docs/examples/FillRasterLayer/RasterSource.md",sourceDirName:"examples/FillRasterLayer",slug:"/examples/FillRasterLayer/RasterSource",permalink:"/docs/examples/FillRasterLayer/RasterSource",draft:!1,editUrl:"https://github.com/rnmapbox/maps/tree/master/example/src/examples/FillRasterLayer/RasterSource.js",tags:[],version:"current",frontMatter:{title:"Raster Source",tags:[],custom_props:{example_rel_path:"FillRasterLayer/RasterSource.js"},custom_edit_url:"https://github.com/rnmapbox/maps/tree/master/example/src/examples/FillRasterLayer/RasterSource.js"},sidebar:"examplesSidebar",previous:{title:"Query Features Bounding Box",permalink:"/docs/examples/FillRasterLayer/QueryWithRect"},next:{title:"Watercolor Raster Tiles",permalink:"/docs/examples/FillRasterLayer/WatercolorRasterTiles"}},c={},p=[],i={toc:p},u="wrapper";function m(e){let{components:r,...o}=e;return(0,n.kt)(u,(0,a.Z)({},i,o,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport {\n  Images,\n  MapView,\n  RasterLayer,\n  RasterSource,\n  Camera,\n} from '@rnmapbox/maps';\n\nconst styles = {\n  matchParent: { flex: 1 },\n};\n\nexport default function RasterSourceExample() {\n  return (\n    <MapView style={styles.matchParent}>\n      <Camera\n        defaultSettings={{\n          centerCoordinate: [-74.00597, 40.71427],\n          zoomLevel: 14,\n        }}\n      />\n      <RasterSource\n        id=\"stamen-watercolor\"\n        titleSize={256}\n        tileUrlTemplates={['https://tile.openstreetmap.org/{z}/{x}/{y}.png']}\n      />\n      <RasterLayer\n        id=\"stamen-watercolor-layer\"\n        sourceID=\"stamen-watercolor\"\n        style={{ rasterOpacity: 0.85 }}\n      />\n    </MapView>\n  );\n}\n\n\n")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"RasterSource.png",src:t(1343).Z,width:"295",height:"640"}),"}"))}m.isMDXComponent=!0},1343:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/RasterSource-e13705c1b5a08dcbfbb2d6986d277457.png"}}]);