"use strict";(self.webpackChunkmap_docs=self.webpackChunkmap_docs||[]).push([[5364],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=i(n),u=o,h=m["".concat(s,".").concat(u)]||m[u]||y[u]||a;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[m]="string"==typeof e?e:o,l[1]=p;for(var i=2;i<a;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7014:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>y,frontMatter:()=>a,metadata:()=>p,toc:()=>i});var r=n(7462),o=(n(7294),n(3905));const a={title:"Choropleth Layer By Zoom Level",tags:[],custom_props:{example_rel_path:"FillRasterLayer/ChoroplethLayerByZoomLevel.js"},custom_edit_url:"https://github.com/rnmapbox/maps/tree/master/example/src/examples/FillRasterLayer/ChoroplethLayerByZoomLevel.js"},l=void 0,p={unversionedId:"examples/FillRasterLayer/ChoroplethLayerByZoomLevel",id:"examples/FillRasterLayer/ChoroplethLayerByZoomLevel",title:"Choropleth Layer By Zoom Level",description:"ChoroplethLayerByZoomLevel.png}",source:"@site/docs/examples/FillRasterLayer/ChoroplethLayerByZoomLevel.md",sourceDirName:"examples/FillRasterLayer",slug:"/examples/FillRasterLayer/ChoroplethLayerByZoomLevel",permalink:"/docs/examples/FillRasterLayer/ChoroplethLayerByZoomLevel",draft:!1,editUrl:"https://github.com/rnmapbox/maps/tree/master/example/src/examples/FillRasterLayer/ChoroplethLayerByZoomLevel.js",tags:[],version:"current",frontMatter:{title:"Choropleth Layer By Zoom Level",tags:[],custom_props:{example_rel_path:"FillRasterLayer/ChoroplethLayerByZoomLevel.js"},custom_edit_url:"https://github.com/rnmapbox/maps/tree/master/example/src/examples/FillRasterLayer/ChoroplethLayerByZoomLevel.js"},sidebar:"examplesSidebar",previous:{title:"Show Point Annotations",permalink:"/docs/examples/Annotations/ShowPointAnnotation"},next:{title:"Custom Vector Source",permalink:"/docs/examples/FillRasterLayer/CustomVectorSource"}},s={},i=[],c={toc:i},m="wrapper";function y(e){let{components:t,...a}=e;return(0,o.kt)(m,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Mapbox from '@rnmapbox/maps';\n\nimport sheet from '../../styles/sheet';\n\nconst styles = {\n  statePopulation: {\n    fillColor: [\n      'interpolate',\n      ['linear'],\n      ['get', 'population'],\n      0,\n      '#F2F12D',\n      500000,\n      '#EED322',\n      750000,\n      '#E6B71E',\n      1000000,\n      '#DA9C20',\n      2500000,\n      '#CA8323',\n      5000000,\n      '#B86B25',\n      7500000,\n      '#A25626',\n      10000000,\n      '#8B4225',\n      25000000,\n      '#723122',\n    ],\n\n    fillOpacity: 0.75,\n  },\n\n  countyPopulation: {\n    fillColor: [\n      'interpolate',\n      ['linear'],\n      ['get', 'population'],\n      0,\n      '#F2F12D',\n      100,\n      '#EED322',\n      1000,\n      '#E6B71E',\n      5000,\n      '#DA9C20',\n      10000,\n      '#CA8323',\n      50000,\n      '#B86B25',\n      100000,\n      '#A25626',\n      500000,\n      '#8B4225',\n      1000000,\n      '#723122',\n    ],\n\n    fillOpacity: 0.75,\n  },\n};\n\nclass ChoroplethLayerByZoomLevel extends React.PureComponent {\n  render() {\n    return (\n      <Mapbox.MapView\n        styleURL={Mapbox.StyleURL.Light}\n        style={sheet.matchParent}\n      >\n        <Mapbox.Camera\n          centerCoordinate={[-98, 38.88]}\n          zoomLevel={3}\n          minZoomLevel={3}\n        />\n\n        <Mapbox.VectorSource id=\"population\" url={'mapbox://mapbox.660ui7x6'}>\n          <Mapbox.FillLayer\n            id=\"state-population\"\n            sourceLayerID=\"state_county_population_2014_cen\"\n            maxZoomLevel={4}\n            filter={['==', 'isState', true]}\n            style={styles.statePopulation}\n          />\n\n          <Mapbox.FillLayer\n            id=\"county-population\"\n            sourceLayerID=\"state_county_population_2014_cen\"\n            minZoomLevel={4}\n            filter={['==', 'isCounty', true]}\n            style={styles.countyPopulation}\n          />\n        </Mapbox.VectorSource>\n      </Mapbox.MapView>\n    );\n  }\n}\n\nexport default ChoroplethLayerByZoomLevel;\n\n\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ChoroplethLayerByZoomLevel.png",src:n(6272).Z,width:"295",height:"640"}),"}"))}y.isMDXComponent=!0},6272:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ChoroplethLayerByZoomLevel-2a3bfcbac0c21adc68b5864c7cc7afe2.png"}}]);