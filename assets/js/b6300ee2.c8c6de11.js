"use strict";(self.webpackChunkmap_docs=self.webpackChunkmap_docs||[]).push([[7779],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>g});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),p=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),m=o,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return r?t.createElement(g,i(i({ref:n},u),{},{components:r})):t.createElement(g,i({ref:n},u))}));function g(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4762:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var t=r(7462),o=(r(7294),r(3905));const a={title:"Indoor Building Map",tags:[],custom_props:{example_rel_path:"FillRasterLayer/IndoorBuilding.js"},custom_edit_url:"https://github.com/rnmapbox/maps/tree/master/example/src/examples/FillRasterLayer/IndoorBuilding.js"},i=void 0,l={unversionedId:"examples/FillRasterLayer/IndoorBuilding",id:"examples/FillRasterLayer/IndoorBuilding",title:"Indoor Building Map",description:"IndoorBuilding.png}",source:"@site/docs/examples/FillRasterLayer/IndoorBuilding.md",sourceDirName:"examples/FillRasterLayer",slug:"/examples/FillRasterLayer/IndoorBuilding",permalink:"/docs/examples/FillRasterLayer/IndoorBuilding",draft:!1,editUrl:"https://github.com/rnmapbox/maps/tree/master/example/src/examples/FillRasterLayer/IndoorBuilding.js",tags:[],version:"current",frontMatter:{title:"Indoor Building Map",tags:[],custom_props:{example_rel_path:"FillRasterLayer/IndoorBuilding.js"},custom_edit_url:"https://github.com/rnmapbox/maps/tree/master/example/src/examples/FillRasterLayer/IndoorBuilding.js"},sidebar:"examplesSidebar",previous:{title:"Image Overlay",permalink:"/docs/examples/FillRasterLayer/ImageOverlay"},next:{title:"Query Feature Point",permalink:"/docs/examples/FillRasterLayer/QueryAtPoint"}},s={},p=[],u={toc:p},c="wrapper";function d(e){let{components:n,...a}=e;return(0,o.kt)(c,(0,t.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { View, StyleSheet } from 'react-native';\nimport Mapbox from '@rnmapbox/maps';\nimport { Slider } from '@rneui/base';\n\nimport sheet from '../../styles/sheet';\nimport colors from '../../styles/colors';\nimport indoorMapGeoJSON from '../../assets/indoor_3d_map.json';\n\nconst styles = StyleSheet.create({\n  slider: {\n    alignItems: 'stretch',\n    flex: 1,\n    justifyContent: 'center',\n    maxHeight: 60,\n    paddingHorizontal: 24,\n  },\n});\n\nconst layerStyles = {\n  building: {\n    fillExtrusionOpacity: 0.5,\n    fillExtrusionHeight: ['get', 'height'],\n    fillExtrusionBase: ['get', 'base_height'],\n    fillExtrusionColor: ['get', 'color'],\n    // fillExtrusionColorTransition: {duration: 2000, delay: 0},\n  },\n};\n\nclass IndoorBuilding extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      sliderValue: -80,\n    };\n\n    this.onSliderChange = this.onSliderChange.bind(this);\n  }\n\n  onSliderChange(value) {\n    this.setState({ sliderValue: value });\n  }\n\n  render() {\n    return (\n      <>\n        <Mapbox.MapView\n          ref={(ref) => (this.map = ref)}\n          style={sheet.matchParent}\n        >\n          <Mapbox.Camera\n            zoomLevel={16}\n            pitch={40}\n            heading={20}\n            centerCoordinate={[-87.61694, 41.86625]}\n          />\n\n          <Mapbox.Light style={{ position: [5, 90, this.state.sliderValue] }} />\n\n          <Mapbox.ShapeSource\n            id=\"indoorBuildingSource\"\n            shape={indoorMapGeoJSON}\n          >\n            <Mapbox.FillExtrusionLayer\n              id=\"building3d\"\n              style={layerStyles.building}\n            />\n          </Mapbox.ShapeSource>\n        </Mapbox.MapView>\n\n        <View style={styles.slider}>\n          <Slider\n            value={this.state.sliderValue}\n            onValueChange={this.onSliderChange}\n            thumbTintColor={colors.primary.blue}\n            minimumValue={-180}\n            maximumValue={180}\n            thumbTouchSize={{ width: 44, height: 44 }}\n            maximumTrackTintColor={colors.secondary.purpleLight}\n            minimumTrackTintColor={colors.secondary.purpleDark}\n          />\n        </View>\n      </>\n    );\n  }\n}\n\nexport default IndoorBuilding;\n\n\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"IndoorBuilding.png",src:r(8194).Z,width:"295",height:"640"}),"}"))}d.isMDXComponent=!0},8194:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/IndoorBuilding-593ab28a04d42928b53d76f1733fb5d8.png"}}]);