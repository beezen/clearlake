(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("clearlake", [], factory);
	else if(typeof exports === 'object')
		exports["clearlake"] = factory();
	else
		root["clearlake"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./components/device/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/device/index.tsx":
/*!*************************************!*\
  !*** ./components/device/index.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var userAgent = window.navigator.userAgent.toLowerCase();
/**
 * 判断设备类型
 *
 * 示例   | 结果 | 说明
 * ----- | ------- | ---------
 * device.ios()        |   true   | 是ios设备
 * device.android()    |   true   | 是android设备
 * device.weixin()     |   true   | 是微信环境
 */
var device = {};
/**
 * 判断字符串是否存在
 * @return true | false
 */
function find(needle) {
    needle = needle.toLowerCase();
    return userAgent.indexOf(needle) !== -1;
}
;
device.iphoneX = function () {
    return device.iphone() && screen.height == 812 && screen.width == 375;
};
device.ios = device.iOS = function () {
    return device.iphone() || device.ipod() || device.ipad();
};
device.iphone = function () {
    return !device.windows() && find('iphone');
};
device.ipod = function () {
    return find('ipod');
};
device.ipad = function () {
    return find('ipad');
};
device.android = function () {
    return !device.windows() && find('android');
};
device.androidPhone = function () {
    return device.android() && find('mobile');
};
device.androidTablet = function () {
    return device.android() && !find('mobile');
};
device.blackberry = function () {
    return find('blackberry') || find('bb10') || find('rim');
};
device.blackberryPhone = function () {
    return device.blackberry() && !find('tablet');
};
device.blackberryTablet = function () {
    return device.blackberry() && find('tablet');
};
device.windows = function () {
    return find('windows');
};
device.windowsPhone = function () {
    return device.windows() && find('phone');
};
device.windowsTablet = function () {
    return device.windows() && find('touch') && !device.windowsPhone();
};
device.fxos = function () {
    return (find('(mobile;') || find('(tablet;')) && find('; rv:');
};
device.fxosPhone = function () {
    return device.fxos() && find('mobile');
};
device.fxosTablet = function () {
    return device.fxos() && find('tablet');
};
device.meego = function () {
    return find('meego');
};
device.cordova = function () {
    return window.cordova && location.protocol === 'file:';
};
device.nodeWebkit = function () {
    return _typeof(window.process) === 'object';
};
device.mobile = function () {
    return device.androidPhone() || device.iphone() || device.ipod() || device.windowsPhone() || device.blackberryPhone() || device.fxosPhone() || device.meego();
};
device.tablet = function () {
    return device.ipad() || device.androidTablet() || device.blackberryTablet() || device.windowsTablet() || device.fxosTablet();
};
device.desktop = function () {
    return !device.tablet() && !device.mobile();
};
device.television = function () {
    var television = ['googletv', 'viera', 'smarttv', 'internet.tv', 'netcast', 'nettv', 'appletv', 'boxee', 'kylo', 'roku', 'dlnadoc', 'roku', 'pov_tv', 'hbbtv', 'ce-html'];
    var i = 0;
    while (i < television.length) {
        if (find(television[i])) {
            return true;
        }
        i++;
    }
    return false;
};
device.portrait = function () {
    return window.innerHeight / window.innerWidth > 1;
};
device.landscape = function () {
    return window.innerHeight / window.innerWidth < 1;
};
device.weixin = function () {
    return find('micromessenger');
};
exports.device = device;

/***/ })

/******/ });
});