"use strict";(self.webpackChunkmap_docs=self.webpackChunkmap_docs||[]).push([[6216],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>b});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=o.createContext({}),c=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=c(e.components);return o.createElement(p.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(t),d=r,b=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return t?o.createElement(b,i(i({ref:n},l),{},{components:t})):o.createElement(b,i({ref:n},l))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2398:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=t(7462),r=(t(7294),t(3905));const a={title:"Marker View",tags:["PointAnnotation","MarkerView"],custom_props:{example_rel_path:"Annotations/MarkerView.js"},custom_edit_url:"https://github.com/rnmapbox/maps/tree/master/example/src/examples/Annotations/MarkerView.js"},i=void 0,s={unversionedId:"examples/Annotations/MarkerView",id:"examples/Annotations/MarkerView",title:"Marker View",description:"Shows marker view and poitn annotations",source:"@site/docs/examples/Annotations/MarkerView.md",sourceDirName:"examples/Annotations",slug:"/examples/Annotations/MarkerView",permalink:"/docs/examples/Annotations/MarkerView",draft:!1,editUrl:"https://github.com/rnmapbox/maps/tree/master/example/src/examples/Annotations/MarkerView.js",tags:[{label:"PointAnnotation",permalink:"/docs/tags/point-annotation"},{label:"MarkerView",permalink:"/docs/tags/marker-view"}],version:"current",frontMatter:{title:"Marker View",tags:["PointAnnotation","MarkerView"],custom_props:{example_rel_path:"Annotations/MarkerView.js"},custom_edit_url:"https://github.com/rnmapbox/maps/tree/master/example/src/examples/Annotations/MarkerView.js"},sidebar:"examplesSidebar",previous:{title:"Heatmap",permalink:"/docs/examples/Annotations/Heatmap"},next:{title:"Point Annotation Anchors",permalink:"/docs/examples/Annotations/PointAnnotationAnchors"}},p={},c=[],l={toc:c},m="wrapper";function u(e){let{components:n,...a}=e;return(0,r.kt)(m,(0,o.Z)({},l,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Shows marker view and poitn annotations"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { View, Text, TouchableOpacity } from 'react-native';\nimport Mapbox from '@rnmapbox/maps';\n\nimport Bubble from '../common/Bubble';\n\nconst styles = {\n  touchableContainer: { borderColor: 'black', borderWidth: 1.0, width: 60 },\n  touchable: {\n    backgroundColor: 'blue',\n    width: 40,\n    height: 40,\n    borderRadius: 20,\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n  touchableText: {\n    color: 'white',\n    fontWeight: 'bold',\n  },\n  matchParent: { flex: 1 },\n};\n\nconst AnnotationContent = ({ title }) => (\n  <View style={styles.touchableContainer}>\n    <Text>{title}</Text>\n    <TouchableOpacity style={styles.touchable}>\n      <Text style={styles.touchableText}>Btn</Text>\n    </TouchableOpacity>\n  </View>\n);\n\nclass ShowMarkerView extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      backgroundColor: 'blue',\n      coordinates: [\n        [-73.99155, 40.73581],\n        [-73.99155, 40.73681],\n      ],\n    };\n  }\n\n  onPress(e) {\n    this.setState({\n      coordinates: [...this.state.coordinates, e.geometry.coordinates],\n    });\n  }\n\n  render() {\n    return (\n      <>\n        <Mapbox.MapView\n          ref={(c) => (this._map = c)}\n          onPress={(e) => this.onPress(e)}\n          onDidFinishLoadingMap={this.onDidFinishLoadingMap}\n          style={styles.matchParent}\n        >\n          <Mapbox.Camera\n            defaultSettings={{\n              zoomLevel: 16,\n              centerCoordinate: this.state.coordinates[0],\n            }}\n          />\n\n          <Mapbox.PointAnnotation\n            coordinate={this.state.coordinates[1]}\n            id=\"pt-ann\"\n          >\n            <AnnotationContent title={'this is a point annotation'} />\n          </Mapbox.PointAnnotation>\n\n          <Mapbox.MarkerView coordinate={this.state.coordinates[0]}>\n            <AnnotationContent title={'this is a marker view'} />\n          </Mapbox.MarkerView>\n\n          {this.state.coordinates.slice(2).map((coordinate, index) => (\n            <Mapbox.PointAnnotation\n              coordinate={coordinate}\n              id={`pt-ann-${index}`}\n              key={`pt-ann-${index}`}\n            >\n              <AnnotationContent title={'this is a point annotation'} />\n            </Mapbox.PointAnnotation>\n          ))}\n        </Mapbox.MapView>\n\n        <Bubble>\n          <Text>Click to add a point annotation</Text>\n        </Bubble>\n      </>\n    );\n  }\n}\n\nexport default ShowMarkerView;\n\n\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"MarkerView.png",src:t(7971).Z,width:"295",height:"640"}),"}"))}u.isMDXComponent=!0},7971:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/MarkerView-63ea50f9a8f7225fbb4ca2f317ac1c9f.png"}}]);