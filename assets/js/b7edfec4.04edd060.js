"use strict";(self.webpackChunkmap_docs=self.webpackChunkmap_docs||[]).push([[4131],{3905:(e,t,l)=>{l.d(t,{Zo:()=>u,kt:()=>c});var i=l(7294);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,i)}return l}function r(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function o(e,t){if(null==e)return{};var l,i,n=function(e,t){if(null==e)return{};var l,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)l=a[i],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)l=a[i],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var s=i.createContext({}),p=function(e){var t=i.useContext(s),l=t;return e&&(l="function"==typeof e?e(t):r(r({},t),e)),l},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var l=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(l),m=n,c=d["".concat(s,".").concat(m)]||d[m]||k[m]||a;return l?i.createElement(c,r(r({ref:t},u),{},{components:l})):i.createElement(c,r({ref:t},u))}));function c(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=l.length,r=new Array(a);r[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:n,r[1]=o;for(var p=2;p<a;p++)r[p]=l[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,l)}m.displayName="MDXCreateElement"},4073:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>k,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var i=l(7462),n=(l(7294),l(3905));const a={custom_edit_url:"https://github.com/rnmapbox/maps/blob/main/src/components/FillExtrusionLayer.tsx"},r=void 0,o={unversionedId:"components/FillExtrusionLayer",id:"components/FillExtrusionLayer",title:"FillExtrusionLayer",description:"Mapbox spec: fill-extrusion",source:"@site/docs/components/FillExtrusionLayer.md",sourceDirName:"components",slug:"/components/FillExtrusionLayer",permalink:"/docs/components/FillExtrusionLayer",draft:!1,editUrl:"https://github.com/rnmapbox/maps/blob/main/src/components/FillExtrusionLayer.tsx",tags:[],version:"current",frontMatter:{custom_edit_url:"https://github.com/rnmapbox/maps/blob/main/src/components/FillExtrusionLayer.tsx"},sidebar:"componentSidebar",previous:{title:"CircleLayer",permalink:"/docs/components/CircleLayer"},next:{title:"FillLayer",permalink:"/docs/components/FillLayer"}},s={},p=[{value:"props",id:"props",level:2},{value:"id",id:"id",level:3},{value:"existing",id:"existing",level:3},{value:"sourceID",id:"sourceid",level:3},{value:"sourceLayerID",id:"sourcelayerid",level:3},{value:"aboveLayerID",id:"abovelayerid",level:3},{value:"belowLayerID",id:"belowlayerid",level:3},{value:"layerIndex",id:"layerindex",level:3},{value:"filter",id:"filter",level:3},{value:"minZoomLevel",id:"minzoomlevel",level:3},{value:"maxZoomLevel",id:"maxzoomlevel",level:3},{value:"style",id:"style",level:3},{value:"styles",id:"styles",level:2},{value:"visibility",id:"visibility",level:3},{value:"Description",id:"description",level:4},{value:"Type",id:"type",level:4},{value:"Default Value",id:"default-value",level:4},{value:"Supported Values",id:"supported-values",level:4},{value:"fillExtrusionOpacity",id:"fillextrusionopacity",level:3},{value:"Description",id:"description-1",level:4},{value:"Type",id:"type-1",level:4},{value:"Default Value",id:"default-value-1",level:4},{value:"Minimum",id:"minimum",level:4},{value:"Maximum",id:"maximum",level:4},{value:"Expression",id:"expression",level:4},{value:"fillExtrusionOpacityTransition",id:"fillextrusionopacitytransition",level:3},{value:"Description",id:"description-2",level:4},{value:"Type",id:"type-2",level:4},{value:"Units",id:"units",level:4},{value:"Default Value",id:"default-value-2",level:4},{value:"fillExtrusionColor",id:"fillextrusioncolor",level:3},{value:"Description",id:"description-3",level:4},{value:"Type",id:"type-3",level:4},{value:"Default Value",id:"default-value-3",level:4},{value:"Disabled By",id:"disabled-by",level:4},{value:"Expression",id:"expression-1",level:4},{value:"fillExtrusionColorTransition",id:"fillextrusioncolortransition",level:3},{value:"Description",id:"description-4",level:4},{value:"Type",id:"type-4",level:4},{value:"Units",id:"units-1",level:4},{value:"Default Value",id:"default-value-4",level:4},{value:"fillExtrusionTranslate",id:"fillextrusiontranslate",level:3},{value:"Description",id:"description-5",level:4},{value:"Type",id:"type-5",level:4},{value:"Default Value",id:"default-value-5",level:4},{value:"Units",id:"units-2",level:4},{value:"Expression",id:"expression-2",level:4},{value:"fillExtrusionTranslateTransition",id:"fillextrusiontranslatetransition",level:3},{value:"Description",id:"description-6",level:4},{value:"Type",id:"type-6",level:4},{value:"Units",id:"units-3",level:4},{value:"Default Value",id:"default-value-6",level:4},{value:"fillExtrusionTranslateAnchor",id:"fillextrusiontranslateanchor",level:3},{value:"Description",id:"description-7",level:4},{value:"Type",id:"type-7",level:4},{value:"Default Value",id:"default-value-7",level:4},{value:"Supported Values",id:"supported-values-1",level:4},{value:"Requires",id:"requires",level:4},{value:"Expression",id:"expression-3",level:4},{value:"fillExtrusionPattern",id:"fillextrusionpattern",level:3},{value:"Description",id:"description-8",level:4},{value:"Type",id:"type-8",level:4},{value:"Expression",id:"expression-4",level:4},{value:"fillExtrusionHeight",id:"fillextrusionheight",level:3},{value:"Description",id:"description-9",level:4},{value:"Type",id:"type-9",level:4},{value:"Default Value",id:"default-value-8",level:4},{value:"Units",id:"units-4",level:4},{value:"Minimum",id:"minimum-1",level:4},{value:"Expression",id:"expression-5",level:4},{value:"fillExtrusionHeightTransition",id:"fillextrusionheighttransition",level:3},{value:"Description",id:"description-10",level:4},{value:"Type",id:"type-10",level:4},{value:"Units",id:"units-5",level:4},{value:"Default Value",id:"default-value-9",level:4},{value:"fillExtrusionBase",id:"fillextrusionbase",level:3},{value:"Description",id:"description-11",level:4},{value:"Type",id:"type-11",level:4},{value:"Default Value",id:"default-value-10",level:4},{value:"Units",id:"units-6",level:4},{value:"Minimum",id:"minimum-2",level:4},{value:"Requires",id:"requires-1",level:4},{value:"Expression",id:"expression-6",level:4},{value:"fillExtrusionBaseTransition",id:"fillextrusionbasetransition",level:3},{value:"Description",id:"description-12",level:4},{value:"Type",id:"type-12",level:4},{value:"Units",id:"units-7",level:4},{value:"Default Value",id:"default-value-11",level:4},{value:"fillExtrusionVerticalGradient",id:"fillextrusionverticalgradient",level:3},{value:"Description",id:"description-13",level:4},{value:"Type",id:"type-13",level:4},{value:"Default Value",id:"default-value-12",level:4},{value:"Expression",id:"expression-7",level:4}],u={toc:p},d="wrapper";function k(e){let{components:t,...l}=e;return(0,n.kt)(d,(0,i.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"  Mapbox spec: ",(0,n.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/#fill-extrusion"},"fill-extrusion")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"import { FillExtrusionLayer } from '@rnmapbox/maps';\n\nFillExtrusionLayer\n\n")),(0,n.kt)("p",null,"FillExtrusionLayer is a style layer that renders one or more 3D extruded polygons on the map."),(0,n.kt)("h2",{id:"props"},"props"),(0,n.kt)("h3",{id:"id"},"id"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"string\n")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"required"),"\nA string that uniquely identifies the layer in the style to which it is added."),(0,n.kt)("h3",{id:"existing"},"existing"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"boolean\n")),(0,n.kt)("p",null,"The id refers to en existing layer in the style. Does not create a new layer."),(0,n.kt)("h3",{id:"sourceid"},"sourceID"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"string\n")),(0,n.kt)("p",null,"The source from which to obtain the data to style.\nIf the source has not yet been added to the current style, the behavior is undefined.\nInferred from parent source only if the layer is a direct child to it."),(0,n.kt)("p",null,"  ",(0,n.kt)("em",{parentName:"p"},"defaults to:")," ",(0,n.kt)("inlineCode",{parentName:"p"},"MapboxGL.StyleSource.DefaultSourceID")),(0,n.kt)("h3",{id:"sourcelayerid"},"sourceLayerID"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"string\n")),(0,n.kt)("p",null,"Identifier of the layer within the source identified by the sourceID property from which the receiver obtains the data to style."),(0,n.kt)("h3",{id:"abovelayerid"},"aboveLayerID"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"string\n")),(0,n.kt)("p",null,"Inserts a layer above aboveLayerID."),(0,n.kt)("h3",{id:"belowlayerid"},"belowLayerID"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"string\n")),(0,n.kt)("p",null,"Inserts a layer below belowLayerID"),(0,n.kt)("h3",{id:"layerindex"},"layerIndex"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"number\n")),(0,n.kt)("p",null,"Inserts a layer at a specified index"),(0,n.kt)("h3",{id:"filter"},"filter"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"FilterExpression\n")),(0,n.kt)("p",null,"Filter only the features in the source layer that satisfy a condition that you define"),(0,n.kt)("h3",{id:"minzoomlevel"},"minZoomLevel"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"number\n")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"required"),"\nThe minimum zoom level at which the layer gets parsed and appears."),(0,n.kt)("h3",{id:"maxzoomlevel"},"maxZoomLevel"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"number\n")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"required"),"\nThe maximum zoom level at which the layer gets parsed and appears."),(0,n.kt)("h3",{id:"style"},"style"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"FillExtrusionLayerStyleProps\n")),(0,n.kt)("p",null,"Customizable style attributes"),(0,n.kt)("h2",{id:"styles"},"styles"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"#visibility"},"visibility"),(0,n.kt)("br",null)),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"#fillextrusionopacity"},"fillExtrusionOpacity"),(0,n.kt)("br",null)),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"#fillextrusioncolor"},"fillExtrusionColor"),(0,n.kt)("br",null)),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"#fillextrusiontranslate"},"fillExtrusionTranslate"),(0,n.kt)("br",null)),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"#fillextrusiontranslateanchor"},"fillExtrusionTranslateAnchor"),(0,n.kt)("br",null)),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"#fillextrusionpattern"},"fillExtrusionPattern"),(0,n.kt)("br",null)),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"#fillextrusionheight"},"fillExtrusionHeight"),(0,n.kt)("br",null)),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"#fillextrusionbase"},"fillExtrusionBase"),(0,n.kt)("br",null)),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"#fillextrusionverticalgradient"},"fillExtrusionVerticalGradient"),(0,n.kt)("br",null))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"visibility"},"visibility"),(0,n.kt)("p",null,"Name: ",(0,n.kt)("inlineCode",{parentName:"p"},"visibility")),(0,n.kt)("p",null,"Mapbox spec: ",(0,n.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/style-spec/reference/layers/#layout-fill-extrusion-visibility"},"visibility")),(0,n.kt)("h4",{id:"description"},"Description"),(0,n.kt)("p",null,"Whether this layer is displayed."),(0,n.kt)("h4",{id:"type"},"Type"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"enum")),(0,n.kt)("h4",{id:"default-value"},"Default Value"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"visible")),(0,n.kt)("h4",{id:"supported-values"},"Supported Values"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"visible")," - The layer is shown.",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"none")," - The layer is not shown.",(0,n.kt)("br",null)),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"fillextrusionopacity"},"fillExtrusionOpacity"),(0,n.kt)("p",null,"Name: ",(0,n.kt)("inlineCode",{parentName:"p"},"fillExtrusionOpacity")),(0,n.kt)("p",null,"Mapbox spec: ",(0,n.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/style-spec/reference/layers/#paint-fill-extrusion-fill-extrusion-opacity"},"fill-extrusion-opacity")),(0,n.kt)("h4",{id:"description-1"},"Description"),(0,n.kt)("p",null,"The opacity of the entire fill extrusion layer. This is rendered on a perLayer, not perFeature, basis, and dataDriven styling is not available."),(0,n.kt)("h4",{id:"type-1"},"Type"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"number")),(0,n.kt)("h4",{id:"default-value-1"},"Default Value"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"1")),(0,n.kt)("h4",{id:"minimum"},"Minimum"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"0")),(0,n.kt)("h4",{id:"maximum"},"Maximum"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"1")),(0,n.kt)("h4",{id:"expression"},"Expression"),(0,n.kt)("p",null,"Parameters: ",(0,n.kt)("inlineCode",{parentName:"p"},"zoom")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"fillextrusionopacitytransition"},"fillExtrusionOpacityTransition"),(0,n.kt)("p",null,"Name: ",(0,n.kt)("inlineCode",{parentName:"p"},"fillExtrusionOpacityTransition")),(0,n.kt)("h4",{id:"description-2"},"Description"),(0,n.kt)("p",null,"The transition affecting any changes to this layer\u2019s fillExtrusionOpacity property."),(0,n.kt)("h4",{id:"type-2"},"Type"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"{ duration, delay }")),(0,n.kt)("h4",{id:"units"},"Units"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"milliseconds")),(0,n.kt)("h4",{id:"default-value-2"},"Default Value"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"{duration: 300, delay: 0}")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"fillextrusioncolor"},"fillExtrusionColor"),(0,n.kt)("p",null,"Name: ",(0,n.kt)("inlineCode",{parentName:"p"},"fillExtrusionColor")),(0,n.kt)("p",null,"Mapbox spec: ",(0,n.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/style-spec/reference/layers/#paint-fill-extrusion-fill-extrusion-color"},"fill-extrusion-color")),(0,n.kt)("h4",{id:"description-3"},"Description"),(0,n.kt)("p",null,"The base color of the extruded fill. The extrusion's surfaces will be shaded differently based on this color in combination with the root ",(0,n.kt)("inlineCode",{parentName:"p"},"light")," settings. If this color is specified as ",(0,n.kt)("inlineCode",{parentName:"p"},"rgba")," with an alpha component, the alpha component will be ignored; use ",(0,n.kt)("inlineCode",{parentName:"p"},"fillExtrusionOpacity")," to set layer opacity."),(0,n.kt)("h4",{id:"type-3"},"Type"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"color")),(0,n.kt)("h4",{id:"default-value-3"},"Default Value"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"#000000")),(0,n.kt)("h4",{id:"disabled-by"},"Disabled By"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"fillExtrusionPattern")),(0,n.kt)("h4",{id:"expression-1"},"Expression"),(0,n.kt)("p",null,"Parameters: ",(0,n.kt)("inlineCode",{parentName:"p"},"zoom, feature, feature-state")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"fillextrusioncolortransition"},"fillExtrusionColorTransition"),(0,n.kt)("p",null,"Name: ",(0,n.kt)("inlineCode",{parentName:"p"},"fillExtrusionColorTransition")),(0,n.kt)("h4",{id:"description-4"},"Description"),(0,n.kt)("p",null,"The transition affecting any changes to this layer\u2019s fillExtrusionColor property."),(0,n.kt)("h4",{id:"type-4"},"Type"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"{ duration, delay }")),(0,n.kt)("h4",{id:"units-1"},"Units"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"milliseconds")),(0,n.kt)("h4",{id:"default-value-4"},"Default Value"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"{duration: 300, delay: 0}")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"fillextrusiontranslate"},"fillExtrusionTranslate"),(0,n.kt)("p",null,"Name: ",(0,n.kt)("inlineCode",{parentName:"p"},"fillExtrusionTranslate")),(0,n.kt)("p",null,"Mapbox spec: ",(0,n.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/style-spec/reference/layers/#paint-fill-extrusion-fill-extrusion-translate"},"fill-extrusion-translate")),(0,n.kt)("h4",{id:"description-5"},"Description"),(0,n.kt)("p",null,"The geometry's offset. Values are ","[x, y]"," where negatives indicate left and up (on the flat plane), respectively."),(0,n.kt)("h4",{id:"type-5"},"Type"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"array<number>")),(0,n.kt)("h4",{id:"default-value-5"},"Default Value"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"[0,0]")),(0,n.kt)("h4",{id:"units-2"},"Units"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"pixels")),(0,n.kt)("h4",{id:"expression-2"},"Expression"),(0,n.kt)("p",null,"Parameters: ",(0,n.kt)("inlineCode",{parentName:"p"},"zoom")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"fillextrusiontranslatetransition"},"fillExtrusionTranslateTransition"),(0,n.kt)("p",null,"Name: ",(0,n.kt)("inlineCode",{parentName:"p"},"fillExtrusionTranslateTransition")),(0,n.kt)("h4",{id:"description-6"},"Description"),(0,n.kt)("p",null,"The transition affecting any changes to this layer\u2019s fillExtrusionTranslate property."),(0,n.kt)("h4",{id:"type-6"},"Type"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"{ duration, delay }")),(0,n.kt)("h4",{id:"units-3"},"Units"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"milliseconds")),(0,n.kt)("h4",{id:"default-value-6"},"Default Value"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"{duration: 300, delay: 0}")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"fillextrusiontranslateanchor"},"fillExtrusionTranslateAnchor"),(0,n.kt)("p",null,"Name: ",(0,n.kt)("inlineCode",{parentName:"p"},"fillExtrusionTranslateAnchor")),(0,n.kt)("p",null,"Mapbox spec: ",(0,n.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/style-spec/reference/layers/#paint-fill-extrusion-fill-extrusion-translate-anchor"},"fill-extrusion-translate-anchor")),(0,n.kt)("h4",{id:"description-7"},"Description"),(0,n.kt)("p",null,"Controls the frame of reference for ",(0,n.kt)("inlineCode",{parentName:"p"},"fillExtrusionTranslate"),"."),(0,n.kt)("h4",{id:"type-7"},"Type"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"enum")),(0,n.kt)("h4",{id:"default-value-7"},"Default Value"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"map")),(0,n.kt)("h4",{id:"supported-values-1"},"Supported Values"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"map")," - The fill extrusion is translated relative to the map.",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"viewport")," - The fill extrusion is translated relative to the viewport.",(0,n.kt)("br",null)),(0,n.kt)("h4",{id:"requires"},"Requires"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"fillExtrusionTranslate")),(0,n.kt)("h4",{id:"expression-3"},"Expression"),(0,n.kt)("p",null,"Parameters: ",(0,n.kt)("inlineCode",{parentName:"p"},"zoom")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"fillextrusionpattern"},"fillExtrusionPattern"),(0,n.kt)("p",null,"Name: ",(0,n.kt)("inlineCode",{parentName:"p"},"fillExtrusionPattern")),(0,n.kt)("p",null,"Mapbox spec: ",(0,n.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/style-spec/reference/layers/#paint-fill-extrusion-fill-extrusion-pattern"},"fill-extrusion-pattern")),(0,n.kt)("h4",{id:"description-8"},"Description"),(0,n.kt)("p",null,"Name of image in sprite to use for drawing images on extruded fills. For seamless patterns, image width and height must be a factor of two (2, 4, 8, ..., 512). Note that zoomDependent expressions will be evaluated only at integer zoom levels."),(0,n.kt)("h4",{id:"type-8"},"Type"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"resolvedImage")),(0,n.kt)("h4",{id:"expression-4"},"Expression"),(0,n.kt)("p",null,"Parameters: ",(0,n.kt)("inlineCode",{parentName:"p"},"zoom, feature")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"fillextrusionheight"},"fillExtrusionHeight"),(0,n.kt)("p",null,"Name: ",(0,n.kt)("inlineCode",{parentName:"p"},"fillExtrusionHeight")),(0,n.kt)("p",null,"Mapbox spec: ",(0,n.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/style-spec/reference/layers/#paint-fill-extrusion-fill-extrusion-height"},"fill-extrusion-height")),(0,n.kt)("h4",{id:"description-9"},"Description"),(0,n.kt)("p",null,"The height with which to extrude this layer."),(0,n.kt)("h4",{id:"type-9"},"Type"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"number")),(0,n.kt)("h4",{id:"default-value-8"},"Default Value"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"0")),(0,n.kt)("h4",{id:"units-4"},"Units"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"meters")),(0,n.kt)("h4",{id:"minimum-1"},"Minimum"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"0")),(0,n.kt)("h4",{id:"expression-5"},"Expression"),(0,n.kt)("p",null,"Parameters: ",(0,n.kt)("inlineCode",{parentName:"p"},"zoom, feature, feature-state")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"fillextrusionheighttransition"},"fillExtrusionHeightTransition"),(0,n.kt)("p",null,"Name: ",(0,n.kt)("inlineCode",{parentName:"p"},"fillExtrusionHeightTransition")),(0,n.kt)("h4",{id:"description-10"},"Description"),(0,n.kt)("p",null,"The transition affecting any changes to this layer\u2019s fillExtrusionHeight property."),(0,n.kt)("h4",{id:"type-10"},"Type"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"{ duration, delay }")),(0,n.kt)("h4",{id:"units-5"},"Units"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"milliseconds")),(0,n.kt)("h4",{id:"default-value-9"},"Default Value"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"{duration: 300, delay: 0}")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"fillextrusionbase"},"fillExtrusionBase"),(0,n.kt)("p",null,"Name: ",(0,n.kt)("inlineCode",{parentName:"p"},"fillExtrusionBase")),(0,n.kt)("p",null,"Mapbox spec: ",(0,n.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/style-spec/reference/layers/#paint-fill-extrusion-fill-extrusion-base"},"fill-extrusion-base")),(0,n.kt)("h4",{id:"description-11"},"Description"),(0,n.kt)("p",null,"The height with which to extrude the base of this layer. Must be less than or equal to ",(0,n.kt)("inlineCode",{parentName:"p"},"fillExtrusionHeight"),"."),(0,n.kt)("h4",{id:"type-11"},"Type"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"number")),(0,n.kt)("h4",{id:"default-value-10"},"Default Value"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"0")),(0,n.kt)("h4",{id:"units-6"},"Units"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"meters")),(0,n.kt)("h4",{id:"minimum-2"},"Minimum"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"0")),(0,n.kt)("h4",{id:"requires-1"},"Requires"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"fillExtrusionHeight")),(0,n.kt)("h4",{id:"expression-6"},"Expression"),(0,n.kt)("p",null,"Parameters: ",(0,n.kt)("inlineCode",{parentName:"p"},"zoom, feature, feature-state")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"fillextrusionbasetransition"},"fillExtrusionBaseTransition"),(0,n.kt)("p",null,"Name: ",(0,n.kt)("inlineCode",{parentName:"p"},"fillExtrusionBaseTransition")),(0,n.kt)("h4",{id:"description-12"},"Description"),(0,n.kt)("p",null,"The transition affecting any changes to this layer\u2019s fillExtrusionBase property."),(0,n.kt)("h4",{id:"type-12"},"Type"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"{ duration, delay }")),(0,n.kt)("h4",{id:"units-7"},"Units"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"milliseconds")),(0,n.kt)("h4",{id:"default-value-11"},"Default Value"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"{duration: 300, delay: 0}")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"fillextrusionverticalgradient"},"fillExtrusionVerticalGradient"),(0,n.kt)("p",null,"Name: ",(0,n.kt)("inlineCode",{parentName:"p"},"fillExtrusionVerticalGradient")),(0,n.kt)("p",null,"Mapbox spec: ",(0,n.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/style-spec/reference/layers/#paint-fill-extrusion-fill-extrusion-vertical-gradient"},"fill-extrusion-vertical-gradient")),(0,n.kt)("h4",{id:"description-13"},"Description"),(0,n.kt)("p",null,"Whether to apply a vertical gradient to the sides of a fillExtrusion layer. If true, sides will be shaded slightly darker farther down."),(0,n.kt)("h4",{id:"type-13"},"Type"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"boolean")),(0,n.kt)("h4",{id:"default-value-12"},"Default Value"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"true")),(0,n.kt)("h4",{id:"expression-7"},"Expression"),(0,n.kt)("p",null,"Parameters: ",(0,n.kt)("inlineCode",{parentName:"p"},"zoom")))}k.isMDXComponent=!0}}]);