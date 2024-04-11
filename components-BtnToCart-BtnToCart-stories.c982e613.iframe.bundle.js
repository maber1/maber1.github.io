"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[117],{"./src/components/BtnToCart/BtnToCart.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _BtnToCart__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/BtnToCart/BtnToCart.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react/jsx-runtime.js"));function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const __WEBPACK_DEFAULT_EXPORT__={title:"Shop/Buttons/Button to cart",component:_BtnToCart__WEBPACK_IMPORTED_MODULE_0__.Z,tags:["autodocs"]};var Default={args:{counter:0,disabled:!1,label:"в корзину"},render:function render(_ref){var args=Object.assign({},(function _objectDestructuringEmpty(obj){if(null==obj)throw new TypeError("Cannot destructure "+obj)}(_ref),_ref));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_BtnToCart__WEBPACK_IMPORTED_MODULE_0__.Z,function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},args))}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    counter: 0,\n    disabled: false,\n    label: 'в корзину'\n  },\n  render: ({\n    ...args\n  }) => <BtnToCart {...args} />\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/icons/icon_addcart.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__=function SvgIconAddcart(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",width:19,height:17,fill:"currentColor"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M11.457 16.833a2.083 2.083 0 1 0 0-4.166 2.083 2.083 0 0 0 0 4.166m-7.291 0a2.083 2.083 0 1 0 0-4.166 2.083 2.083 0 0 0 0 4.166M17.747 2.17a1.002 1.002 0 0 0 0-2.003h-1.199c-.94 0-1.752.652-1.956 1.569l-1.305 5.877A2.004 2.004 0 0 1 11.33 9.18H3.505l-1.502-6.01h9.735a1.002 1.002 0 0 0 0-2.002H2.003A2.003 2.003 0 0 0 .06 3.659l1.502 6.008a2.003 2.003 0 0 0 1.943 1.518h7.825a4.006 4.006 0 0 0 3.912-3.138l1.306-5.877z"})))}},"./src/components/BtnToCart/BtnToCart.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>components_BtnToCart_BtnToCart});__webpack_require__("./node_modules/react/index.js");var icon_addcart=__webpack_require__("./src/icons/icon_addcart.svg"),Button=__webpack_require__("./src/components/Button/index.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),BtnToCart=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/BtnToCart/BtnToCart.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(BtnToCart.Z,options);BtnToCart.Z&&BtnToCart.Z.locals&&BtnToCart.Z.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["counter"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var BtnToCart_BtnToCart_BtnToCart=function BtnToCart(_ref){var counter=_ref.counter,props=_objectWithoutProperties(_ref,_excluded);return 0===counter?(0,jsx_runtime.jsx)(Button.Z,function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({icon:(0,jsx_runtime.jsx)(icon_addcart.Z,{})},props)):(0,jsx_runtime.jsxs)("div",{className:"container__btn-counter",children:[(0,jsx_runtime.jsx)(Button.Z,{label:"-",className:"button__action-minus"}),(0,jsx_runtime.jsx)("div",{className:"input__wrap",children:(0,jsx_runtime.jsx)("input",{type:"text",className:"input input__to-cart"})}),(0,jsx_runtime.jsx)(Button.Z,{label:"+",className:"button__action-plus"})]})};const components_BtnToCart_BtnToCart=BtnToCart_BtnToCart_BtnToCart;try{BtnToCart_BtnToCart_BtnToCart.displayName="BtnToCart",BtnToCart_BtnToCart_BtnToCart.__docgenInfo={description:"",displayName:"BtnToCart",props:{counter:{defaultValue:null,description:"",name:"counter",required:!0,type:{name:"number"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},lineCenter:{defaultValue:null,description:"",name:"lineCenter",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/BtnToCart/BtnToCart.tsx#BtnToCart"]={docgenInfo:BtnToCart_BtnToCart_BtnToCart.__docgenInfo,name:"BtnToCart",path:"src/components/BtnToCart/BtnToCart.tsx#BtnToCart"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>components_Button_Button});__webpack_require__("./node_modules/react/index.js");var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Button=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Button/Button.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Button.Z,options);Button.Z&&Button.Z.locals&&Button.Z.locals;var clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["label","icon","fullWidth","lineCenter"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Button_Button_Button=function Button(_ref){var label=_ref.label,icon=_ref.icon,fullWidth=_ref.fullWidth,lineCenter=_ref.lineCenter,props=_objectWithoutProperties(_ref,_excluded);return(0,jsx_runtime.jsxs)("button",_objectSpread(_objectSpread({type:"button"},props),{},{className:(0,clsx_m.Z)("button",fullWidth&&"button__w100",lineCenter&&"button__center",!label&&icon&&"button__icon",props.className),children:[icon,label]}))};Button_Button_Button.displayName="Button";const components_Button_Button=Button_Button_Button;try{Button_Button_Button.displayName="Button",Button_Button_Button.__docgenInfo={description:"",displayName:"Button",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},lineCenter:{defaultValue:null,description:"",name:"lineCenter",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:Button_Button_Button.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Button/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./src/components/Button/Button.tsx").Z},"./node_modules/clsx/dist/clsx.m.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/BtnToCart/BtnToCart.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.container__btn-counter{display:flex}.button__action-plus{border-left:unset;border-radius:0 20px 20px 0}.button__action-minus{border-right:unset;border-radius:20px 0 0 20px}.input__wrap{display:flex;align-items:center;border-bottom:2px solid;border-top:2px solid;padding:5px}[data-theme="light"] .input__wrap{border-color:#0156ff}[data-theme="dark"] .input__wrap{border-color:#fff}.input__to-cart{width:50px;height:20px;text-align:center;padding:5px 0;border-radius:unset}',"",{version:3,sources:["webpack://./src/components/BtnToCart/BtnToCart.scss","webpack://./src/styles/mixins.scss"],names:[],mappings:"AAIE,wBACE,YAAA,CAMA,qBACE,iBAAA,CACA,2BAAA,CAEF,sBACE,kBAAA,CACA,2BAAA,CAMJ,aACE,YAAA,CACA,kBAAA,CACA,uBAAA,CACA,oBAAA,CACA,WAAA,CCzBO,kCACP,oBAAA,CAEO,iCACP,iBAAA,CDyBF,gBACE,UAAA,CACA,WAAA,CACA,iBAAA,CACA,aAAA,CACA,mBAAA",sourcesContent:["@import '../../styles/common';\n\n.container {\n\n  &__btn-counter {\n    display: flex;\n  }\n}\n.button {\n  &__action {\n\n    &-plus {\n      border-left: unset;\n      border-radius: 0 20px 20px 0;\n    }\n    &-minus {\n      border-right: unset;\n      border-radius: 20px 0 0 20px;\n    }\n  }\n}\n\n.input {\n  &__wrap {\n    display: flex;\n    align-items: center;\n    border-bottom: 2px solid;\n    border-top: 2px solid;\n    padding: 5px;\n\n    @include theme(border-color, borderColor);\n  }\n  &__to-cart {\n    width: 50px;\n    height: 20px;\n    text-align: center;\n    padding: 5px 0;\n    border-radius: unset;\n  }\n}",'@import "./themes";\n\n@mixin theme($property, $var, $before:null, $after:null) {\n  @at-root :global([data-theme="light"]) #{&} {\n    #{$property}: #{$before} #{map-get($light, $var)} #{$after};\n  }\n  @at-root :global([data-theme="dark"]) #{&} {\n    #{$property}: #{$before} #{map-get($dark, $var)} #{$after};\n  }\n}'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"container__btn-counter":"container__btn-counter","button__action-plus":"button__action-plus","button__action-minus":"button__action-minus",input__wrap:"input__wrap","input__to-cart":"input__to-cart"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Button/Button.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.button{display:flex;align-content:center;justify-content:center;transition:all .4s;cursor:pointer;background:rgba(0,0,0,0);padding:8px 20px;border-radius:20px;border:2px solid;font-size:14px;font-weight:600}[data-theme="light"] .button{color:#0156ff}[data-theme="dark"] .button{color:#fff}[data-theme="light"] .button{background-color:#fff}[data-theme="dark"] .button{background-color:#333}[data-theme="light"] .button{border-color:#0156ff}[data-theme="dark"] .button{border-color:#fff}.button:disabled{color:#d2d2d2;border:2px solid #d2d2d2;cursor:not-allowed}.button svg{fill:currentColor;margin-right:10px}[data-theme="light"] .button:not([disabled]):hover{color:#fff}[data-theme="dark"] .button:not([disabled]):hover{color:#333}[data-theme="light"] .button:not([disabled]):hover{background-color:#0156ff}[data-theme="dark"] .button:not([disabled]):hover{background-color:#fff}.button__w100{width:100%}.button__center{margin:0 auto}.button__icon svg{margin-right:unset}',"",{version:3,sources:["webpack://./src/components/Button/Button.scss","webpack://./src/styles/mixins.scss"],names:[],mappings:"AAEA,QACE,YAAA,CACA,oBAAA,CACA,sBAAA,CACA,kBAAA,CACA,cAAA,CACA,wBAAA,CACA,gBAAA,CACA,kBAAA,CACA,gBAAA,CACA,cAAA,CACA,eAAA,CCVS,6BACP,aAAA,CAEO,4BACP,UAAA,CAJO,6BACP,qBAAA,CAEO,4BACP,qBAAA,CAJO,6BACP,oBAAA,CAEO,4BACP,iBAAA,CDYF,iBACE,aAAA,CACA,wBAAA,CACA,kBAAA,CAGF,YACE,iBAAA,CACA,iBAAA,CCxBO,mDACP,UAAA,CAEO,kDACP,UAAA,CAJO,mDACP,wBAAA,CAEO,kDACP,qBAAA,CD4BF,cACE,UAAA,CAGF,gBACE,aAAA,CAIA,kBACE,kBAAA",sourcesContent:["@import '../../styles/common';\n\n.button {\n  display: flex;\n  align-content: center;\n  justify-content: center;\n  transition: all .4s;\n  cursor: pointer;\n  background: transparent;\n  padding: 8px 20px;\n  border-radius: 20px;\n  border: 2px solid;\n  font-size: 14px;\n  font-weight: 600;\n\n  @include theme(color, buttonText);\n  @include theme(background-color, buttonBg);\n  @include theme(border-color, borderColor);\n\n  &:disabled {\n    color: #d2d2d2;\n    border: 2px solid #d2d2d2;\n    cursor: not-allowed;\n  }\n\n  svg {\n    fill: currentColor;\n    margin-right: 10px;\n  }\n\n  &:not([disabled]):hover {\n    @include theme(color, buttonTextHover);\n    @include theme(background-color, buttonBgHover);\n  }\n\n  &__w100 {\n    width: 100%;\n  }\n\n  &__center {\n    margin: 0 auto;\n  }\n\n  &__icon {\n    svg {\n      margin-right: unset;\n    }\n  }\n}",'@import "./themes";\n\n@mixin theme($property, $var, $before:null, $after:null) {\n  @at-root :global([data-theme="light"]) #{&} {\n    #{$property}: #{$before} #{map-get($light, $var)} #{$after};\n  }\n  @at-root :global([data-theme="dark"]) #{&} {\n    #{$property}: #{$before} #{map-get($dark, $var)} #{$after};\n  }\n}'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={button:"button",button__w100:"button__w100",button__center:"button__center",button__icon:"button__icon"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);