"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[960],{"./src/components/Forms/ProductForm/ProductForm.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AddProductForm:()=>AddProductForm,EditProductForm:()=>EditProductForm,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ProductForm_stories});var react=__webpack_require__("./node_modules/react/index.js"),index_esm=__webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs"),Button=__webpack_require__("./src/components/Button/index.ts"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),jsx_runtime=(__webpack_require__("./src/components/Forms/Forms.scss"),__webpack_require__("./node_modules/react/jsx-runtime.js"));function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var ProductForm=function ProductForm(data){var _useForm=(0,index_esm.cI)(),register=_useForm.register,handleSubmit=_useForm.handleSubmit,_useForm$formState=_useForm.formState,errors=_useForm$formState.errors,isSubmitSuccessful=_useForm$formState.isSubmitSuccessful,reset=_useForm.reset,formOptions={name:{required:"*обязательное поле",minLength:{value:3,message:"Минимальная длинна 3 символа"}},description:{required:"*обязательное поле"},price:{min:{value:1,message:"Не меньше 1"},value:"",required:"*обязательное поле"},image:{required:"*обязательное поле"}};return(0,react.useEffect)((function(){isSubmitSuccessful&&reset(),data.id&&reset({name:data.name,description:data.description,price:data.price.toString(),image:data.image})}),[data,isSubmitSuccessful]),(0,jsx_runtime.jsxs)("form",{className:"form",onSubmit:handleSubmit((function onSubmit(data){console.log(data)})),children:[(0,jsx_runtime.jsxs)("div",{className:"form__group",children:[(0,jsx_runtime.jsx)("label",{children:"Наименование:"}),(0,jsx_runtime.jsx)("input",_objectSpread({type:"text",className:(0,clsx_m.Z)("input",errors.name&&"input__error")},register("name",formOptions.name))),errors.name&&(0,jsx_runtime.jsx)("p",{className:"form__errors",children:errors.name.message})]}),(0,jsx_runtime.jsxs)("div",{className:"form__group",children:[(0,jsx_runtime.jsx)("label",{children:"Описание:"}),(0,jsx_runtime.jsx)("textarea",_objectSpread({rows:5,cols:50,className:(0,clsx_m.Z)("input",errors.description&&"input__error")},register("description",formOptions.description))),errors.description&&(0,jsx_runtime.jsx)("p",{className:"form__errors",children:errors.description.message})]}),(0,jsx_runtime.jsxs)("div",{className:"form__group",children:[(0,jsx_runtime.jsx)("label",{children:"Цена:"}),(0,jsx_runtime.jsx)("input",_objectSpread({type:"number",className:(0,clsx_m.Z)("input",errors.price&&"input__error")},register("price",formOptions.price))),errors.price&&(0,jsx_runtime.jsx)("p",{className:"form__errors",children:errors.price.message})]}),(0,jsx_runtime.jsxs)("div",{className:"form__group",children:[(0,jsx_runtime.jsx)("label",{children:"Изображение:"}),(null==data?void 0:data.image)&&(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)("img",{src:data.image,alt:"",width:100})}),(0,jsx_runtime.jsx)("input",_objectSpread({type:"file",className:(0,clsx_m.Z)("input",errors.image&&"input__error")},register("image",formOptions.image))),errors.image&&(0,jsx_runtime.jsx)("p",{className:"form__errors",children:errors.image.message})]}),(0,jsx_runtime.jsx)(Button.Z,{type:"submit",label:null!=data&&data.id?"Сохранить":"Создать"})]})};ProductForm.displayName="ProductForm";const ProductForm_ProductForm=ProductForm;try{ProductForm.displayName="ProductForm",ProductForm.__docgenInfo={description:"",displayName:"ProductForm",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Forms/ProductForm/ProductForm.tsx#ProductForm"]={docgenInfo:ProductForm.__docgenInfo,name:"ProductForm",path:"src/components/Forms/ProductForm/ProductForm.tsx#ProductForm"})}catch(__react_docgen_typescript_loader_error){}function ProductForm_stories_typeof(o){return ProductForm_stories_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},ProductForm_stories_typeof(o)}function ProductForm_stories_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function ProductForm_stories_defineProperty(obj,key,value){return(key=function ProductForm_stories_toPropertyKey(arg){var key=function ProductForm_stories_toPrimitive(input,hint){if("object"!==ProductForm_stories_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==ProductForm_stories_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===ProductForm_stories_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const ProductForm_stories={title:"Shop/Forms/ProductForm",component:ProductForm_ProductForm,tags:["autodocs"]};var EditProductForm={args:{id:1,image:"/images/laptop.jpg",name:'15.6" Ноутбук IRBIS NB260',description:"Изящный и производительный ноутбук Irbis NB260 обеспечит легкое выполнение работы вне офиса и не даст вам заскучать в пути. Ведь этот черный ноутбук весом в 1.7 кг и габаритами 227x365.5x23.7 см не только легок и удобен в переноске, но и оснащен всем необходимым для уверенного серфинга и легких коммуникаций в Интернете. Широкий 15.6-дюймовый экран с качественной и высококонтрастной IPS-матрицей разрешением 1920x1080 пикселей обеспечит вам FullHD-качество для просмотра видеоконтента и фильмов. Двухъядерный процессор Intel Celeron, работающий на изменяемых частотах от 1.1 до 2.4 МГц, в тандеме с 4 Гб оперативной памятью LPDDR3 обеспечат Irbis NB260 возможность решать различный спектр задач с минимумом времени на раздумья и загрузку приложений. Легкий доступ в Интернет обеспечит Wi-Fi стандарта 4 (802.11n), а быстрая коммутация с периферийным и иным оборудованием будет обеспечена благодаря наличию Bluetooth 4.0, а также 2 разноформатных USB-разъемов и слота micro HDMI.",price:"18000"},render:function render(args){return(0,jsx_runtime.jsx)(ProductForm_ProductForm,function ProductForm_stories_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ProductForm_stories_ownKeys(Object(t),!0).forEach((function(r){ProductForm_stories_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ProductForm_stories_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},args))}},AddProductForm={render:function render(){return(0,jsx_runtime.jsx)(ProductForm_ProductForm,{})}};EditProductForm.parameters={...EditProductForm.parameters,docs:{...EditProductForm.parameters?.docs,source:{originalSource:"{\n  args: {\n    id: 1,\n    image: '/images/laptop.jpg',\n    name: '15.6\" Ноутбук IRBIS NB260',\n    description: 'Изящный и производительный ноутбук Irbis NB260 обеспечит легкое выполнение работы вне офиса и не даст вам заскучать в пути. Ведь этот черный ноутбук весом в 1.7 кг и габаритами 227x365.5x23.7 см не только легок и удобен в переноске, но и оснащен всем необходимым для уверенного серфинга и легких коммуникаций в Интернете. Широкий 15.6-дюймовый экран с качественной и высококонтрастной IPS-матрицей разрешением 1920x1080 пикселей обеспечит вам FullHD-качество для просмотра видеоконтента и фильмов. Двухъядерный процессор Intel Celeron, работающий на изменяемых частотах от 1.1 до 2.4 МГц, в тандеме с 4 Гб оперативной памятью LPDDR3 обеспечат Irbis NB260 возможность решать различный спектр задач с минимумом времени на раздумья и загрузку приложений. Легкий доступ в Интернет обеспечит Wi-Fi стандарта 4 (802.11n), а быстрая коммутация с периферийным и иным оборудованием будет обеспечена благодаря наличию Bluetooth 4.0, а также 2 разноформатных USB-разъемов и слота micro HDMI.',\n    price: '18000'\n  },\n  render: args => <ProductForm {...args} />\n}",...EditProductForm.parameters?.docs?.source}}},AddProductForm.parameters={...AddProductForm.parameters,docs:{...AddProductForm.parameters?.docs,source:{originalSource:"{\n  render: () => <ProductForm />\n}",...AddProductForm.parameters?.docs?.source}}};const __namedExportsOrder=["EditProductForm","AddProductForm"]},"./src/components/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>components_Button_Button});__webpack_require__("./node_modules/react/index.js");var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Button=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Button/Button.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Button.Z,options);Button.Z&&Button.Z.locals&&Button.Z.locals;var clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["label","icon","fullWidth","lineCenter"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Button_Button_Button=function Button(_ref){var label=_ref.label,icon=_ref.icon,fullWidth=_ref.fullWidth,lineCenter=_ref.lineCenter,props=_objectWithoutProperties(_ref,_excluded);return(0,jsx_runtime.jsxs)("button",_objectSpread(_objectSpread({type:"button"},props),{},{className:(0,clsx_m.Z)("button",fullWidth&&"button__w100",lineCenter&&"button__center",!label&&icon&&"button__icon",props.className),children:[icon,label]}))};Button_Button_Button.displayName="Button";const components_Button_Button=Button_Button_Button;try{Button_Button_Button.displayName="Button",Button_Button_Button.__docgenInfo={description:"",displayName:"Button",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},lineCenter:{defaultValue:null,description:"",name:"lineCenter",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:Button_Button_Button.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Button/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./src/components/Button/Button.tsx").Z},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Button/Button.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.button{display:flex;align-content:center;justify-content:center;transition:all .4s;cursor:pointer;background:rgba(0,0,0,0);padding:8px 20px;border-radius:20px;border:2px solid;font-size:14px;font-weight:600}[data-theme="light"] .button{color:#0156ff}[data-theme="dark"] .button{color:#fff}[data-theme="light"] .button{background-color:#fff}[data-theme="dark"] .button{background-color:#333}[data-theme="light"] .button{border-color:#0156ff}[data-theme="dark"] .button{border-color:#fff}.button:disabled{color:#d2d2d2;border:2px solid #d2d2d2;cursor:not-allowed}.button svg{fill:currentColor;margin-right:10px}[data-theme="light"] .button:not([disabled]):hover{color:#fff}[data-theme="dark"] .button:not([disabled]):hover{color:#333}[data-theme="light"] .button:not([disabled]):hover{background-color:#0156ff}[data-theme="dark"] .button:not([disabled]):hover{background-color:#fff}.button__w100{width:100%}.button__center{margin:0 auto}.button__icon svg{margin-right:unset}',"",{version:3,sources:["webpack://./src/components/Button/Button.scss","webpack://./src/styles/mixins.scss"],names:[],mappings:"AAEA,QACE,YAAA,CACA,oBAAA,CACA,sBAAA,CACA,kBAAA,CACA,cAAA,CACA,wBAAA,CACA,gBAAA,CACA,kBAAA,CACA,gBAAA,CACA,cAAA,CACA,eAAA,CCVS,6BACP,aAAA,CAEO,4BACP,UAAA,CAJO,6BACP,qBAAA,CAEO,4BACP,qBAAA,CAJO,6BACP,oBAAA,CAEO,4BACP,iBAAA,CDYF,iBACE,aAAA,CACA,wBAAA,CACA,kBAAA,CAGF,YACE,iBAAA,CACA,iBAAA,CCxBO,mDACP,UAAA,CAEO,kDACP,UAAA,CAJO,mDACP,wBAAA,CAEO,kDACP,qBAAA,CD4BF,cACE,UAAA,CAGF,gBACE,aAAA,CAIA,kBACE,kBAAA",sourcesContent:["@import '../../styles/common';\n\n.button {\n  display: flex;\n  align-content: center;\n  justify-content: center;\n  transition: all .4s;\n  cursor: pointer;\n  background: transparent;\n  padding: 8px 20px;\n  border-radius: 20px;\n  border: 2px solid;\n  font-size: 14px;\n  font-weight: 600;\n\n  @include theme(color, buttonText);\n  @include theme(background-color, buttonBg);\n  @include theme(border-color, borderColor);\n\n  &:disabled {\n    color: #d2d2d2;\n    border: 2px solid #d2d2d2;\n    cursor: not-allowed;\n  }\n\n  svg {\n    fill: currentColor;\n    margin-right: 10px;\n  }\n\n  &:not([disabled]):hover {\n    @include theme(color, buttonTextHover);\n    @include theme(background-color, buttonBgHover);\n  }\n\n  &__w100 {\n    width: 100%;\n  }\n\n  &__center {\n    margin: 0 auto;\n  }\n\n  &__icon {\n    svg {\n      margin-right: unset;\n    }\n  }\n}",'@import "./themes";\n\n@mixin theme($property, $var, $before:null, $after:null) {\n  @at-root :global([data-theme="light"]) #{&} {\n    #{$property}: #{$before} #{map-get($light, $var)} #{$after};\n  }\n  @at-root :global([data-theme="dark"]) #{&} {\n    #{$property}: #{$before} #{map-get($dark, $var)} #{$after};\n  }\n}'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={button:"button",button__w100:"button__w100",button__center:"button__center",button__icon:"button__icon"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Forms/Forms.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".form{display:flex;flex-direction:column;align-items:flex-start}.form label{font-size:14px;font-weight:bold}.form__group{display:flex;flex-direction:column;margin-bottom:5px}.form__group:last-of-type{margin-bottom:15px}.form__errors{font-size:12px;color:#cc3a3a}","",{version:3,sources:["webpack://./src/components/Forms/Forms.scss"],names:[],mappings:"AAEA,MACE,YAAA,CACA,qBAAA,CACA,sBAAA,CAEA,YACE,cAAA,CACA,gBAAA,CAGF,aACE,YAAA,CACA,qBAAA,CACA,iBAAA,CAEA,0BACE,kBAAA,CAIJ,cACE,cAAA,CACA,aAAA",sourcesContent:["@import '../../styles/common';\n\n.form {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n\n  label {\n    font-size: 14px;\n    font-weight: bold;\n  }\n\n  &__group {\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 5px;\n\n    &:last-of-type {\n      margin-bottom: 15px;\n    }\n  }\n\n  &__errors {\n    font-size: 12px;\n    color: #cc3a3a;\n  }\n}"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={form:"form",form__group:"form__group",form__errors:"form__errors"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/components/Forms/Forms.scss":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_Forms_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Forms/Forms.scss"),options={};options.styleTagTransform=_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_Forms_scss__WEBPACK_IMPORTED_MODULE_6__.Z,options),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_Forms_scss__WEBPACK_IMPORTED_MODULE_6__.Z&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_Forms_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_Forms_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals}}]);