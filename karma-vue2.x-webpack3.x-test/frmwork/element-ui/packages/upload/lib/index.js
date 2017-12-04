!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("vue")):"function"==typeof define&&define.amd?define("ElUpload",["vue"],t):"object"==typeof exports?exports.ElUpload=t(require("vue")):e.ElUpload=t(e.Vue)}("undefined"!=typeof self?self:this,function(e){return function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=3)}([function(e,t){e.exports=function(e,t,n,i,r,o){var a,s=e=e||{},l=typeof e.default;"object"!==l&&"function"!==l||(a=e,s=e.default);var u="function"==typeof s?s.options:s;t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0),n&&(u.functional=!0),r&&(u._scopeId=r);var c;if(o?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},u._ssrRegister=c):i&&(c=i),c){var d=u.functional,f=d?u.render:u.beforeCreate;d?(u._injectStyles=c,u.render=function(e,t){return c.call(t),f(e,t)}):u.beforeCreate=f?[].concat(f,c):[c]}return{esModule:a,exports:s,options:u}}},function(e,t,n){"use strict";t.__esModule=!0;var i=n(16),r=function(e){return e&&e.__esModule?e:{default:e}}(i);r.default.install=function(e){e.component(r.default.name,r.default)},t.default=r.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(24),r=n.n(i),o=n(25),a=n(0),s=a(r.a,o.a,!1,null,null,null);t.default=s.exports},function(e,t,n){e.exports=n(4)},function(e,t,n){"use strict";t.__esModule=!0;var i=n(5),r=function(e){return e&&e.__esModule?e:{default:e}}(i);r.default.install=function(e){e.component(r.default.name,r.default)},t.default=r.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(6),r=n.n(i),o=n(0),a=o(r.a,null,!1,null,null,null);t.default=a.exports},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function r(){}t.__esModule=!0;var o=n(7),a=i(o),s=n(20),l=i(s),u=n(26),c=i(u),d=n(1),f=i(d),p=n(28),h=i(p);t.default={name:"ElUpload",mixins:[h.default],components:{ElProgress:f.default,UploadList:a.default,Upload:l.default,IframeUpload:c.default},provide:{uploader:void 0},props:{action:{type:String,required:!0},headers:{type:Object,default:function(){return{}}},data:Object,multiple:Boolean,name:{type:String,default:"file"},drag:Boolean,dragger:Boolean,withCredentials:Boolean,showFileList:{type:Boolean,default:!0},accept:String,type:{type:String,default:"select"},beforeUpload:Function,onRemove:{type:Function,default:r},onChange:{type:Function,default:r},onPreview:{type:Function},onSuccess:{type:Function,default:r},onProgress:{type:Function,default:r},onError:{type:Function,default:r},fileList:{type:Array,default:function(){return[]}},autoUpload:{type:Boolean,default:!0},listType:{type:String,default:"text"},httpRequest:Function,disabled:Boolean,limit:Number,onExceed:{type:Function,default:r}},data:function(){return{uploadFiles:[],dragOver:!1,draging:!1,tempIndex:1}},watch:{fileList:{immediate:!0,handler:function(e){var t=this;this.uploadFiles=e.map(function(e){return e.uid=e.uid||Date.now()+t.tempIndex++,e.status="success",e})}}},methods:{handleStart:function(e){e.uid=Date.now()+this.tempIndex++;var t={status:"ready",name:e.name,size:e.size,percentage:0,uid:e.uid,raw:e};try{t.url=URL.createObjectURL(e)}catch(e){return void console.error(e)}this.uploadFiles.push(t),this.onChange(t,this.uploadFiles)},handleProgress:function(e,t){var n=this.getFile(t);this.onProgress(e,n,this.uploadFiles),n.status="uploading",n.percentage=e.percent||0},handleSuccess:function(e,t){var n=this.getFile(t);n&&(n.status="success",n.response=e,this.onSuccess(e,n,this.uploadFiles),this.onChange(n,this.uploadFiles))},handleError:function(e,t){var n=this.getFile(t),i=this.uploadFiles;n.status="fail",i.splice(i.indexOf(n),1),this.onError(e,n,this.uploadFiles),this.onChange(n,this.uploadFiles)},handleRemove:function(e,t){t&&(e=this.getFile(t)),this.abort(e);var n=this.uploadFiles;n.splice(n.indexOf(e),1),this.onRemove(e,n)},getFile:function(e){var t=this.uploadFiles,n=void 0;return t.every(function(t){return!(n=e.uid===t.uid?t:null)}),n},abort:function(e){this.$refs["upload-inner"].abort(e)},clearFiles:function(){this.uploadFiles=[]},submit:function(){var e=this;this.uploadFiles.filter(function(e){return"ready"===e.status}).forEach(function(t){e.$refs["upload-inner"].upload(t.raw)})},getMigratingConfig:function(){return{props:{"default-file-list":"default-file-list is renamed to file-list.","show-upload-list":"show-upload-list is renamed to show-file-list.","thumbnail-mode":"thumbnail-mode has been deprecated, you can implement the same effect according to this case: http://element.eleme.io/#/zh-CN/component/upload#yong-hu-tou-xiang-shang-chuan"}}}},render:function(e){var t=void 0;this.showFileList&&(t=e(a.default,{attrs:{disabled:this.disabled,listType:this.listType,files:this.uploadFiles,handlePreview:this.onPreview},on:{remove:this.handleRemove}},[]));var n={props:{type:this.type,drag:this.drag,action:this.action,multiple:this.multiple,"before-upload":this.beforeUpload,"with-credentials":this.withCredentials,headers:this.headers,name:this.name,data:this.data,accept:this.accept,fileList:this.uploadFiles,autoUpload:this.autoUpload,listType:this.listType,disabled:this.disabled,limit:this.limit,"on-exceed":this.onExceed,"on-start":this.handleStart,"on-progress":this.handleProgress,"on-success":this.handleSuccess,"on-error":this.handleError,"on-preview":this.onPreview,"on-remove":this.handleRemove,"http-request":this.httpRequest},ref:"upload-inner"},i=this.$slots.trigger||this.$slots.default,r="undefined"!=typeof FormData||this.$isServer?e("upload",n,[i]):e("iframeUpload",n,[i]);return e("div",null,["picture-card"===this.listType?t:"",this.$slots.trigger?[r,this.$slots.default]:r,this.$slots.tip,"picture-card"!==this.listType?t:""])}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(8),r=n.n(i),o=n(19),a=n(0),s=a(r.a,o.a,!1,null,null,null);t.default=s.exports},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(9),o=i(r),a=n(1),s=i(a);t.default={mixins:[o.default],data:function(){return{focusing:!1}},components:{ElProgress:s.default},props:{files:{type:Array,default:function(){return[]}},disabled:{type:Boolean,default:!1},handlePreview:Function,listType:String},methods:{parsePercentage:function(e){return parseInt(e,10)},handleClick:function(e){this.handlePreview&&this.handlePreview(e)}}}},function(e,t,n){"use strict";t.__esModule=!0;var i=n(10);t.default={methods:{t:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return i.t.apply(this,t)}}}},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.i18n=t.use=t.t=void 0;var r=n(11),o=i(r),a=n(12),s=i(a),l=n(13),u=i(l),c=n(14),d=i(c),f=(0,d.default)(s.default),p=o.default,h=!1,v=function(){var e=Object.getPrototypeOf(this||s.default).$t;if("function"==typeof e&&s.default.locale)return h||(h=!0,s.default.locale(s.default.config.lang,(0,u.default)(p,s.default.locale(s.default.config.lang)||{},{clone:!0}))),e.apply(this,arguments)},m=t.t=function(e,t){var n=v.apply(this,arguments);if(null!==n&&void 0!==n)return n;for(var i=e.split("."),r=p,o=0,a=i.length;o<a;o++){if(n=r[i[o]],o===a-1)return f(n,t);if(!n)return"";r=n}return""},g=t.use=function(e){p=e||p},y=t.i18n=function(e){v=e||v};t.default={use:g,t:m,i18n:y}},function(e,t,n){"use strict";t.__esModule=!0,t.default={el:{colorpicker:{confirm:"确定",clear:"清空"},datepicker:{now:"此刻",today:"今天",cancel:"取消",clear:"清空",confirm:"确定",selectDate:"选择日期",selectTime:"选择时间",startDate:"开始日期",startTime:"开始时间",endDate:"结束日期",endTime:"结束时间",prevYear:"前一年",nextYear:"后一年",prevMonth:"上个月",nextMonth:"下个月",year:"年",month1:"1 月",month2:"2 月",month3:"3 月",month4:"4 月",month5:"5 月",month6:"6 月",month7:"7 月",month8:"8 月",month9:"9 月",month10:"10 月",month11:"11 月",month12:"12 月",weeks:{sun:"日",mon:"一",tue:"二",wed:"三",thu:"四",fri:"五",sat:"六"},months:{jan:"一月",feb:"二月",mar:"三月",apr:"四月",may:"五月",jun:"六月",jul:"七月",aug:"八月",sep:"九月",oct:"十月",nov:"十一月",dec:"十二月"}},select:{loading:"加载中",noMatch:"无匹配数据",noData:"无数据",placeholder:"请选择"},cascader:{noMatch:"无匹配数据",loading:"加载中",placeholder:"请选择"},pagination:{goto:"前往",pagesize:"条/页",total:"共 {total} 条",pageClassifier:"页"},messagebox:{title:"提示",confirm:"确定",cancel:"取消",error:"输入的数据不合法!"},upload:{deleteTip:"按 delete 键可删除",delete:"删除",preview:"查看图片",continue:"继续上传"},table:{emptyText:"暂无数据",confirmFilter:"筛选",resetFilter:"重置",clearFilter:"全部",sumText:"合计"},tree:{emptyText:"暂无数据"},transfer:{noMatch:"无匹配数据",noData:"无数据",titles:["列表 1","列表 2"],filterPlaceholder:"请输入搜索内容",noCheckedFormat:"共 {total} 项",hasCheckedFormat:"已选 {checked}/{total} 项"}}}},function(t,n){t.exports=e},function(e,t,n){"use strict";function i(e){return!!e&&"object"==typeof e}function r(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||o(e)}function o(e){return e.$$typeof===p}function a(e){return Array.isArray(e)?[]:{}}function s(e,t){return t&&!0===t.clone&&d(e)?c(a(e),e,t):e}function l(e,t,n){var i=e.slice();return t.forEach(function(t,r){void 0===i[r]?i[r]=s(t,n):d(t)?i[r]=c(e[r],t,n):-1===e.indexOf(t)&&i.push(s(t,n))}),i}function u(e,t,n){var i={};return d(e)&&Object.keys(e).forEach(function(t){i[t]=s(e[t],n)}),Object.keys(t).forEach(function(r){d(t[r])&&e[r]?i[r]=c(e[r],t[r],n):i[r]=s(t[r],n)}),i}function c(e,t,n){var i=Array.isArray(t),r=Array.isArray(e),o=n||{arrayMerge:l};if(i===r)return i?(o.arrayMerge||l)(e,t,n):u(e,t,n);return s(t,n)}var d=function(e){return i(e)&&!r(e)},f="function"==typeof Symbol&&Symbol.for,p=f?Symbol.for("react.element"):60103;c.all=function(e,t){if(!Array.isArray(e)||e.length<2)throw new Error("first argument should be an array with at least two elements");return e.reduce(function(e,n){return c(e,n,t)})};var h=c;e.exports=h},function(e,t,n){"use strict";t.__esModule=!0;var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=function(e){function t(e){for(var t=arguments.length,n=Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];return 1===n.length&&"object"===i(n[0])&&(n=n[0]),n&&n.hasOwnProperty||(n={}),e.replace(o,function(t,i,o,a){var s=void 0;return"{"===e[a-1]&&"}"===e[a+t.length]?o:(s=(0,r.hasOwn)(n,o)?n[o]:null,null===s||void 0===s?"":s)})}return t};var r=n(15),o=/(%|)\{([0-9a-zA-Z_]+)\}/g},function(e,t,n){"use strict";function i(){}function r(e,t){return l.call(e,t)}function o(e,t){for(var n in t)e[n]=t[n];return e}function a(e){for(var t={},n=0;n<e.length;n++)e[n]&&o(t,e[n]);return t}function s(e,t,n){var i=e;t=t.replace(/\[(\w+)\]/g,".$1"),t=t.replace(/^\./,"");for(var r=t.split("."),o=0,a=r.length;o<a-1&&(i||n);++o){var s=r[o];if(!(s in i)){if(n)throw new Error("please transfer a valid prop path to form item!");break}i=i[s]}return{o:i,k:r[o],v:i?i[r[o]]:null}}t.__esModule=!0,t.noop=i,t.hasOwn=r,t.toObject=a,t.getPropByPath=s;var l=Object.prototype.hasOwnProperty;t.getValueByPath=function(e,t){t=t||"";for(var n=t.split("."),i=e,r=null,o=0,a=n.length;o<a;o++){var s=n[o];if(!i)break;if(o===a-1){r=i[s];break}i=i[s]}return r},t.generateId=function(){return Math.floor(1e4*Math.random())},t.valueEquals=function(e,t){if(e===t)return!0;if(!(e instanceof Array))return!1;if(!(t instanceof Array))return!1;if(e.length!==t.length)return!1;for(var n=0;n!==e.length;++n)if(e[n]!==t[n])return!1;return!0}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(17),r=n.n(i),o=n(18),a=n(0),s=a(r.a,o.a,!1,null,null,null);t.default=s.exports},function(e,t,n){"use strict";t.__esModule=!0,t.default={name:"ElProgress",props:{type:{type:String,default:"line",validator:function(e){return["line","circle"].indexOf(e)>-1}},percentage:{type:Number,default:0,required:!0,validator:function(e){return e>=0&&e<=100}},status:{type:String},strokeWidth:{type:Number,default:6},textInside:{type:Boolean,default:!1},width:{type:Number,default:126},showText:{type:Boolean,default:!0}},computed:{barStyle:function(){var e={};return e.width=this.percentage+"%",e},relativeStrokeWidth:function(){return(this.strokeWidth/this.width*100).toFixed(1)},trackPath:function(){var e=parseInt(50-parseFloat(this.relativeStrokeWidth)/2,10);return"M 50 50 m 0 -"+e+" a "+e+" "+e+" 0 1 1 0 "+2*e+" a "+e+" "+e+" 0 1 1 0 -"+2*e},perimeter:function(){var e=50-parseFloat(this.relativeStrokeWidth)/2;return 2*Math.PI*e},circlePathStyle:function(){var e=this.perimeter;return{strokeDasharray:e+"px,"+e+"px",strokeDashoffset:(1-this.percentage/100)*e+"px",transition:"stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease"}},stroke:function(){var e;switch(this.status){case"success":e="#13ce66";break;case"exception":e="#ff4949";break;default:e="#20a0ff"}return e},iconClass:function(){return"line"===this.type?"success"===this.status?"el-icon-circle-check":"el-icon-circle-cross":"success"===this.status?"el-icon-check":"el-icon-close"},progressTextSize:function(){return"line"===this.type?12+.4*this.strokeWidth:.111111*this.width+2}}}},function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"el-progress",class:["el-progress--"+e.type,e.status?"is-"+e.status:"",{"el-progress--without-text":!e.showText,"el-progress--text-inside":e.textInside}],attrs:{role:"progressbar","aria-valuenow":e.percentage,"aria-valuemin":"0","aria-valuemax":"100"}},["line"===e.type?n("div",{staticClass:"el-progress-bar"},[n("div",{staticClass:"el-progress-bar__outer",style:{height:e.strokeWidth+"px"}},[n("div",{staticClass:"el-progress-bar__inner",style:e.barStyle},[e.showText&&e.textInside?n("div",{staticClass:"el-progress-bar__innerText"},[e._v(e._s(e.percentage)+"%")]):e._e()])])]):n("div",{staticClass:"el-progress-circle",style:{height:e.width+"px",width:e.width+"px"}},[n("svg",{attrs:{viewBox:"0 0 100 100"}},[n("path",{staticClass:"el-progress-circle__track",attrs:{d:e.trackPath,stroke:"#e5e9f2","stroke-width":e.relativeStrokeWidth,fill:"none"}}),e._v(" "),n("path",{staticClass:"el-progress-circle__path",style:e.circlePathStyle,attrs:{d:e.trackPath,"stroke-linecap":"round",stroke:e.stroke,"stroke-width":e.relativeStrokeWidth,fill:"none"}})])]),e._v(" "),e.showText&&!e.textInside?n("div",{staticClass:"el-progress__text",style:{fontSize:e.progressTextSize+"px"}},[e.status?n("i",{class:e.iconClass}):[e._v(e._s(e.percentage)+"%")]],2):e._e()])},r=[],o={render:i,staticRenderFns:r};t.a=o},function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition-group",{class:["el-upload-list","el-upload-list--"+e.listType,{"is-disabled":e.disabled}],attrs:{tag:"ul",name:"el-list"}},e._l(e.files,function(t,i){return n("li",{key:i,class:["el-upload-list__item","is-"+t.status,e.focusing?"focusing":""],attrs:{tabindex:"0"},on:{keydown:function(n){if(!("button"in n)&&e._k(n.keyCode,"delete",[8,46],n.key))return null;!e.disabled&&e.$emit("remove",t)},focus:function(t){e.focusing=!0},blur:function(t){e.focusing=!1},click:function(t){e.focusing=!1}}},["uploading"!==t.status&&["picture-card","picture"].indexOf(e.listType)>-1?n("img",{staticClass:"el-upload-list__item-thumbnail",attrs:{src:t.url,alt:""}}):e._e(),e._v(" "),n("a",{staticClass:"el-upload-list__item-name",on:{click:function(n){e.handleClick(t)}}},[n("i",{staticClass:"el-icon-document"}),e._v(e._s(t.name)+"\n    ")]),e._v(" "),n("label",{staticClass:"el-upload-list__item-status-label"},[n("i",{class:{"el-icon-upload-success":!0,"el-icon-circle-check":"text"===e.listType,"el-icon-check":["picture-card","picture"].indexOf(e.listType)>-1}})]),e._v(" "),e.disabled?e._e():n("i",{staticClass:"el-icon-close",on:{click:function(n){e.$emit("remove",t)}}}),e._v(" "),e.disabled?e._e():n("i",{staticClass:"el-icon-close-tip"},[e._v(e._s(e.t("el.upload.deleteTip")))]),e._v(" "),"uploading"===t.status?n("el-progress",{attrs:{type:"picture-card"===e.listType?"circle":"line","stroke-width":"picture-card"===e.listType?6:2,percentage:e.parsePercentage(t.percentage)}}):e._e(),e._v(" "),"picture-card"===e.listType?n("span",{staticClass:"el-upload-list__item-actions"},[e.handlePreview&&"picture-card"===e.listType?n("span",{staticClass:"el-upload-list__item-preview",on:{click:function(n){e.handlePreview(t)}}},[n("i",{staticClass:"el-icon-zoom-in"})]):e._e(),e._v(" "),e.disabled?e._e():n("span",{staticClass:"el-upload-list__item-delete",on:{click:function(n){e.$emit("remove",t)}}},[n("i",{staticClass:"el-icon-delete"})])]):e._e()],1)}))},r=[],o={render:i,staticRenderFns:r};t.a=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(21),r=n.n(i),o=n(0),a=o(r.a,null,!1,null,null,null);t.default=a.exports},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(22),o=i(r),a=n(23),s=i(a),l=n(2),u=i(l);t.default={inject:["uploader"],components:{UploadDragger:u.default},props:{type:String,action:{type:String,required:!0},name:{type:String,default:"file"},data:Object,headers:Object,withCredentials:Boolean,multiple:Boolean,accept:String,onStart:Function,onProgress:Function,onSuccess:Function,onError:Function,beforeUpload:Function,drag:Boolean,onPreview:{type:Function,default:function(){}},onRemove:{type:Function,default:function(){}},fileList:Array,autoUpload:Boolean,listType:String,httpRequest:{type:Function,default:s.default},disabled:Boolean,limit:Number,onExceed:Function},data:function(){return{mouseover:!1,reqs:{}}},methods:{isImage:function(e){return-1!==e.indexOf("image")},handleChange:function(e){var t=e.target.files;t&&this.uploadFiles(t)},uploadFiles:function(e){var t=this;if(this.limit&&this.fileList.length+e.length>this.limit)return void(this.onExceed&&this.onExceed(e,this.fileList));var n=Array.prototype.slice.call(e);this.multiple||(n=n.slice(0,1)),0!==n.length&&n.forEach(function(e){t.onStart(e),t.autoUpload&&t.upload(e)})},upload:function(e,t){var n=this;if(this.$refs.input.value=null,!this.beforeUpload)return this.post(e);var i=this.beforeUpload(e);i&&i.then?i.then(function(t){var i=Object.prototype.toString.call(t);"[object File]"===i||"[object Blob]"===i?n.post(t):n.post(e)},function(){n.onRemove(null,e)}):!1!==i?this.post(e):this.onRemove(null,e)},abort:function(e){var t=this.reqs;if(e){var n=e;e.uid&&(n=e.uid),t[n]&&t[n].abort()}else Object.keys(t).forEach(function(e){t[e]&&t[e].abort(),delete t[e]})},post:function(e){var t=this,n=e.uid,i={headers:this.headers,withCredentials:this.withCredentials,file:e,data:this.data,filename:this.name,action:this.action,onProgress:function(n){t.onProgress(n,e)},onSuccess:function(i){t.onSuccess(i,e),delete t.reqs[n]},onError:function(i){t.onError(i,e),delete t.reqs[n]}},r=this.httpRequest(i);this.reqs[n]=r,r&&r.then&&r.then(i.onSuccess,i.onError)},handleClick:function(){this.disabled||(this.$refs.input.value=null,this.$refs.input.click())},handleKeydown:function(e){13!==e.keyCode&&32!==e.keyCode||this.handleClick()}},render:function(e){var t=this.handleClick,n=this.drag,i=this.name,r=this.handleChange,a=this.multiple,s=this.accept,l=this.listType,u=this.uploadFiles,c=this.disabled,d=this.handleKeydown,f={class:{"el-upload":!0},on:{click:t,keydown:d}};return f.class["el-upload--"+l]=!0,e("div",(0,o.default)([f,{attrs:{tabindex:"0"}}]),[n?e("upload-dragger",{attrs:{disabled:c},on:{file:u}},[this.$slots.default]):this.$slots.default,e("input",{class:"el-upload__input",attrs:{type:"file",name:i,multiple:a,accept:s},ref:"input",on:{change:r}},[])])}}},function(e,t){function n(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}var i=/^(attrs|props|on|nativeOn|class|style|hook)$/;e.exports=function(e){return e.reduce(function(e,t){var r,o,a,s,l;for(a in t)if(r=e[a],o=t[a],r&&i.test(a))if("class"===a&&("string"==typeof r&&(l=r,e[a]=r={},r[l]=!0),"string"==typeof o&&(l=o,t[a]=o={},o[l]=!0)),"on"===a||"nativeOn"===a||"hook"===a)for(s in o)r[s]=n(r[s],o[s]);else if(Array.isArray(r))e[a]=r.concat(o);else if(Array.isArray(o))e[a]=[r].concat(o);else for(s in o)r[s]=o[s];else e[a]=t[a];return e},{})}},function(e,t,n){"use strict";function i(e,t,n){var i=void 0;i=n.response?""+(n.response.error||n.response):n.responseText?""+n.responseText:"fail to post "+e+" "+n.status;var r=new Error(i);return r.status=n.status,r.method="post",r.url=e,r}function r(e){var t=e.responseText||e.response;if(!t)return t;try{return JSON.parse(t)}catch(e){return t}}function o(e){if("undefined"!=typeof XMLHttpRequest){var t=new XMLHttpRequest,n=e.action;t.upload&&(t.upload.onprogress=function(t){t.total>0&&(t.percent=t.loaded/t.total*100),e.onProgress(t)});var o=new FormData;e.data&&Object.keys(e.data).forEach(function(t){o.append(t,e.data[t])}),o.append(e.filename,e.file),t.onerror=function(t){e.onError(t)},t.onload=function(){if(t.status<200||t.status>=300)return e.onError(i(n,e,t));e.onSuccess(r(t))},t.open("post",n,!0),e.withCredentials&&"withCredentials"in t&&(t.withCredentials=!0);var a=e.headers||{};for(var s in a)a.hasOwnProperty(s)&&null!==a[s]&&t.setRequestHeader(s,a[s]);return t.send(o),t}}t.__esModule=!0,t.default=o},function(e,t,n){"use strict";t.__esModule=!0,t.default={name:"ElUploadDrag",props:{disabled:Boolean},data:function(){return{dragover:!1}},methods:{onDragover:function(){this.disabled||(this.dragover=!0)},onDrop:function(e){this.disabled||(this.dragover=!1,this.$emit("file",e.dataTransfer.files))}}}},function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"el-upload-dragger",class:{"is-dragover":e.dragover},on:{drop:function(t){t.preventDefault(),e.onDrop(t)},dragover:function(t){t.preventDefault(),e.onDragover(t)},dragleave:function(t){t.preventDefault(),e.dragover=!1}}},[e._t("default")],2)},r=[],o={render:i,staticRenderFns:r};t.a=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(27),r=n.n(i),o=n(0),a=o(r.a,null,!1,null,null,null);t.default=a.exports},function(e,t,n){"use strict";t.__esModule=!0;var i=n(2),r=function(e){return e&&e.__esModule?e:{default:e}}(i);t.default={components:{UploadDragger:r.default},props:{type:String,data:{},action:{type:String,required:!0},name:{type:String,default:"file"},withCredentials:Boolean,accept:String,onStart:Function,onProgress:Function,onSuccess:Function,onError:Function,beforeUpload:Function,onPreview:{type:Function,default:function(){}},onRemove:{type:Function,default:function(){}},drag:Boolean,listType:String,disabled:Boolean,limit:Number,onExceed:Function},data:function(){return{mouseover:!1,domain:"",file:null,submitting:!1}},methods:{isImage:function(e){return-1!==e.indexOf("image")},handleClick:function(){this.disabled||this.$refs.input.click()},handleChange:function(e){var t=e.target.value;t&&this.uploadFiles(t)},uploadFiles:function(e){if(this.limit&&this.$parent.uploadFiles.length+e.length>this.limit)return void(this.onExceed&&this.onExceed(this.fileList));if(!this.submitting){this.submitting=!0,this.file=e,this.onStart(e);var t=this.getFormNode(),n=this.getFormDataNode(),i=this.data;"function"==typeof i&&(i=i(e));var r=[];for(var o in i)i.hasOwnProperty(o)&&r.push('<input name="'+o+'" value="'+i[o]+'"/>');n.innerHTML=r.join(""),t.submit(),n.innerHTML=""}},getFormNode:function(){return this.$refs.form},getFormDataNode:function(){return this.$refs.data}},created:function(){this.frameName="frame-"+Date.now()},mounted:function(){var e=this;!this.$isServer&&window.addEventListener("message",function(t){if(e.file){var n=new URL(e.action).origin;if(t.origin===n){var i=t.data;"success"===i.result?e.onSuccess(i,e.file):"failed"===i.result&&e.onError(i,e.file),e.submitting=!1,e.file=null}}},!1)},render:function(e){var t=this.drag,n=this.uploadFiles,i=this.listType,r=this.frameName,o=this.disabled,a={"el-upload":!0};return a["el-upload--"+i]=!0,e("div",{class:a,on:{click:this.handleClick},nativeOn:{drop:this.onDrop,dragover:this.handleDragover,dragleave:this.handleDragleave}},[e("iframe",{on:{load:this.onload},ref:"iframe",attrs:{name:r}},[]),e("form",{ref:"form",attrs:{action:this.action,target:r,enctype:"multipart/form-data",method:"POST"}},[e("input",{class:"el-upload__input",attrs:{type:"file",name:"file",accept:this.accept},ref:"input",on:{change:this.handleChange}},[]),e("input",{attrs:{type:"hidden",name:"documentDomain"},domProps:{value:this.$isServer?"":document.domain}},[]),e("span",{ref:"data"},[])]),t?e("upload-dragger",{on:{file:n},attrs:{disabled:o}},[this.$slots.default]):this.$slots.default])}}},function(e,t,n){"use strict";t.__esModule=!0,t.default={mounted:function(){return},methods:{getMigratingConfig:function(){return{props:{},events:{}}}}}}])});