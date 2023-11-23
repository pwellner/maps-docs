"use strict";(self.webpackChunkmap_docs=self.webpackChunkmap_docs||[]).push([[5302],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),i=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=i(n),u=a,f=c["".concat(p,".").concat(u)]||c[u]||y[u]||o;return n?r.createElement(f,s(s({ref:t},m),{},{components:n})):r.createElement(f,s({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,s[1]=l;for(var i=2;i<o;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},407:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>y,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var r=n(7462),a=(n(7294),n(3905));const o={title:"Style JSON",tags:["Style#json"],custom_props:{example_rel_path:"Map/StyleJson.js"},custom_edit_url:"https://github.com/rnmapbox/maps/tree/master/example/src/examples/Map/StyleJson.js"},s=void 0,l={unversionedId:"examples/Map/StyleJson",id:"examples/Map/StyleJson",title:"Style JSON",description:"Change style of a MapView on the fly.",source:"@site/docs/examples/Map/StyleJson.md",sourceDirName:"examples/Map",slug:"/examples/Map/StyleJson",permalink:"/docs/examples/Map/StyleJson",draft:!1,editUrl:"https://github.com/rnmapbox/maps/tree/master/example/src/examples/Map/StyleJson.js",tags:[{label:"Style#json",permalink:"/docs/tags/style-json"}],version:"current",frontMatter:{title:"Style JSON",tags:["Style#json"],custom_props:{example_rel_path:"Map/StyleJson.js"},custom_edit_url:"https://github.com/rnmapbox/maps/tree/master/example/src/examples/Map/StyleJson.js"},sidebar:"examplesSidebar",previous:{title:"Source Layer Visibility",permalink:"/docs/examples/Map/SourceLayerVisibility"},next:{title:"Two Map Views",permalink:"/docs/examples/Map/TwoByTwo"}},p={},i=[],m={toc:i},c="wrapper";function y(e){let{components:t,...o}=e;return(0,a.kt)(c,(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Change style of a MapView on the fly."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { Text, StyleSheet } from 'react-native';\nimport { MapView, Camera, Style, StyleURL } from '@rnmapbox/maps';\n\nimport StyleJsonExample from '../../assets/style-json-example.json';\nimport StyleJsonExample2 from '../../assets/style-json-example2.json';\nimport Bubble from '../common/Bubble';\n\nconst styles = StyleSheet.create({\n  map: {\n    flex: 1,\n  },\n});\n\nconst defaultCamera = {\n  centerCoordinate: [-78.54382, 40.446947],\n  zoomLevel: 3,\n  minZoomLevel: 3,\n};\n\nclass StyleJson extends React.Component {\n  state = {\n    showAltStyle: false,\n  };\n\n  onPress = () => {\n    this.setState({\n      showAltStyle: !this.state.showAltStyle,\n    });\n  };\n\n  render() {\n    return (\n      <>\n        <MapView styleURL={StyleURL.Light} style={styles.map}>\n          <Camera defaultSettings={defaultCamera} />\n          <Style\n            json={\n              this.state.showAltStyle ? StyleJsonExample2 : StyleJsonExample\n            }\n          />\n        </MapView>\n        <Bubble onPress={this.onPress}>\n          <Text>{this.state.showAltStyle ? 'Style 2' : 'Style 1'}</Text>\n        </Bubble>\n      </>\n    );\n  }\n}\n\nexport default StyleJson;\n\n\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"StyleJson.png",src:n(8126).Z,width:"295",height:"640"}),"}"))}y.isMDXComponent=!0},8126:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/StyleJson-d5bb0a1dadfa15818532e7da9a3173c1.png"}}]);