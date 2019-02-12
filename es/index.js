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
/******/ 	return __webpack_require__(__webpack_require__.s = "./components/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/format/index.tsx":
/*!*************************************!*\
  !*** ./components/format/index.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatDate = formatDate;
exports.parse = parse;
exports.clone = clone;
exports.addYear = addYear;
exports.addMonth = addMonth;
exports.addWeek = addWeek;
exports.addDay = addDay;
exports.addHours = addHours;
exports.addMinutes = addMinutes;
exports.addSeconds = addSeconds;
exports.addMilliseconds = addMilliseconds;
exports.toDay = toDay;
exports.toFirstDay = toFirstDay;
exports.toLastDay = toLastDay;
exports.getTimezone = getTimezone;
exports.getWeek = getWeek;
exports.compareYear = compareYear;
exports.compareDay = compareDay;
exports.dayLeft = dayLeft;
exports.isValid = isValid;
exports.isLeapYear = isLeapYear;
exports.getDayInMonth = getDayInMonth;
var dateFormators = {
    __proto__: null,
    y: function y(date, format) {
        var year = date.getFullYear();
        return format.length < 3 ? year % 100 : year;
    },
    M: function M(date) {
        return date.getMonth() + 1;
    },
    d: function d(date) {
        return date.getDate();
    },
    H: function H(date) {
        return date.getHours();
    },
    m: function m(date) {
        return date.getMinutes();
    },
    s: function s(date) {
        return date.getSeconds();
    },
    e: function e(date) {
        return "日一二三四五六".charAt(date.getDay());
    }
};
/**
 * 格式化日期对象
 * @param date 日期对象
 * @param format 格式字符串，其中以下字符（区分大小写）会被替换：
 *
 * 字符| 意义          | 示例
 * ----|--------------|--------------------
 * y   | 年           | yyyy: 1999, yy: 99
 * M   | 月           | MM: 09, M: 9
 * d   | 日           | dd: 09, d: 9
 * H   | 时（24小时制）| HH: 13, H: 13
 * m   | 分           | mm: 06, m: 6
 * s   | 秒           | ss: 06, s: 6
 * e   | 周（中文）    | 周e: 周一
 *
 * @return 返回格式化后的字符串
 * @example formatDate(new Date("2016/01/01 00:00:00")) // "2016/01/01 00:00:00"
 * @example formatDate(new Date("2016/01/01 00:00:00"), "yyyyMMdd") // "20160101"
 * @see https://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html
 */
function formatDate() {
    var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
    var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "yyyy/MM/dd HH:mm:ss";

    if (date && !(date instanceof Date)) {
        date = new Date(date);
    }
    if (!+date) {
        return "";
    }
    return format.replace(/([yMdHms])\1*/g, function (all, key) {
        key = dateFormators[key](date, all) + "";
        while (key.length < all.length) {
            key = "0" + key;
        }
        return key;
    });
}
/**
 * 解析字符串为日期对象
 * @param value 要解析的字符串。默认格式可以是标准日期格式或 “yyyy-MM-dd” 或 “yyyyMMdd”
 * @param format 如果指定了格式字符串，将按其格式解析日期，格式字符串中以下字符（区分大小写）会被填充为原数据：
 *
 * 字符| 意义         | 示例
 * ----|--------------|------
 * y   | 年           | 2014
 * M   | 月           | 9
 * d   | 日           | 9
 * H   | 时（24小时制）| 9
 * y   | 分           | 6
 * y   | 秒           | 6
 * @return 返回新日期对象
 * @example parse("2014-1-1") // new Date("2014/1/1")
 * @example parse("20140101") // new Date("2014/1/1")
 * @example parse("2014年1月1日", "yyyy年MM月dd日") // new Date("2014/1/1")
 */
function parse(value, format) {
    if (format) {
        var groups = [0];
        var _obj = {};
        var match = new RegExp(format.replace(/([-.*+?^${}()|[\]\/\\])/g, "\$1").replace(/([yMdHms])\1*/g, function (all, w) {
            groups.push(w);
            return "\\s*(\\d+)?\\s*";
        })).exec(value);
        if (match) {
            for (var i = 1; i < match.length; i++) {
                _obj[groups[i]] = +match[i];
            }
        }
        return new Date(_obj.y || new Date().getFullYear(), _obj.M ? _obj.M - 1 : new Date().getMonth(), _obj.d || 1, _obj.H || 0, _obj.m || 0, _obj.s || 0);
    }
    var obj = new Date(value);
    return +obj ? obj : new Date(String(value).replace(/(\d{4})\D*(\d\d?)\D*(\d\d?).*(\d\d?)\D*(\d\d?)\D*(\d\d?)/, "$1/$2/$3 $4:$5:$6").replace(/(\d{4})\D*(\d\d?)\D*(\d\d?)/, "$1/$2/$3"));
}
/**
 * 创建当前日期对象的副本
 * @param date 日期对象
 * @return 返回新日期对象
 * @example clone(new Date("2014/1/1")) // new Date("2014/1/1")
 */
function clone(date) {
    return new Date(+date);
}
/**
 * 计算日期添加指定年数后的新日期
 * @param date 日期对象
 * @param value 要添加的年数。如果小于 0 则倒数
 * @return 返回新日期对象
 * @example addYear(new Date("2014/1/1"), 1) // new Date("2015/1/1")
 */
function addYear(date, value) {
    var r = new Date(+date);
    r.setFullYear(date.getFullYear() + value);
    return r;
}
/**
 * 计算日期添加指定月数后的新日期
 * @param date 日期对象
 * @param value 要添加的月数。如果小于 0 则倒数
 * @return 返回新日期对象
 * @example addMonth(new Date("2014/1/1"), 1) // new Date("2014/2/1")
 */
function addMonth(date, value) {
    var r = new Date(+date);
    r.setMonth(r.getMonth() + value);
    if (date.getDate() !== r.getDate()) {
        r.setDate(0);
    }
    return r;
}
/**
 * 计算日期添加指定周后的新日期
 * @param date 日期对象
 * @param value 要添加的周数。如果小于 0 则倒数
 * @return 返回新日期对象
 * @example addWeek(new Date("2014/1/1"), 1) // new Date("2014/1/8")
 */
function addWeek(date, value) {
    return new Date(+date + value * 604800000);
}
/**
 * 计算日期添加指定天数后的新日期
 * @param date 日期对象
 * @param value 要添加的天数。如果小于 0 则倒数
 * @return 返回新日期对象
 * @example addDay(new Date("2014/1/1"), 1) // new Date("2014/1/2")
 */
function addDay(date, value) {
    return new Date(+date + value * 86400000);
}
/**
 * 计算日期添加指定小时后的新日期
 * @param date 日期对象
 * @param value 要添加的小时数。如果小于 0 则倒数
 * @return 返回新日期对象
 * @example addHours(new Date("2014/1/1"), 1) // new Date("2014/1/1 01:00:00")
 */
function addHours(date, value) {
    return new Date(+date + value * 3600000);
}
/**
 * 计算日期添加指定分数后的新日期
 * @param date 日期对象
 * @param value 要添加的分钟数。如果小于 0 则倒数
 * @return 返回新日期对象
 * @example addMinutes(new Date("2014/1/1"), 1) // new Date("2014/1/1 00:01:00")
 */
function addMinutes(date, value) {
    return new Date(+date + value * 60000);
}
/**
 * 计算日期添加指定秒后的新日期
 * @param date 日期对象
 * @param value 要添加的秒数。如果小于 0 则倒数
 * @return 返回新日期对象
 * @example addSeconds(new Date("2014/1/1"), 1) // new Date("2014/1/1 00:00:01")
 */
function addSeconds(date, value) {
    return new Date(+date + value * 1000);
}
/**
 * 计算日期添加指定毫秒后的新日期
 * @param date 日期对象
 * @param value 要添加的毫秒数。如果小于 0 则倒数
 * @return 返回新日期对象
 * @example addMilliseconds(new Date("2014/1/1"), 1000) // new Date("2014/1/1 00:00:01")
 */
function addMilliseconds(date, value) {
    return new Date(+date + value);
}
/**
 * 获取日期的日期部分
 * @param date 日期对象
 * @return 返回新日期对象，其小时部分已被清零
 * @example toDay(new Date("2014/1/1 12:00:00")) // new Date("2014/1/1")
 */
function toDay(date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}
/**
 * 获取日期的第一天
 * @param date 日期对象
 * @return 返回新日期对象
 * @example toFirstDay(new Date("2016/2/15")) // new Date("2016/2/1")
 */
function toFirstDay(date) {
    var r = new Date(+date);
    r.setDate(1);
    return r;
}
/**
 * 获取日期的最后一天
 * @param date 日期对象
 * @return 返回新日期对象
 * @example toLastDay(new Date("2016/2/15")) // new Date("2016/2/29")
 */
function toLastDay(date) {
    var r = new Date(+date);
    r.setDate(1);
    r.setMonth(r.getMonth() + 1);
    r.setDate(r.getDate() - 1);
    return r;
}
/**
 * 获取日期的时区部分
 * @param date 日期对象
 * @return 返回时区部分
 * @example getTimezone(new Date("Fri Feb 17 2017 16:54:41 GMT+0800")) // "GMT"
 */
function getTimezone(date) {
    return date.toString().replace(/^.*? ([A-Z]{3}).[0-9]{4}.*$/, "$1").replace(/^.*?\(([A-Z])[a-z]+ ([A-Z])[a-z]+ ([A-Z])[a-z]+\)$/, "$1$2$3");
}
/**
 * 获取日期所在的周数
 * @param date 日期对象
 * @param base 作为第一周的日期。如果未指定则使用今年第一天作为第一周
 * @return 返回周数
 * @example getWeek(new Date("2014/1/15")) // 3
 * @example getWeek(new Date("2014/1/15"), new Date("2014/1/1")) // 3
 */
function getWeek(date) {
    var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date(date.getFullYear(), 0, 1);

    return Math.floor((date - base) / 604800000) + 1;
}
/**
 * 获取两个日期相差的年份
 * @param x 比较的第一个日期
 * @param y 比较的第二个日期
 * @return 返回 *x* 减去 *y* 相差的天数。不满一年的部分会被忽略
 * @example compareYear(new Date(2014, 1, 1), new Date(2013, 1, 2)) // 1
 */
function compareYear(x, y) {
    var monthX = x.getMonth();
    var monthY = y.getMonth();
    return x.getFullYear() - y.getFullYear() - (monthX < monthY || monthX === monthY && x.getDate() < y.getDate() ? 1 : 0);
}
/**
 * 获取两个日期相差的天数
 * @param x 比较的第一个日期
 * @param y 比较的第二个日期
 * @return 返回 *x* 减去 *y* 相差的天数。不足一天的部分会被忽略
 * @example compareDay(new Date(2014, 1, 2), new Date(2014, 1, 1)) // 1
 */
function compareDay(x, y) {
    return Math.floor((x - y) / 86400000);
}
/**
 * 计算日期到最近的指定月日的剩余天数。如果今年指定月日已过，则计算到明年该月日的剩余天数
 * @param date 日期对象
 * @param month 月
 * @param day 天
 * @return 返回剩余天数
 * @example dayLeft(new Date("2014/12/3"), 12, 5) // 2
 * @example dayLeft(new Date("2014/12/4"), 12, 5) // 1
 * @example dayLeft(new Date("2014/12/5"), 12, 5) // 0
 * @example dayLeft(new Date("2014/12/6"), 12, 5) // 364
 */
function dayLeft(date, month, day) {
    var tmp = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    var offset = new Date(date.getFullYear(), month - 1, day) - tmp;
    if (offset < 0) {
        offset = new Date(date.getFullYear() + 1, month - 1, day) - tmp;
    }
    return offset / 86400000;
}
/**
 * 判断指定数值所表示的日期是否合法（如 2 月 30 日是不合法的）
 * @param year 年
 * @param month 月
 * @param day 日
 * @param hour 时
 * @param minute 分
 * @param second 秒
 * @param milliSecond 毫秒
 * @return 如果提供的数组能组成有效的日期则返回 true，否则返回 false
 * @example isValid(2000, 2, 29) // false
 * @example isValid(2004, 2, 29) // true
 */
function isValid(year, month) {
    var day = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    var hour = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var minute = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    var second = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
    var milliSecond = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;

    var date = new Date(year, month - 1, day, hour, minute, second, milliSecond);
    return year === date.getFullYear() && month === date.getMonth() + 1 && day === date.getDate() && hour === date.getHours() && minute === date.getMinutes() && second === date.getSeconds() && milliSecond === date.getMilliseconds();
}
/**
 * 判断指定年份是否是闰年
 * @param year 要判断的年份
 * @return 如果年份是闰年则返回 true，否则返回 false
 * @example isLeapYear(2004) // true
 * @example isLeapYear(2000) // true
 * @example isLeapYear(2100) // false
 * @example isLeapYear(2002) // false
 */
function isLeapYear(year) {
    return year % 4 == 0 && year % 100 != 0 || year % 400 == 0;
}
/**
 * 获取指定年的指定月的天数
 * @param year 年
 * @param month 月
 * @return 返回天数
 * @example getDayInMonth(2001, 1) // 31
 * @example getDayInMonth(2001, 2) // 28
 * @example getDayInMonth(2004, 2) // 29
 */
function getDayInMonth(year, month) {
    return (new Date(year, month) - new Date(year, month - 1)) / 86400000;
}

/***/ }),

/***/ "./components/index.tsx":
/*!******************************!*\
  !*** ./components/index.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _format = __webpack_require__(/*! ./format */ "./components/format/index.tsx");

Object.keys(_format).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _format[key];
    }
  });
});

/***/ })

/******/ });
});