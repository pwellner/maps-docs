"use strict";(self.webpackChunkmap_docs=self.webpackChunkmap_docs||[]).push([[1003],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(n),b=o,d=m["".concat(l,".").concat(b)]||m[b]||u[b]||a;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=b;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[m]="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},3221:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={title:"Globe Projection",tags:["MapView#projection"],custom_props:{example_rel_path:"V10/GlobeProjection.tsx"},custom_edit_url:"https://github.com/rnmapbox/maps/tree/master/example/src/examples/V10/GlobeProjection.tsx"},i=void 0,p={unversionedId:"examples/V10/GlobeProjection",id:"examples/V10/GlobeProjection",title:"Globe Projection",description:"Shows map with globe projection",source:"@site/docs/examples/V10/GlobeProjection.md",sourceDirName:"examples/V10",slug:"/examples/V10/GlobeProjection",permalink:"/docs/examples/V10/GlobeProjection",draft:!1,editUrl:"https://github.com/rnmapbox/maps/tree/master/example/src/examples/V10/GlobeProjection.tsx",tags:[{label:"MapView#projection",permalink:"/docs/tags/map-view-projection"}],version:"current",frontMatter:{title:"Globe Projection",tags:["MapView#projection"],custom_props:{example_rel_path:"V10/GlobeProjection.tsx"},custom_edit_url:"https://github.com/rnmapbox/maps/tree/master/example/src/examples/V10/GlobeProjection.tsx"},sidebar:"examplesSidebar",previous:{title:"Camera Animation",permalink:"/docs/examples/V10/CameraAnimation"},next:{title:"Map Handlers",permalink:"/docs/examples/V10/MapHandlers"}},l={},c=[],s={toc:c},m="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(m,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Shows map with globe projection"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import React, { memo, useState } from 'react';\nimport { Button } from 'react-native';\nimport {\n  MapView,\n  SkyLayer,\n  Logger,\n  Terrain,\n  RasterDemSource,\n  Atmosphere,\n  Camera,\n} from '@rnmapbox/maps';\n\nimport { ExampleWithMetadata } from '../common/ExampleMetadata'; // exclude-from-doc\n\nLogger.setLogLevel('verbose');\n\nconst GlobeProjection = () => {\n  const [projection, setProjection] = useState<'globe' | 'mercator'>('globe');\n\n  return (\n    <>\n      <Button\n        title={`Change projection to ${\n          projection === 'globe' ? 'mercator' : 'globe'\n        }`}\n        onPress={() =>\n          setProjection(projection === 'globe' ? 'mercator' : 'globe')\n        }\n      />\n      <MapView\n        style={{ flex: 1 }}\n        projection={projection}\n        styleURL={'mapbox://styles/mapbox-map-design/ckhqrf2tz0dt119ny6azh975y'}\n      >\n        <Camera\n          defaultSettings={{\n            centerCoordinate: [13, 59],\n            zoomLevel: 3,\n            heading: 220,\n            pitch: 40,\n          }}\n        />\n        <RasterDemSource\n          id=\"mapbox-dem\"\n          url=\"mapbox://mapbox.mapbox-terrain-dem-v1\"\n          tileSize={514}\n          maxZoomLevel={14}\n        >\n          <Atmosphere\n            style={{\n              color: 'rgb(186, 210, 235)',\n              highColor: 'rgb(36, 92, 223)',\n              horizonBlend: 0.02,\n              spaceColor: 'rgb(11, 11, 25)',\n              starIntensity: 0.6,\n            }}\n          />\n          <SkyLayer\n            id=\"sky-layer\"\n            style={{\n              skyType: 'atmosphere',\n              skyAtmosphereSun: [0.0, 0.0],\n              skyAtmosphereSunIntensity: 15.0,\n            }}\n          />\n          <Terrain style={{ exaggeration: 1.5 }} />\n        </RasterDemSource>\n      </MapView>\n    </>\n  );\n};\n\nexport default GlobeProjection;\n\n\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"GlobeProjection.png",src:n(5847).Z,width:"295",height:"640"}),"}"))}u.isMDXComponent=!0},5847:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/GlobeProjection-775905c77b439519ded2feaf08864a27.png"}}]);