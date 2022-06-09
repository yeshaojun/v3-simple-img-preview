module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "19e0":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("bf69");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("50adcb1a", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "24fb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "44ef":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_container_vue_vue_type_style_index_0_id_af7291a6_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("19e0");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_container_vue_vue_type_style_index_0_id_af7291a6_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_container_vue_vue_type_style_index_0_id_af7291a6_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "499e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesClient; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "6b0d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// runtime helper for setting properties on components
// in a tree-shakable way
exports.default = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "bf69":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".iconpark-icon[data-v-af7291a6]{width:24px;height:24px;color:#fff}.ysj-image-container[data-v-af7291a6]{background-color:#000;position:absolute;width:100%;top:0;left:0;right:0;bottom:0;z-index:99999;color:#fff}.ysj-image-container-header[data-v-af7291a6]{background-color:rgba(0,0,0,.3);position:absolute;left:0;top:0;height:44px;width:100%;line-height:44px;padding:0 10px;box-sizing:border-box;display:flex;justify-content:space-between;z-index:99}.ysj-image-opt[data-v-af7291a6]{display:flex;align-content:center}.ysj-image-opt a[data-v-af7291a6],.ysj-image-opt button[data-v-af7291a6]{cursor:pointer;display:inline-block;height:44px;line-height:44px;width:24px;margin:0 10px;color:#fff;font-size:20px;background-color:transparent;border-width:0}.ysj-image-opt a[data-v-af7291a6]:focus,.ysj-image-opt button[data-v-af7291a6]:focus{outline-width:0}.ysj-image-arraw-left[data-v-af7291a6]{left:10px}.ysj-image-arraw-left[data-v-af7291a6],.ysj-image-arraw-right[data-v-af7291a6]{position:absolute;top:50%;cursor:pointer;width:30px}.ysj-image-arraw-right[data-v-af7291a6]{right:10px}.current-img[data-v-af7291a6]{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.current-img[data-v-af7291a6],.loading-wrapper[data-v-af7291a6]{position:absolute;top:50%;left:50%;transform:translateX(-50%) translateY(-50%)}.loading-wrapper[data-v-af7291a6]{color:#999}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "previewImage", function() { return /* reexport */ previewImage; });
__webpack_require__.d(__webpack_exports__, "previewImageCom", function() { return /* reexport */ previewImageCom; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/ts-loader??ref--14-2!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/plugin/container.vue?vue&type=template&id=af7291a6&scoped=true&ts=true

var _withScopeId = function (n) { return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["pushScopeId"])("data-v-af7291a6"), n = n(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["popScopeId"])(), n); };
var _hoisted_1 = { class: "ysj-image-container" };
var _hoisted_2 = { class: "ysj-image-container-header" };
var _hoisted_3 = { key: 0 };
var _hoisted_4 = {
    key: 1,
    class: "ysj-image-opt"
};
var _hoisted_5 = /*#__PURE__*/ _withScopeId(function () { /*#__PURE__*/ return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("svg", { class: "iconpark-icon" }, [
    /*#__PURE__*/ Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("use", { href: "#zoom-in" })
], -1); });
var _hoisted_6 = [
    _hoisted_5
];
var _hoisted_7 = /*#__PURE__*/ _withScopeId(function () { /*#__PURE__*/ return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("svg", { class: "iconpark-icon" }, [
    /*#__PURE__*/ Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("use", { href: "#zoom-out" })
], -1); });
var _hoisted_8 = [
    _hoisted_7
];
var _hoisted_9 = ["href", "download"];
var _hoisted_10 = /*#__PURE__*/ _withScopeId(function () { /*#__PURE__*/ return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("svg", { class: "iconpark-icon" }, [
    /*#__PURE__*/ Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("use", { href: "#download-four" })
], -1); });
var _hoisted_11 = [
    _hoisted_10
];
var _hoisted_12 = /*#__PURE__*/ _withScopeId(function () { /*#__PURE__*/ return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("svg", { class: "iconpark-icon" }, [
    /*#__PURE__*/ Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("use", { href: "#full-screen" })
], -1); });
var _hoisted_13 = [
    _hoisted_12
];
var _hoisted_14 = /*#__PURE__*/ _withScopeId(function () { /*#__PURE__*/ return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("svg", { class: "iconpark-icon" }, [
    /*#__PURE__*/ Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("use", { href: "#close" })
], -1); });
var _hoisted_15 = [
    _hoisted_14
];
var _hoisted_16 = { class: "ysj-image-container-content" };
var _hoisted_17 = { class: "loading-wrapper" };
var _hoisted_18 = { class: "loading-wrapper" };
var _hoisted_19 = {
    ref: "imgDom",
    class: "current-img",
    alt: ""
};
var _hoisted_20 = /*#__PURE__*/ _withScopeId(function () { /*#__PURE__*/ return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, null, -1); });
var _hoisted_21 = /*#__PURE__*/ _withScopeId(function () { /*#__PURE__*/ return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("svg", { class: "iconpark-icon" }, [
    /*#__PURE__*/ Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("use", { href: "#left" })
], -1); });
var _hoisted_22 = [
    _hoisted_21
];
var _hoisted_23 = /*#__PURE__*/ _withScopeId(function () { /*#__PURE__*/ return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("svg", { class: "iconpark-icon" }, [
    /*#__PURE__*/ Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("use", { href: "#right" })
], -1); });
var _hoisted_24 = [
    _hoisted_23
];
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", _hoisted_1, [
        Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_2, [
            Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default", {}, undefined, true),
            (!_ctx.config.header)
                ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", _hoisted_3, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.dataConfig.current + "/" + _ctx.dataConfig.urls.length), 1))
                : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true),
            (!_ctx.config.header)
                ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", _hoisted_4, [
                    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("button", {
                        onClick: _cache[0] || (_cache[0] = function ($event) { return (_ctx.zoom('big')); })
                    }, _hoisted_6),
                    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("button", {
                        onClick: _cache[1] || (_cache[1] = function ($event) { return (_ctx.zoom('small')); })
                    }, _hoisted_8),
                    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", {
                        href: _ctx.dataConfig.urls[_ctx.dataConfig.current],
                        target: "_blank",
                        download: 'image' + _ctx.dataConfig.current
                    }, _hoisted_11, 8, _hoisted_9),
                    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("button", {
                        onClick: _cache[2] || (_cache[2] =
                            //@ts-ignore
                            function () {
                                var args = [];
                                for (var _i = 0; _i < arguments.length; _i++) {
                                    args[_i] = arguments[_i];
                                }
                                return (_ctx.getFull && _ctx.getFull.apply(_ctx, args));
                            })
                    }, _hoisted_13),
                    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("button", {
                        onClick: _cache[3] || (_cache[3] =
                            //@ts-ignore
                            function () {
                                var args = [];
                                for (var _i = 0; _i < arguments.length; _i++) {
                                    args[_i] = arguments[_i];
                                }
                                return (_ctx.close && _ctx.close.apply(_ctx, args));
                            })
                    }, _hoisted_15)
                ]))
                : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)
        ]),
        Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_16, [
            Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", _hoisted_17, "图片加载中", 512), [
                [external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.loading]
            ]),
            Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", _hoisted_18, "图片加载失败", 512), [
                [external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.error]
            ]),
            Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("img", _hoisted_19, null, 512), [
                [external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], !_ctx.loading]
            ])
        ]),
        _hoisted_20,
        (_ctx.dataConfig.current > 1)
            ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
                key: 0,
                class: "ysj-image-arraw-left",
                onClick: _cache[4] || (_cache[4] =
                    //@ts-ignore
                    function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return (_ctx.arrawLeft && _ctx.arrawLeft.apply(_ctx, args));
                    })
            }, _hoisted_22))
            : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true),
        (_ctx.dataConfig.current < _ctx.dataConfig.urls.length)
            ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
                key: 1,
                class: "ysj-image-arraw-right",
                onClick: _cache[5] || (_cache[5] =
                    //@ts-ignore
                    function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return (_ctx.arrawRight && _ctx.arrawRight.apply(_ctx, args));
                    })
            }, _hoisted_24))
            : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)
    ]));
}

// CONCATENATED MODULE: ./src/plugin/container.vue?vue&type=template&id=af7291a6&scoped=true&ts=true

// CONCATENATED MODULE: ./src/plugin/icon.ts
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
var loadIcon = function () {
    !(function (e) {
        var t, n, d, o, i, a, r = '<svg><symbol id="left" viewBox="0 0 48 48" fill="none"><path fill-opacity=".01" fill="#fff" d="M0 0h48v48H0z"/><path stroke-linejoin="round" stroke-linecap="round" stroke-width="4" stroke="currentColor" d="M31 36 19 24l12-12" data-follow-stroke="currentColor"/></symbol><symbol id="right" viewBox="0 0 48 48" fill="none"><path fill-opacity=".01" fill="#fff" d="M0 0h48v48H0z"/><path stroke-linejoin="round" stroke-linecap="round" stroke-width="4" stroke="currentColor" d="m19 12 12 12-12 12" data-follow-stroke="currentColor"/></symbol><symbol id="zoom-out" viewBox="0 0 48 48" fill="none"><path fill-opacity=".01" fill="#fff" d="M0 0h48v48H0z"/><path stroke-linejoin="round" stroke-width="4" stroke="currentColor" d="M21 38c9.389 0 17-7.611 17-17S30.389 4 21 4 4 11.611 4 21s7.611 17 17 17Z" data-follow-stroke="currentColor"/><path stroke-linejoin="round" stroke-linecap="round" stroke-width="4" stroke="currentColor" d="M15 21h12m6.222 12.222 8.485 8.485" data-follow-stroke="currentColor"/></symbol><symbol id="zoom-in" viewBox="0 0 48 48" fill="none"><path fill-opacity=".01" fill="#fff" d="M0 0h48v48H0z"/><path stroke-linejoin="round" stroke-width="4" stroke="currentColor" d="M21 38c9.389 0 17-7.611 17-17S30.389 4 21 4 4 11.611 4 21s7.611 17 17 17Z" data-follow-stroke="currentColor"/><path stroke-linejoin="round" stroke-linecap="round" stroke-width="4" stroke="currentColor" d="M21 15v12m-6-6h12m6.222 12.222 8.485 8.485" data-follow-stroke="currentColor"/></symbol><symbol id="download-four" viewBox="0 0 48 48" fill="none"><path stroke-linejoin="round" stroke-linecap="round" stroke-width="4" stroke="currentColor" d="M24 29 12 17h8V6h8v11h8L24 29Z" clip-rule="evenodd" data-follow-stroke="currentColor"/><path stroke-linecap="round" stroke-width="4" stroke="currentColor" d="M42 37H6m28 7H14" data-follow-stroke="currentColor"/></symbol><symbol id="full-screen" viewBox="0 0 48 48" fill="none"><path stroke-linejoin="round" stroke-linecap="round" stroke-width="4" stroke="currentColor" d="M33 6h9v9m0 18v9h-9m-18 0H6v-9m0-18V6h9" data-follow-stroke="currentColor"/></symbol><symbol id="close" viewBox="0 0 48 48" fill="none"><path fill-opacity=".01" fill="#fff" d="M0 0h48v48H0z"/><path stroke-linejoin="round" stroke-linecap="round" stroke-width="4" stroke="currentColor" d="m8 8 32 32M8 40 40 8" data-follow-stroke="currentColor"/></symbol></svg>';
        function c() {
            i || ((i = !0), d());
        }
        (t = function () {
            var e, t, n;
            ((n = document.createElement("div")).innerHTML = r),
                (r = null),
                (t = n.getElementsByTagName("svg")[0]) &&
                    (t.setAttribute("aria-hidden", "true"),
                        (t.style.position = "absolute"),
                        (t.style.width = 0),
                        (t.style.height = 0),
                        (t.style.overflow = "hidden"),
                        (e = t),
                        (n = document.body).firstChild
                            ? (t = n.firstChild).parentNode.insertBefore(e, t)
                            : n.appendChild(e));
        }),
            document.addEventListener
                ? ["complete", "loaded", "interactive"].indexOf(document.readyState) >
                    -1
                    ? setTimeout(t, 0)
                    : ((n = function () {
                        document.removeEventListener("DOMContentLoaded", n, !1), t();
                    }),
                        document.addEventListener("DOMContentLoaded", n, !1))
                : document.attachEvent &&
                    ((d = t),
                        (o = e.document),
                        (i = !1),
                        (a = function () {
                            try {
                                o.documentElement.doScroll("left");
                            }
                            catch (e) {
                                return void setTimeout(a, 50);
                            }
                            c();
                        })(),
                        (o.onreadystatechange = function () {
                            "complete" == o.readyState && ((o.onreadystatechange = null), c());
                        }));
    })(window);
};

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/ts-loader??ref--14-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/plugin/container.vue?vue&type=script&lang=ts
// config = { urls: [], current: 1, loop: false, header: vdom, success, fail }
// loop 是否可循环预览
// 右上角默认 关闭，下载，放大/缩小，自定义


/* harmony default export */ var containervue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
    name: "img-preview",
    props: {
        config: {
            type: Object,
            default: function () {
                return {};
            },
        },
    },
    setup: function () {
        var imgDom = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])();
        var dataConfig = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])({
            current: 0,
            urls: [],
        });
        var zoomRate = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(1);
        var loading = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(false);
        var error = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(false);
        var imgInfo = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["reactive"])({
            w: 0,
            h: 0,
        });
        return {
            imgDom: imgDom,
            dataConfig: dataConfig,
            loading: loading,
            zoomRate: zoomRate,
            imgInfo: imgInfo,
            loadIcon: loadIcon,
            error: error,
        };
    },
    methods: {
        loadImage: function () {
            var _this = this;
            var windowWidth = window.innerWidth;
            var windowheight = window.innerHeight;
            var rate = windowWidth / windowheight;
            this.$nextTick(function () {
                _this.loading = true;
                var img = _this.$refs.imgDom;
                img.removeAttribute("width");
                img.removeAttribute("height");
                if (_this.dataConfig) {
                    img.src = _this.dataConfig.urls[_this.dataConfig.current - 1];
                }
                _this.error = false;
                img.onload = function () {
                    _this.config.success && _this.config.success("success");
                    var imgRate = img.width / img.height;
                    _this.imgInfo.w = img.width;
                    _this.imgInfo.h = img.height;
                    if (imgRate > rate) {
                        if (img.width > windowWidth * 0.7) {
                            img.style.width = windowWidth * 0.7 + "px";
                            img.style.height =
                                img.height / (img.width / (windowWidth * 0.7)) + "px";
                            _this.imgInfo.w = windowWidth * 0.7;
                            _this.imgInfo.h = img.height / (img.width / (windowWidth * 0.7));
                        }
                    }
                    else {
                        if (img.height > windowheight * 0.7) {
                            img.style.height = windowheight * 0.7 + "px";
                            img.style.width =
                                img.width / (img.height / (windowheight * 0.7)) + "px";
                            _this.imgInfo.w = img.width / (img.height / (windowheight * 0.7));
                            _this.imgInfo.h = windowheight * 0.7;
                        }
                    }
                    _this.loading = false;
                };
                img.onerror = function (e) {
                    _this.loading = false;
                    _this.error = true;
                    _this.config.fail && _this.config.fail("fail");
                };
            });
        },
        arrawRight: function () {
            if (this.dataConfig.current == this.dataConfig.urls.length &&
                !this.dataConfig.loop) {
                return;
            }
            if (this.dataConfig.current === this.dataConfig.urls.length &&
                this.dataConfig.loop) {
                this.dataConfig.current = 1;
            }
            else {
                this.dataConfig.current += 1;
            }
            this.loadImage();
        },
        arrawLeft: function () {
            if (this.dataConfig.current == 1 && !this.dataConfig.loop) {
                return;
            }
            if (this.dataConfig.loop && this.dataConfig.current == 1) {
                this.dataConfig.current = this.dataConfig.urls.length;
            }
            else {
                this.dataConfig.current -= 1;
            }
            this.loadImage();
        },
        getFull: function () {
            if (this.isFull()) {
                var full = document.exitFullscreen;
                if (full) {
                    full.call(document);
                }
                else if (window.ActiveXObject) {
                    var ws = new window.ActiveXObject("WScript.Shell");
                    ws && ws.SendKeys("F11");
                }
            }
            var element = document.documentElement;
            if (element.requestFullscreen) {
                element.requestFullscreen();
            }
            else if (element.mozRequestFullScreen) {
                // 兼容火狐
                element.mozRequestFullScreen();
            }
            else if (element.webkitRequestFullscreen) {
                // 兼容谷歌
                element.webkitRequestFullscreen();
            }
            else if (element.msRequestFullscreen) {
                // 兼容IE
                element.msRequestFullscreen();
            }
        },
        isFull: function () {
            return document.fullscreenElement || false;
        },
        close: function () {
            console.log("434");
            var dom = document.getElementsByClassName("ysj-imgage-wrapper");
            dom[0].style.display = "none";
        },
        zoom: function (type) {
            // this.checkZoom();
            console.log("his.imgInfo", this.imgInfo);
            if (type === "big") {
                this.zoomRate = Number((this.zoomRate + 0.2).toFixed(1));
            }
            else {
                console.log("this.zoomRate", this.zoomRate);
                if (this.zoomRate <= 0.2) {
                    return;
                }
                else {
                    this.zoomRate = Number((this.zoomRate - 0.2).toFixed(1));
                }
            }
            console.log("type", type, this.zoomRate);
            var img = this.$refs.imgDom;
            var width = this.imgInfo.w * this.zoomRate;
            var height = this.imgInfo.h * this.zoomRate;
            img.style.width = width + "px";
            img.style.height = height + "px";
        },
    },
    mounted: function () {
        this.loadIcon();
        if (this.config) {
            this.dataConfig = Object.assign({}, this.config);
            this.loadImage();
        }
    },
}));

// CONCATENATED MODULE: ./src/plugin/container.vue?vue&type=script&lang=ts
 
// EXTERNAL MODULE: ./src/plugin/container.vue?vue&type=style&index=0&id=af7291a6&lang=css&scoped=true
var containervue_type_style_index_0_id_af7291a6_lang_css_scoped_true = __webpack_require__("44ef");

// EXTERNAL MODULE: ./node_modules/vue-loader-v16/dist/exportHelper.js
var exportHelper = __webpack_require__("6b0d");
var exportHelper_default = /*#__PURE__*/__webpack_require__.n(exportHelper);

// CONCATENATED MODULE: ./src/plugin/container.vue







const __exports__ = /*#__PURE__*/exportHelper_default()(containervue_type_script_lang_ts, [['render',render],['__scopeId',"data-v-af7291a6"]])

/* harmony default export */ var container = (__exports__);
// CONCATENATED MODULE: ./src/plugin/index.ts


var Ctor;
var createDom = function (config) {
    var div;
    var dom = document.getElementsByClassName("ysj-imgage-wrapper");
    if (Ctor && dom) {
        div = dom[0];
        div.style.display = "block";
        Ctor.unmount();
    }
    else {
        div = document.createElement("DIV");
        div.setAttribute("class", "ysj-imgage-wrapper");
        document.body.appendChild(div);
    }
    Ctor = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createApp"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(container, {}, config.header), {
        config: config,
    });
    Ctor.component("imgPreview", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(container, { config: config }, config.header));
    Ctor.mount(div);
};
var previewImage = function (config) {
    createDom(config);
};
var previewImageCom = container;
/* harmony default export */ var src_plugin = ({
    install: function (app) {
        app.config.globalProperties.$previewImage = previewImage;
        // 这种方式可以，但是能不能直接覆盖呢？
        app.config.globalProperties.$previewImageCom = container;
    },
});
// export default /*#__PURE__*/ ((): InstallableComponent => {
//   // Assign InstallableComponent type
//   const installable = ImgContainer as unknown as InstallableComponent;
//   // Attach install function executed by Vue.use()
//   installable.install = (app: App): any => {
//     app.config.globalProperties.$previewImageCom = previewImage;
//   };
//   return installable;
// })();

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_plugin);



/***/ })

/******/ });
//# sourceMappingURL=v3-simple-img-preview.common.js.map