"use strict";(self.webpackChunkmap_docs=self.webpackChunkmap_docs||[]).push([[2823],{3905:(e,t,l)=>{l.d(t,{Zo:()=>u,kt:()=>y});var n=l(7294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function i(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function r(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?i(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):i(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function p(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)l=i[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)l=i[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var s=n.createContext({}),o=function(e){var t=n.useContext(s),l=t;return e&&(l="function"==typeof e?e(t):r(r({},t),e)),l},u=function(e){var t=o(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=o(l),m=a,y=d["".concat(s,".").concat(m)]||d[m]||k[m]||i;return l?n.createElement(y,r(r({ref:t},u),{},{components:l})):n.createElement(y,r({ref:t},u))}));function y(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=l.length,r=new Array(i);r[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:a,r[1]=p;for(var o=2;o<i;o++)r[o]=l[o];return n.createElement.apply(null,r)}return n.createElement.apply(null,l)}m.displayName="MDXCreateElement"},601:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var n=l(7462),a=(l(7294),l(3905));const i={custom_edit_url:"https://github.com/rnmapbox/maps/blob/main/src/components/SkyLayer.tsx"},r=void 0,p={unversionedId:"components/SkyLayer",id:"components/SkyLayer",title:"SkyLayer",description:"Mapbox spec: sky",source:"@site/docs/components/SkyLayer.md",sourceDirName:"components",slug:"/components/SkyLayer",permalink:"/docs/components/SkyLayer",draft:!1,editUrl:"https://github.com/rnmapbox/maps/blob/main/src/components/SkyLayer.tsx",tags:[],version:"current",frontMatter:{custom_edit_url:"https://github.com/rnmapbox/maps/blob/main/src/components/SkyLayer.tsx"},sidebar:"componentSidebar",previous:{title:"ShapeSource",permalink:"/docs/components/ShapeSource"},next:{title:"Style",permalink:"/docs/components/Style"}},s={},o=[{value:"props",id:"props",level:2},{value:"id",id:"id",level:3},{value:"existing",id:"existing",level:3},{value:"sourceID",id:"sourceid",level:3},{value:"aboveLayerID",id:"abovelayerid",level:3},{value:"belowLayerID",id:"belowlayerid",level:3},{value:"layerIndex",id:"layerindex",level:3},{value:"filter",id:"filter",level:3},{value:"style",id:"style",level:3},{value:"styles",id:"styles",level:2},{value:"visibility",id:"visibility",level:3},{value:"Description",id:"description",level:4},{value:"Type",id:"type",level:4},{value:"Default Value",id:"default-value",level:4},{value:"Supported Values",id:"supported-values",level:4},{value:"skyType",id:"skytype",level:3},{value:"Description",id:"description-1",level:4},{value:"Type",id:"type-1",level:4},{value:"Default Value",id:"default-value-1",level:4},{value:"Supported Values",id:"supported-values-1",level:4},{value:"Expression",id:"expression",level:4},{value:"skyAtmosphereSun",id:"skyatmospheresun",level:3},{value:"Description",id:"description-2",level:4},{value:"Type",id:"type-2",level:4},{value:"Units",id:"units",level:4},{value:"Minimum",id:"minimum",level:4},{value:"Maximum",id:"maximum",level:4},{value:"Expression",id:"expression-1",level:4},{value:"skyAtmosphereSunIntensity",id:"skyatmospheresunintensity",level:3},{value:"Description",id:"description-3",level:4},{value:"Type",id:"type-3",level:4},{value:"Default Value",id:"default-value-2",level:4},{value:"Minimum",id:"minimum-1",level:4},{value:"Maximum",id:"maximum-1",level:4},{value:"skyGradientCenter",id:"skygradientcenter",level:3},{value:"Description",id:"description-4",level:4},{value:"Type",id:"type-4",level:4},{value:"Default Value",id:"default-value-3",level:4},{value:"Units",id:"units-1",level:4},{value:"Minimum",id:"minimum-2",level:4},{value:"Maximum",id:"maximum-2",level:4},{value:"Expression",id:"expression-2",level:4},{value:"skyGradientRadius",id:"skygradientradius",level:3},{value:"Description",id:"description-5",level:4},{value:"Type",id:"type-5",level:4},{value:"Default Value",id:"default-value-4",level:4},{value:"Minimum",id:"minimum-3",level:4},{value:"Maximum",id:"maximum-3",level:4},{value:"Expression",id:"expression-3",level:4},{value:"skyGradient",id:"skygradient",level:3},{value:"Description",id:"description-6",level:4},{value:"Type",id:"type-6",level:4},{value:"Default Value",id:"default-value-5",level:4},{value:"Expression",id:"expression-4",level:4},{value:"skyAtmosphereHaloColor",id:"skyatmospherehalocolor",level:3},{value:"Description",id:"description-7",level:4},{value:"Type",id:"type-7",level:4},{value:"Default Value",id:"default-value-6",level:4},{value:"skyAtmosphereColor",id:"skyatmospherecolor",level:3},{value:"Description",id:"description-8",level:4},{value:"Type",id:"type-8",level:4},{value:"Default Value",id:"default-value-7",level:4},{value:"skyOpacity",id:"skyopacity",level:3},{value:"Description",id:"description-9",level:4},{value:"Type",id:"type-9",level:4},{value:"Default Value",id:"default-value-8",level:4},{value:"Minimum",id:"minimum-4",level:4},{value:"Maximum",id:"maximum-4",level:4},{value:"Expression",id:"expression-5",level:4},{value:"skyOpacityTransition",id:"skyopacitytransition",level:3},{value:"Description",id:"description-10",level:4},{value:"Type",id:"type-10",level:4},{value:"Units",id:"units-2",level:4},{value:"Default Value",id:"default-value-9",level:4}],u={toc:o},d="wrapper";function k(e){let{components:t,...l}=e;return(0,a.kt)(d,(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"  Mapbox spec: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/#sky"},"sky")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { SkyLayer } from '@rnmapbox/maps';\n\nSkyLayer\n\n")),(0,a.kt)("p",null,"SkyLayer is a spherical dome around the map that is always rendered behind all other layers"),(0,a.kt)("h2",{id:"props"},"props"),(0,a.kt)("h3",{id:"id"},"id"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"string\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"required"),"\nA string that uniquely identifies the source in the style to which it is added."),(0,a.kt)("h3",{id:"existing"},"existing"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"boolean\n")),(0,a.kt)("p",null,"The id refers to en existing layer in the style. Does not create a new layer."),(0,a.kt)("h3",{id:"sourceid"},"sourceID"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"string\n")),(0,a.kt)("p",null,"The source from which to obtain the data to style.\nIf the source has not yet been added to the current style, the behavior is undefined."),(0,a.kt)("p",null,"  ",(0,a.kt)("em",{parentName:"p"},"defaults to:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Mapbox.StyleSource.DefaultSourceID")),(0,a.kt)("h3",{id:"abovelayerid"},"aboveLayerID"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"string\n")),(0,a.kt)("p",null,"Inserts a layer above aboveLayerID."),(0,a.kt)("h3",{id:"belowlayerid"},"belowLayerID"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"string\n")),(0,a.kt)("p",null,"Inserts a layer below belowLayerID"),(0,a.kt)("h3",{id:"layerindex"},"layerIndex"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"number\n")),(0,a.kt)("p",null,"Inserts a layer at a specified index"),(0,a.kt)("h3",{id:"filter"},"filter"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"FilterExpression\n")),(0,a.kt)("p",null,"Filter only the features in the source layer that satisfy a condition that you define"),(0,a.kt)("h3",{id:"style"},"style"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"SkyLayerStyleProps\n")),(0,a.kt)("p",null,"Customizable style attributes"),(0,a.kt)("h2",{id:"styles"},"styles"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{href:"#visibility"},"visibility"),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{href:"#skytype"},"skyType"),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{href:"#skyatmospheresun"},"skyAtmosphereSun"),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{href:"#skyatmospheresunintensity"},"skyAtmosphereSunIntensity"),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{href:"#skygradientcenter"},"skyGradientCenter"),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{href:"#skygradientradius"},"skyGradientRadius"),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{href:"#skygradient"},"skyGradient"),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{href:"#skyatmospherehalocolor"},"skyAtmosphereHaloColor"),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{href:"#skyatmospherecolor"},"skyAtmosphereColor"),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{href:"#skyopacity"},"skyOpacity"),(0,a.kt)("br",null))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"visibility"},"visibility"),(0,a.kt)("p",null,"Name: ",(0,a.kt)("inlineCode",{parentName:"p"},"visibility")),(0,a.kt)("p",null,"Mapbox spec: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/style-spec/reference/layers/#layout-sky-visibility"},"visibility")),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"Whether this layer is displayed."),(0,a.kt)("h4",{id:"type"},"Type"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"enum")),(0,a.kt)("h4",{id:"default-value"},"Default Value"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"visible")),(0,a.kt)("h4",{id:"supported-values"},"Supported Values"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"visible")," - The layer is shown.",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"none")," - The layer is not shown.",(0,a.kt)("br",null)),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"skytype"},"skyType"),(0,a.kt)("p",null,"Name: ",(0,a.kt)("inlineCode",{parentName:"p"},"skyType")),(0,a.kt)("p",null,"Mapbox spec: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/style-spec/reference/layers/#paint-sky-sky-type"},"sky-type")),(0,a.kt)("h4",{id:"description-1"},"Description"),(0,a.kt)("p",null,"The type of the sky"),(0,a.kt)("h4",{id:"type-1"},"Type"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"enum")),(0,a.kt)("h4",{id:"default-value-1"},"Default Value"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"atmosphere")),(0,a.kt)("h4",{id:"supported-values-1"},"Supported Values"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"gradient")," - Renders the sky with a gradient that can be configured with ",(0,a.kt)("inlineCode",{parentName:"p"},"sky-gradient-radius")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"sky-gradient"),".",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"atmosphere")," - Renders the sky with a simulated atmospheric scattering algorithm, the sun direction can be attached to the light position or explicitly set through ",(0,a.kt)("inlineCode",{parentName:"p"},"sky-atmosphere-sun"),".",(0,a.kt)("br",null)),(0,a.kt)("h4",{id:"expression"},"Expression"),(0,a.kt)("p",null,"Parameters: ",(0,a.kt)("inlineCode",{parentName:"p"},"zoom")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"skyatmospheresun"},"skyAtmosphereSun"),(0,a.kt)("p",null,"Name: ",(0,a.kt)("inlineCode",{parentName:"p"},"skyAtmosphereSun")),(0,a.kt)("p",null,"Mapbox spec: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/style-spec/reference/layers/#paint-sky-sky-atmosphere-sun"},"sky-atmosphere-sun")),(0,a.kt)("h4",{id:"description-2"},"Description"),(0,a.kt)("p",null,"Position of the sun center ","[a azimuthal angle, p polar angle]",". The azimuthal angle indicates the position of the sun relative to 0\xb0 north, where degrees proceed clockwise. The polar angle indicates the height of the sun, where 0\xb0 is directly above, at zenith, and 90\xb0 at the horizon. When this property is ommitted, the sun center is directly inherited from the light position."),(0,a.kt)("h4",{id:"type-2"},"Type"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"array<number>")),(0,a.kt)("h4",{id:"units"},"Units"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"degrees")),(0,a.kt)("h4",{id:"minimum"},"Minimum"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"0,0")),(0,a.kt)("h4",{id:"maximum"},"Maximum"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"360,180")),(0,a.kt)("h4",{id:"expression-1"},"Expression"),(0,a.kt)("p",null,"Parameters: ",(0,a.kt)("inlineCode",{parentName:"p"},"zoom")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"skyatmospheresunintensity"},"skyAtmosphereSunIntensity"),(0,a.kt)("p",null,"Name: ",(0,a.kt)("inlineCode",{parentName:"p"},"skyAtmosphereSunIntensity")),(0,a.kt)("p",null,"Mapbox spec: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/style-spec/reference/layers/#paint-sky-sky-atmosphere-sun-intensity"},"sky-atmosphere-sun-intensity")),(0,a.kt)("h4",{id:"description-3"},"Description"),(0,a.kt)("p",null,"Intensity of the sun as a light source in the atmosphere (on a scale from 0 to a 100). Setting higher values will brighten up the sky."),(0,a.kt)("h4",{id:"type-3"},"Type"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"default-value-2"},"Default Value"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"10")),(0,a.kt)("h4",{id:"minimum-1"},"Minimum"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"0")),(0,a.kt)("h4",{id:"maximum-1"},"Maximum"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"100")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"skygradientcenter"},"skyGradientCenter"),(0,a.kt)("p",null,"Name: ",(0,a.kt)("inlineCode",{parentName:"p"},"skyGradientCenter")),(0,a.kt)("p",null,"Mapbox spec: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/style-spec/reference/layers/#paint-sky-sky-gradient-center"},"sky-gradient-center")),(0,a.kt)("h4",{id:"description-4"},"Description"),(0,a.kt)("p",null,"Position of the gradient center ","[a azimuthal angle, p polar angle]",". The azimuthal angle indicates the position of the gradient center relative to 0\xb0 north, where degrees proceed clockwise. The polar angle indicates the height of the gradient center, where 0\xb0 is directly above, at zenith, and 90\xb0 at the horizon."),(0,a.kt)("h4",{id:"type-4"},"Type"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"array<number>")),(0,a.kt)("h4",{id:"default-value-3"},"Default Value"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"[0,0]")),(0,a.kt)("h4",{id:"units-1"},"Units"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"degrees")),(0,a.kt)("h4",{id:"minimum-2"},"Minimum"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"0,0")),(0,a.kt)("h4",{id:"maximum-2"},"Maximum"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"360,180")),(0,a.kt)("h4",{id:"expression-2"},"Expression"),(0,a.kt)("p",null,"Parameters: ",(0,a.kt)("inlineCode",{parentName:"p"},"zoom")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"skygradientradius"},"skyGradientRadius"),(0,a.kt)("p",null,"Name: ",(0,a.kt)("inlineCode",{parentName:"p"},"skyGradientRadius")),(0,a.kt)("p",null,"Mapbox spec: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/style-spec/reference/layers/#paint-sky-sky-gradient-radius"},"sky-gradient-radius")),(0,a.kt)("h4",{id:"description-5"},"Description"),(0,a.kt)("p",null,"The angular distance (measured in degrees) from ",(0,a.kt)("inlineCode",{parentName:"p"},"skyGradientCenter")," up to which the gradient extends. A value of 180 causes the gradient to wrap around to the opposite direction from ",(0,a.kt)("inlineCode",{parentName:"p"},"skyGradientCenter"),"."),(0,a.kt)("h4",{id:"type-5"},"Type"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"default-value-4"},"Default Value"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"90")),(0,a.kt)("h4",{id:"minimum-3"},"Minimum"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"0")),(0,a.kt)("h4",{id:"maximum-3"},"Maximum"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"180")),(0,a.kt)("h4",{id:"expression-3"},"Expression"),(0,a.kt)("p",null,"Parameters: ",(0,a.kt)("inlineCode",{parentName:"p"},"zoom")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"skygradient"},"skyGradient"),(0,a.kt)("p",null,"Name: ",(0,a.kt)("inlineCode",{parentName:"p"},"skyGradient")),(0,a.kt)("p",null,"Mapbox spec: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/style-spec/reference/layers/#paint-sky-sky-gradient"},"sky-gradient")),(0,a.kt)("h4",{id:"description-6"},"Description"),(0,a.kt)("p",null,"Defines a radial color gradient with which to color the sky. The color values can be interpolated with an expression using ",(0,a.kt)("inlineCode",{parentName:"p"},"skyRadialProgress"),". The range ","[0, 1]"," for the interpolant covers a radial distance (in degrees) of ","[0, ",(0,a.kt)("inlineCode",{parentName:"p"},"skyGradientRadius"),"]"," centered at the position specified by ",(0,a.kt)("inlineCode",{parentName:"p"},"skyGradientCenter"),"."),(0,a.kt)("h4",{id:"type-6"},"Type"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"color")),(0,a.kt)("h4",{id:"default-value-5"},"Default Value"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"interpolate,linear,sky-radial-progress,0.8,#87ceeb,1,white")),(0,a.kt)("h4",{id:"expression-4"},"Expression"),(0,a.kt)("p",null,"Parameters: ",(0,a.kt)("inlineCode",{parentName:"p"},"sky-radial-progress")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"skyatmospherehalocolor"},"skyAtmosphereHaloColor"),(0,a.kt)("p",null,"Name: ",(0,a.kt)("inlineCode",{parentName:"p"},"skyAtmosphereHaloColor")),(0,a.kt)("p",null,"Mapbox spec: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/style-spec/reference/layers/#paint-sky-sky-atmosphere-halo-color"},"sky-atmosphere-halo-color")),(0,a.kt)("h4",{id:"description-7"},"Description"),(0,a.kt)("p",null,"A color applied to the atmosphere sun halo. The alpha channel describes how strongly the sun halo is represented in an atmosphere sky layer."),(0,a.kt)("h4",{id:"type-7"},"Type"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"color")),(0,a.kt)("h4",{id:"default-value-6"},"Default Value"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"white")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"skyatmospherecolor"},"skyAtmosphereColor"),(0,a.kt)("p",null,"Name: ",(0,a.kt)("inlineCode",{parentName:"p"},"skyAtmosphereColor")),(0,a.kt)("p",null,"Mapbox spec: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/style-spec/reference/layers/#paint-sky-sky-atmosphere-color"},"sky-atmosphere-color")),(0,a.kt)("h4",{id:"description-8"},"Description"),(0,a.kt)("p",null,"A color used to tweak the main atmospheric scattering coefficients. Using white applies the default coefficients giving the natural blue color to the atmosphere. This color affects how heavily the corresponding wavelength is represented during scattering. The alpha channel describes the density of the atmosphere, with 1 maximum density and 0 no density."),(0,a.kt)("h4",{id:"type-8"},"Type"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"color")),(0,a.kt)("h4",{id:"default-value-7"},"Default Value"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"white")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"skyopacity"},"skyOpacity"),(0,a.kt)("p",null,"Name: ",(0,a.kt)("inlineCode",{parentName:"p"},"skyOpacity")),(0,a.kt)("p",null,"Mapbox spec: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/style-spec/reference/layers/#paint-sky-sky-opacity"},"sky-opacity")),(0,a.kt)("h4",{id:"description-9"},"Description"),(0,a.kt)("p",null,"The opacity of the entire sky layer."),(0,a.kt)("h4",{id:"type-9"},"Type"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"default-value-8"},"Default Value"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"1")),(0,a.kt)("h4",{id:"minimum-4"},"Minimum"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"0")),(0,a.kt)("h4",{id:"maximum-4"},"Maximum"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"1")),(0,a.kt)("h4",{id:"expression-5"},"Expression"),(0,a.kt)("p",null,"Parameters: ",(0,a.kt)("inlineCode",{parentName:"p"},"zoom")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"skyopacitytransition"},"skyOpacityTransition"),(0,a.kt)("p",null,"Name: ",(0,a.kt)("inlineCode",{parentName:"p"},"skyOpacityTransition")),(0,a.kt)("h4",{id:"description-10"},"Description"),(0,a.kt)("p",null,"The transition affecting any changes to this layer\u2019s skyOpacity property."),(0,a.kt)("h4",{id:"type-10"},"Type"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"{ duration, delay }")),(0,a.kt)("h4",{id:"units-2"},"Units"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"milliseconds")),(0,a.kt)("h4",{id:"default-value-9"},"Default Value"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"{duration: 300, delay: 0}")))}k.isMDXComponent=!0}}]);