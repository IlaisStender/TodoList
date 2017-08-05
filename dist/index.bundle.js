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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var deletesvg = __webpack_require__(1);
var TodoListItem = (function () {
    function TodoListItem(todoList, todoListContainer, elem) {
        this.elem = elem;
        this.todoList = todoList;
        this.parentContainer = todoListContainer;
        this.itemCustomEvent();
        this.createEntry();
        this.removeItemEvent();
        this.inputUpdateEvent();
        this.checkboxUpdateEvent();
        this.isDone();
    }
    TodoListItem.prototype.itemCustomEvent = function () {
        this.deleteItemEvent = new CustomEvent('deleteItem', {
            detail: { id: this.elem.id },
        });
        this.updateItemEvent = new CustomEvent('updateItem', {
            detail: {},
        });
    };
    TodoListItem.prototype.createEntry = function () {
        this.createElemLi();
        this.createElemCheckbox();
        this.createElemDeleteButton();
        this.createElemInput();
        this.elemLi.appendChild(this.checkboxElem);
        this.elemLi.appendChild(this.inputElem);
        this.elemLi.appendChild(this.deleteButton);
        this.todoList.appendChild(this.elemLi);
    };
    TodoListItem.prototype.createElemLi = function () {
        this.elemLi = document.createElement('li');
        this.elemLi.className = 'list-item ';
    };
    TodoListItem.prototype.createElemCheckbox = function () {
        this.checkItem = document.createElement('div');
        this.checkItem.className = 'item-input';
        this.checkboxElem = document.createElement('input');
        this.checkboxElem.className = 'item-checkbox';
        this.checkboxElem.type = 'checkbox';
        this.checkItem.appendChild(this.checkboxElem);
        this.checkboxElem.id = "todo" + this.elem.id;
        this.checkboxElem.checked = this.elem.done;
    };
    TodoListItem.prototype.createElemDeleteButton = function () {
        this.deleteDiv = document.createElement('div');
        this.deleteDiv.className = 'item-buttonn';
        this.deleteButton = document.createElement('button');
        this.deleteButton.type = 'button';
        this.deleteButton.className = 'item-delete';
        this.deleteDiv.appendChild(this.deleteButton);
        this.deleteButton.innerHTML = "<img src=\"" + deletesvg + "\" alt= \"delete icon\" > ";
    };
    TodoListItem.prototype.createElemInput = function () {
        this.inputItem = document.createElement('div');
        this.inputItem.className = 'item-text';
        this.inputElem = document.createElement('input');
        this.inputElem.className = 'item-input--tag';
        this.inputElem.type = 'text';
        this.inputElem.value = this.elem.title;
    };
    TodoListItem.prototype.deleteItem = function () {
        this.elemLi.remove();
    };
    TodoListItem.prototype.inputUpdateEvent = function () {
        var _this = this;
        this.inputElem.addEventListener('change', function () {
            _this.updateItemEvent.detail.elem = Object.assign({}, _this.elem, { title: _this.inputElem.value });
            _this.parentContainer.dispatchEvent(_this.updateItemEvent);
        });
    };
    TodoListItem.prototype.checkboxUpdateEvent = function () {
        var _this = this;
        this.checkboxElem.addEventListener('change', function () {
            _this.updateItemEvent.detail.elem = Object.assign({}, _this.elem, { done: _this.checkboxElem.checked });
            _this.isDone();
            _this.parentContainer.dispatchEvent(_this.updateItemEvent);
        });
    };
    TodoListItem.prototype.isDone = function () {
        if (this.checkboxElem.checked) {
            this.inputElem.classList.add('task-isDone');
        }
        else {
            this.inputElem.classList.remove('task-isDone');
        }
    };
    TodoListItem.prototype.removeItemEvent = function () {
        var _this = this;
        this.deleteButton.addEventListener('click', function () {
            _this.parentContainer.dispatchEvent(_this.deleteItemEvent);
        });
    };
    return TodoListItem;
}());
exports.default = TodoListItem;
/*
let deletesvg = require('../icons/deletesvg.svg');

interface ItodoItemType {
  title?: string,
  done?: boolean,
  id: number
}

export default class TodoListItem {

  elem: ItodoItemType;
  todoList: Element;
  parentContainer: HTMLElement;
  elemLi: HTMLElement;
  checkboxElem: HTMLInputElement;
  deleteButton: HTMLButtonElement;
  inputElem: HTMLInputElement;


  deleteItemEvent: CustomEvent;
  updateItemEvent: CustomEvent;
  // detail: any;

  constructor(todoList, todoListContainer, elem) {
    this.elem = elem;
    this.todoList = todoList;
    this.parentContainer = todoListContainer;
    this.itemCustomEvent();
    this.createEntry();
    this.removeItemEvent();
    this.inputUpdateEvent();
    this.checkboxUpdateEvent();
    this.isDone();
  }
  itemCustomEvent() {
    this.deleteItemEvent = new CustomEvent('deleteItem', {
      detail: { id: this.elem.id },
    });
    this.updateItemEvent = new CustomEvent('updateItem', {
      detail: {},
    });
  }

  createEntry() {
    this.createElemLi();
    this.createElemCheckbox();
    this.createElemDeleteButton();
    this.createElemInput();
    this.elemLi.appendChild(this.checkboxElem);
    this.elemLi.appendChild(this.inputElem);
    this.elemLi.appendChild(this.deleteButton);
    this.todoList.appendChild(this.elemLi);
  }

  createElemLi() {
    // this.elemLi = document.createElement('li');
    //  this.elemLi.className = 'list-item ';
    let elemLi: HTMLElement = document.createElement('div');
    elemLi.className = 'list-item ';
    this.elemLi = elemLi;
  }
  createElemCheckbox() {
    let checkItem: HTMLElement = document.createElement('div');
    checkItem.className = 'item-input';
    let checkboxElem: HTMLInputElement = document.createElement('input');
    checkboxElem.className = 'item-checkbox';
    checkboxElem.type = 'checkbox';
    checkItem.appendChild(checkboxElem);
    checkboxElem.id = `todo${this.elem.id } `;
    checkboxElem.checked = this.elem.done;
    this.checkboxElem = checkboxElem;
  }
  createElemDeleteButton() {
    let deleteDiv: HTMLElement = document.createElement('div');
    deleteDiv.className = 'item-buttonn';
    let deleteButton: HTMLButtonElement = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.className = 'item-delete';
    deleteDiv.appendChild(deleteButton);

    deleteButton.innerHTML = ` < img src= "${deletesvg}" alt= "delete icon" > `;
    this.deleteButton = deleteButton;
  }
  createElemInput() {
    let inputItem: HTMLElement = document.createElement('div');
    inputItem.className = 'item-text';
    let inputElem: HTMLInputElement = document.createElement('input');
    inputElem.className = 'item-input--tag';
    inputElem.type = 'text';
    inputElem.value = this.elem.title;
    this.inputElem = inputElem;
  }
  deleteItem() {
    this.elemLi.remove();
  }
  inputUpdateEvent() {
    this.inputElem.addEventListener('change', () => {
      this.updateItemEvent.detail.elem = Object.assign({}, this.elem, { title: this.inputElem.value });
      this.parentContainer.dispatchEvent(this.updateItemEvent);
    });
  }
  checkboxUpdateEvent() {
    this.checkboxElem.addEventListener('change', () => {
      this.updateItemEvent.detail.elem = Object.assign({}, this.elem, { done: this.checkboxElem.checked });
      this.isDone();
      this.parentContainer.dispatchEvent(this.updateItemEvent);
    });
  }

  isDone() {
    if (this.checkboxElem.checked) {
      this.inputElem.classList.add('task-isDone');
    } else {
      this.inputElem.classList.remove('task-isDone');
    }
  }
  removeItemEvent() {
    this.deleteButton.addEventListener('click', () => {
      this.parentContainer.dispatchEvent(this.deleteItemEvent);
    });
  }
}

*/ 


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e60f38e74c9d61ddff9d840dd9ce10fb.svg";

/***/ }),
/* 2 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(10);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var todoBuilder_1 = __webpack_require__(5);
__webpack_require__(8);
__webpack_require__(11);
new todoBuilder_1.default();


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var todolist_1 = __webpack_require__(6);
var fab = __webpack_require__(7);
var TodoBuilder = (function () {
    // detail: (<CustomEvent>Event).detail;
    function TodoBuilder() {
        this.builderLayout();
        this.ListStorage = JSON.parse(localStorage.getItem('allTodoStorage')) || [];
        this.allTodo = {};
        this.initBuilder();
    }
    TodoBuilder.prototype.initBuilder = function () {
        this.addTodoEvent();
        this.showList();
        this.deleteTodoList();
        this.headlineEvent();
    };
    TodoBuilder.prototype.builderLayout = function () {
        this.boardHeader = "\n                <div class=\"toolbar \">\n                  <div class=\"logo\">\n                    ToDo List\n                  </div>\n                </div>\n                <div class=\"fab\">\n                  <button class=\"fab-button\" type=\"button\"><img src=\"" + fab + "\" alt=\"fab icon\"></button>\n                </div>\n                <div class=\"content\"></div>\n        ";
        this.boardContainer = document.createElement('div');
        this.boardContainer.className = 'app-content';
        this.boardContainer.innerHTML = this.boardHeader;
        this.container = document.querySelector('.board-wrapper');
        this.container.appendChild(this.boardContainer);
        this.container.appendChild(this.boardContainer);
        this.addLists = document.querySelector('.fab');
    };
    TodoBuilder.prototype.addTodoEvent = function () {
        var _this = this;
        this.addLists.addEventListener('click', function (e) {
            e.preventDefault();
            var maxListId = (_this.ListStorage.length > 0 ? Math.max.apply(Math, _this.ListStorage.map(function (elem) { return elem.id; })) : 0);
            var todoLIST = {
                id: maxListId + 1,
                todoListTitle: '',
            };
            _this.ListStorage.push(todoLIST);
            _this.saveTodoList();
            _this.createTodoList(todoLIST);
        });
    };
    TodoBuilder.prototype.headlineEvent = function () {
        var _this = this;
        document.addEventListener('headlineChange', function (e) {
            //   (<CustomEvent>Event).detail
            var elId = e.detail.todoLIST.id;
            var index = _this.ListStorage.findIndex(function (todoLIST) { return todoLIST.id === elId; });
            _this.ListStorage[index] = e.detail.todoLIST;
            _this.saveTodoList();
        });
    };
    TodoBuilder.prototype.saveTodoList = function () {
        localStorage.setItem('allTodoStorage', JSON.stringify(this.ListStorage));
    };
    TodoBuilder.prototype.showList = function () {
        var _this = this;
        this.ListStorage.forEach(function (elemLIST) {
            _this.createTodoList(elemLIST);
        });
    };
    TodoBuilder.prototype.createTodoList = function (todoLIST) {
        var todoListObject = new todolist_1.default(todoLIST);
        this.allTodo[todoLIST.id] = todoListObject;
    };
    TodoBuilder.prototype.deleteTodoList = function () {
        var _this = this;
        document.addEventListener('deleteLIST', function (e) {
            var elId = e.detail.id;
            var index = _this.ListStorage.findIndex(function (elem) { return elem.id === elId; });
            _this.ListStorage.splice(index, 1);
            _this.allTodo[elId].onDeleteList();
            delete _this.allTodo[elId];
            _this.saveTodoList();
        });
    };
    return TodoBuilder;
}());
exports.default = TodoBuilder;
/*
interface ITodoBuilder {
  // name: string;
  // lessonCount?: number;
  allTodo?: any;
  ListStorage?: any;
} */
/*

// export default class TodoBuilder implements ITodoBuilder {
export default class TodoBuilder {
  
  let course : {name:string} = {
      name: 'Components'
  };
  let course : Course = {
    name: 'Components'
};
  interface SquareConfig {
    color?: string;
    width?: number;
}

interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}

class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
  interface NumberDictionary {
    [index: string]: number;
    length: number;    // ok, length is a number
    name: string;      // error, the type of 'name' is not a subtype of the indexer
}
  




  ListStorage: any;
  allTodo: any;
  boardHeader: string;
  boardContainer: HTMLElement;
  container: Element;
  addLists: Element;
 

  constructor() {


    this.builderLayout();
    this.ListStorage = JSON.parse(localStorage.getItem('allTodoStorage')) || [];
    this.allTodo = {};
    this.initBuilder();
  }

  initBuilder() {
    this.addTodoEvent();
    this.showList();
    this.deleteTodoList();
    this.headlineEvent();
  }

  builderLayout() {
    this.boardHeader = `
                <div class="toolbar ">
                  <div class="logo">
                    ToDo List
                  </div>
                </div>
                <div class="fab">
                  <button class="fab-button" type="button"><img src="${fab}" alt="fab icon"></button>
                </div>
                <div class="content"></div>
        `;
    this.boardContainer = document.createElement('div');
    this.boardContainer.className = 'app-content';
    this.boardContainer.innerHTML = this.boardHeader;
    this.container = document.querySelector('.board-wrapper');
    this.container.appendChild(this.boardContainer);
    this.addLists = document.querySelector('.fab');
  }
  addTodoEvent() {
    this.addLists.addEventListener('click', (e) => {
      e.preventDefault();
      const maxListId = (this.ListStorage.length > 0 ? Math.max(...this.ListStorage.map(elem => elem.id)) : 0);
      const todoLIST = {
        id: maxListId + 1,
        todoListTitle: "",
      };
      this.ListStorage.push(todoLIST);
      this.saveTodoList();
      this.createTodoList(todoLIST);
    });
  }
  headlineEvent() {
    document.addEventListener('headlineChange', (e: CustomEvent) => {
      const elId = e.detail.todoLIST.id;
      const index = this.ListStorage.findIndex(todoLIST => todoLIST.id === elId);
      this.ListStorage[index] = e.detail.todoLIST;
      this.saveTodoList();
    });
  }
  saveTodoList() {
    localStorage.setItem('allTodoStorage', JSON.stringify(this.ListStorage));
  }
  showList() {
    this.ListStorage.forEach((elemLIST) => {
      this.createTodoList(elemLIST);
    });
  }
  createTodoList(todoLIST) {
    const todoListObject = new TodoList(todoLIST);
    this.allTodo[todoLIST.id] = todoListObject;
  }
  deleteTodoList() {
    document.addEventListener('deleteLIST', (e) => {
      const elId = e.detail.id;
      const index = this.ListStorage.findIndex(elem => elem.id === elId);
      this.ListStorage.splice(index, 1);
      this.allTodo[elId].onDeleteList();
      delete this.allTodo[elId];
      this.saveTodoList();
    });
  }
}
*/ 


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TodoList = (function () {
    function TodoList(todoLIST) {
        this.todoLIST = todoLIST;
        this.todoItems = {};
        this.itemsStorage = JSON.parse(localStorage.getItem("todoListItem" + this.todoLIST.id)) || [];
        this.createLayout();
        this.initTodoList();
    }
    TodoList.prototype.initTodoList = function () {
        this.showItem();
        this.addItemEvent();
        this.todoCustomEvent();
        this.deleteItem();
        this.updateItem();
        this.clearListOnClick();
        this.clearTodoOnClick();
        this.deleteTodoList();
        this.headlineChange();
    };
    TodoList.prototype.createLayout = function () {
        this.layout = "\n        <form class=\"card-form\" autocomplete=\"off\">\n          <div class=\"headline\">\n            <input class=\"headline-title\" placeholder=\"Title\" value=\"" + this.todoLIST.todoListTitle + "\">\n          </div>\n          <ul class=\"todo-list\">\n          </ul>\n          <div class=\"new-item\">\n            <div class=\"item-input\">\n              <input class=\"item-submit\" type=\"submit\" alt=\"Submit\" value=\"+\" />\n            </div>\n            <div class=\"item-text\">\n              <input class=\"item-input--tag add-item\" placeholder=\"Add new todo\" value=\"\">\n              <span class=\"highlight\"></span>\n              <span class=\"bar\"></span>\n            </div>\n          </div>\n        </form>\n        <div class=\"list-button\">\n          <div class=\"clear-list\">\n            <button class=\"delete-button clear \" type=\"button\">clear</button>\n          </div>\n          <div class=\"delete-list\">\n            <button class=\"delete-button delete\" type=\"button\">delete</button>\n          </div>\n        </div>\n";
        this.todoListContainer = document.createElement('div');
        this.todoListContainer.className = 'card';
        this.todoListContainer.innerHTML = this.layout;
        this.todoFormcontainer = document.querySelector('.content');
        this.todoFormcontainer.appendChild(this.todoListContainer);
        // querySelector returns Element
        // use -> as HTMLInputElement
        this.headline = this.todoListContainer.querySelector('.headline-title');
        this.inputID = this.todoListContainer.querySelector('.add-item');
        this.buttonID = this.todoListContainer.querySelector('.item-submit');
        this.todoList = this.todoListContainer.querySelector('.todo-list');
        this.removeList = this.todoListContainer.querySelector('.clear');
        this.deleteTodo = this.todoListContainer.querySelector('.delete');
    };
    TodoList.prototype.todoCustomEvent = function () {
        this.deleteLISTEvent = new CustomEvent('deleteLIST', {
            detail: { id: this.todoLIST.id },
        });
        this.headlineEvent = new CustomEvent('headlineChange', {
            detail: {},
        });
    };
    TodoList.prototype.addItemEvent = function () {
        var _this = this;
        this.buttonID.addEventListener('click', function (e) {
            e.preventDefault();
            //  if (this.inputID.value.length === 0) return;
            var title = _this.inputID.value;
            var maxId = (_this.itemsStorage.length > 0 ? Math.max.apply(Math, _this.itemsStorage.map(function (elem) { return elem.id; })) : 0);
            var todoItem = {
                title: title,
                done: false,
                id: maxId + 1,
            };
            _this.itemsStorage.push(todoItem);
            _this.saveItem();
            _this.createItem(todoItem);
            _this.inputID.value = '';
        });
    };
    TodoList.prototype.saveItem = function () {
        localStorage.setItem("todoListItem" + this.todoLIST.id, JSON.stringify(this.itemsStorage));
    };
    TodoList.prototype.createItem = function (todoItem) {
        var _this = this;
        Promise.resolve().then(function () { return __webpack_require__(0); }).then(function (module) {
            var TodoListItem = module.default;
            var todoItemObject = new TodoListItem(_this.todoList, _this.todoListContainer, todoItem);
            _this.todoItems[todoItem.id] = todoItemObject;
        });
    };
    /* createItem(todoItem) {
       const todoItemObject = new TodoListItem(this.todoList, this.todoListContainer, todoItem);
       this.todoItems[todoItem.id] = todoItemObject;
       this.showDeleteButton();
     }*/
    TodoList.prototype.showItem = function () {
        var _this = this;
        this.itemsStorage.forEach(function (elem) {
            _this.createItem(elem);
        });
    };
    TodoList.prototype.deleteItem = function () {
        var _this = this;
        this.todoListContainer.addEventListener('deleteItem', function (e) {
            var elId = e.detail.id;
            var index = _this.itemsStorage.findIndex(function (elem) { return elem.id === elId; });
            _this.itemsStorage.splice(index, 1);
            _this.todoItems[elId].deleteItem();
            delete _this.todoItems[elId];
            _this.saveItem();
        });
    };
    TodoList.prototype.updateItem = function () {
        var _this = this;
        this.todoListContainer.addEventListener('updateItem', function (e) {
            var elId = e.detail.elem.id;
            var index = _this.itemsStorage.findIndex(function (elem) { return elem.id === elId; });
            _this.itemsStorage[index] = e.detail.elem;
            _this.saveItem();
        });
    };
    TodoList.prototype.test = function () {
        var _this = this;
        this.inputID.addEventListener('focus', function () {
            _this.inputID.classList.add('test');
        });
    };
    TodoList.prototype.clearList = function () {
        this.itemsStorage = [];
        this.todoItems = {};
        localStorage.removeItem("todoListItem" + this.todoLIST.id);
        this.todoList.innerHTML = '';
    };
    TodoList.prototype.clearListOnClick = function () {
        var _this = this;
        this.removeList.addEventListener('click', function () {
            _this.removeList.classList.remove('button-visible');
            _this.clearList();
        });
    };
    TodoList.prototype.clearTodoOnClick = function () {
        var _this = this;
        this.deleteTodo.addEventListener('click', function () {
            _this.clearList();
        });
    };
    TodoList.prototype.headlineChange = function () {
        var _this = this;
        this.headline.addEventListener('change', function () {
            _this.headlineEvent.detail.todoLIST = Object.assign({}, _this.todoLIST, { todoListTitle: _this.headline.value });
            document.dispatchEvent(_this.headlineEvent);
        });
    };
    TodoList.prototype.deleteTodoList = function () {
        var _this = this;
        this.deleteTodo.addEventListener('click', function () {
            document.dispatchEvent(_this.deleteLISTEvent);
        });
    };
    TodoList.prototype.onDeleteList = function () {
        this.todoListContainer.remove();
    };
    TodoList.prototype.showDeleteButton = function () {
        if (this.itemsStorage.lenght !== null) {
            this.removeList.classList.add('button-visible');
        }
        console.log(this.itemsStorage);
    };
    return TodoList;
}());
exports.default = TodoList;
/*

// import TodoListItem from './todolistitem.js';
interface ItodoListType {
  id: number,
  todoListTitle?: string
}
interface ItodoItemType {
  title?: string,
  done?: boolean,
  id: number
}


export default class TodoList {

  todoItems: any;
  itemsStorage: any;
  todoLIST: ItodoListType;
  layout: string;
  todoListContainer: HTMLElement;
  todoFormcontainer: Element;
  headline: HTMLInputElement;
  inputID: HTMLInputElement;
  buttonID: Element;
  todoList: Element;
  removeList: Element;
  deleteTodo: Element;
  todoItem: ItodoItemType;
  itemText: Element;
  headlineDiv: Element;

  deleteLISTEvent: CustomEvent;
  headlineEvent: CustomEvent;

  constructor(todoLIST) {
    this.todoLIST = todoLIST;
    this.todoItems = {};
    this.itemsStorage = JSON.parse(localStorage.getItem(`todoListItem${this.todoLIST.id}`)) || [];
    this.createLayout();
    this.initTodoList();
  }

  initTodoList() {
    this.showItem();
    this.addItemEvent();
    this.todoCustomEvent();
    this.deleteItem();
    this.updateItem();
    this.clearListOnClick();
    this.clearTodoOnClick();
    this.deleteTodoList();
    this.headlineChange();
  }

  createLayout() {
    this.layout = `
        <form class="card-form" autocomplete="off">
          <div class="headline">
          
          </div>
          <ul class="todo-list">
          </ul>
          <div class="new-item">
            <div class="item-input">
              <input class="item-submit" type="submit" alt="Submit" value="+" />
            </div>
            <div class="item-text">
            
            </div>
          </div>
        </form>
        <div class="list-button">
          <div class="clear-list">
            <button class="delete-button clear " type="button">clear</button>
          </div>
          <div class="delete-list">
            <button class="delete-button delete" type="button">delete</button>
          </div>
        </div>
`;
    this.todoListContainer = document.createElement('div');
    this.todoListContainer.className = 'card';
    this.todoListContainer.innerHTML = this.layout;
    this.todoFormcontainer = document.querySelector('.content');
    this.todoFormcontainer.appendChild(this.todoListContainer);
    //  this.headline = this.todoListContainer.querySelector('.headline-title');

    //  <input class="headline-title" placeholder="Title" value="${this.todoLIST.todoListTitle}">
    let headline: HTMLInputElement = document.createElement('input');
    headline.className = 'item-input--tag headline-title';
    headline.type = 'text';
    headline.placeholder = "Title";
    headline.value = `${this.todoLIST.todoListTitle} `;
    this.headlineDiv = this.todoListContainer.querySelector('.headline');
    this.headlineDiv.appendChild(headline);
    this.headline = headline;



    this.itemText = this.todoListContainer.querySelector('.item-text');
    let inputID: HTMLInputElement = document.createElement('input');
    inputID.className = 'item-input--tag add-item';
    inputID.type = 'text';
    inputID.value = "";
    inputID.placeholder = "Add new todo";
    this.itemText.appendChild(inputID);
    this.inputID = inputID;

    let highlight: HTMLSpanElement = document.createElement('span');
    highlight.className = 'highlight';
    let bar: HTMLSpanElement = document.createElement('span');
    bar.className = 'bar';
    this.itemText.appendChild(highlight);
    this.itemText.appendChild(bar);
    this.buttonID = this.todoListContainer.querySelector('.item-submit');
    this.todoList = this.todoListContainer.querySelector('.todo-list');
    this.removeList = this.todoListContainer.querySelector('.clear');
    this.deleteTodo = this.todoListContainer.querySelector('.delete');
  }

  todoCustomEvent() {
    this.deleteLISTEvent = new CustomEvent('deleteLIST', {
      detail: { id: this.todoLIST.id },
    });
    this.headlineEvent = new CustomEvent('headlineChange', {
      detail: {},
    });
  }

  addItemEvent() {
    this.buttonID.addEventListener('click', (e) => {
      e.preventDefault();
      //  if (this.inputID.value.length === 0) return;
      //  const title = this.inputID.value;
      // const title = (<HTMLInputElement>this.todoListContainer.querySelector('.add-item')).value;
      const title = this.inputID.value;
      const maxId = (this.itemsStorage.length > 0 ? Math.max(...this.itemsStorage.map(elem => elem.id)) : 0);
      const todoItem = {
        title,
        done: false,
        id: maxId + 1,
      };
      this.itemsStorage.push(todoItem);
      this.saveItem();
      this.createItem(todoItem);
      this.inputID.value = '';
    });
  }
  saveItem() {
    localStorage.setItem(`todoListItem${this.todoLIST.id} `, JSON.stringify(this.itemsStorage));
  }
  createItem(todoItem) {
    import('./todolistitem.ts').then((module) => {
  const TodoListItem = module.default;
  const todoItemObject = new TodoListItem(this.todoList, this.todoListContainer, todoItem);
  this.todoItems[todoItem.id] = todoItemObject;
});
  }

showItem() {
  this.itemsStorage.forEach((elem) => {
    this.createItem(elem);
  });
}
deleteItem() {
  this.todoListContainer.addEventListener('deleteItem', (e: CustomEvent) => {
    const elId = e.detail.id;
    const index = this.itemsStorage.findIndex(elem => elem.id === elId);
    this.itemsStorage.splice(index, 1);
    this.todoItems[elId].deleteItem();
    delete this.todoItems[elId];
    this.saveItem();
  });
}
updateItem() {
  this.todoListContainer.addEventListener('updateItem', (e: CustomEvent) => {
    const elId = e.detail.elem.id;
    const index = this.itemsStorage.findIndex(elem => elem.id === elId);
    this.itemsStorage[index] = e.detail.elem;
    this.saveItem();
  });
}
clearList() {
  this.itemsStorage = [];
  this.todoItems = {};
  localStorage.removeItem(`todoListItem${this.todoLIST.id} `);
  this.todoList.innerHTML = '';
}
clearListOnClick() {
  this.removeList.addEventListener('click', () => {
    this.removeList.classList.remove('button-visible');
    this.clearList();
  });
}
clearTodoOnClick() {
  this.deleteTodo.addEventListener('click', () => {
    this.clearList();
  });
}
headlineChange() {
  this.headline.addEventListener('change', () => {
    this.headlineEvent.detail.todoLIST = Object.assign({}, this.todoLIST, { todoListTitle: this.headline.value });
    document.dispatchEvent(this.headlineEvent);
  });
}
deleteTodoList() {
  this.deleteTodo.addEventListener('click', () => {
    document.dispatchEvent(this.deleteLISTEvent);
  });
}
onDeleteList() {
  this.todoListContainer.remove();
}
showDeleteButton() {
  if (this.itemsStorage.lenght !== null) {
    this.removeList.classList.add('button-visible');
  }
  console.log(this.itemsStorage);
}

}

*/ 


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ede943f2777105dc898aa50db7bc8220.svg";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(9);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(3)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./normalize.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./normalize.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "/*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/**\n * 1. Change the default font family in all browsers (opinionated).\n * 2. Correct the line height in all browsers.\n * 3. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n\n/* Document\n   ========================================================================== */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  line-height: 1.15; /* 2 */\n  -ms-text-size-adjust: 100%; /* 3 */\n  -webkit-text-size-adjust: 100%; /* 3 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\n\nfigcaption,\nfigure,\nmain { /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * Remove the outline on focused links when they are also active or hovered\n * in all browsers (opinionated).\n */\n\na:active,\na:hover {\n  outline-width: 0;\n}\n\n/**\n * 1. Remove the bottom border in Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Change the border, margin, and padding in all browsers (opinionated).\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\n\ndetails, /* 1 */\nmenu {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Scripting\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\ncanvas {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in IE.\n */\n\ntemplate {\n  display: none;\n}\n\n/* Hidden\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10-.\n */\n\n[hidden] {\n  display: none;\n}", ""]);

// exports


/***/ }),
/* 10 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(12);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(3)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./main.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./main.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "body {\n  background: #e6e6e6;\n  font-weight: 300; }\n\n.toolbar {\n  background: #3949ab;\n  height: 56px;\n  color: white;\n  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.4);\n  display: flex;\n  align-items: center; }\n\n.logo {\n  margin: 0 24px;\n  font-size: 20px; }\n\n.content {\n  flex: 1 0 auto;\n  display: flex;\n  flex-direction: column; }\n\n.card {\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\n  background-color: white;\n  margin: 16px 8px 0 8px;\n  width: calc(100vw - 16px); }\n\n.card-form {\n  margin: 16px; }\n\nul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0; }\n\n.headline {\n  margin: 24px 0 16px 0;\n  font-size: 24px; }\n\n.todo-list {\n  max-height: 40vh;\n  overflow: auto; }\n\n.list-item,\n.new-item {\n  margin: 16px 0 24px 0;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between; }\n\n.item-input {\n  margin-right: 16px;\n  width: 24px; }\n\n.item-text {\n  width: 100%;\n  position: relative; }\n\n.item-button {\n  margin-left: 16px;\n  width: 24px; }\n\ninput.item-checkbox {\n  margin-right: 16px;\n  width: 20px;\n  height: 20px; }\n\ninput::placeholder {\n  color: #9E9E9E; }\n\n::-moz-placeholder {\n  opacity: 1; }\n\nbutton {\n  outline: none;\n  border: 0;\n  background: none;\n  padding: 0; }\n  button.item-delete {\n    height: 34px;\n    border-radius: 180px;\n    width: 34px;\n    margin-left: 16px;\n    display: flex;\n    justify-content: center;\n    position: relative;\n    overflow: hidden; }\n\ninput.item-submit {\n  background: white;\n  margin: 0;\n  border-radius: 180px;\n  font-size: 26px;\n  padding: 0;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  position: relative;\n  overflow: hidden;\n  color: #9e9e9e; }\n\n/* Ripple magic */\n@keyframes ripple {\n  0% {\n    transform: scale(0, 0);\n    opacity: 1; }\n  60% {\n    transform: scale(25, 25);\n    background: #DAD7D7;\n    opacity: 0.5; }\n  100% {\n    opacity: 0;\n    transform: scale(40, 40);\n    background: #DAD7D7; } }\n\ninput {\n  border: 0;\n  outline: none;\n  background: transparent; }\n  input.item-input--tag {\n    padding-bottom: 8px;\n    padding-top: 8px;\n    width: 100%;\n    font-size: 16px; }\n\n.bar {\n  position: relative;\n  display: block;\n  width: 100%; }\n  .bar:before, .bar:after {\n    content: '';\n    height: 2px;\n    width: 0;\n    position: absolute;\n    background: #3949ab;\n    transition: 0.2s ease all; }\n  .bar:before {\n    left: 50%; }\n  .bar:after {\n    right: 50%; }\n\n.highlight {\n  position: absolute;\n  height: 60%;\n  width: 100px;\n  top: 25%;\n  left: 0;\n  pointer-events: none;\n  opacity: 0.5; }\n\n/* active state */\ninput:focus ~ .bar:before,\ninput:focus ~ .bar:after {\n  width: 50%; }\n\nbutton {\n  outline: none; }\n  button.fab-button {\n    width: 56px;\n    height: 56px;\n    border-radius: 180px;\n    background: #f50057;\n    position: fixed;\n    bottom: 30px;\n    right: 30px;\n    cursor: pointer;\n    overflow: hidden;\n    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.4); }\n    button.fab-button:focus:not(:active)::after {\n      animation: ripple 1s ease-out; }\n\nbutton.delete-button {\n  min-width: 64px;\n  height: 36px;\n  padding: 8px 16px;\n  border-radius: 2px;\n  text-transform: uppercase;\n  font-size: 14px;\n  color: black;\n  cursor: pointer; }\n  button.delete-button:hover {\n    background: rgba(233, 30, 99, 0.12); }\n  button.delete-button:focus {\n    background: rgba(233, 30, 99, 0.4); }\n\n.clear-list,\n.delete-list {\n  padding-right: 8px;\n  margin: 32px 8px 8px 8px; }\n\n.list-button {\n  display: flex; }\n\n.task-isDone {\n  text-decoration: line-through;\n  color: #c3c3c3; }\n\n.button-visible {\n  display: block; }\n\n@media (min-width: 720px) {\n  .content {\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: row; }\n  .card {\n    width: calc(32vw - 16px);\n    justify-content: space-between; } }\n\n@media (min-width: 1024px) {\n  .content {\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: row; }\n  .card {\n    width: calc(32vw - 16px);\n    justify-content: space-between; } }\n\n@media (min-width: 1440px) {\n  .card {\n    height: 100%;\n    width: calc(20vw - 16px);\n    justify-content: space-between; } }\n", ""]);

// exports


/***/ })
/******/ ]);
//# sourceMappingURL=index.bundle.js.map