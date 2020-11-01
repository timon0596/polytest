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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/pug-runtime/index.js":
/*!*******************************************!*\
  !*** ./node_modules/pug-runtime/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var pug_has_own_property = Object.prototype.hasOwnProperty;

/**
 * Merge two attribute objects giving precedence
 * to values in object `b`. Classes are special-cased
 * allowing for arrays and merging/joining appropriately
 * resulting in a string.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api private
 */

exports.merge = pug_merge;
function pug_merge(a, b) {
  if (arguments.length === 1) {
    var attrs = a[0];
    for (var i = 1; i < a.length; i++) {
      attrs = pug_merge(attrs, a[i]);
    }
    return attrs;
  }

  for (var key in b) {
    if (key === 'class') {
      var valA = a[key] || [];
      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);
    } else if (key === 'style') {
      var valA = pug_style(a[key]);
      valA = valA && valA[valA.length - 1] !== ';' ? valA + ';' : valA;
      var valB = pug_style(b[key]);
      valB = valB && valB[valB.length - 1] !== ';' ? valB + ';' : valB;
      a[key] = valA + valB;
    } else {
      a[key] = b[key];
    }
  }

  return a;
};

/**
 * Process array, object, or string as a string of classes delimited by a space.
 *
 * If `val` is an array, all members of it and its subarrays are counted as
 * classes. If `escaping` is an array, then whether or not the item in `val` is
 * escaped depends on the corresponding item in `escaping`. If `escaping` is
 * not an array, no escaping is done.
 *
 * If `val` is an object, all the keys whose value is truthy are counted as
 * classes. No escaping is done.
 *
 * If `val` is a string, it is counted as a class. No escaping is done.
 *
 * @param {(Array.<string>|Object.<string, boolean>|string)} val
 * @param {?Array.<string>} escaping
 * @return {String}
 */
exports.classes = pug_classes;
function pug_classes_array(val, escaping) {
  var classString = '', className, padding = '', escapeEnabled = Array.isArray(escaping);
  for (var i = 0; i < val.length; i++) {
    className = pug_classes(val[i]);
    if (!className) continue;
    escapeEnabled && escaping[i] && (className = pug_escape(className));
    classString = classString + padding + className;
    padding = ' ';
  }
  return classString;
}
function pug_classes_object(val) {
  var classString = '', padding = '';
  for (var key in val) {
    if (key && val[key] && pug_has_own_property.call(val, key)) {
      classString = classString + padding + key;
      padding = ' ';
    }
  }
  return classString;
}
function pug_classes(val, escaping) {
  if (Array.isArray(val)) {
    return pug_classes_array(val, escaping);
  } else if (val && typeof val === 'object') {
    return pug_classes_object(val);
  } else {
    return val || '';
  }
}

/**
 * Convert object or string to a string of CSS styles delimited by a semicolon.
 *
 * @param {(Object.<string, string>|string)} val
 * @return {String}
 */

exports.style = pug_style;
function pug_style(val) {
  if (!val) return '';
  if (typeof val === 'object') {
    var out = '';
    for (var style in val) {
      /* istanbul ignore else */
      if (pug_has_own_property.call(val, style)) {
        out = out + style + ':' + val[style] + ';';
      }
    }
    return out;
  } else {
    return val + '';
  }
};

/**
 * Render the given attribute.
 *
 * @param {String} key
 * @param {String} val
 * @param {Boolean} escaped
 * @param {Boolean} terse
 * @return {String}
 */
exports.attr = pug_attr;
function pug_attr(key, val, escaped, terse) {
  if (val === false || val == null || !val && (key === 'class' || key === 'style')) {
    return '';
  }
  if (val === true) {
    return ' ' + (terse ? key : key + '="' + key + '"');
  }
  var type = typeof val;
  if ((type === 'object' || type === 'function') && typeof val.toJSON === 'function') {
    val = val.toJSON();
  }
  if (typeof val !== 'string') {
    val = JSON.stringify(val);
    if (!escaped && val.indexOf('"') !== -1) {
      return ' ' + key + '=\'' + val.replace(/'/g, '&#39;') + '\'';
    }
  }
  if (escaped) val = pug_escape(val);
  return ' ' + key + '="' + val + '"';
};

/**
 * Render the given attributes object.
 *
 * @param {Object} obj
 * @param {Object} terse whether to use HTML5 terse boolean attributes
 * @return {String}
 */
exports.attrs = pug_attrs;
function pug_attrs(obj, terse){
  var attrs = '';

  for (var key in obj) {
    if (pug_has_own_property.call(obj, key)) {
      var val = obj[key];

      if ('class' === key) {
        val = pug_classes(val);
        attrs = pug_attr(key, val, false, terse) + attrs;
        continue;
      }
      if ('style' === key) {
        val = pug_style(val);
      }
      attrs += pug_attr(key, val, false, terse);
    }
  }

  return attrs;
};

/**
 * Escape the given string of `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

var pug_match_html = /["&<>]/;
exports.escape = pug_escape;
function pug_escape(_html){
  var html = '' + _html;
  var regexResult = pug_match_html.exec(html);
  if (!regexResult) return _html;

  var result = '';
  var i, lastIndex, escape;
  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {
    switch (html.charCodeAt(i)) {
      case 34: escape = '&quot;'; break;
      case 38: escape = '&amp;'; break;
      case 60: escape = '&lt;'; break;
      case 62: escape = '&gt;'; break;
      default: continue;
    }
    if (lastIndex !== i) result += html.substring(lastIndex, i);
    lastIndex = i + 1;
    result += escape;
  }
  if (lastIndex !== i) return result + html.substring(lastIndex, i);
  else return result;
};

/**
 * Re-throw the given `err` in context to the
 * the pug in `filename` at the given `lineno`.
 *
 * @param {Error} err
 * @param {String} filename
 * @param {String} lineno
 * @param {String} str original source
 * @api private
 */

exports.rethrow = pug_rethrow;
function pug_rethrow(err, filename, lineno, str){
  if (!(err instanceof Error)) throw err;
  if ((typeof window != 'undefined' || !filename) && !str) {
    err.message += ' on line ' + lineno;
    throw err;
  }
  try {
    str = str || __webpack_require__(/*! fs */ 0).readFileSync(filename, 'utf8')
  } catch (ex) {
    pug_rethrow(err, null, lineno)
  }
  var context = 3
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context);

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Pug') + ':' + lineno
    + '\n' + context + '\n\n' + err.message;
  throw err;
};


/***/ }),

/***/ "./src/components sync recursive \\.sass$":
/*!*************************************!*\
  !*** ./src/components sync \.sass$ ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./main.sass": "./src/components/main.sass"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/components sync recursive \\.sass$";

/***/ }),

/***/ "./src/components/chartname/chartname.js":
/*!***********************************************!*\
  !*** ./src/components/chartname/chartname.js ***!
  \***********************************************/
/*! exports provided: Chartname */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chartname", function() { return Chartname; });
class Chartname {
  constructor({
    color,
    name
  }) {
    this.container = $('<div>', {
      class: 'chartname'
    });
    this.chartname = $('<div>', {
      class: 'chartname__text'
    });
    this.chartnameColor = $('<div>', {
      class: 'chartname__color'
    });
    this.color = color;
    this.name = name;
    this.init();
  }

  init() {
    this.container.append(this.chartnameColor).append(this.chartname);
    this.chartname.text(this.name);
    this.chartnameColor.css('background', this.color);
  }

}

/***/ }),

/***/ "./src/components/main.sass":
/*!**********************************!*\
  !*** ./src/components/main.sass ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/slider/slider.js":
/*!*****************************************!*\
  !*** ./src/components/slider/slider.js ***!
  \*****************************************/
/*! exports provided: Slider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return Slider; });
class Slider {
  constructor(isSectionSlider) {
    this.isSectionSlider = isSectionSlider;
    this.chunkDistance;
    this.pos = [0, 1];
    this.mousedown = false;
    this.currentHandle = 0;
    this.el = $('<div>', {
      class: 'slider'
    });
    this.handles = new Array(2).fill(0).map(() => $('<div>', {
      class: 'handle'
    }));
    this.chunkHandle = $('<div>', {
      class: 'chunkHandle'
    });

    if (this.isSectionSlider) {
      this.el.append(this.chunkHandle);
      this.chunkHandle.mousedown(() => {
        this.mousedown = true;
      });
    } else {
      this.handles.forEach((el, i) => {
        this.el.append(el);
        el.mousedown(e => {
          this.mousedown = true;
          this.currentHandle = i;
        });
      });
    }

    this.handleSliderMousemove = this.handleSliderMousemove.bind(this);
    $(window).mousemove(this.handleSliderMousemove);
    $(window).mouseup(() => {
      this.mousedown = false;
    });
  }

  setChunkDistance(value) {
    this.chunkDistance = value;
    this.chunkHandle.css('width', `${value}%`);
  }

  handleSliderMousemove(e) {
    if (this.mousedown) {
      if (this.isSectionSlider) {
        let x = (e.pageX - this.el[0].getBoundingClientRect().left) / this.el[0].getBoundingClientRect().width * 100;
        x = x + this.chunkDistance > 100 ? 100 - this.chunkDistance : x < 0 ? 0 : x;
        this.chunkHandle.css('left', `${x}%`);
        this.computeChunkHandlePos();
      } else {
        let x = (e.pageX - this.el[0].getBoundingClientRect().left) / this.el[0].getBoundingClientRect().width * 100;
        x = x > 100 ? 100 : x < 0 ? 0 : x;
        this.handles[this.currentHandle].css('left', `${x}%`);
        this.computePos(this.currentHandle);
      }

      const event = $.Event('chart-scale-change');
      event.pos = {
        start: Math.min(...this.pos),
        end: Math.max(...this.pos)
      };
      $(this).trigger(event);
    }
  }

  computeChunkHandlePos() {
    const h = this.chunkHandle[0].getBoundingClientRect();
    const el = this.el[0].getBoundingClientRect();
    this.pos[0] = (h.left - el.left) / el.width;
    this.pos[0] = this.pos[0] < 0 ? 0 : this.pos[0];
    this.pos[1] = this.pos[0] + this.chunkDistance / 100;
  }

  setHandle({
    i,
    position
  }) {
    this.handles[i].css('left', `${position}%`);
    this.computePos(i);
    const event = $.Event('chart-scale-change');
    event.pos = {
      start: Math.min(...this.pos),
      end: Math.max(...this.pos)
    };
    $(this).trigger(event);
  }

  setChunkHandle(pos) {
    this.chunkHandle.css('left', `${pos}%`);
    this.computeChunkHandlePos();
    const event = $.Event('chart-scale-change');
    event.pos = {
      start: Math.min(...this.pos),
      end: Math.max(...this.pos)
    };
    $(this).trigger(event);
  }

  setHandleWithoutTrigger({
    i,
    pos
  }) {
    this.handles[i].css('left', `${pos}%`);
    this.computePos(i);
  }

  computePos(i) {
    const h = this.handles[i][0].getBoundingClientRect();
    const el = this.el[0].getBoundingClientRect();
    this.pos[i] = (h.left + h.width / 2 - el.left) / el.width;
    this.pos[i] = this.pos[i] < 0 ? 0 : this.pos[i];
  }

}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_pug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.pug */ "./src/index.pug");
/* harmony import */ var _index_pug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_pug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _plugin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plugin.js */ "./src/plugin.js");

 // import './init.js';

__webpack_require__("./src/components sync recursive \\.sass$");

/***/ }),

/***/ "./src/index.pug":
/*!***********************!*\
  !*** ./src/index.pug ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_indent = [];
pug_html = pug_html + "\u003C!DOCTYPE html\u003E\n\u003Chtml lang=\"en\"\u003E\n  \u003Chead\u003E\n    \u003Cscript src=\"https:\u002F\u002Fcode.jquery.com\u002Fjquery-3.5.1.min.js\" integrity=\"sha256-9\u002FaliU8dGd2tb6OSsuzixeV4y\u002FfaTqgFtohetphbbj0=\" crossorigin=\"anonymous\"\u003E\u003C\u002Fscript\u003E\n    \u003Cmeta charset=\"UTF-8\"\u003E\n    \u003Cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"\u003E\n    \u003Ctitle\u003Echart\u003C\u002Ftitle\u003E\n  \u003C\u002Fhead\u003E\n  \u003Cbody\u003E\n    \u003Cdiv class=\"root root1\"\u003E\u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"root root2\"\u003E\u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"root root3\"\u003E\u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"root root4\"\u003E\u003C\u002Fdiv\u003E\n  \u003C\u002Fbody\u003E\n\u003C\u002Fhtml\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/mvc/controller.js":
/*!*******************************!*\
  !*** ./src/mvc/controller.js ***!
  \*******************************/
/*! exports provided: Controller */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return Controller; });
/* harmony import */ var _view2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view2 */ "./src/mvc/view2.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ "./src/mvc/model.js");


class Controller {
  constructor(data) {
    this.view = new _view2__WEBPACK_IMPORTED_MODULE_0__["View"](data);
    this.model = new _model__WEBPACK_IMPORTED_MODULE_1__["Model"](data);
    this.data = data;
    this.handleWindowMousemove = this.handleWindowMousemove.bind(this);
    this.handleWindowResize = this.handleWindowResize.bind(this);
    $(this.view.canvas).click(() => {});
    $(this.view.canvas).on('mousemove', this.handleWindowMousemove);
    $(window).resize(this.handleWindowResize);
  }

  handleWindowMousemove(e) {
    const x = e.clientX;
    const y = e.clientY;

    if (this.view.pointRadius > 1) {
      this.view.pointIntersection({
        x,
        y,
        e
      });
    }
  }

  handleWindowResize() {
    this.view.timeOuts.forEach(el => {
      clearTimeout(el);
    });
    this.data.diapason.full ? this.view.asyncReRender() : this.view.reRender();
  }

}

/***/ }),

/***/ "./src/mvc/model.js":
/*!**************************!*\
  !*** ./src/mvc/model.js ***!
  \**************************/
/*! exports provided: Model */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Model", function() { return Model; });
class Model {
  constructor(data) {
    this.data = data;
  }

  scaleFromTo({
    start,
    end
  }) {
    const startIndex = Math.round(this.data.x.categories.length * start);
    const endIndex = Math.round(this.data.x.categories.length * end);
    return {
      startIndex,
      endIndex
    };
  }

}

/***/ }),

/***/ "./src/mvc/view2.js":
/*!**************************!*\
  !*** ./src/mvc/view2.js ***!
  \**************************/
/*! exports provided: View */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View", function() { return View; });
/* harmony import */ var _components_slider_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/slider/slider */ "./src/components/slider/slider.js");
/* harmony import */ var _components_chartname_chartname__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/chartname/chartname */ "./src/components/chartname/chartname.js");


class View {
  constructor(data) {
    this.timeOuts = [];
    this.chunkSections = 10;
    this.data = data;
    this.font;
    this.min;
    this.max;
    this.diapason;
    this.sectionStartIndex;
    this.sectionEndIndex;
    this.sectionChunkStartIndex;
    this.sectionChunkEndIndex;
    this.startIndex;
    this.endIndex;
    this.chunks = 100;
    this.dataArrays = this.data.series.map(el => el.data); // this.maxDataArrayLength = this.data.series.length > 1 ? this.dataArrays.reduce((a, el) => Math.max(a.length, el.length)) : this.data.series[0].data.length;

    this.maxDataArrayLength = this.data.series[0].data.length;
    this.sectionDiapason = this.maxDataArrayLength < 10000 ? this.maxDataArrayLength : this.maxDataArrayLength > 1000000 ? 50000 : 10000;
    this.colors = new Set();
    this.dataCoords = new Array(this.data.series.length).fill(0).map(() => []);
    this.sectionSlider = new _components_slider_slider__WEBPACK_IMPORTED_MODULE_0__["Slider"](true);
    this.chunkSlider = new _components_slider_slider__WEBPACK_IMPORTED_MODULE_0__["Slider"](false);
    this.canvas = $('<canvas>');
    this.$tip = $('<div>', {
      class: 'tip'
    });
    this.nameY = $('<div>', {
      class: 'nameY'
    });
    this.nameX = $('<div>', {
      class: 'nameX'
    });
    this.canvasWrapper = $('<div>', {
      class: 'canvasWrapper'
    });
    this.chartnames = $('<div>', {
      class: 'chartnames'
    });
    this.context = this.canvas[0].getContext('2d');
    this.mainWrapper = $('<div>', {
      class: 'mainWrapper'
    });
    this.chartnamesArray;
    this.canvasWidth;
    this.canvasHeight;
    this.Xstart;
    this.Xend;
    this.Xwidth;
    this.Ystart;
    this.Yend;
    this.Yheight;
    this.axisesCoordinates;
    this.pointRadius = 2;
    !this.data.diapason.full ? this.init() : this.asyncInit();
  }

  init() {
    this.generateColor();
    this.elementsInit();
    this.defineSizes(this.canvasWrapper[0].getBoundingClientRect());
    this.canvasResize();
    this.minmaxData();
    this.renderAxises(this.axisesCoordinates);
    $(this.chunkSlider).on('chart-scale-change', e => {
      const statrtEndIndexes = this.getIndexesDiapason({
        pos: e.pos,
        diapason: this.sectionEndIndex - this.sectionStartIndex
      });
      this.sectionChunkStartIndex = statrtEndIndexes.startIndex;
      this.sectionChunkEndIndex = statrtEndIndexes.endIndex;
      this.startIndex = this.sectionChunkStartIndex + this.sectionStartIndex;
      this.endIndex = this.sectionChunkEndIndex + this.sectionStartIndex;
      this.renderAllCharts({
        startIndex: this.startIndex,
        endIndex: this.endIndex
      });
    });
    $(this.sectionSlider).on('chart-scale-change', e => {
      const statrtEndIndexes = this.getIndexesDiapason({
        pos: e.pos,
        diapason: this.maxDataArrayLength
      });
      this.sectionStartIndex = statrtEndIndexes.startIndex;
      this.sectionEndIndex = statrtEndIndexes.endIndex;
      this.startIndex = this.sectionChunkStartIndex + this.sectionStartIndex;
      this.endIndex = this.sectionChunkEndIndex + this.sectionStartIndex;
      this.renderAllCharts({
        startIndex: this.startIndex,
        endIndex: this.endIndex
      });
    });
    this.sectionSlider.setChunkHandle(0);
    this.chunkSlider.setHandle({
      i: 0,
      position: 0
    });
    this.chunkSlider.setHandle({
      i: 1,
      position: 5
    });
  }

  reRender() {
    this.defineSizes(this.canvasWrapper[0].getBoundingClientRect());
    this.canvasResize();
    this.renderAxises(this.axisesCoordinates);
    this.renderAllCharts({
      startIndex: this.startIndex,
      endIndex: this.endIndex
    });
  }

  asyncReRender() {
    this.data.$root.html('');
    this.canvas = $('<canvas>');
    this.$tip = $('<div>', {
      class: 'tip'
    });
    this.nameY = $('<div>', {
      class: 'nameY'
    });
    this.nameX = $('<div>', {
      class: 'nameX'
    });
    this.canvasWrapper = $('<div>', {
      class: 'canvasWrapper'
    });
    this.chartnames = $('<div>', {
      class: 'chartnames'
    });
    this.context = this.canvas[0].getContext('2d');
    this.mainWrapper = $('<div>', {
      class: 'mainWrapper'
    });
    this.asyncInit();
  }

  asyncInit() {
    this.generateColor();
    this.elementsInit();
    this.defineSizes(this.canvasWrapper[0].getBoundingClientRect());
    this.canvasResize();
    this.minmaxData();
    this.renderAxises(this.axisesCoordinates);
    this.startIndex = 0;
    this.endIndex = this.maxDataArrayLength;
    this.renderAllCharts({
      startIndex: this.startIndex,
      endIndex: this.endIndex
    });
  }

  mainWrapperAppending() {
    this.mainWrapper.append(this.canvasWrapper);
    !this.data.diapason.full ? this.mainWrapper.append(this.sectionSlider.el) : 0;
    !this.data.diapason.full ? this.mainWrapper.append(this.chunkSlider.el) : 0;
    this.mainWrapper.append(this.chartnames);
  }

  elementsInit() {
    this.nameY.append(this.data.y.title);
    this.data.$root.append(this.nameY);
    this.nameX.append(this.data.x.title);
    this.canvasWrapper.append(this.canvas).append(this.nameX);
    this.mainWrapperAppending();
    this.canvasWrapper.append(this.$tip);
    this.chunkSlider.el.css('margin-top', '5px');
    this.data.$root.append(this.mainWrapper);
    this.chartnamesArray = new Array(this.data.series.length).fill(0).map((el, i) => {
      const color = this.colors[i];
      const {
        name
      } = this.data.series[i];
      const chartname = new _components_chartname_chartname__WEBPACK_IMPORTED_MODULE_1__["Chartname"]({
        color,
        name
      });
      this.chartnames.append(chartname.container);
      return chartname;
    });
  }

  defineSizes(wrapperBoundingRect) {
    this.canvasWidth = wrapperBoundingRect.width;
    this.canvasHeight = wrapperBoundingRect.height;
    this.Xstart = {
      x: this.canvasWidth * 0.15,
      y: this.canvasHeight * 0.85
    };
    this.Xend = {
      x: this.canvasWidth * 0.9,
      y: this.canvasHeight * 0.85
    };
    this.Xwidth = this.Xend.x - this.Xstart.x;
    this.Ystart = {
      x: this.canvasWidth * 0.1,
      y: this.canvasHeight * 0.05
    };
    this.Yend = {
      x: this.canvasWidth * 0.1,
      y: this.canvasHeight * 0.75
    };
    this.Yheight = this.Yend.y - this.Ystart.y;
    this.axisesCoordinates = {
      Xaxis: {
        start: this.Xstart,
        end: this.Xend
      },
      Yaxis: {
        start: this.Ystart,
        end: this.Yend
      }
    };
    const val = Math.round(this.sectionDiapason / this.maxDataArrayLength * 100);
    this.sectionSlider.setChunkDistance(val);
    this.font = this.canvasHeight * 0.01 > 3 ? `${3}px` : `${this.canvasHeight * 0.01}px`;
  }

  getIndexesDiapason({
    pos,
    diapason
  }) {
    return {
      startIndex: Math.round(pos.start * diapason),
      endIndex: Math.round(pos.end * diapason)
    };
  }

  renderAxises({
    Xaxis,
    Yaxis
  }) {
    this.renderYaxis(Yaxis);
    this.renderXaxis(Xaxis);
  }

  renderYaxis(axis) {
    this.context.beginPath();
    this.context.moveTo(axis.start.x, axis.start.y);
    this.context.lineTo(axis.end.x, axis.end.y);
    this.context.stroke();
    this.addDelimitersY();
  }

  renderXaxis(axis) {
    this.context.beginPath();
    this.context.moveTo(axis.start.x, axis.start.y);
    this.context.lineTo(axis.end.x, axis.end.y);
    this.context.stroke();
  }

  canvasResize() {
    this.canvas[0].width = this.canvasWidth;
    this.canvas[0].height = this.canvasHeight;
  }

  minmaxData() {
    let arr = [];
    this.dataArrays.forEach((el, i) => {
      arr = [...arr, ...el];
    });
    this.max = arr.reduce((a, b) => Math.max(a, b));
    this.min = arr.reduce((a, b) => Math.min(a, b));
    this.diapason = this.max - this.min;
  }

  pointIntersection({
    x,
    y,
    e
  }) {
    console.log(111111111111111);
    const br = this.canvas[0].getBoundingClientRect();
    let isIntersected = false;

    for (let index = 0; index < this.dataCoords.length; index++) {
      for (let i = 0; i < this.dataCoords[index].length; i++) {
        const xx = this.dataCoords[index][i].x + br.x;
        const yy = this.dataCoords[index][i].y + br.y;
        const radius = Math.sqrt((xx - x) ** 2 + (yy - y) ** 2);

        if (radius < this.pointRadius + 1) {
          this.$tip.text(this.dataCoords[index][i].val);
          isIntersected = true;
          this.$tip.css('left', `${e.clientX}px`);
          this.$tip.css('top', `${e.clientY}px`);
          break;
        }
      }

      if (isIntersected) {
        break;
      } else {
        this.$tip.text('');
      }
    }
  }

  drawPoint({
    data,
    index,
    i,
    offset,
    j
  }) {
    const y = this.Yend.y - (data[i] - this.min) / this.diapason * this.Yheight;
    const x = this.Xstart.x + offset * j;

    if (j > 0) {
      const prevY = this.Yend.y - (data[i - 1] - this.min) / this.diapason * this.Yheight;
      const prevX = this.Xstart.x + offset * (j - 1);
      this.context.beginPath();
      this.context.moveTo(x, y);
      this.context.lineTo(prevX, prevY);
      this.context.strokeStyle = this.colors[index];
      this.context.stroke();
      this.context.closePath();
    }

    if (this.pointRadius > 1.5) {
      this.context.beginPath();
      this.context.arc(x, y, this.pointRadius, 0, 2 * Math.PI);
      this.dataCoords[index].push({
        x,
        y,
        val: data[i]
      });
      this.context.fillStyle = this.colors[index];
      this.context.fill();
    }
  }

  definePointRadius(lngt) {
    this.pointRadius = this.canvasHeight / lngt;
    this.pointRadius = this.pointRadius > 5 ? 5 : this.pointRadius;
    this.pointRadius = this.pointRadius < 1 ? 1 : this.pointRadius;
  }

  renderChartAsync({
    data,
    index,
    startIndex,
    endIndex
  }) {
    const length = endIndex - startIndex;
    const offset = this.Xwidth / (endIndex - startIndex);
    const chunks = length > 10000 ? Math.ceil(length / 10000) : 1;
    const $this = this;
    const chunkLength = 10000;

    for (let j = 0; j < chunks; j++) {
      setTimeout(param => {
        for (let i = 0; i < chunkLength; i++) {
          if (chunkLength * j + i < length) {
            this.timeOuts.push(setTimeout(this.drawPoint.bind($this), 0, {
              data,
              index,
              i: chunkLength * j + i,
              offset,
              j: i + j * chunkLength
            }));
          }
        }
      }, 0, j);
    }
  }

  renderChart({
    data,
    index,
    startIndex,
    endIndex
  }) {
    const offset = this.Xwidth / (endIndex - startIndex);
    const arr = data.slice(startIndex, endIndex);

    for (let i = startIndex; i < endIndex; i++) {
      const j = i - startIndex;
      this.drawPoint({
        data,
        index,
        i,
        offset,
        j
      });
    }
  }

  renderAllCharts({
    startIndex,
    endIndex
  }) {
    this.dataCoords = new Array(this.data.series.length).fill(0).map(() => []);
    this.definePointRadius(endIndex - startIndex);
    this.clearChart();
    this.dataArrays.forEach((data, index) => {
      const drawChartParametres = {
        data,
        index,
        startIndex,
        endIndex
      };
      this.data.diapason.full ? this.renderChartAsync(drawChartParametres) : this.renderChart(drawChartParametres);
    });
    this.addDelimitersX({
      startIndex,
      endIndex
    });
    console.log(this.dataCoords);
  }

  clearChart() {
    this.context.clearRect(this.Xstart.x - 2 * this.pointRadius, 0, this.canvasWidth, this.Yheight + this.Ystart.y + 2 * this.pointRadius);
  }

  generateColor() {
    while (this.colors.size < this.data.series.length) {
      this.colors.add(`rgba(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},1)`);
    }

    this.colors = Array.from(this.colors);
  }

  addDelimitersY() {
    const exponent = ['Т', 'М'];

    for (let i = 0; i < 10; i++) {
      let divider = 1000;
      let order = 0;
      let value = (this.min + i * this.diapason / 9).toFixed(2);

      while (value / divider > 1) {
        divider *= divider;
        order++;
      }

      divider /= 1000;
      value = exponent[order - 1] ? (value / 1000 ** order).toFixed(1) + exponent[order - 1] : value;
      const offset = this.Ystart.y + this.Yheight - i * this.Yheight / 9;
      this.context.beginPath();
      this.context.moveTo(this.Ystart.x, offset);
      this.context.lineTo(this.Ystart.x - 10, offset);
      this.context.stroke();
      this.context.font = this.font;
      this.context.textAlign = 'center';
      this.context.fillText(value, this.Ystart.x - 30, offset);
    }
  }

  addDelimitersX({
    startIndex,
    endIndex
  }) {
    this.context.clearRect(this.Xstart.x - 10, this.Xstart.y + 1, this.canvasWidth, this.canvasHeight);
    const offset = this.Xwidth / (endIndex - startIndex);
    let offset2 = offset;
    const condition = endIndex - startIndex > 1000 || startIndex > 1000;
    const multiplicity2 = condition ? 2 : 1;
    let multiplicity = 1 * multiplicity2;

    while (offset2 < 20) {
      offset2 += offset;
      multiplicity += 1 * multiplicity2;
    }

    for (let i = startIndex; i < endIndex; i++) {
      if ((i + 1 - startIndex) % multiplicity !== 0) {
        continue;
      }

      this.context.beginPath();
      this.context.moveTo(this.Xstart.x + offset * (i - startIndex), this.Xstart.y);
      this.context.lineTo(this.Xstart.x + offset * (i - startIndex), this.Xstart.y + 10);
      this.context.strokeStyle = '#000';
      this.context.stroke();
      this.context.font = this.font;
      this.context.textAlign = 'center';
      this.context.fillStyle = '#000';
      this.context.fillText(this.data.x.categories[i], this.Xstart.x + offset * (i - startIndex), this.Xstart.y + 10 + 10);
    }
  }

}

/***/ }),

/***/ "./src/plugin.js":
/*!***********************!*\
  !*** ./src/plugin.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mvc_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mvc/controller */ "./src/mvc/controller.js");


(function ($) {
  const methods = {
    coords() {
      const $this = $(this);
      const chart = $this.data('myChart');
      return chart.chart.view.dataArrays;
    },

    init(options) {
      return this.each(function () {
        const $this = $(this);
        const data = $this.data('myChart');
        const chart = new _mvc_controller__WEBPACK_IMPORTED_MODULE_0__["Controller"]({ ...options,
          $root: $this
        });

        if (!data) {
          $(this).data('myChart', {
            target: $this,
            chart
          });
        }
      });
    }

  };

  $.fn.myChart = function (method) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    }

    if (typeof method === 'object' || !method) {
      return methods.init.apply(this, arguments);
    }

    $.error(`Метод с именем ${method} не существует для jQuery.myChart`);
  };
})(jQuery);

/***/ }),

/***/ 0:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
//# sourceMappingURL=main1.js.map