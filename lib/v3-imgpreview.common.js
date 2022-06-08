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

/***/ "254a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/chevron-left.56edde55.svg";

/***/ }),

/***/ "4672":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/chevron-right.4d6ff77e.svg";

/***/ }),

/***/ "5bad":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/maximize.6c0457cd.svg";

/***/ }),

/***/ "6369":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/download.5f1be6c8.svg";

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

/***/ "6dfb":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "77cd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_container_vue_vue_type_style_index_0_id_62c65026_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6dfb");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_container_vue_vue_type_style_index_0_id_62c65026_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_container_vue_vue_type_style_index_0_id_62c65026_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


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

/***/ "8a0e":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/zoom-in.526b98d7.svg";

/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "9f83":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/zoom-out.e3388f2f.svg";

/***/ }),

/***/ "bf37":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/close.e7fb8985.svg";

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

// EXTERNAL MODULE: ./src/assets/zoom-in.svg
var zoom_in = __webpack_require__("8a0e");
var zoom_in_default = /*#__PURE__*/__webpack_require__.n(zoom_in);

// EXTERNAL MODULE: ./src/assets/zoom-out.svg
var zoom_out = __webpack_require__("9f83");
var zoom_out_default = /*#__PURE__*/__webpack_require__.n(zoom_out);

// EXTERNAL MODULE: ./src/assets/download.svg
var download = __webpack_require__("6369");
var download_default = /*#__PURE__*/__webpack_require__.n(download);

// EXTERNAL MODULE: ./src/assets/maximize.svg
var maximize = __webpack_require__("5bad");
var maximize_default = /*#__PURE__*/__webpack_require__.n(maximize);

// EXTERNAL MODULE: ./src/assets/close.svg
var assets_close = __webpack_require__("bf37");
var close_default = /*#__PURE__*/__webpack_require__.n(assets_close);

// EXTERNAL MODULE: ./src/assets/chevron-left.svg
var chevron_left = __webpack_require__("254a");
var chevron_left_default = /*#__PURE__*/__webpack_require__.n(chevron_left);

// EXTERNAL MODULE: ./src/assets/chevron-right.svg
var chevron_right = __webpack_require__("4672");
var chevron_right_default = /*#__PURE__*/__webpack_require__.n(chevron_right);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/ts-loader??ref--14-2!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/plugin/container.vue?vue&type=template&id=62c65026&scoped=true&ts=true








var _withScopeId = function (n) { return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["pushScopeId"])("data-v-62c65026"), n = n(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["popScopeId"])(), n); };
var _hoisted_1 = { class: "ysj-image-container" };
var _hoisted_2 = { class: "ysj-image-container-header" };
var _hoisted_3 = { key: 0 };
var _hoisted_4 = {
    key: 1,
    class: "ysj-image-opt"
};
var _hoisted_5 = /*#__PURE__*/ _withScopeId(function () { /*#__PURE__*/ return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("img", {
    src: zoom_in_default.a,
    alt: "big"
}, null, -1); });
var _hoisted_6 = [
    _hoisted_5
];
var _hoisted_7 = /*#__PURE__*/ _withScopeId(function () { /*#__PURE__*/ return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("img", {
    src: zoom_out_default.a,
    alt: "small"
}, null, -1); });
var _hoisted_8 = [
    _hoisted_7
];
var _hoisted_9 = ["href", "download"];
var _hoisted_10 = /*#__PURE__*/ _withScopeId(function () { /*#__PURE__*/ return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("img", {
    src: download_default.a,
    alt: "down"
}, null, -1); });
var _hoisted_11 = [
    _hoisted_10
];
var _hoisted_12 = /*#__PURE__*/ _withScopeId(function () { /*#__PURE__*/ return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("img", {
    src: maximize_default.a,
    alt: "full"
}, null, -1); });
var _hoisted_13 = [
    _hoisted_12
];
var _hoisted_14 = /*#__PURE__*/ _withScopeId(function () { /*#__PURE__*/ return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("img", {
    src: close_default.a,
    alt: "close"
}, null, -1); });
var _hoisted_15 = [
    _hoisted_14
];
var _hoisted_16 = { class: "ysj-image-container-content" };
var _hoisted_17 = {
    ref: "imgDom",
    class: "current-img",
    alt: ""
};
var _hoisted_18 = /*#__PURE__*/ _withScopeId(function () { /*#__PURE__*/ return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, null, -1); });
var _hoisted_19 = /*#__PURE__*/ _withScopeId(function () { /*#__PURE__*/ return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("img", {
    src: chevron_left_default.a,
    alt: "left",
    srcset: ""
}, null, -1); });
var _hoisted_20 = [
    _hoisted_19
];
var _hoisted_21 = /*#__PURE__*/ _withScopeId(function () { /*#__PURE__*/ return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("img", {
    src: chevron_right_default.a,
    alt: "right",
    srcset: ""
}, null, -1); });
var _hoisted_22 = [
    _hoisted_21
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
            Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", null, "图片加载中", 512), [
                [external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.loading]
            ]),
            Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("img", _hoisted_17, null, 512), [
                [external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], !_ctx.loading]
            ])
        ]),
        _hoisted_18,
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
            }, _hoisted_20))
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
            }, _hoisted_22))
            : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)
    ]));
}

// CONCATENATED MODULE: ./src/plugin/container.vue?vue&type=template&id=62c65026&scoped=true&ts=true

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
                img.onload = function () {
                    var imgRate = img.width / img.height;
                    _this.imgInfo.w = img.width;
                    _this.imgInfo.h = img.height;
                    console.log("4323", imgRate, rate);
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
        if (this.config) {
            this.dataConfig = Object.assign({}, this.config);
            this.loadImage();
        }
    },
}));

// CONCATENATED MODULE: ./src/plugin/container.vue?vue&type=script&lang=ts
 
// EXTERNAL MODULE: ./src/plugin/container.vue?vue&type=style&index=0&id=62c65026&lang=css&scoped=true
var containervue_type_style_index_0_id_62c65026_lang_css_scoped_true = __webpack_require__("77cd");

// EXTERNAL MODULE: ./node_modules/vue-loader-v16/dist/exportHelper.js
var exportHelper = __webpack_require__("6b0d");
var exportHelper_default = /*#__PURE__*/__webpack_require__.n(exportHelper);

// CONCATENATED MODULE: ./src/plugin/container.vue







const __exports__ = /*#__PURE__*/exportHelper_default()(containervue_type_script_lang_ts, [['render',render],['__scopeId',"data-v-62c65026"]])

/* harmony default export */ var container = (__exports__);
// CONCATENATED MODULE: ./src/plugin/index.ts


var createDom = function (config) {
    var div;
    var Ctor;
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

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_plugin);



/***/ })

/******/ });
//# sourceMappingURL=v3-imgpreview.common.js.map