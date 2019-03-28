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
/******/ 	return __webpack_require__(__webpack_require__.s = "./components/money/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/money/index.tsx":
/*!************************************!*\
  !*** ./components/money/index.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatMoney = formatMoney;
exports.formatCurrencyToChinese = formatCurrencyToChinese;
/**
 * 特殊符号分割金额数字
 * @param value 金额
 * @param precision 精度
 * @param separator 分隔符。
 * @example
 formatMoney("12345.12345", 2) // 12,345.12
 formatMoney("12345.12345", 0) // 12,345
 formatMoney("12345", 2,"@") // 12@345.00
 */
function formatMoney(value) {
    var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    var separator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ",";

    if (value) {
        var strNum = value.toString();
        var match = strNum.match(/^(\d+)(\.\d+)?$/);
        if (match) {
            var integer = match[1];
            var fraction = match[2] ? match[2] : "";
            if (precision != 0) {
                if (fraction.indexOf('.') > -1) {
                    fraction = fraction.slice(1);
                }
                var fractionStr = [];
                for (var i = 0; i < precision; i++) {
                    fractionStr.push(fraction[i] ? fraction[i] : '0');
                }
                fraction = '.' + fractionStr.join("");
            } else {
                fraction = "";
            }
            var source = integer.split('');
            var target = [];
            for (var _i = 0; _i < source.length; _i++) {
                var index = source.length - 1 - _i;
                var item = source[index];
                target.push(item);
                if ((_i + 1) % 3 == 0 && _i != source.length - 1) {
                    target.push(separator);
                }
            }
            integer = target.reverse().join('');
            return integer + fraction;
        }
    }
    return value;
}
;
/**
 * 格式化货币为中文大写格式（如壹佰贰拾元）。
 * @param value 要格式化的货币值。最大不能超过 9 亿。
 * @return 返回格式化后的字符串。
 * @example formatCurrencyToChinese(10000000) // "壹仟万元"
 */
function formatCurrencyToChinese(value) {
    var digits = "零壹贰叁肆伍陆柒捌玖";
    var units0 = "元万亿";
    var units1 = ["", "拾", "佰", "仟"];
    var neg = value < 0;
    if (neg) value = -value;
    if (value < 0.005) return "零元";
    var t = Math.round(value * 100) % 100;
    var s = t ? (t >= 10 ? digits.charAt(Math.floor(t / 10)) + "角" : "") + (t % 10 ? digits.charAt(t % 10) + "分" : "") : "";
    t = Math.floor(value);
    for (var i = 0; i < units0.length && t > 0; i++) {
        var p = "";
        for (var j = 0; j < units1.length && t > 0; j++) {
            p = digits.charAt(t % 10) + units1[j] + p;
            t = Math.floor(t / 10);
        }
        s = (p.replace(/(零.)*零$/, "") || "零") + units0.charAt(i) + s;
    }
    return (neg ? "负" : "") + s.replace(/(零.)*零元/, "元").replace(/(零.)+/g, "零");
}
;

/***/ })

/******/ });
});