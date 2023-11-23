"use strict";(self.webpackChunkmap_docs=self.webpackChunkmap_docs||[]).push([[7924],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var l=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,l,i=function(e,t){if(null==e)return{};var a,l,i={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=l.createContext({}),s=function(e){var t=l.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},u=function(e){var t=s(e.components);return l.createElement(o.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},h=l.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,o=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),m=s(a),h=i,c=m["".concat(o,".").concat(h)]||m[h]||d[h]||n;return a?l.createElement(c,p(p({ref:t},u),{},{components:a})):l.createElement(c,p({ref:t},u))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,p=new Array(n);p[0]=h;var r={};for(var o in t)hasOwnProperty.call(t,o)&&(r[o]=t[o]);r.originalType=e,r[m]="string"==typeof e?e:i,p[1]=r;for(var s=2;s<n;s++)p[s]=a[s];return l.createElement.apply(null,p)}return l.createElement.apply(null,a)}h.displayName="MDXCreateElement"},7685:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>d,frontMatter:()=>n,metadata:()=>r,toc:()=>s});var l=a(7462),i=(a(7294),a(3905));const n={custom_edit_url:"https://github.com/rnmapbox/maps/blob/main/src/components/HeatmapLayer.tsx"},p=void 0,r={unversionedId:"components/HeatmapLayer",id:"components/HeatmapLayer",title:"HeatmapLayer",description:"Mapbox spec: heatmap",source:"@site/docs/components/HeatmapLayer.md",sourceDirName:"components",slug:"/components/HeatmapLayer",permalink:"/docs/components/HeatmapLayer",draft:!1,editUrl:"https://github.com/rnmapbox/maps/blob/main/src/components/HeatmapLayer.tsx",tags:[],version:"current",frontMatter:{custom_edit_url:"https://github.com/rnmapbox/maps/blob/main/src/components/HeatmapLayer.tsx"},sidebar:"componentSidebar",previous:{title:"HeadingIndicator",permalink:"/docs/components/HeadingIndicator"},next:{title:"Image",permalink:"/docs/components/Image"}},o={},s=[{value:"props",id:"props",level:2},{value:"id",id:"id",level:3},{value:"existing",id:"existing",level:3},{value:"sourceID",id:"sourceid",level:3},{value:"sourceLayerID",id:"sourcelayerid",level:3},{value:"aboveLayerID",id:"abovelayerid",level:3},{value:"belowLayerID",id:"belowlayerid",level:3},{value:"layerIndex",id:"layerindex",level:3},{value:"filter",id:"filter",level:3},{value:"minZoomLevel",id:"minzoomlevel",level:3},{value:"maxZoomLevel",id:"maxzoomlevel",level:3},{value:"slot",id:"slot",level:3},{value:"style",id:"style",level:3},{value:"styles",id:"styles",level:2},{value:"visibility",id:"visibility",level:3},{value:"Description",id:"description",level:4},{value:"Type",id:"type",level:4},{value:"Default Value",id:"default-value",level:4},{value:"Supported Values",id:"supported-values",level:4},{value:"heatmapRadius",id:"heatmapradius",level:3},{value:"Description",id:"description-1",level:4},{value:"Type",id:"type-1",level:4},{value:"Default Value",id:"default-value-1",level:4},{value:"Units",id:"units",level:4},{value:"Minimum",id:"minimum",level:4},{value:"Expression",id:"expression",level:4},{value:"heatmapRadiusTransition",id:"heatmapradiustransition",level:3},{value:"Description",id:"description-2",level:4},{value:"Type",id:"type-2",level:4},{value:"Units",id:"units-1",level:4},{value:"Default Value",id:"default-value-2",level:4},{value:"heatmapWeight",id:"heatmapweight",level:3},{value:"Description",id:"description-3",level:4},{value:"Type",id:"type-3",level:4},{value:"Default Value",id:"default-value-3",level:4},{value:"Minimum",id:"minimum-1",level:4},{value:"Expression",id:"expression-1",level:4},{value:"heatmapIntensity",id:"heatmapintensity",level:3},{value:"Description",id:"description-4",level:4},{value:"Type",id:"type-4",level:4},{value:"Default Value",id:"default-value-4",level:4},{value:"Minimum",id:"minimum-2",level:4},{value:"Expression",id:"expression-2",level:4},{value:"heatmapIntensityTransition",id:"heatmapintensitytransition",level:3},{value:"Description",id:"description-5",level:4},{value:"Type",id:"type-5",level:4},{value:"Units",id:"units-2",level:4},{value:"Default Value",id:"default-value-5",level:4},{value:"heatmapColor",id:"heatmapcolor",level:3},{value:"Description",id:"description-6",level:4},{value:"Type",id:"type-6",level:4},{value:"Default Value",id:"default-value-6",level:4},{value:"Expression",id:"expression-3",level:4},{value:"heatmapOpacity",id:"heatmapopacity",level:3},{value:"Description",id:"description-7",level:4},{value:"Type",id:"type-7",level:4},{value:"Default Value",id:"default-value-7",level:4},{value:"Minimum",id:"minimum-3",level:4},{value:"Maximum",id:"maximum",level:4},{value:"Expression",id:"expression-4",level:4},{value:"heatmapOpacityTransition",id:"heatmapopacitytransition",level:3},{value:"Description",id:"description-8",level:4},{value:"Type",id:"type-8",level:4},{value:"Units",id:"units-3",level:4},{value:"Default Value",id:"default-value-8",level:4}],u={toc:s},m="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(m,(0,l.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"  Mapbox spec: ",(0,i.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/#heatmap"},"heatmap")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { HeatmapLayer } from '@rnmapbox/maps';\n\nHeatmapLayer\n\n")),(0,i.kt)("p",null,"HeatmapLayer is a style layer that renders one or more filled circles on the map."),(0,i.kt)("h2",{id:"props"},"props"),(0,i.kt)("h3",{id:"id"},"id"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"string\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"required"),"\nA string that uniquely identifies the source in the style to which it is added."),(0,i.kt)("h3",{id:"existing"},"existing"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"boolean\n")),(0,i.kt)("p",null,"The id refers to en existing layer in the style. Does not create a new layer."),(0,i.kt)("h3",{id:"sourceid"},"sourceID"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"string\n")),(0,i.kt)("p",null,"The source from which to obtain the data to style.\nIf the source has not yet been added to the current style, the behavior is undefined.\nInferred from parent source only if the layer is a direct child to it."),(0,i.kt)("p",null,"  ",(0,i.kt)("em",{parentName:"p"},"defaults to:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Mapbox.StyleSource.DefaultSourceID")),(0,i.kt)("h3",{id:"sourcelayerid"},"sourceLayerID"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"string\n")),(0,i.kt)("p",null,"Identifier of the layer within the source identified by the sourceID property from which the receiver obtains the data to style."),(0,i.kt)("h3",{id:"abovelayerid"},"aboveLayerID"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"string\n")),(0,i.kt)("p",null,"Inserts a layer above aboveLayerID."),(0,i.kt)("h3",{id:"belowlayerid"},"belowLayerID"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"string\n")),(0,i.kt)("p",null,"Inserts a layer below belowLayerID"),(0,i.kt)("h3",{id:"layerindex"},"layerIndex"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"number\n")),(0,i.kt)("p",null,"Inserts a layer at a specified index"),(0,i.kt)("h3",{id:"filter"},"filter"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"FilterExpression\n")),(0,i.kt)("p",null,"Filter only the features in the source layer that satisfy a condition that you define"),(0,i.kt)("h3",{id:"minzoomlevel"},"minZoomLevel"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"number\n")),(0,i.kt)("p",null,"The minimum zoom level at which the layer gets parsed and appears."),(0,i.kt)("h3",{id:"maxzoomlevel"},"maxZoomLevel"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"number\n")),(0,i.kt)("p",null,"The maximum zoom level at which the layer gets parsed and appears."),(0,i.kt)("h3",{id:"slot"},"slot"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"'bottom' | 'middle' | 'top'\n")),(0,i.kt)("p",null,"The slot this layer is assigned to. If specified, and a slot with that name exists, it will be placed at that position in the layer order."),(0,i.kt)("p",null,"v11 only"),(0,i.kt)("h3",{id:"style"},"style"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"HeatmapLayerStyleProps\n")),(0,i.kt)("p",null,"Customizable style attributes"),(0,i.kt)("h2",{id:"styles"},"styles"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"#visibility"},"visibility"),(0,i.kt)("br",null)),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"#heatmapradius"},"heatmapRadius"),(0,i.kt)("br",null)),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"#heatmapweight"},"heatmapWeight"),(0,i.kt)("br",null)),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"#heatmapintensity"},"heatmapIntensity"),(0,i.kt)("br",null)),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"#heatmapcolor"},"heatmapColor"),(0,i.kt)("br",null)),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"#heatmapopacity"},"heatmapOpacity"),(0,i.kt)("br",null))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"visibility"},"visibility"),(0,i.kt)("p",null,"Name: ",(0,i.kt)("inlineCode",{parentName:"p"},"visibility")),(0,i.kt)("p",null,"Mapbox spec: ",(0,i.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/style-spec/reference/layers/#layout-heatmap-visibility"},"visibility")),(0,i.kt)("h4",{id:"description"},"Description"),(0,i.kt)("p",null,"Whether this layer is displayed."),(0,i.kt)("h4",{id:"type"},"Type"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"enum")),(0,i.kt)("h4",{id:"default-value"},"Default Value"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"visible")),(0,i.kt)("h4",{id:"supported-values"},"Supported Values"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"visible")," - The layer is shown.",(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"none")," - The layer is not shown.",(0,i.kt)("br",null)),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"heatmapradius"},"heatmapRadius"),(0,i.kt)("p",null,"Name: ",(0,i.kt)("inlineCode",{parentName:"p"},"heatmapRadius")),(0,i.kt)("p",null,"Mapbox spec: ",(0,i.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/style-spec/reference/layers/#paint-heatmap-heatmap-radius"},"heatmap-radius")),(0,i.kt)("h4",{id:"description-1"},"Description"),(0,i.kt)("p",null,"Radius of influence of one heatmap point in pixels. Increasing the value makes the heatmap smoother, but less detailed. ",(0,i.kt)("inlineCode",{parentName:"p"},"queryRenderedFeatures")," on heatmap layers will return points within this radius."),(0,i.kt)("h4",{id:"type-1"},"Type"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"default-value-1"},"Default Value"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"30")),(0,i.kt)("h4",{id:"units"},"Units"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"pixels")),(0,i.kt)("h4",{id:"minimum"},"Minimum"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"1")),(0,i.kt)("h4",{id:"expression"},"Expression"),(0,i.kt)("p",null,"Parameters: ",(0,i.kt)("inlineCode",{parentName:"p"},"zoom, feature, feature-state")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"heatmapradiustransition"},"heatmapRadiusTransition"),(0,i.kt)("p",null,"Name: ",(0,i.kt)("inlineCode",{parentName:"p"},"heatmapRadiusTransition")),(0,i.kt)("h4",{id:"description-2"},"Description"),(0,i.kt)("p",null,"The transition affecting any changes to this layer\u2019s heatmapRadius property."),(0,i.kt)("h4",{id:"type-2"},"Type"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"{ duration, delay }")),(0,i.kt)("h4",{id:"units-1"},"Units"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"milliseconds")),(0,i.kt)("h4",{id:"default-value-2"},"Default Value"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"{duration: 300, delay: 0}")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"heatmapweight"},"heatmapWeight"),(0,i.kt)("p",null,"Name: ",(0,i.kt)("inlineCode",{parentName:"p"},"heatmapWeight")),(0,i.kt)("p",null,"Mapbox spec: ",(0,i.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/style-spec/reference/layers/#paint-heatmap-heatmap-weight"},"heatmap-weight")),(0,i.kt)("h4",{id:"description-3"},"Description"),(0,i.kt)("p",null,"A measure of how much an individual point contributes to the heatmap. A value of 10 would be equivalent to having 10 points of weight 1 in the same spot. Especially useful when combined with clustering."),(0,i.kt)("h4",{id:"type-3"},"Type"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"default-value-3"},"Default Value"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"1")),(0,i.kt)("h4",{id:"minimum-1"},"Minimum"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"0")),(0,i.kt)("h4",{id:"expression-1"},"Expression"),(0,i.kt)("p",null,"Parameters: ",(0,i.kt)("inlineCode",{parentName:"p"},"zoom, feature, feature-state")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"heatmapintensity"},"heatmapIntensity"),(0,i.kt)("p",null,"Name: ",(0,i.kt)("inlineCode",{parentName:"p"},"heatmapIntensity")),(0,i.kt)("p",null,"Mapbox spec: ",(0,i.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/style-spec/reference/layers/#paint-heatmap-heatmap-intensity"},"heatmap-intensity")),(0,i.kt)("h4",{id:"description-4"},"Description"),(0,i.kt)("p",null,"Similar to ",(0,i.kt)("inlineCode",{parentName:"p"},"heatmapWeight")," but controls the intensity of the heatmap globally. Primarily used for adjusting the heatmap based on zoom level."),(0,i.kt)("h4",{id:"type-4"},"Type"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"default-value-4"},"Default Value"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"1")),(0,i.kt)("h4",{id:"minimum-2"},"Minimum"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"0")),(0,i.kt)("h4",{id:"expression-2"},"Expression"),(0,i.kt)("p",null,"Parameters: ",(0,i.kt)("inlineCode",{parentName:"p"},"zoom")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"heatmapintensitytransition"},"heatmapIntensityTransition"),(0,i.kt)("p",null,"Name: ",(0,i.kt)("inlineCode",{parentName:"p"},"heatmapIntensityTransition")),(0,i.kt)("h4",{id:"description-5"},"Description"),(0,i.kt)("p",null,"The transition affecting any changes to this layer\u2019s heatmapIntensity property."),(0,i.kt)("h4",{id:"type-5"},"Type"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"{ duration, delay }")),(0,i.kt)("h4",{id:"units-2"},"Units"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"milliseconds")),(0,i.kt)("h4",{id:"default-value-5"},"Default Value"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"{duration: 300, delay: 0}")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"heatmapcolor"},"heatmapColor"),(0,i.kt)("p",null,"Name: ",(0,i.kt)("inlineCode",{parentName:"p"},"heatmapColor")),(0,i.kt)("p",null,"Mapbox spec: ",(0,i.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/style-spec/reference/layers/#paint-heatmap-heatmap-color"},"heatmap-color")),(0,i.kt)("h4",{id:"description-6"},"Description"),(0,i.kt)("p",null,"Defines the color of each pixel based on its density value in a heatmap.  Should be an expression that uses ",(0,i.kt)("inlineCode",{parentName:"p"},'["heatmapDensity"]')," as input."),(0,i.kt)("h4",{id:"type-6"},"Type"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"color")),(0,i.kt)("h4",{id:"default-value-6"},"Default Value"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"interpolate,linear,heatmap-density,0,rgba(0, 0, 255, 0),0.1,royalblue,0.3,cyan,0.5,lime,0.7,yellow,1,red")),(0,i.kt)("h4",{id:"expression-3"},"Expression"),(0,i.kt)("p",null,"Parameters: ",(0,i.kt)("inlineCode",{parentName:"p"},"heatmap-density")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"heatmapopacity"},"heatmapOpacity"),(0,i.kt)("p",null,"Name: ",(0,i.kt)("inlineCode",{parentName:"p"},"heatmapOpacity")),(0,i.kt)("p",null,"Mapbox spec: ",(0,i.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/style-spec/reference/layers/#paint-heatmap-heatmap-opacity"},"heatmap-opacity")),(0,i.kt)("h4",{id:"description-7"},"Description"),(0,i.kt)("p",null,"The global opacity at which the heatmap layer will be drawn."),(0,i.kt)("h4",{id:"type-7"},"Type"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"default-value-7"},"Default Value"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"1")),(0,i.kt)("h4",{id:"minimum-3"},"Minimum"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"0")),(0,i.kt)("h4",{id:"maximum"},"Maximum"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"1")),(0,i.kt)("h4",{id:"expression-4"},"Expression"),(0,i.kt)("p",null,"Parameters: ",(0,i.kt)("inlineCode",{parentName:"p"},"zoom")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"heatmapopacitytransition"},"heatmapOpacityTransition"),(0,i.kt)("p",null,"Name: ",(0,i.kt)("inlineCode",{parentName:"p"},"heatmapOpacityTransition")),(0,i.kt)("h4",{id:"description-8"},"Description"),(0,i.kt)("p",null,"The transition affecting any changes to this layer\u2019s heatmapOpacity property."),(0,i.kt)("h4",{id:"type-8"},"Type"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"{ duration, delay }")),(0,i.kt)("h4",{id:"units-3"},"Units"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"milliseconds")),(0,i.kt)("h4",{id:"default-value-8"},"Default Value"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"{duration: 300, delay: 0}")))}d.isMDXComponent=!0}}]);