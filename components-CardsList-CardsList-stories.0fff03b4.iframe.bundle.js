"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[640],{"./src/components/CardsList/CardsList.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,ProductListButtonLoad:()=>ProductListButtonLoad,ProductListInfinityLoad:()=>ProductListInfinityLoad,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CardsList_stories});var react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),CardsList=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/CardsList/CardsList.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(CardsList.Z,options);CardsList.Z&&CardsList.Z.locals&&CardsList.Z.locals;var Card=__webpack_require__("./src/components/Card/Card.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),CardsList_CardsList_CardsList=function CardsList(_ref){var products=_ref.products,cardsRef=_ref.cardsRef;return(0,jsx_runtime.jsx)("div",{className:"cards",ref:cardsRef,children:products.map((function(item){return(0,jsx_runtime.jsx)(Card.Z,{image:item.image,name:item.name,description:item.description,price:item.price},item.id)}))})};CardsList_CardsList_CardsList.displayName="CardsList";const components_CardsList_CardsList=CardsList_CardsList_CardsList;try{CardsList_CardsList_CardsList.displayName="CardsList",CardsList_CardsList_CardsList.__docgenInfo={description:"",displayName:"CardsList",props:{products:{defaultValue:null,description:"",name:"products",required:!0,type:{name:"Product[]"}},cardsRef:{defaultValue:null,description:"",name:"cardsRef",required:!1,type:{name:"RefObject<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CardsList/CardsList.tsx#CardsList"]={docgenInfo:CardsList_CardsList_CardsList.__docgenInfo,name:"CardsList",path:"src/components/CardsList/CardsList.tsx#CardsList"})}catch(__react_docgen_typescript_loader_error){}var helpers=__webpack_require__("./src/components/helpers.tsx"),Button=__webpack_require__("./src/components/Button/index.ts");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||_unsupportedIterableToArray(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||_unsupportedIterableToArray(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}const CardsList_stories={title:"Shop/Cards/CardsList",component:components_CardsList_CardsList,tags:["autodocs"]};var Default={args:{products:[{id:"1",image:["/images/laptop.jpg"],name:'15.6" Ноутбук IRBIS NB260',description:"Изящный и производительный ноутбук Irbis NB260 обеспечит легкое выполнение работы вне офиса и не даст вам заскучать в пути. Ведь этот черный ноутбук весом в 1.7 кг и габаритами 227x365.5x23.7 см не только легок и удобен в переноске, но и оснащен всем необходимым для уверенного серфинга и легких коммуникаций в Интернете. Широкий 15.6-дюймовый экран с качественной и высококонтрастной IPS-матрицей разрешением 1920x1080 пикселей обеспечит вам FullHD-качество для просмотра видеоконтента и фильмов. Двухъядерный процессор Intel Celeron, работающий на изменяемых частотах от 1.1 до 2.4 МГц, в тандеме с 4 Гб оперативной памятью LPDDR3 обеспечат Irbis NB260 возможность решать различный спектр задач с минимумом времени на раздумья и загрузку приложений. Легкий доступ в Интернет обеспечит Wi-Fi стандарта 4 (802.11n), а быстрая коммутация с периферийным и иным оборудованием будет обеспечена благодаря наличию Bluetooth 4.0, а также 2 разноформатных USB-разъемов и слота micro HDMI.",price:18e3},{id:"2",image:["/images/laptop.jpg"],name:'11.6" Ноутбук IRBIS NB260',description:"Изящный и производительный ноутбук Irbis NB260 обеспечит легкое выполнение работы вне офиса и не даст вам заскучать в пути. Ведь этот черный ноутбук весом в 1.7 кг и габаритами 227x365.5x23.7 см не только легок и удобен в переноске, но и оснащен всем необходимым для уверенного серфинга и легких коммуникаций в Интернете. Широкий 15.6-дюймовый экран с качественной и высококонтрастной IPS-матрицей разрешением 1920x1080 пикселей обеспечит вам FullHD-качество для просмотра видеоконтента и фильмов. Двухъядерный процессор Intel Celeron, работающий на изменяемых частотах от 1.1 до 2.4 МГц, в тандеме с 4 Гб оперативной памятью LPDDR3 обеспечат Irbis NB260 возможность решать различный спектр задач с минимумом времени на раздумья и загрузку приложений. Легкий доступ в Интернет обеспечит Wi-Fi стандарта 4 (802.11n), а быстрая коммутация с периферийным и иным оборудованием будет обеспечена благодаря наличию Bluetooth 4.0, а также 2 разноформатных USB-разъемов и слота micro HDMI.",price:12e3},{id:"3",image:["/images/laptop.jpg"],name:'17.6" Ноутбук IRBIS NB220',description:"Изящный и производительный ноутбук Irbis NB260 обеспечит легкое выполнение работы вне офиса и не даст вам заскучать в пути. Ведь этот черный ноутбук весом в 1.7 кг и габаритами 227x365.5x23.7 см не только легок и удобен в переноске, но и оснащен всем необходимым для уверенного серфинга и легких коммуникаций в Интернете. Широкий 15.6-дюймовый экран с качественной и высококонтрастной IPS-матрицей разрешением 1920x1080 пикселей обеспечит вам FullHD-качество для просмотра видеоконтента и фильмов. Двухъядерный процессор Intel Celeron, работающий на изменяемых частотах от 1.1 до 2.4 МГц, в тандеме с 4 Гб оперативной памятью LPDDR3 обеспечат Irbis NB260 возможность решать различный спектр задач с минимумом времени на раздумья и загрузку приложений. Легкий доступ в Интернет обеспечит Wi-Fi стандарта 4 (802.11n), а быстрая коммутация с периферийным и иным оборудованием будет обеспечена благодаря наличию Bluetooth 4.0, а также 2 разноформатных USB-разъемов и слота micro HDMI.",price:12300},{id:"4",image:["/images/laptop.jpg"],name:'12.6" Ноутбук IRBIS NB260',description:"Изящный и производительный ноутбук Irbis NB260 обеспечит легкое выполнение работы вне офиса и не даст вам заскучать в пути. Ведь этот черный ноутбук весом в 1.7 кг и габаритами 227x365.5x23.7 см не только легок и удобен в переноске, но и оснащен всем необходимым для уверенного серфинга и легких коммуникаций в Интернете. Широкий 15.6-дюймовый экран с качественной и высококонтрастной IPS-матрицей разрешением 1920x1080 пикселей обеспечит вам FullHD-качество для просмотра видеоконтента и фильмов. Двухъядерный процессор Intel Celeron, работающий на изменяемых частотах от 1.1 до 2.4 МГц, в тандеме с 4 Гб оперативной памятью LPDDR3 обеспечат Irbis NB260 возможность решать различный спектр задач с минимумом времени на раздумья и загрузку приложений. Легкий доступ в Интернет обеспечит Wi-Fi стандарта 4 (802.11n), а быстрая коммутация с периферийным и иным оборудованием будет обеспечена благодаря наличию Bluetooth 4.0, а также 2 разноформатных USB-разъемов и слота micro HDMI.",price:17e4},{id:"5",image:["/images/laptop.jpg"],name:'11.6" Ноутбук IRBIS NB3330',description:"Изящный и производительный ноутбук Irbis NB260 обеспечит легкое выполнение работы вне офиса и не даст вам заскучать в пути. Ведь этот черный ноутбук весом в 1.7 кг и габаритами 227x365.5x23.7 см не только легок и удобен в переноске, но и оснащен всем необходимым для уверенного серфинга и легких коммуникаций в Интернете. Широкий 15.6-дюймовый экран с качественной и высококонтрастной IPS-матрицей разрешением 1920x1080 пикселей обеспечит вам FullHD-качество для просмотра видеоконтента и фильмов. Двухъядерный процессор Intel Celeron, работающий на изменяемых частотах от 1.1 до 2.4 МГц, в тандеме с 4 Гб оперативной памятью LPDDR3 обеспечат Irbis NB260 возможность решать различный спектр задач с минимумом времени на раздумья и загрузку приложений. Легкий доступ в Интернет обеспечит Wi-Fi стандарта 4 (802.11n), а быстрая коммутация с периферийным и иным оборудованием будет обеспечена благодаря наличию Bluetooth 4.0, а также 2 разноформатных USB-разъемов и слота micro HDMI.",price:133e3}]},render:function render(_ref){var args=Object.assign({},(function _objectDestructuringEmpty(obj){if(null==obj)throw new TypeError("Cannot destructure "+obj)}(_ref),_ref));return(0,jsx_runtime.jsx)(components_CardsList_CardsList,{products:args.products})}},ProductListInfinityLoad={render:function render(){var _useState2=_slicedToArray((0,react.useState)((0,helpers.y)(12)),2),products=_useState2[0],setProducts=_useState2[1],itemsContainer=(0,react.useRef)(null);return(0,react.useEffect)((function(){var lastItem=itemsContainer.current.children[itemsContainer.current.children.length-1],infinityObserver=new IntersectionObserver((function(_ref2,observer){var entry=_slicedToArray(_ref2,1)[0];entry.isIntersecting&&(observer.unobserve(entry.target),setProducts((function(prevProducts){return[].concat(_toConsumableArray(prevProducts),_toConsumableArray((0,helpers.y)(12)))})))}),{rootMargin:"100px 0px 0px"});lastItem&&infinityObserver.observe(lastItem)}),[products]),(0,jsx_runtime.jsx)(components_CardsList_CardsList,{cardsRef:itemsContainer,products})}},ProductListButtonLoad={render:function render(){var _useState4=_slicedToArray((0,react.useState)((0,helpers.y)(12)),2),products=_useState4[0],setProducts=_useState4[1];return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(components_CardsList_CardsList,{products}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)(Button.Z,{label:"Показать еще",lineCenter:!0,onClick:function handleLoadProducts(){return setProducts((function(prevProducts){return[].concat(_toConsumableArray(prevProducts),_toConsumableArray((0,helpers.y)(12)))}))}})]})}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    products: [{\n      id: '1',\n      image: ['/images/laptop.jpg'],\n      name: '15.6\" Ноутбук IRBIS NB260',\n      description: 'Изящный и производительный ноутбук Irbis NB260 обеспечит легкое выполнение работы вне офиса и не даст вам заскучать в пути. Ведь этот черный ноутбук весом в 1.7 кг и габаритами 227x365.5x23.7 см не только легок и удобен в переноске, но и оснащен всем необходимым для уверенного серфинга и легких коммуникаций в Интернете. Широкий 15.6-дюймовый экран с качественной и высококонтрастной IPS-матрицей разрешением 1920x1080 пикселей обеспечит вам FullHD-качество для просмотра видеоконтента и фильмов. Двухъядерный процессор Intel Celeron, работающий на изменяемых частотах от 1.1 до 2.4 МГц, в тандеме с 4 Гб оперативной памятью LPDDR3 обеспечат Irbis NB260 возможность решать различный спектр задач с минимумом времени на раздумья и загрузку приложений. Легкий доступ в Интернет обеспечит Wi-Fi стандарта 4 (802.11n), а быстрая коммутация с периферийным и иным оборудованием будет обеспечена благодаря наличию Bluetooth 4.0, а также 2 разноформатных USB-разъемов и слота micro HDMI.',\n      price: 18000\n    }, {\n      id: '2',\n      image: ['/images/laptop.jpg'],\n      name: '11.6\" Ноутбук IRBIS NB260',\n      description: 'Изящный и производительный ноутбук Irbis NB260 обеспечит легкое выполнение работы вне офиса и не даст вам заскучать в пути. Ведь этот черный ноутбук весом в 1.7 кг и габаритами 227x365.5x23.7 см не только легок и удобен в переноске, но и оснащен всем необходимым для уверенного серфинга и легких коммуникаций в Интернете. Широкий 15.6-дюймовый экран с качественной и высококонтрастной IPS-матрицей разрешением 1920x1080 пикселей обеспечит вам FullHD-качество для просмотра видеоконтента и фильмов. Двухъядерный процессор Intel Celeron, работающий на изменяемых частотах от 1.1 до 2.4 МГц, в тандеме с 4 Гб оперативной памятью LPDDR3 обеспечат Irbis NB260 возможность решать различный спектр задач с минимумом времени на раздумья и загрузку приложений. Легкий доступ в Интернет обеспечит Wi-Fi стандарта 4 (802.11n), а быстрая коммутация с периферийным и иным оборудованием будет обеспечена благодаря наличию Bluetooth 4.0, а также 2 разноформатных USB-разъемов и слота micro HDMI.',\n      price: 12000\n    }, {\n      id: '3',\n      image: ['/images/laptop.jpg'],\n      name: '17.6\" Ноутбук IRBIS NB220',\n      description: 'Изящный и производительный ноутбук Irbis NB260 обеспечит легкое выполнение работы вне офиса и не даст вам заскучать в пути. Ведь этот черный ноутбук весом в 1.7 кг и габаритами 227x365.5x23.7 см не только легок и удобен в переноске, но и оснащен всем необходимым для уверенного серфинга и легких коммуникаций в Интернете. Широкий 15.6-дюймовый экран с качественной и высококонтрастной IPS-матрицей разрешением 1920x1080 пикселей обеспечит вам FullHD-качество для просмотра видеоконтента и фильмов. Двухъядерный процессор Intel Celeron, работающий на изменяемых частотах от 1.1 до 2.4 МГц, в тандеме с 4 Гб оперативной памятью LPDDR3 обеспечат Irbis NB260 возможность решать различный спектр задач с минимумом времени на раздумья и загрузку приложений. Легкий доступ в Интернет обеспечит Wi-Fi стандарта 4 (802.11n), а быстрая коммутация с периферийным и иным оборудованием будет обеспечена благодаря наличию Bluetooth 4.0, а также 2 разноформатных USB-разъемов и слота micro HDMI.',\n      price: 12300\n    }, {\n      id: '4',\n      image: ['/images/laptop.jpg'],\n      name: '12.6\" Ноутбук IRBIS NB260',\n      description: 'Изящный и производительный ноутбук Irbis NB260 обеспечит легкое выполнение работы вне офиса и не даст вам заскучать в пути. Ведь этот черный ноутбук весом в 1.7 кг и габаритами 227x365.5x23.7 см не только легок и удобен в переноске, но и оснащен всем необходимым для уверенного серфинга и легких коммуникаций в Интернете. Широкий 15.6-дюймовый экран с качественной и высококонтрастной IPS-матрицей разрешением 1920x1080 пикселей обеспечит вам FullHD-качество для просмотра видеоконтента и фильмов. Двухъядерный процессор Intel Celeron, работающий на изменяемых частотах от 1.1 до 2.4 МГц, в тандеме с 4 Гб оперативной памятью LPDDR3 обеспечат Irbis NB260 возможность решать различный спектр задач с минимумом времени на раздумья и загрузку приложений. Легкий доступ в Интернет обеспечит Wi-Fi стандарта 4 (802.11n), а быстрая коммутация с периферийным и иным оборудованием будет обеспечена благодаря наличию Bluetooth 4.0, а также 2 разноформатных USB-разъемов и слота micro HDMI.',\n      price: 170000\n    }, {\n      id: '5',\n      image: ['/images/laptop.jpg'],\n      name: '11.6\" Ноутбук IRBIS NB3330',\n      description: 'Изящный и производительный ноутбук Irbis NB260 обеспечит легкое выполнение работы вне офиса и не даст вам заскучать в пути. Ведь этот черный ноутбук весом в 1.7 кг и габаритами 227x365.5x23.7 см не только легок и удобен в переноске, но и оснащен всем необходимым для уверенного серфинга и легких коммуникаций в Интернете. Широкий 15.6-дюймовый экран с качественной и высококонтрастной IPS-матрицей разрешением 1920x1080 пикселей обеспечит вам FullHD-качество для просмотра видеоконтента и фильмов. Двухъядерный процессор Intel Celeron, работающий на изменяемых частотах от 1.1 до 2.4 МГц, в тандеме с 4 Гб оперативной памятью LPDDR3 обеспечат Irbis NB260 возможность решать различный спектр задач с минимумом времени на раздумья и загрузку приложений. Легкий доступ в Интернет обеспечит Wi-Fi стандарта 4 (802.11n), а быстрая коммутация с периферийным и иным оборудованием будет обеспечена благодаря наличию Bluetooth 4.0, а также 2 разноформатных USB-разъемов и слота micro HDMI.',\n      price: 133000\n    }]\n  },\n  render: ({\n    ...args\n  }) => {\n    return <CardsList products={args.products} />;\n  }\n}",...Default.parameters?.docs?.source}}},ProductListInfinityLoad.parameters={...ProductListInfinityLoad.parameters,docs:{...ProductListInfinityLoad.parameters?.docs,source:{originalSource:"{\n  render: () => {\n    const [products, setProducts] = useState(generateRandomProducts(12));\n    const itemsContainer = useRef<HTMLDivElement>(null);\n    useEffect(() => {\n      const lastItem = itemsContainer.current.children[itemsContainer.current.children.length - 1];\n      const infinityObserver = new IntersectionObserver(([entry], observer) => {\n        if (entry.isIntersecting) {\n          observer.unobserve(entry.target);\n          setProducts(prevProducts => [...prevProducts, ...generateRandomProducts(12)]);\n        }\n      }, {\n        rootMargin: '100px 0px 0px'\n      });\n      if (lastItem) {\n        infinityObserver.observe(lastItem);\n      }\n    }, [products]);\n    return <CardsList cardsRef={itemsContainer} products={products} />;\n  }\n}",...ProductListInfinityLoad.parameters?.docs?.source}}},ProductListButtonLoad.parameters={...ProductListButtonLoad.parameters,docs:{...ProductListButtonLoad.parameters?.docs,source:{originalSource:"{\n  render: () => {\n    const [products, setProducts] = useState(generateRandomProducts(12));\n    const handleLoadProducts = () => setProducts(prevProducts => [...prevProducts, ...generateRandomProducts(12)]);\n    return <>\n                <CardsList products={products} />\n                <br />\n                <Button label='Показать еще' lineCenter onClick={handleLoadProducts} />\n            </>;\n  }\n}",...ProductListButtonLoad.parameters?.docs?.source}}};const __namedExportsOrder=["Default","ProductListInfinityLoad","ProductListButtonLoad"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/CardsList/CardsList.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".cards{display:grid;gap:1em;grid-template-columns:repeat(4, 1fr);justify-items:center}","",{version:3,sources:["webpack://./src/components/CardsList/CardsList.scss"],names:[],mappings:"AAAA,OACE,YAAA,CACA,OAAA,CACA,oCAAA,CACA,oBAAA",sourcesContent:[".cards {\n  display: grid;\n  gap: 1em;\n  grid-template-columns: repeat(4, 1fr);\n  justify-items: center;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={cards:"cards"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);