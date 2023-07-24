/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/background.jpg */ "./src/img/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html {
  box-sizing: border-box;
  overflow-x: hidden;
}
*,
*::after,
*::before {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

:root {
  --success: #28a745;
  --info: #17a2b8;
  --warning: #ffc107;
  --danger: #dc3545;
  --light: #f8f9fa;
  --dark: #343a40;

  --success-hover: #31b14f;
  --info-hover: #2ca8bb;
  --warning-hover: #ffc929;
  --danger-hover: #fd3e51;

  --tile-size: 32px;
}

body {
  background-color: var(--dark);
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: cover;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
}

.overlay {
  height: 100vh;
  height: 100svh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
}

.title {
  font-size: 3rem;
}

.gameboards {
  margin-top: 50px;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
}

.gameboard {
  display: grid;
}

.tile {
  height: var(--tile-size);
  width: var(--tile-size);
  position: relative;
}

.gameboard-player .tile {
  box-shadow: 2px 0 0 0 var(--success), 0 2px 0 0 var(--success),
    2px 2px 0 0 var(--success), 2px 0 0 0 var(--success) inset,
    0 2px 0 0 var(--success) inset;
}

.gameboard-player .tile:hover {
  z-index: 1;
  box-shadow: 2px 0 0 0 greenyellow, 0 2px 0 0 greenyellow,
    2px 2px 0 0 greenyellow, 2px 0 0 0 greenyellow inset,
    0 2px 0 0 greenyellow inset;
}

.gameboard-computer .tile {
  cursor: pointer;
  box-shadow: 2px 0 0 0 var(--danger), 0 2px 0 0 var(--danger),
    2px 2px 0 0 var(--danger), 2px 0 0 0 var(--danger) inset,
    0 2px 0 0 var(--danger) inset;
}

.gameboard-computer .tile:hover {
  z-index: 1;
  box-shadow: 2px 0 0 0 orange, 0 2px 0 0 orange, 2px 2px 0 0 orange,
    2px 0 0 0 orange inset, 0 2px 0 0 orange inset;
}

.tile[ship='alive'] {
  background-color: rgba(153, 255, 0, 0.65);
}
.tile[ship='attacked'] {
  background-color: rgba(255, 0, 0, 0.65);
}
.tile[ship='destroyed'] {
  background-image: linear-gradient(
    45deg,
    #000000 25%,
    #ff0000 25%,
    #ff0000 50%,
    #000000 50%,
    #000000 75%,
    #ff0000 75%,
    #ff0000 100%
  );
  background-size: 11.31px 11.31px;
}

.tile[attacked] {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.tile[attacked]::before {
  content: '';
  height: var(--tile-size);
  border-left: 2px solid #fff;
  position: absolute;
  transform: rotate(45deg);
  left: calc(var(--tile-size) / 2);
}
.tile[attacked]::after {
  content: '';
  height: var(--tile-size);
  border-left: 2px solid #fff;
  position: absolute;
  transform: rotate(-45deg);
  left: calc(var(--tile-size) / 2);
}

.tile[placing] > .highlight {
  position: absolute;
  top: 1px;
  left: 1px;
  font-weight: bold;
  color: white;
  height: var(--tile-size);
  width: var(--tile-size);
  background-color: cyan;
  pointer-events: none;
  z-index: 1;
}
`, "",{"version":3,"sources":["webpack://./src/main.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,kBAAkB;AACpB;AACA;;;EAGE,mBAAmB;EACnB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,kBAAkB;EAClB,iBAAiB;EACjB,gBAAgB;EAChB,eAAe;;EAEf,wBAAwB;EACxB,qBAAqB;EACrB,wBAAwB;EACxB,uBAAuB;;EAEvB,iBAAiB;AACnB;;AAEA;EACE,6BAA6B;EAC7B,yDAA6C;EAC7C,sBAAsB;EACtB,YAAY;EACZ,yCAAyC;EACzC,aAAa;AACf;;AAEA;EACE,aAAa;EACb,cAAc;EACd,WAAW;EACX,oCAAoC;EACpC,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,WAAW;EACX,6BAA6B;AAC/B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,wBAAwB;EACxB,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE;;kCAEgC;AAClC;;AAEA;EACE,UAAU;EACV;;+BAE6B;AAC/B;;AAEA;EACE,eAAe;EACf;;iCAE+B;AACjC;;AAEA;EACE,UAAU;EACV;kDACgD;AAClD;;AAEA;EACE,yCAAyC;AAC3C;AACA;EACE,uCAAuC;AACzC;AACA;EACE;;;;;;;;;GASC;EACD,gCAAgC;AAClC;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,WAAW;EACX,wBAAwB;EACxB,2BAA2B;EAC3B,kBAAkB;EAClB,wBAAwB;EACxB,gCAAgC;AAClC;AACA;EACE,WAAW;EACX,wBAAwB;EACxB,2BAA2B;EAC3B,kBAAkB;EAClB,yBAAyB;EACzB,gCAAgC;AAClC;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,iBAAiB;EACjB,YAAY;EACZ,wBAAwB;EACxB,uBAAuB;EACvB,sBAAsB;EACtB,oBAAoB;EACpB,UAAU;AACZ","sourcesContent":["html {\n  box-sizing: border-box;\n  overflow-x: hidden;\n}\n*,\n*::after,\n*::before {\n  box-sizing: inherit;\n  margin: 0;\n  padding: 0;\n}\n\n:root {\n  --success: #28a745;\n  --info: #17a2b8;\n  --warning: #ffc107;\n  --danger: #dc3545;\n  --light: #f8f9fa;\n  --dark: #343a40;\n\n  --success-hover: #31b14f;\n  --info-hover: #2ca8bb;\n  --warning-hover: #ffc929;\n  --danger-hover: #fd3e51;\n\n  --tile-size: 32px;\n}\n\nbody {\n  background-color: var(--dark);\n  background-image: url('./img/background.jpg');\n  background-size: cover;\n  color: white;\n  font-family: Arial, Helvetica, sans-serif;\n  display: flex;\n}\n\n.overlay {\n  height: 100vh;\n  height: 100svh;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.4);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 15px;\n}\n\n.title {\n  font-size: 3rem;\n}\n\n.gameboards {\n  margin-top: 50px;\n  display: flex;\n  width: 100%;\n  justify-content: space-evenly;\n}\n\n.gameboard {\n  display: grid;\n}\n\n.tile {\n  height: var(--tile-size);\n  width: var(--tile-size);\n  position: relative;\n}\n\n.gameboard-player .tile {\n  box-shadow: 2px 0 0 0 var(--success), 0 2px 0 0 var(--success),\n    2px 2px 0 0 var(--success), 2px 0 0 0 var(--success) inset,\n    0 2px 0 0 var(--success) inset;\n}\n\n.gameboard-player .tile:hover {\n  z-index: 1;\n  box-shadow: 2px 0 0 0 greenyellow, 0 2px 0 0 greenyellow,\n    2px 2px 0 0 greenyellow, 2px 0 0 0 greenyellow inset,\n    0 2px 0 0 greenyellow inset;\n}\n\n.gameboard-computer .tile {\n  cursor: pointer;\n  box-shadow: 2px 0 0 0 var(--danger), 0 2px 0 0 var(--danger),\n    2px 2px 0 0 var(--danger), 2px 0 0 0 var(--danger) inset,\n    0 2px 0 0 var(--danger) inset;\n}\n\n.gameboard-computer .tile:hover {\n  z-index: 1;\n  box-shadow: 2px 0 0 0 orange, 0 2px 0 0 orange, 2px 2px 0 0 orange,\n    2px 0 0 0 orange inset, 0 2px 0 0 orange inset;\n}\n\n.tile[ship='alive'] {\n  background-color: rgba(153, 255, 0, 0.65);\n}\n.tile[ship='attacked'] {\n  background-color: rgba(255, 0, 0, 0.65);\n}\n.tile[ship='destroyed'] {\n  background-image: linear-gradient(\n    45deg,\n    #000000 25%,\n    #ff0000 25%,\n    #ff0000 50%,\n    #000000 50%,\n    #000000 75%,\n    #ff0000 75%,\n    #ff0000 100%\n  );\n  background-size: 11.31px 11.31px;\n}\n\n.tile[attacked] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n.tile[attacked]::before {\n  content: '';\n  height: var(--tile-size);\n  border-left: 2px solid #fff;\n  position: absolute;\n  transform: rotate(45deg);\n  left: calc(var(--tile-size) / 2);\n}\n.tile[attacked]::after {\n  content: '';\n  height: var(--tile-size);\n  border-left: 2px solid #fff;\n  position: absolute;\n  transform: rotate(-45deg);\n  left: calc(var(--tile-size) / 2);\n}\n\n.tile[placing] > .highlight {\n  position: absolute;\n  top: 1px;\n  left: 1px;\n  font-weight: bold;\n  color: white;\n  height: var(--tile-size);\n  width: var(--tile-size);\n  background-color: cyan;\n  pointer-events: none;\n  z-index: 1;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/pubsub-js/src/pubsub.js":
/*!**********************************************!*\
  !*** ./node_modules/pubsub-js/src/pubsub.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
/**
 * Copyright (c) 2010,2011,2012,2013,2014 Morgan Roderick http://roderick.dk
 * License: MIT - http://mrgnrdrck.mit-license.org
 *
 * https://github.com/mroderick/PubSubJS
 */

(function (root, factory){
    'use strict';

    var PubSub = {};

    if (root.PubSub) {
        PubSub = root.PubSub;
        console.warn("PubSub already loaded, using existing version");
    } else {
        root.PubSub = PubSub;
        factory(PubSub);
    }
    // CommonJS and Node.js module support
    if (true){
        if (module !== undefined && module.exports) {
            exports = module.exports = PubSub; // Node.js specific `module.exports`
        }
        exports.PubSub = PubSub; // CommonJS module 1.1.1 spec
        module.exports = exports = PubSub; // CommonJS
    }
    // AMD support
    /* eslint-disable no-undef */
    else {}

}(( typeof window === 'object' && window ) || this, function (PubSub){
    'use strict';

    var messages = {},
        lastUid = -1,
        ALL_SUBSCRIBING_MSG = '*';

    function hasKeys(obj){
        var key;

        for (key in obj){
            if ( Object.prototype.hasOwnProperty.call(obj, key) ){
                return true;
            }
        }
        return false;
    }

    /**
     * Returns a function that throws the passed exception, for use as argument for setTimeout
     * @alias throwException
     * @function
     * @param { Object } ex An Error object
     */
    function throwException( ex ){
        return function reThrowException(){
            throw ex;
        };
    }

    function callSubscriberWithDelayedExceptions( subscriber, message, data ){
        try {
            subscriber( message, data );
        } catch( ex ){
            setTimeout( throwException( ex ), 0);
        }
    }

    function callSubscriberWithImmediateExceptions( subscriber, message, data ){
        subscriber( message, data );
    }

    function deliverMessage( originalMessage, matchedMessage, data, immediateExceptions ){
        var subscribers = messages[matchedMessage],
            callSubscriber = immediateExceptions ? callSubscriberWithImmediateExceptions : callSubscriberWithDelayedExceptions,
            s;

        if ( !Object.prototype.hasOwnProperty.call( messages, matchedMessage ) ) {
            return;
        }

        for (s in subscribers){
            if ( Object.prototype.hasOwnProperty.call(subscribers, s)){
                callSubscriber( subscribers[s], originalMessage, data );
            }
        }
    }

    function createDeliveryFunction( message, data, immediateExceptions ){
        return function deliverNamespaced(){
            var topic = String( message ),
                position = topic.lastIndexOf( '.' );

            // deliver the message as it is now
            deliverMessage(message, message, data, immediateExceptions);

            // trim the hierarchy and deliver message to each level
            while( position !== -1 ){
                topic = topic.substr( 0, position );
                position = topic.lastIndexOf('.');
                deliverMessage( message, topic, data, immediateExceptions );
            }

            deliverMessage(message, ALL_SUBSCRIBING_MSG, data, immediateExceptions);
        };
    }

    function hasDirectSubscribersFor( message ) {
        var topic = String( message ),
            found = Boolean(Object.prototype.hasOwnProperty.call( messages, topic ) && hasKeys(messages[topic]));

        return found;
    }

    function messageHasSubscribers( message ){
        var topic = String( message ),
            found = hasDirectSubscribersFor(topic) || hasDirectSubscribersFor(ALL_SUBSCRIBING_MSG),
            position = topic.lastIndexOf( '.' );

        while ( !found && position !== -1 ){
            topic = topic.substr( 0, position );
            position = topic.lastIndexOf( '.' );
            found = hasDirectSubscribersFor(topic);
        }

        return found;
    }

    function publish( message, data, sync, immediateExceptions ){
        message = (typeof message === 'symbol') ? message.toString() : message;

        var deliver = createDeliveryFunction( message, data, immediateExceptions ),
            hasSubscribers = messageHasSubscribers( message );

        if ( !hasSubscribers ){
            return false;
        }

        if ( sync === true ){
            deliver();
        } else {
            setTimeout( deliver, 0 );
        }
        return true;
    }

    /**
     * Publishes the message, passing the data to it's subscribers
     * @function
     * @alias publish
     * @param { String } message The message to publish
     * @param {} data The data to pass to subscribers
     * @return { Boolean }
     */
    PubSub.publish = function( message, data ){
        return publish( message, data, false, PubSub.immediateExceptions );
    };

    /**
     * Publishes the message synchronously, passing the data to it's subscribers
     * @function
     * @alias publishSync
     * @param { String } message The message to publish
     * @param {} data The data to pass to subscribers
     * @return { Boolean }
     */
    PubSub.publishSync = function( message, data ){
        return publish( message, data, true, PubSub.immediateExceptions );
    };

    /**
     * Subscribes the passed function to the passed message. Every returned token is unique and should be stored if you need to unsubscribe
     * @function
     * @alias subscribe
     * @param { String } message The message to subscribe to
     * @param { Function } func The function to call when a new message is published
     * @return { String }
     */
    PubSub.subscribe = function( message, func ){
        if ( typeof func !== 'function'){
            return false;
        }

        message = (typeof message === 'symbol') ? message.toString() : message;

        // message is not registered yet
        if ( !Object.prototype.hasOwnProperty.call( messages, message ) ){
            messages[message] = {};
        }

        // forcing token as String, to allow for future expansions without breaking usage
        // and allow for easy use as key names for the 'messages' object
        var token = 'uid_' + String(++lastUid);
        messages[message][token] = func;

        // return token for unsubscribing
        return token;
    };

    PubSub.subscribeAll = function( func ){
        return PubSub.subscribe(ALL_SUBSCRIBING_MSG, func);
    };

    /**
     * Subscribes the passed function to the passed message once
     * @function
     * @alias subscribeOnce
     * @param { String } message The message to subscribe to
     * @param { Function } func The function to call when a new message is published
     * @return { PubSub }
     */
    PubSub.subscribeOnce = function( message, func ){
        var token = PubSub.subscribe( message, function(){
            // before func apply, unsubscribe message
            PubSub.unsubscribe( token );
            func.apply( this, arguments );
        });
        return PubSub;
    };

    /**
     * Clears all subscriptions
     * @function
     * @public
     * @alias clearAllSubscriptions
     */
    PubSub.clearAllSubscriptions = function clearAllSubscriptions(){
        messages = {};
    };

    /**
     * Clear subscriptions by the topic
     * @function
     * @public
     * @alias clearAllSubscriptions
     * @return { int }
     */
    PubSub.clearSubscriptions = function clearSubscriptions(topic){
        var m;
        for (m in messages){
            if (Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0){
                delete messages[m];
            }
        }
    };

    /**
       Count subscriptions by the topic
     * @function
     * @public
     * @alias countSubscriptions
     * @return { Array }
    */
    PubSub.countSubscriptions = function countSubscriptions(topic){
        var m;
        // eslint-disable-next-line no-unused-vars
        var token;
        var count = 0;
        for (m in messages) {
            if (Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0) {
                for (token in messages[m]) {
                    count++;
                }
                break;
            }
        }
        return count;
    };


    /**
       Gets subscriptions by the topic
     * @function
     * @public
     * @alias getSubscriptions
    */
    PubSub.getSubscriptions = function getSubscriptions(topic){
        var m;
        var list = [];
        for (m in messages){
            if (Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0){
                list.push(m);
            }
        }
        return list;
    };

    /**
     * Removes subscriptions
     *
     * - When passed a token, removes a specific subscription.
     *
	 * - When passed a function, removes all subscriptions for that function
     *
	 * - When passed a topic, removes all subscriptions for that topic (hierarchy)
     * @function
     * @public
     * @alias subscribeOnce
     * @param { String | Function } value A token, function or topic to unsubscribe from
     * @example // Unsubscribing with a token
     * var token = PubSub.subscribe('mytopic', myFunc);
     * PubSub.unsubscribe(token);
     * @example // Unsubscribing with a function
     * PubSub.unsubscribe(myFunc);
     * @example // Unsubscribing from a topic
     * PubSub.unsubscribe('mytopic');
     */
    PubSub.unsubscribe = function(value){
        var descendantTopicExists = function(topic) {
                var m;
                for ( m in messages ){
                    if ( Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0 ){
                        // a descendant of the topic exists:
                        return true;
                    }
                }

                return false;
            },
            isTopic    = typeof value === 'string' && ( Object.prototype.hasOwnProperty.call(messages, value) || descendantTopicExists(value) ),
            isToken    = !isTopic && typeof value === 'string',
            isFunction = typeof value === 'function',
            result = false,
            m, message, t;

        if (isTopic){
            PubSub.clearSubscriptions(value);
            return;
        }

        for ( m in messages ){
            if ( Object.prototype.hasOwnProperty.call( messages, m ) ){
                message = messages[m];

                if ( isToken && message[value] ){
                    delete message[value];
                    result = value;
                    // tokens are unique, so we can just stop here
                    break;
                }

                if (isFunction) {
                    for ( t in message ){
                        if (Object.prototype.hasOwnProperty.call(message, t) && message[t] === value){
                            delete message[t];
                            result = true;
                        }
                    }
                }
            }
        }

        return result;
    };
}));


/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeStatus: () => (/* binding */ changeStatus),
/* harmony export */   renderGameBoards: () => (/* binding */ renderGameBoards),
/* harmony export */   renderInitGameBoard: () => (/* binding */ renderInitGameBoard),
/* harmony export */   toggleTileEventListeners: () => (/* binding */ toggleTileEventListeners)
/* harmony export */ });
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pubsub-js */ "./node_modules/pubsub-js/src/pubsub.js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_0__);


const gameBoardsElement = document.querySelector('.gameboards');
const statusElement = document.querySelector('.status');

const handleEnemyTileClick = (e) => {
  pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish('enemyTileClicked', {
    row: e.target.getAttribute('data-row'),
    column: e.target.getAttribute('data-column'),
  });
};

const toggleTileEventListeners = (boolean) => {
  const enemyTiles = gameBoardsElement.querySelectorAll(
    '.gameboard-computer > .tile'
  );
  if (boolean) {
    enemyTiles.forEach((tile) => {
      tile.addEventListener('click', handleEnemyTileClick);
    });
  } else {
    enemyTiles.forEach((tile) => {
      tile.removeEventListener('click', handleEnemyTileClick);
    });
  }
};

const createDomElement = (
  elementType = 'div',
  classesString = '',
  innerHTML = ''
) => {
  const element = document.createElement(elementType);
  element.className = classesString;
  element.innerHTML = innerHTML;

  return element;
};

const createTileElement = (tile, showShips = false) => {
  const tileElement = createDomElement('div', 'tile');
  tileElement.setAttribute('data-row', tile.row);
  tileElement.setAttribute('data-column', tile.column);

  if (tile.attacked) {
    tileElement.toggleAttribute('attacked', true);
    if (tile.ship) {
      tileElement.setAttribute('ship', 'attacked');
      if (tile.ship.sunk) {
        tileElement.setAttribute('ship', 'destroyed');
      }
    }
  } else if (showShips) {
    if (tile.ship) {
      tileElement.setAttribute('ship', 'alive');
    }
  }
  return tileElement;
};

const changeStatus = (statusMessage) => {
  statusElement.innerText = statusMessage;
};

const renderGameBoards = (playerBoard, computerBoard, gridSize = 10) => {
  gameBoardsElement.innerHTML = '';
  const playerTiles = playerBoard.tiles;
  const computerTiles = computerBoard.tiles;

  const playerGameBoardElement = createDomElement(
    'div',
    'gameboard gameboard-player'
  );
  playerTiles.forEach((tile) => {
    const tileElement = createTileElement(tile, true);
    playerGameBoardElement.appendChild(tileElement);
  });

  const computerGameBoardElement = createDomElement(
    'div',
    'gameboard gameboard-computer'
  );
  computerTiles.forEach((tile) => {
    const tileElement = createTileElement(tile, true);
    // for now the player can see all ships
    computerGameBoardElement.appendChild(tileElement);
  });

  playerGameBoardElement.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  computerGameBoardElement.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

  gameBoardsElement.appendChild(playerGameBoardElement);
  gameBoardsElement.appendChild(computerGameBoardElement);
};

const renderInitGameBoard = (
  gameBoard,
  placedShipSize,
  placedShipDirection,
  gridSize
) => {
  gameBoardsElement.innerHTML = '';
  const playerTiles = gameBoard.tiles;
  const playerGameBoardElement = createDomElement(
    'div',
    'gameboard gameboard-player gameboard-init'
  );
  const shipHighlightElement = createDomElement('div', 'highlight');

  playerTiles.forEach((tile) => {
    const tileElement = createTileElement(tile, true);
    tileElement.addEventListener('mouseenter', () => {
      tileElement.toggleAttribute('placing', true);
      const highlight = shipHighlightElement.cloneNode(true);
      if (placedShipDirection === 'right') {
        highlight.style.width = `calc(var(--tile-size)*${placedShipSize})`;
      } else if (placedShipDirection === 'down') {
        highlight.style.height = `calc(var(--tile-size)*${placedShipSize})`;
      }
      tileElement.appendChild(highlight);
    });
    tileElement.addEventListener('mouseleave', () => {
      tileElement.toggleAttribute('placing', false);
      tileElement.innerHTML = '';
    });

    tileElement.addEventListener('click', () => {
      pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish('playerTileClicked', [tile.row, tile.column]);
    });
    playerGameBoardElement.appendChild(tileElement);
  });

  gameBoardsElement.appendChild(playerGameBoardElement);
  playerGameBoardElement.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
};




/***/ }),

/***/ "./src/factories/game-board.js":
/*!*************************************!*\
  !*** ./src/factories/game-board.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/factories/ship.js");


const Tile = (row, column, ship = null) => {
  if (!row || !column) {
    throw Error('Invalid coordinates!');
  }
  return { row, column, ship, attacked: false };
};

const GameBoard = (size = 10) => {
  const tiles = [];
  let currentRow = 1;
  let currentColumn = 1;
  for (let i = 0; i < size * size; i += 1) {
    tiles.push(Tile(currentRow, currentColumn));
    if (currentColumn < size) {
      currentColumn += 1;
    } else {
      currentColumn = 1;
      currentRow += 1;
    }
  }

  const getShipCoordinates = (head, shipSize, direction) => {
    const coordinates = [[...head]];
    const currentCoordinates = [...head];
    for (let i = 0; i < shipSize - 1; i += 1) {
      switch (direction) {
        case 'up':
          currentCoordinates[0] -= 1;
          coordinates.push([...currentCoordinates]);
          break;
        case 'right':
          currentCoordinates[1] += 1;
          coordinates.push([...currentCoordinates]);
          break;
        case 'down':
          currentCoordinates[0] += 1;
          coordinates.push([...currentCoordinates]);
          break;
        case 'left':
          currentCoordinates[1] -= 1;
          coordinates.push([...currentCoordinates]);
          break;
        default:
          break;
      }
    }
    return coordinates;
  };

  const validateCoordinates = (coordinate, boardSize) => {
    const valid =
      coordinate[0] >= 1 &&
      coordinate[0] <= boardSize &&
      coordinate[1] >= 1 &&
      coordinate[1] <= boardSize;

    return valid;
  };

  return {
    tiles,
    size,
    attackedCoordinates: [],
    ships: [],

    getAdjacentCoordinates(coordinates) {
      const allAdjacentCoordinates = [
        [coordinates[0] - 1, coordinates[1]],
        [coordinates[0] - 1, coordinates[1] + 1],
        [coordinates[0], coordinates[1] + 1],
        [coordinates[0] + 1, coordinates[1] + 1],
        [coordinates[0] + 1, coordinates[1]],
        [coordinates[0] + 1, coordinates[1] - 1],
        [coordinates[0], coordinates[1] - 1],
        [coordinates[0] - 1, coordinates[1] - 1],
      ];

      const validAdjacentCoordinates = allAdjacentCoordinates.filter(
        (coordinate) => validateCoordinates(coordinate, this.size)
      );

      return validAdjacentCoordinates;
    },

    checkForAdjacentShips(coordinates) {
      const adjacentCoordinates = this.getAdjacentCoordinates(coordinates);
      const isShipAdjacent = adjacentCoordinates.some((coordinate) => {
        const tile = this.findTile(coordinate);
        if (tile.ship) {
          return true;
        }
        return false;
      });

      return isShipAdjacent;
    },

    validateShipCoordinates(coordinates) {
      let valid = true;
      coordinates.forEach((coordinate) => {
        if (
          !validateCoordinates(coordinate, this.size) ||
          this.checkForAdjacentShips(coordinate) ||
          this.findTile(coordinate).ship
        ) {
          valid = false;
        }
      });

      return valid;
    },

    findTile(coordinates) {
      const tileIndex = (coordinates[0] - 1) * this.size + (coordinates[1] - 1);
      const tile = this.tiles[tileIndex];

      return tile;
    },

    placeShip(headCoordinates, shipSize, direction) {
      if (shipSize < 1) {
        return false;
      }
      const coordinates = getShipCoordinates(
        headCoordinates,
        shipSize,
        direction
      );
      if (!this.validateShipCoordinates(coordinates)) {
        return false;
      }
      const newShip = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(shipSize);
      this.ships.push(newShip);

      coordinates.forEach((coordinate) => {
        const tile = this.findTile(coordinate);
        tile.ship = newShip;
      });
      return true;
    },

    placeShipRandomly(shipSize, direction) {
      const remainingTiles = [...tiles];
      let chosenCoordinates;

      while (remainingTiles.length > 0 && !chosenCoordinates) {
        const index = Math.floor(Math.random() * remainingTiles.length);
        const headCoordinates = [
          remainingTiles[index].row,
          remainingTiles[index].column,
        ];
        const fullCoordinates = getShipCoordinates(
          headCoordinates,
          shipSize,
          direction
        );
        const valid = this.validateShipCoordinates(fullCoordinates);

        if (valid) {
          chosenCoordinates = headCoordinates;
        } else {
          remainingTiles.splice(index, 1);
        }
      }

      this.placeShip(chosenCoordinates, shipSize, direction);
      return chosenCoordinates;
    },

    validateHit(coordinates) {
      if (!validateCoordinates(coordinates, this.size)) {
        return false;
      }
      const alreadyHit = this.attackedCoordinates.some(
        (coord) => coord[0] === coordinates[0] && coord[1] === coordinates[1]
      );
      if (alreadyHit) {
        return false;
      }

      return true;
    },

    receiveHit(coordinates) {
      if (!this.validateHit(coordinates)) {
        return false;
      }
      this.attackedCoordinates.push(coordinates);

      const tile = this.findTile(coordinates);
      tile.attacked = true;
      if (!tile.ship) {
        return true;
      }
      tile.ship.hit();
      return true;
    },

    isEverythingSunk() {
      if (this.ships.length <= 0) {
        return true;
      }

      const shipRemaining = this.ships.some((ship) => !ship.sunk);
      return !shipRemaining;
    },
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameBoard);


/***/ }),

/***/ "./src/factories/player.js":
/*!*********************************!*\
  !*** ./src/factories/player.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _game_board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-board */ "./src/factories/game-board.js");


const getRandomInt = (max) => Math.floor(Math.random() * max);

const Player = (isHuman, boardSize = 10) => {
  const gameBoard = (0,_game_board__WEBPACK_IMPORTED_MODULE_0__["default"])(boardSize);
  const possibleTargets = [];

  let currentRow = 1;
  let currentColumn = 1;
  for (let i = 0; i < boardSize * boardSize; i += 1) {
    possibleTargets.push([currentRow, currentColumn]);
    if (currentColumn < boardSize) {
      currentColumn += 1;
    } else {
      currentColumn = 1;
      currentRow += 1;
    }
  }

  return {
    isHuman,
    gameBoard,
    boardSize,
    possibleTargets,
    targetedCoordinates: [],

    chooseRandomAttack(targetList = this.possibleTargets) {
      if (targetList.length <= 0) {
        return false;
      }
      const index = getRandomInt(targetList.length);
      const attackCoordinates = targetList[index];

      return attackCoordinates;
    },

    performRandomAttack(enemyPlayer) {
      const randomAttack = this.chooseRandomAttack();
      this.targetedCoordinates.push(randomAttack);
      const index = this.possibleTargets.findIndex(
        (value) => value[0] === randomAttack[0] && value[1] === randomAttack[1]
      );
      this.possibleTargets.splice(index, 1);

      enemyPlayer.gameBoard.receiveHit(randomAttack);
      return randomAttack;
    },
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);


/***/ }),

/***/ "./src/factories/ship.js":
/*!*******************************!*\
  !*** ./src/factories/ship.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Ship = (length) => {
  if (!length) {
    return false;
  }
  return {
    length,
    timesHit: 0,
    sunk: false,
    hit() {
      this.timesHit += 1;
      this.isSunk();
    },
    isSunk() {
      if (this.timesHit >= this.length) {
        this.sunk = true;
      }
    },
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);


/***/ }),

/***/ "./src/game-init.js":
/*!**************************!*\
  !*** ./src/game-init.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pubsub-js */ "./node_modules/pubsub-js/src/pubsub.js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _factories_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factories/player */ "./src/factories/player.js");
/* harmony import */ var _game_loop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game-loop */ "./src/game-loop.js");





const HUMAN_SHIP_SIZES = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];
const BOARD_SIZE = 10;

const humanPlayer = (0,_factories_player__WEBPACK_IMPORTED_MODULE_2__["default"])(true, BOARD_SIZE);

let currentShipSizeIndex = 0;
let currentShipSize = HUMAN_SHIP_SIZES[currentShipSizeIndex];
let currentShipDirection = 'right';

const initPubSub = () => {
  pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe('playerTileClicked', (msg, data) => {
    const shipAdded = humanPlayer.gameBoard.placeShip(
      data,
      currentShipSize,
      currentShipDirection
    );

    if (shipAdded) {
      currentShipSizeIndex += 1;
      currentShipSize = HUMAN_SHIP_SIZES[currentShipSizeIndex];
      (0,_dom__WEBPACK_IMPORTED_MODULE_1__.renderInitGameBoard)(
        humanPlayer.gameBoard,
        currentShipSize,
        currentShipDirection,
        BOARD_SIZE
      );
    }

    if (!currentShipSize) {
      pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().clearAllSubscriptions();
      (0,_game_loop__WEBPACK_IMPORTED_MODULE_3__["default"])(humanPlayer);
    }
  });
};

const initGame = () => {
  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.changeStatus)('Place your ships');
  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.renderInitGameBoard)(
    humanPlayer.gameBoard,
    currentShipSize,
    currentShipDirection,
    BOARD_SIZE
  );
  initPubSub();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initGame);


/***/ }),

/***/ "./src/game-loop.js":
/*!**************************!*\
  !*** ./src/game-loop.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pubsub-js */ "./node_modules/pubsub-js/src/pubsub.js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _factories_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factories/player */ "./src/factories/player.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "./src/dom.js");




const BOARD_SIZE = 10;
const TURN_DELAY = 1000; // in ms
const COMPUTER_SHIP_SIZES = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];

let playerTurn = false;

let humanPlayer;
const computerPlayer = (0,_factories_player__WEBPACK_IMPORTED_MODULE_1__["default"])(false, BOARD_SIZE);

const populateComputerBoard = () => {
  COMPUTER_SHIP_SIZES.forEach((size) => {
    const direction = ['down', 'right'][Math.floor(Math.random() * 2)];
    computerPlayer.gameBoard.placeShipRandomly(size, direction);
  });
};

const checkWinCondition = () => {
  if (humanPlayer.gameBoard.isEverythingSunk()) {
    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish('gameEnded', { winner: 'computer' });
    return true;
  }
  if (computerPlayer.gameBoard.isEverythingSunk()) {
    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish('gameEnded', { winner: 'player' });
    return true;
  }

  return false;
};

const changeTurn = () => {
  if (checkWinCondition()) {
    playerTurn = false;
    (0,_dom__WEBPACK_IMPORTED_MODULE_2__.toggleTileEventListeners)(false);
    return false;
  }
  playerTurn = !playerTurn;
  (0,_dom__WEBPACK_IMPORTED_MODULE_2__.toggleTileEventListeners)(playerTurn);
  (0,_dom__WEBPACK_IMPORTED_MODULE_2__.changeStatus)(`It's ${playerTurn ? 'your' : "the computer's"} turn!`);

  return playerTurn;
};

const performComputerTurn = (delay = 1000) => {
  if (!playerTurn) {
    setTimeout(() => {
      const computerMove = computerPlayer.performRandomAttack(humanPlayer);
      pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish('computerAttacked', computerMove);
    }, delay);
  }
};

const tryToAttack = (msg, data) => {
  if (!playerTurn) {
    return false;
  }
  const attacked = computerPlayer.gameBoard.receiveHit([data.row, data.column]);
  if (attacked) {
    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish('userAttacked', [data.row, data.column]);
  }

  return attacked;
};

const gameEnd = ({ winner }) => {
  (0,_dom__WEBPACK_IMPORTED_MODULE_2__.changeStatus)(`Game ended! Winner: ${winner}`);
};

const initPubSub = () => {
  pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe('enemyTileClicked', tryToAttack);
  pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe('userAttacked', () => {
    (0,_dom__WEBPACK_IMPORTED_MODULE_2__.renderGameBoards)(humanPlayer.gameBoard, computerPlayer.gameBoard);
    changeTurn();
    performComputerTurn(TURN_DELAY);
  });
  pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe('computerAttacked', () => {
    (0,_dom__WEBPACK_IMPORTED_MODULE_2__.renderGameBoards)(humanPlayer.gameBoard, computerPlayer.gameBoard);
    changeTurn();
  });
  pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe('gameEnded', (msg, data) => {
    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().clearAllSubscriptions();
    gameEnd(data);
  });
};

const gameStart = (newHumanPlayer) => {
  humanPlayer = newHumanPlayer;
  populateComputerBoard();
  initPubSub();
  (0,_dom__WEBPACK_IMPORTED_MODULE_2__.renderGameBoards)(humanPlayer.gameBoard, computerPlayer.gameBoard);
  (0,_dom__WEBPACK_IMPORTED_MODULE_2__.toggleTileEventListeners)(true);

  changeTurn();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameStart);


/***/ }),

/***/ "./src/img/background.jpg":
/*!********************************!*\
  !*** ./src/img/background.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "2758238b9abcc113f352.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ "./src/main.css");
/* harmony import */ var _img_background_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/background.jpg */ "./src/img/background.jpg");
/* harmony import */ var _game_init__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game-init */ "./src/game-init.js");




(0,_game_init__WEBPACK_IMPORTED_MODULE_2__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aEM7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHNEQUFnQjtBQUNsQixFQUFFLDhEQUF3Qjs7QUFFMUI7QUFDQTs7QUFFQSxpRUFBZSxTQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3RHekI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDNUJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDSkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FvQjtBQUNVO0FBQ0s7O0FBRW5DLHNEQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tYWluLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9wdWJzdWItanMvc3JjL3B1YnN1Yi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21haW4uY3NzP2RkZDMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ZhY3Rvcmllcy9nYW1lLWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZmFjdG9yaWVzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ZhY3Rvcmllcy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS1pbml0LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS1sb29wLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1nL2JhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBodG1sIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuKixcbio6OmFmdGVyLFxuKjo6YmVmb3JlIHtcbiAgYm94LXNpemluZzogaW5oZXJpdDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG46cm9vdCB7XG4gIC0tc3VjY2VzczogIzI4YTc0NTtcbiAgLS1pbmZvOiAjMTdhMmI4O1xuICAtLXdhcm5pbmc6ICNmZmMxMDc7XG4gIC0tZGFuZ2VyOiAjZGMzNTQ1O1xuICAtLWxpZ2h0OiAjZjhmOWZhO1xuICAtLWRhcms6ICMzNDNhNDA7XG5cbiAgLS1zdWNjZXNzLWhvdmVyOiAjMzFiMTRmO1xuICAtLWluZm8taG92ZXI6ICMyY2E4YmI7XG4gIC0td2FybmluZy1ob3ZlcjogI2ZmYzkyOTtcbiAgLS1kYW5nZXItaG92ZXI6ICNmZDNlNTE7XG5cbiAgLS10aWxlLXNpemU6IDMycHg7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ub3ZlcmxheSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGhlaWdodDogMTAwc3ZoO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDNyZW07XG59XG5cbi5nYW1lYm9hcmRzIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuXG4uZ2FtZWJvYXJkIHtcbiAgZGlzcGxheTogZ3JpZDtcbn1cblxuLnRpbGUge1xuICBoZWlnaHQ6IHZhcigtLXRpbGUtc2l6ZSk7XG4gIHdpZHRoOiB2YXIoLS10aWxlLXNpemUpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5nYW1lYm9hcmQtcGxheWVyIC50aWxlIHtcbiAgYm94LXNoYWRvdzogMnB4IDAgMCAwIHZhcigtLXN1Y2Nlc3MpLCAwIDJweCAwIDAgdmFyKC0tc3VjY2VzcyksXG4gICAgMnB4IDJweCAwIDAgdmFyKC0tc3VjY2VzcyksIDJweCAwIDAgMCB2YXIoLS1zdWNjZXNzKSBpbnNldCxcbiAgICAwIDJweCAwIDAgdmFyKC0tc3VjY2VzcykgaW5zZXQ7XG59XG5cbi5nYW1lYm9hcmQtcGxheWVyIC50aWxlOmhvdmVyIHtcbiAgei1pbmRleDogMTtcbiAgYm94LXNoYWRvdzogMnB4IDAgMCAwIGdyZWVueWVsbG93LCAwIDJweCAwIDAgZ3JlZW55ZWxsb3csXG4gICAgMnB4IDJweCAwIDAgZ3JlZW55ZWxsb3csIDJweCAwIDAgMCBncmVlbnllbGxvdyBpbnNldCxcbiAgICAwIDJweCAwIDAgZ3JlZW55ZWxsb3cgaW5zZXQ7XG59XG5cbi5nYW1lYm9hcmQtY29tcHV0ZXIgLnRpbGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IDJweCAwIDAgMCB2YXIoLS1kYW5nZXIpLCAwIDJweCAwIDAgdmFyKC0tZGFuZ2VyKSxcbiAgICAycHggMnB4IDAgMCB2YXIoLS1kYW5nZXIpLCAycHggMCAwIDAgdmFyKC0tZGFuZ2VyKSBpbnNldCxcbiAgICAwIDJweCAwIDAgdmFyKC0tZGFuZ2VyKSBpbnNldDtcbn1cblxuLmdhbWVib2FyZC1jb21wdXRlciAudGlsZTpob3ZlciB7XG4gIHotaW5kZXg6IDE7XG4gIGJveC1zaGFkb3c6IDJweCAwIDAgMCBvcmFuZ2UsIDAgMnB4IDAgMCBvcmFuZ2UsIDJweCAycHggMCAwIG9yYW5nZSxcbiAgICAycHggMCAwIDAgb3JhbmdlIGluc2V0LCAwIDJweCAwIDAgb3JhbmdlIGluc2V0O1xufVxuXG4udGlsZVtzaGlwPSdhbGl2ZSddIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTMsIDI1NSwgMCwgMC42NSk7XG59XG4udGlsZVtzaGlwPSdhdHRhY2tlZCddIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNjUpO1xufVxuLnRpbGVbc2hpcD0nZGVzdHJveWVkJ10ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgNDVkZWcsXG4gICAgIzAwMDAwMCAyNSUsXG4gICAgI2ZmMDAwMCAyNSUsXG4gICAgI2ZmMDAwMCA1MCUsXG4gICAgIzAwMDAwMCA1MCUsXG4gICAgIzAwMDAwMCA3NSUsXG4gICAgI2ZmMDAwMCA3NSUsXG4gICAgI2ZmMDAwMCAxMDAlXG4gICk7XG4gIGJhY2tncm91bmQtc2l6ZTogMTEuMzFweCAxMS4zMXB4O1xufVxuXG4udGlsZVthdHRhY2tlZF0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnRpbGVbYXR0YWNrZWRdOjpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgaGVpZ2h0OiB2YXIoLS10aWxlLXNpemUpO1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNmZmY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICBsZWZ0OiBjYWxjKHZhcigtLXRpbGUtc2l6ZSkgLyAyKTtcbn1cbi50aWxlW2F0dGFja2VkXTo6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgaGVpZ2h0OiB2YXIoLS10aWxlLXNpemUpO1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNmZmY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgbGVmdDogY2FsYyh2YXIoLS10aWxlLXNpemUpIC8gMik7XG59XG5cbi50aWxlW3BsYWNpbmddID4gLmhpZ2hsaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxcHg7XG4gIGxlZnQ6IDFweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiB2YXIoLS10aWxlLXNpemUpO1xuICB3aWR0aDogdmFyKC0tdGlsZS1zaXplKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogY3lhbjtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHotaW5kZXg6IDE7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7QUFDQTs7O0VBR0UsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGVBQWU7O0VBRWYsd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQix3QkFBd0I7RUFDeEIsdUJBQXVCOztFQUV2QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IseURBQTZDO0VBQzdDLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1oseUNBQXlDO0VBQ3pDLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2QsV0FBVztFQUNYLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixXQUFXO0VBQ1gsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRTs7a0NBRWdDO0FBQ2xDOztBQUVBO0VBQ0UsVUFBVTtFQUNWOzsrQkFFNkI7QUFDL0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2Y7O2lDQUUrQjtBQUNqQzs7QUFFQTtFQUNFLFVBQVU7RUFDVjtrREFDZ0Q7QUFDbEQ7O0FBRUE7RUFDRSx5Q0FBeUM7QUFDM0M7QUFDQTtFQUNFLHVDQUF1QztBQUN6QztBQUNBO0VBQ0U7Ozs7Ozs7OztHQVNDO0VBQ0QsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsd0JBQXdCO0VBQ3hCLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLGdDQUFnQztBQUNsQztBQUNBO0VBQ0UsV0FBVztFQUNYLHdCQUF3QjtFQUN4QiwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLHdCQUF3QjtFQUN4Qix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixVQUFVO0FBQ1pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG4qLFxcbio6OmFmdGVyLFxcbio6OmJlZm9yZSB7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1zdWNjZXNzOiAjMjhhNzQ1O1xcbiAgLS1pbmZvOiAjMTdhMmI4O1xcbiAgLS13YXJuaW5nOiAjZmZjMTA3O1xcbiAgLS1kYW5nZXI6ICNkYzM1NDU7XFxuICAtLWxpZ2h0OiAjZjhmOWZhO1xcbiAgLS1kYXJrOiAjMzQzYTQwO1xcblxcbiAgLS1zdWNjZXNzLWhvdmVyOiAjMzFiMTRmO1xcbiAgLS1pbmZvLWhvdmVyOiAjMmNhOGJiO1xcbiAgLS13YXJuaW5nLWhvdmVyOiAjZmZjOTI5O1xcbiAgLS1kYW5nZXItaG92ZXI6ICNmZDNlNTE7XFxuXFxuICAtLXRpbGUtc2l6ZTogMzJweDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWcvYmFja2dyb3VuZC5qcGcnKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5vdmVybGF5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBoZWlnaHQ6IDEwMHN2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMTVweDtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLmdhbWVib2FyZHMge1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG4uZ2FtZWJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi50aWxlIHtcXG4gIGhlaWdodDogdmFyKC0tdGlsZS1zaXplKTtcXG4gIHdpZHRoOiB2YXIoLS10aWxlLXNpemUpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uZ2FtZWJvYXJkLXBsYXllciAudGlsZSB7XFxuICBib3gtc2hhZG93OiAycHggMCAwIDAgdmFyKC0tc3VjY2VzcyksIDAgMnB4IDAgMCB2YXIoLS1zdWNjZXNzKSxcXG4gICAgMnB4IDJweCAwIDAgdmFyKC0tc3VjY2VzcyksIDJweCAwIDAgMCB2YXIoLS1zdWNjZXNzKSBpbnNldCxcXG4gICAgMCAycHggMCAwIHZhcigtLXN1Y2Nlc3MpIGluc2V0O1xcbn1cXG5cXG4uZ2FtZWJvYXJkLXBsYXllciAudGlsZTpob3ZlciB7XFxuICB6LWluZGV4OiAxO1xcbiAgYm94LXNoYWRvdzogMnB4IDAgMCAwIGdyZWVueWVsbG93LCAwIDJweCAwIDAgZ3JlZW55ZWxsb3csXFxuICAgIDJweCAycHggMCAwIGdyZWVueWVsbG93LCAycHggMCAwIDAgZ3JlZW55ZWxsb3cgaW5zZXQsXFxuICAgIDAgMnB4IDAgMCBncmVlbnllbGxvdyBpbnNldDtcXG59XFxuXFxuLmdhbWVib2FyZC1jb21wdXRlciAudGlsZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3gtc2hhZG93OiAycHggMCAwIDAgdmFyKC0tZGFuZ2VyKSwgMCAycHggMCAwIHZhcigtLWRhbmdlciksXFxuICAgIDJweCAycHggMCAwIHZhcigtLWRhbmdlciksIDJweCAwIDAgMCB2YXIoLS1kYW5nZXIpIGluc2V0LFxcbiAgICAwIDJweCAwIDAgdmFyKC0tZGFuZ2VyKSBpbnNldDtcXG59XFxuXFxuLmdhbWVib2FyZC1jb21wdXRlciAudGlsZTpob3ZlciB7XFxuICB6LWluZGV4OiAxO1xcbiAgYm94LXNoYWRvdzogMnB4IDAgMCAwIG9yYW5nZSwgMCAycHggMCAwIG9yYW5nZSwgMnB4IDJweCAwIDAgb3JhbmdlLFxcbiAgICAycHggMCAwIDAgb3JhbmdlIGluc2V0LCAwIDJweCAwIDAgb3JhbmdlIGluc2V0O1xcbn1cXG5cXG4udGlsZVtzaGlwPSdhbGl2ZSddIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTUzLCAyNTUsIDAsIDAuNjUpO1xcbn1cXG4udGlsZVtzaGlwPSdhdHRhY2tlZCddIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjY1KTtcXG59XFxuLnRpbGVbc2hpcD0nZGVzdHJveWVkJ10ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcbiAgICA0NWRlZyxcXG4gICAgIzAwMDAwMCAyNSUsXFxuICAgICNmZjAwMDAgMjUlLFxcbiAgICAjZmYwMDAwIDUwJSxcXG4gICAgIzAwMDAwMCA1MCUsXFxuICAgICMwMDAwMDAgNzUlLFxcbiAgICAjZmYwMDAwIDc1JSxcXG4gICAgI2ZmMDAwMCAxMDAlXFxuICApO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMS4zMXB4IDExLjMxcHg7XFxufVxcblxcbi50aWxlW2F0dGFja2VkXSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4udGlsZVthdHRhY2tlZF06OmJlZm9yZSB7XFxuICBjb250ZW50OiAnJztcXG4gIGhlaWdodDogdmFyKC0tdGlsZS1zaXplKTtcXG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2ZmZjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gIGxlZnQ6IGNhbGModmFyKC0tdGlsZS1zaXplKSAvIDIpO1xcbn1cXG4udGlsZVthdHRhY2tlZF06OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgaGVpZ2h0OiB2YXIoLS10aWxlLXNpemUpO1xcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjZmZmO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gIGxlZnQ6IGNhbGModmFyKC0tdGlsZS1zaXplKSAvIDIpO1xcbn1cXG5cXG4udGlsZVtwbGFjaW5nXSA+IC5oaWdobGlnaHQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxcHg7XFxuICBsZWZ0OiAxcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGhlaWdodDogdmFyKC0tdGlsZS1zaXplKTtcXG4gIHdpZHRoOiB2YXIoLS10aWxlLXNpemUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogY3lhbjtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgei1pbmRleDogMTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTAsMjAxMSwyMDEyLDIwMTMsMjAxNCBNb3JnYW4gUm9kZXJpY2sgaHR0cDovL3JvZGVyaWNrLmRrXG4gKiBMaWNlbnNlOiBNSVQgLSBodHRwOi8vbXJnbnJkcmNrLm1pdC1saWNlbnNlLm9yZ1xuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tcm9kZXJpY2svUHViU3ViSlNcbiAqL1xuXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3Rvcnkpe1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBQdWJTdWIgPSB7fTtcblxuICAgIGlmIChyb290LlB1YlN1Yikge1xuICAgICAgICBQdWJTdWIgPSByb290LlB1YlN1YjtcbiAgICAgICAgY29uc29sZS53YXJuKFwiUHViU3ViIGFscmVhZHkgbG9hZGVkLCB1c2luZyBleGlzdGluZyB2ZXJzaW9uXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJvb3QuUHViU3ViID0gUHViU3ViO1xuICAgICAgICBmYWN0b3J5KFB1YlN1Yik7XG4gICAgfVxuICAgIC8vIENvbW1vbkpTIGFuZCBOb2RlLmpzIG1vZHVsZSBzdXBwb3J0XG4gICAgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jyl7XG4gICAgICAgIGlmIChtb2R1bGUgIT09IHVuZGVmaW5lZCAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgICAgICAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gUHViU3ViOyAvLyBOb2RlLmpzIHNwZWNpZmljIGBtb2R1bGUuZXhwb3J0c2BcbiAgICAgICAgfVxuICAgICAgICBleHBvcnRzLlB1YlN1YiA9IFB1YlN1YjsgLy8gQ29tbW9uSlMgbW9kdWxlIDEuMS4xIHNwZWNcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gUHViU3ViOyAvLyBDb21tb25KU1xuICAgIH1cbiAgICAvLyBBTUQgc3VwcG9ydFxuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG4gICAgZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKXtcbiAgICAgICAgZGVmaW5lKGZ1bmN0aW9uKCkgeyByZXR1cm4gUHViU3ViOyB9KTtcbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSBuby11bmRlZiAqL1xuICAgIH1cblxufSgoIHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmIHdpbmRvdyApIHx8IHRoaXMsIGZ1bmN0aW9uIChQdWJTdWIpe1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBtZXNzYWdlcyA9IHt9LFxuICAgICAgICBsYXN0VWlkID0gLTEsXG4gICAgICAgIEFMTF9TVUJTQ1JJQklOR19NU0cgPSAnKic7XG5cbiAgICBmdW5jdGlvbiBoYXNLZXlzKG9iail7XG4gICAgICAgIHZhciBrZXk7XG5cbiAgICAgICAgZm9yIChrZXkgaW4gb2JqKXtcbiAgICAgICAgICAgIGlmICggT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSApe1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB0aHJvd3MgdGhlIHBhc3NlZCBleGNlcHRpb24sIGZvciB1c2UgYXMgYXJndW1lbnQgZm9yIHNldFRpbWVvdXRcbiAgICAgKiBAYWxpYXMgdGhyb3dFeGNlcHRpb25cbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0geyBPYmplY3QgfSBleCBBbiBFcnJvciBvYmplY3RcbiAgICAgKi9cbiAgICBmdW5jdGlvbiB0aHJvd0V4Y2VwdGlvbiggZXggKXtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIHJlVGhyb3dFeGNlcHRpb24oKXtcbiAgICAgICAgICAgIHRocm93IGV4O1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhbGxTdWJzY3JpYmVyV2l0aERlbGF5ZWRFeGNlcHRpb25zKCBzdWJzY3JpYmVyLCBtZXNzYWdlLCBkYXRhICl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyKCBtZXNzYWdlLCBkYXRhICk7XG4gICAgICAgIH0gY2F0Y2goIGV4ICl7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCB0aHJvd0V4Y2VwdGlvbiggZXggKSwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYWxsU3Vic2NyaWJlcldpdGhJbW1lZGlhdGVFeGNlcHRpb25zKCBzdWJzY3JpYmVyLCBtZXNzYWdlLCBkYXRhICl7XG4gICAgICAgIHN1YnNjcmliZXIoIG1lc3NhZ2UsIGRhdGEgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxpdmVyTWVzc2FnZSggb3JpZ2luYWxNZXNzYWdlLCBtYXRjaGVkTWVzc2FnZSwgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyApe1xuICAgICAgICB2YXIgc3Vic2NyaWJlcnMgPSBtZXNzYWdlc1ttYXRjaGVkTWVzc2FnZV0sXG4gICAgICAgICAgICBjYWxsU3Vic2NyaWJlciA9IGltbWVkaWF0ZUV4Y2VwdGlvbnMgPyBjYWxsU3Vic2NyaWJlcldpdGhJbW1lZGlhdGVFeGNlcHRpb25zIDogY2FsbFN1YnNjcmliZXJXaXRoRGVsYXllZEV4Y2VwdGlvbnMsXG4gICAgICAgICAgICBzO1xuXG4gICAgICAgIGlmICggIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCggbWVzc2FnZXMsIG1hdGNoZWRNZXNzYWdlICkgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHMgaW4gc3Vic2NyaWJlcnMpe1xuICAgICAgICAgICAgaWYgKCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc3Vic2NyaWJlcnMsIHMpKXtcbiAgICAgICAgICAgICAgICBjYWxsU3Vic2NyaWJlciggc3Vic2NyaWJlcnNbc10sIG9yaWdpbmFsTWVzc2FnZSwgZGF0YSApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlRGVsaXZlcnlGdW5jdGlvbiggbWVzc2FnZSwgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyApe1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gZGVsaXZlck5hbWVzcGFjZWQoKXtcbiAgICAgICAgICAgIHZhciB0b3BpYyA9IFN0cmluZyggbWVzc2FnZSApLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gdG9waWMubGFzdEluZGV4T2YoICcuJyApO1xuXG4gICAgICAgICAgICAvLyBkZWxpdmVyIHRoZSBtZXNzYWdlIGFzIGl0IGlzIG5vd1xuICAgICAgICAgICAgZGVsaXZlck1lc3NhZ2UobWVzc2FnZSwgbWVzc2FnZSwgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyk7XG5cbiAgICAgICAgICAgIC8vIHRyaW0gdGhlIGhpZXJhcmNoeSBhbmQgZGVsaXZlciBtZXNzYWdlIHRvIGVhY2ggbGV2ZWxcbiAgICAgICAgICAgIHdoaWxlKCBwb3NpdGlvbiAhPT0gLTEgKXtcbiAgICAgICAgICAgICAgICB0b3BpYyA9IHRvcGljLnN1YnN0ciggMCwgcG9zaXRpb24gKTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IHRvcGljLmxhc3RJbmRleE9mKCcuJyk7XG4gICAgICAgICAgICAgICAgZGVsaXZlck1lc3NhZ2UoIG1lc3NhZ2UsIHRvcGljLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlbGl2ZXJNZXNzYWdlKG1lc3NhZ2UsIEFMTF9TVUJTQ1JJQklOR19NU0csIGRhdGEsIGltbWVkaWF0ZUV4Y2VwdGlvbnMpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhc0RpcmVjdFN1YnNjcmliZXJzRm9yKCBtZXNzYWdlICkge1xuICAgICAgICB2YXIgdG9waWMgPSBTdHJpbmcoIG1lc3NhZ2UgKSxcbiAgICAgICAgICAgIGZvdW5kID0gQm9vbGVhbihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoIG1lc3NhZ2VzLCB0b3BpYyApICYmIGhhc0tleXMobWVzc2FnZXNbdG9waWNdKSk7XG5cbiAgICAgICAgcmV0dXJuIGZvdW5kO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1lc3NhZ2VIYXNTdWJzY3JpYmVycyggbWVzc2FnZSApe1xuICAgICAgICB2YXIgdG9waWMgPSBTdHJpbmcoIG1lc3NhZ2UgKSxcbiAgICAgICAgICAgIGZvdW5kID0gaGFzRGlyZWN0U3Vic2NyaWJlcnNGb3IodG9waWMpIHx8IGhhc0RpcmVjdFN1YnNjcmliZXJzRm9yKEFMTF9TVUJTQ1JJQklOR19NU0cpLFxuICAgICAgICAgICAgcG9zaXRpb24gPSB0b3BpYy5sYXN0SW5kZXhPZiggJy4nICk7XG5cbiAgICAgICAgd2hpbGUgKCAhZm91bmQgJiYgcG9zaXRpb24gIT09IC0xICl7XG4gICAgICAgICAgICB0b3BpYyA9IHRvcGljLnN1YnN0ciggMCwgcG9zaXRpb24gKTtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gdG9waWMubGFzdEluZGV4T2YoICcuJyApO1xuICAgICAgICAgICAgZm91bmQgPSBoYXNEaXJlY3RTdWJzY3JpYmVyc0Zvcih0b3BpYyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZm91bmQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHVibGlzaCggbWVzc2FnZSwgZGF0YSwgc3luYywgaW1tZWRpYXRlRXhjZXB0aW9ucyApe1xuICAgICAgICBtZXNzYWdlID0gKHR5cGVvZiBtZXNzYWdlID09PSAnc3ltYm9sJykgPyBtZXNzYWdlLnRvU3RyaW5nKCkgOiBtZXNzYWdlO1xuXG4gICAgICAgIHZhciBkZWxpdmVyID0gY3JlYXRlRGVsaXZlcnlGdW5jdGlvbiggbWVzc2FnZSwgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyApLFxuICAgICAgICAgICAgaGFzU3Vic2NyaWJlcnMgPSBtZXNzYWdlSGFzU3Vic2NyaWJlcnMoIG1lc3NhZ2UgKTtcblxuICAgICAgICBpZiAoICFoYXNTdWJzY3JpYmVycyApe1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBzeW5jID09PSB0cnVlICl7XG4gICAgICAgICAgICBkZWxpdmVyKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCBkZWxpdmVyLCAwICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHVibGlzaGVzIHRoZSBtZXNzYWdlLCBwYXNzaW5nIHRoZSBkYXRhIHRvIGl0J3Mgc3Vic2NyaWJlcnNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAYWxpYXMgcHVibGlzaFxuICAgICAqIEBwYXJhbSB7IFN0cmluZyB9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gcHVibGlzaFxuICAgICAqIEBwYXJhbSB7fSBkYXRhIFRoZSBkYXRhIHRvIHBhc3MgdG8gc3Vic2NyaWJlcnNcbiAgICAgKiBAcmV0dXJuIHsgQm9vbGVhbiB9XG4gICAgICovXG4gICAgUHViU3ViLnB1Ymxpc2ggPSBmdW5jdGlvbiggbWVzc2FnZSwgZGF0YSApe1xuICAgICAgICByZXR1cm4gcHVibGlzaCggbWVzc2FnZSwgZGF0YSwgZmFsc2UsIFB1YlN1Yi5pbW1lZGlhdGVFeGNlcHRpb25zICk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFB1Ymxpc2hlcyB0aGUgbWVzc2FnZSBzeW5jaHJvbm91c2x5LCBwYXNzaW5nIHRoZSBkYXRhIHRvIGl0J3Mgc3Vic2NyaWJlcnNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAYWxpYXMgcHVibGlzaFN5bmNcbiAgICAgKiBAcGFyYW0geyBTdHJpbmcgfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIHB1Ymxpc2hcbiAgICAgKiBAcGFyYW0ge30gZGF0YSBUaGUgZGF0YSB0byBwYXNzIHRvIHN1YnNjcmliZXJzXG4gICAgICogQHJldHVybiB7IEJvb2xlYW4gfVxuICAgICAqL1xuICAgIFB1YlN1Yi5wdWJsaXNoU3luYyA9IGZ1bmN0aW9uKCBtZXNzYWdlLCBkYXRhICl7XG4gICAgICAgIHJldHVybiBwdWJsaXNoKCBtZXNzYWdlLCBkYXRhLCB0cnVlLCBQdWJTdWIuaW1tZWRpYXRlRXhjZXB0aW9ucyApO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTdWJzY3JpYmVzIHRoZSBwYXNzZWQgZnVuY3Rpb24gdG8gdGhlIHBhc3NlZCBtZXNzYWdlLiBFdmVyeSByZXR1cm5lZCB0b2tlbiBpcyB1bmlxdWUgYW5kIHNob3VsZCBiZSBzdG9yZWQgaWYgeW91IG5lZWQgdG8gdW5zdWJzY3JpYmVcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAYWxpYXMgc3Vic2NyaWJlXG4gICAgICogQHBhcmFtIHsgU3RyaW5nIH0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBzdWJzY3JpYmUgdG9cbiAgICAgKiBAcGFyYW0geyBGdW5jdGlvbiB9IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBhIG5ldyBtZXNzYWdlIGlzIHB1Ymxpc2hlZFxuICAgICAqIEByZXR1cm4geyBTdHJpbmcgfVxuICAgICAqL1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUgPSBmdW5jdGlvbiggbWVzc2FnZSwgZnVuYyApe1xuICAgICAgICBpZiAoIHR5cGVvZiBmdW5jICE9PSAnZnVuY3Rpb24nKXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lc3NhZ2UgPSAodHlwZW9mIG1lc3NhZ2UgPT09ICdzeW1ib2wnKSA/IG1lc3NhZ2UudG9TdHJpbmcoKSA6IG1lc3NhZ2U7XG5cbiAgICAgICAgLy8gbWVzc2FnZSBpcyBub3QgcmVnaXN0ZXJlZCB5ZXRcbiAgICAgICAgaWYgKCAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKCBtZXNzYWdlcywgbWVzc2FnZSApICl7XG4gICAgICAgICAgICBtZXNzYWdlc1ttZXNzYWdlXSA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZm9yY2luZyB0b2tlbiBhcyBTdHJpbmcsIHRvIGFsbG93IGZvciBmdXR1cmUgZXhwYW5zaW9ucyB3aXRob3V0IGJyZWFraW5nIHVzYWdlXG4gICAgICAgIC8vIGFuZCBhbGxvdyBmb3IgZWFzeSB1c2UgYXMga2V5IG5hbWVzIGZvciB0aGUgJ21lc3NhZ2VzJyBvYmplY3RcbiAgICAgICAgdmFyIHRva2VuID0gJ3VpZF8nICsgU3RyaW5nKCsrbGFzdFVpZCk7XG4gICAgICAgIG1lc3NhZ2VzW21lc3NhZ2VdW3Rva2VuXSA9IGZ1bmM7XG5cbiAgICAgICAgLy8gcmV0dXJuIHRva2VuIGZvciB1bnN1YnNjcmliaW5nXG4gICAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9O1xuXG4gICAgUHViU3ViLnN1YnNjcmliZUFsbCA9IGZ1bmN0aW9uKCBmdW5jICl7XG4gICAgICAgIHJldHVybiBQdWJTdWIuc3Vic2NyaWJlKEFMTF9TVUJTQ1JJQklOR19NU0csIGZ1bmMpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTdWJzY3JpYmVzIHRoZSBwYXNzZWQgZnVuY3Rpb24gdG8gdGhlIHBhc3NlZCBtZXNzYWdlIG9uY2VcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAYWxpYXMgc3Vic2NyaWJlT25jZVxuICAgICAqIEBwYXJhbSB7IFN0cmluZyB9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gc3Vic2NyaWJlIHRvXG4gICAgICogQHBhcmFtIHsgRnVuY3Rpb24gfSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjYWxsIHdoZW4gYSBuZXcgbWVzc2FnZSBpcyBwdWJsaXNoZWRcbiAgICAgKiBAcmV0dXJuIHsgUHViU3ViIH1cbiAgICAgKi9cbiAgICBQdWJTdWIuc3Vic2NyaWJlT25jZSA9IGZ1bmN0aW9uKCBtZXNzYWdlLCBmdW5jICl7XG4gICAgICAgIHZhciB0b2tlbiA9IFB1YlN1Yi5zdWJzY3JpYmUoIG1lc3NhZ2UsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAvLyBiZWZvcmUgZnVuYyBhcHBseSwgdW5zdWJzY3JpYmUgbWVzc2FnZVxuICAgICAgICAgICAgUHViU3ViLnVuc3Vic2NyaWJlKCB0b2tlbiApO1xuICAgICAgICAgICAgZnVuYy5hcHBseSggdGhpcywgYXJndW1lbnRzICk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gUHViU3ViO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgYWxsIHN1YnNjcmlwdGlvbnNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcHVibGljXG4gICAgICogQGFsaWFzIGNsZWFyQWxsU3Vic2NyaXB0aW9uc1xuICAgICAqL1xuICAgIFB1YlN1Yi5jbGVhckFsbFN1YnNjcmlwdGlvbnMgPSBmdW5jdGlvbiBjbGVhckFsbFN1YnNjcmlwdGlvbnMoKXtcbiAgICAgICAgbWVzc2FnZXMgPSB7fTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2xlYXIgc3Vic2NyaXB0aW9ucyBieSB0aGUgdG9waWNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcHVibGljXG4gICAgICogQGFsaWFzIGNsZWFyQWxsU3Vic2NyaXB0aW9uc1xuICAgICAqIEByZXR1cm4geyBpbnQgfVxuICAgICAqL1xuICAgIFB1YlN1Yi5jbGVhclN1YnNjcmlwdGlvbnMgPSBmdW5jdGlvbiBjbGVhclN1YnNjcmlwdGlvbnModG9waWMpe1xuICAgICAgICB2YXIgbTtcbiAgICAgICAgZm9yIChtIGluIG1lc3NhZ2VzKXtcbiAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobWVzc2FnZXMsIG0pICYmIG0uaW5kZXhPZih0b3BpYykgPT09IDApe1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBtZXNzYWdlc1ttXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgICBDb3VudCBzdWJzY3JpcHRpb25zIGJ5IHRoZSB0b3BpY1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAYWxpYXMgY291bnRTdWJzY3JpcHRpb25zXG4gICAgICogQHJldHVybiB7IEFycmF5IH1cbiAgICAqL1xuICAgIFB1YlN1Yi5jb3VudFN1YnNjcmlwdGlvbnMgPSBmdW5jdGlvbiBjb3VudFN1YnNjcmlwdGlvbnModG9waWMpe1xuICAgICAgICB2YXIgbTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgICAgIHZhciB0b2tlbjtcbiAgICAgICAgdmFyIGNvdW50ID0gMDtcbiAgICAgICAgZm9yIChtIGluIG1lc3NhZ2VzKSB7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1lc3NhZ2VzLCBtKSAmJiBtLmluZGV4T2YodG9waWMpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgZm9yICh0b2tlbiBpbiBtZXNzYWdlc1ttXSkge1xuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY291bnQ7XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICAgR2V0cyBzdWJzY3JpcHRpb25zIGJ5IHRoZSB0b3BpY1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAYWxpYXMgZ2V0U3Vic2NyaXB0aW9uc1xuICAgICovXG4gICAgUHViU3ViLmdldFN1YnNjcmlwdGlvbnMgPSBmdW5jdGlvbiBnZXRTdWJzY3JpcHRpb25zKHRvcGljKXtcbiAgICAgICAgdmFyIG07XG4gICAgICAgIHZhciBsaXN0ID0gW107XG4gICAgICAgIGZvciAobSBpbiBtZXNzYWdlcyl7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1lc3NhZ2VzLCBtKSAmJiBtLmluZGV4T2YodG9waWMpID09PSAwKXtcbiAgICAgICAgICAgICAgICBsaXN0LnB1c2gobSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgc3Vic2NyaXB0aW9uc1xuICAgICAqXG4gICAgICogLSBXaGVuIHBhc3NlZCBhIHRva2VuLCByZW1vdmVzIGEgc3BlY2lmaWMgc3Vic2NyaXB0aW9uLlxuICAgICAqXG5cdCAqIC0gV2hlbiBwYXNzZWQgYSBmdW5jdGlvbiwgcmVtb3ZlcyBhbGwgc3Vic2NyaXB0aW9ucyBmb3IgdGhhdCBmdW5jdGlvblxuICAgICAqXG5cdCAqIC0gV2hlbiBwYXNzZWQgYSB0b3BpYywgcmVtb3ZlcyBhbGwgc3Vic2NyaXB0aW9ucyBmb3IgdGhhdCB0b3BpYyAoaGllcmFyY2h5KVxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAYWxpYXMgc3Vic2NyaWJlT25jZVxuICAgICAqIEBwYXJhbSB7IFN0cmluZyB8IEZ1bmN0aW9uIH0gdmFsdWUgQSB0b2tlbiwgZnVuY3Rpb24gb3IgdG9waWMgdG8gdW5zdWJzY3JpYmUgZnJvbVxuICAgICAqIEBleGFtcGxlIC8vIFVuc3Vic2NyaWJpbmcgd2l0aCBhIHRva2VuXG4gICAgICogdmFyIHRva2VuID0gUHViU3ViLnN1YnNjcmliZSgnbXl0b3BpYycsIG15RnVuYyk7XG4gICAgICogUHViU3ViLnVuc3Vic2NyaWJlKHRva2VuKTtcbiAgICAgKiBAZXhhbXBsZSAvLyBVbnN1YnNjcmliaW5nIHdpdGggYSBmdW5jdGlvblxuICAgICAqIFB1YlN1Yi51bnN1YnNjcmliZShteUZ1bmMpO1xuICAgICAqIEBleGFtcGxlIC8vIFVuc3Vic2NyaWJpbmcgZnJvbSBhIHRvcGljXG4gICAgICogUHViU3ViLnVuc3Vic2NyaWJlKCdteXRvcGljJyk7XG4gICAgICovXG4gICAgUHViU3ViLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24odmFsdWUpe1xuICAgICAgICB2YXIgZGVzY2VuZGFudFRvcGljRXhpc3RzID0gZnVuY3Rpb24odG9waWMpIHtcbiAgICAgICAgICAgICAgICB2YXIgbTtcbiAgICAgICAgICAgICAgICBmb3IgKCBtIGluIG1lc3NhZ2VzICl7XG4gICAgICAgICAgICAgICAgICAgIGlmICggT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1lc3NhZ2VzLCBtKSAmJiBtLmluZGV4T2YodG9waWMpID09PSAwICl7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhIGRlc2NlbmRhbnQgb2YgdGhlIHRvcGljIGV4aXN0czpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzVG9waWMgICAgPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmICggT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1lc3NhZ2VzLCB2YWx1ZSkgfHwgZGVzY2VuZGFudFRvcGljRXhpc3RzKHZhbHVlKSApLFxuICAgICAgICAgICAgaXNUb2tlbiAgICA9ICFpc1RvcGljICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycsXG4gICAgICAgICAgICBpc0Z1bmN0aW9uID0gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nLFxuICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2UsXG4gICAgICAgICAgICBtLCBtZXNzYWdlLCB0O1xuXG4gICAgICAgIGlmIChpc1RvcGljKXtcbiAgICAgICAgICAgIFB1YlN1Yi5jbGVhclN1YnNjcmlwdGlvbnModmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICggbSBpbiBtZXNzYWdlcyApe1xuICAgICAgICAgICAgaWYgKCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoIG1lc3NhZ2VzLCBtICkgKXtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gbWVzc2FnZXNbbV07XG5cbiAgICAgICAgICAgICAgICBpZiAoIGlzVG9rZW4gJiYgbWVzc2FnZVt2YWx1ZV0gKXtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG1lc3NhZ2VbdmFsdWVdO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdG9rZW5zIGFyZSB1bmlxdWUsIHNvIHdlIGNhbiBqdXN0IHN0b3AgaGVyZVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNGdW5jdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKCB0IGluIG1lc3NhZ2UgKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobWVzc2FnZSwgdCkgJiYgbWVzc2FnZVt0XSA9PT0gdmFsdWUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBtZXNzYWdlW3RdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG59KSk7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgUHViU3ViIGZyb20gJ3B1YnN1Yi1qcyc7XG5cbmNvbnN0IGdhbWVCb2FyZHNFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVib2FyZHMnKTtcbmNvbnN0IHN0YXR1c0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhdHVzJyk7XG5cbmNvbnN0IGhhbmRsZUVuZW15VGlsZUNsaWNrID0gKGUpID0+IHtcbiAgUHViU3ViLnB1Ymxpc2goJ2VuZW15VGlsZUNsaWNrZWQnLCB7XG4gICAgcm93OiBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcm93JyksXG4gICAgY29sdW1uOiBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29sdW1uJyksXG4gIH0pO1xufTtcblxuY29uc3QgdG9nZ2xlVGlsZUV2ZW50TGlzdGVuZXJzID0gKGJvb2xlYW4pID0+IHtcbiAgY29uc3QgZW5lbXlUaWxlcyA9IGdhbWVCb2FyZHNFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgJy5nYW1lYm9hcmQtY29tcHV0ZXIgPiAudGlsZSdcbiAgKTtcbiAgaWYgKGJvb2xlYW4pIHtcbiAgICBlbmVteVRpbGVzLmZvckVhY2goKHRpbGUpID0+IHtcbiAgICAgIHRpbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVFbmVteVRpbGVDbGljayk7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgZW5lbXlUaWxlcy5mb3JFYWNoKCh0aWxlKSA9PiB7XG4gICAgICB0aWxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlRW5lbXlUaWxlQ2xpY2spO1xuICAgIH0pO1xuICB9XG59O1xuXG5jb25zdCBjcmVhdGVEb21FbGVtZW50ID0gKFxuICBlbGVtZW50VHlwZSA9ICdkaXYnLFxuICBjbGFzc2VzU3RyaW5nID0gJycsXG4gIGlubmVySFRNTCA9ICcnXG4pID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudFR5cGUpO1xuICBlbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzZXNTdHJpbmc7XG4gIGVsZW1lbnQuaW5uZXJIVE1MID0gaW5uZXJIVE1MO1xuXG4gIHJldHVybiBlbGVtZW50O1xufTtcblxuY29uc3QgY3JlYXRlVGlsZUVsZW1lbnQgPSAodGlsZSwgc2hvd1NoaXBzID0gZmFsc2UpID0+IHtcbiAgY29uc3QgdGlsZUVsZW1lbnQgPSBjcmVhdGVEb21FbGVtZW50KCdkaXYnLCAndGlsZScpO1xuICB0aWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcm93JywgdGlsZS5yb3cpO1xuICB0aWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29sdW1uJywgdGlsZS5jb2x1bW4pO1xuXG4gIGlmICh0aWxlLmF0dGFja2VkKSB7XG4gICAgdGlsZUVsZW1lbnQudG9nZ2xlQXR0cmlidXRlKCdhdHRhY2tlZCcsIHRydWUpO1xuICAgIGlmICh0aWxlLnNoaXApIHtcbiAgICAgIHRpbGVFbGVtZW50LnNldEF0dHJpYnV0ZSgnc2hpcCcsICdhdHRhY2tlZCcpO1xuICAgICAgaWYgKHRpbGUuc2hpcC5zdW5rKSB7XG4gICAgICAgIHRpbGVFbGVtZW50LnNldEF0dHJpYnV0ZSgnc2hpcCcsICdkZXN0cm95ZWQnKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoc2hvd1NoaXBzKSB7XG4gICAgaWYgKHRpbGUuc2hpcCkge1xuICAgICAgdGlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdzaGlwJywgJ2FsaXZlJyk7XG4gICAgfVxuICB9XG4gIHJldHVybiB0aWxlRWxlbWVudDtcbn07XG5cbmNvbnN0IGNoYW5nZVN0YXR1cyA9IChzdGF0dXNNZXNzYWdlKSA9PiB7XG4gIHN0YXR1c0VsZW1lbnQuaW5uZXJUZXh0ID0gc3RhdHVzTWVzc2FnZTtcbn07XG5cbmNvbnN0IHJlbmRlckdhbWVCb2FyZHMgPSAocGxheWVyQm9hcmQsIGNvbXB1dGVyQm9hcmQsIGdyaWRTaXplID0gMTApID0+IHtcbiAgZ2FtZUJvYXJkc0VsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gIGNvbnN0IHBsYXllclRpbGVzID0gcGxheWVyQm9hcmQudGlsZXM7XG4gIGNvbnN0IGNvbXB1dGVyVGlsZXMgPSBjb21wdXRlckJvYXJkLnRpbGVzO1xuXG4gIGNvbnN0IHBsYXllckdhbWVCb2FyZEVsZW1lbnQgPSBjcmVhdGVEb21FbGVtZW50KFxuICAgICdkaXYnLFxuICAgICdnYW1lYm9hcmQgZ2FtZWJvYXJkLXBsYXllcidcbiAgKTtcbiAgcGxheWVyVGlsZXMuZm9yRWFjaCgodGlsZSkgPT4ge1xuICAgIGNvbnN0IHRpbGVFbGVtZW50ID0gY3JlYXRlVGlsZUVsZW1lbnQodGlsZSwgdHJ1ZSk7XG4gICAgcGxheWVyR2FtZUJvYXJkRWxlbWVudC5hcHBlbmRDaGlsZCh0aWxlRWxlbWVudCk7XG4gIH0pO1xuXG4gIGNvbnN0IGNvbXB1dGVyR2FtZUJvYXJkRWxlbWVudCA9IGNyZWF0ZURvbUVsZW1lbnQoXG4gICAgJ2RpdicsXG4gICAgJ2dhbWVib2FyZCBnYW1lYm9hcmQtY29tcHV0ZXInXG4gICk7XG4gIGNvbXB1dGVyVGlsZXMuZm9yRWFjaCgodGlsZSkgPT4ge1xuICAgIGNvbnN0IHRpbGVFbGVtZW50ID0gY3JlYXRlVGlsZUVsZW1lbnQodGlsZSwgdHJ1ZSk7XG4gICAgLy8gZm9yIG5vdyB0aGUgcGxheWVyIGNhbiBzZWUgYWxsIHNoaXBzXG4gICAgY29tcHV0ZXJHYW1lQm9hcmRFbGVtZW50LmFwcGVuZENoaWxkKHRpbGVFbGVtZW50KTtcbiAgfSk7XG5cbiAgcGxheWVyR2FtZUJvYXJkRWxlbWVudC5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gYHJlcGVhdCgke2dyaWRTaXplfSwgMWZyKWA7XG4gIGNvbXB1dGVyR2FtZUJvYXJkRWxlbWVudC5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gYHJlcGVhdCgke2dyaWRTaXplfSwgMWZyKWA7XG5cbiAgZ2FtZUJvYXJkc0VsZW1lbnQuYXBwZW5kQ2hpbGQocGxheWVyR2FtZUJvYXJkRWxlbWVudCk7XG4gIGdhbWVCb2FyZHNFbGVtZW50LmFwcGVuZENoaWxkKGNvbXB1dGVyR2FtZUJvYXJkRWxlbWVudCk7XG59O1xuXG5jb25zdCByZW5kZXJJbml0R2FtZUJvYXJkID0gKFxuICBnYW1lQm9hcmQsXG4gIHBsYWNlZFNoaXBTaXplLFxuICBwbGFjZWRTaGlwRGlyZWN0aW9uLFxuICBncmlkU2l6ZVxuKSA9PiB7XG4gIGdhbWVCb2FyZHNFbGVtZW50LmlubmVySFRNTCA9ICcnO1xuICBjb25zdCBwbGF5ZXJUaWxlcyA9IGdhbWVCb2FyZC50aWxlcztcbiAgY29uc3QgcGxheWVyR2FtZUJvYXJkRWxlbWVudCA9IGNyZWF0ZURvbUVsZW1lbnQoXG4gICAgJ2RpdicsXG4gICAgJ2dhbWVib2FyZCBnYW1lYm9hcmQtcGxheWVyIGdhbWVib2FyZC1pbml0J1xuICApO1xuICBjb25zdCBzaGlwSGlnaGxpZ2h0RWxlbWVudCA9IGNyZWF0ZURvbUVsZW1lbnQoJ2RpdicsICdoaWdobGlnaHQnKTtcblxuICBwbGF5ZXJUaWxlcy5mb3JFYWNoKCh0aWxlKSA9PiB7XG4gICAgY29uc3QgdGlsZUVsZW1lbnQgPSBjcmVhdGVUaWxlRWxlbWVudCh0aWxlLCB0cnVlKTtcbiAgICB0aWxlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge1xuICAgICAgdGlsZUVsZW1lbnQudG9nZ2xlQXR0cmlidXRlKCdwbGFjaW5nJywgdHJ1ZSk7XG4gICAgICBjb25zdCBoaWdobGlnaHQgPSBzaGlwSGlnaGxpZ2h0RWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICBpZiAocGxhY2VkU2hpcERpcmVjdGlvbiA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICBoaWdobGlnaHQuc3R5bGUud2lkdGggPSBgY2FsYyh2YXIoLS10aWxlLXNpemUpKiR7cGxhY2VkU2hpcFNpemV9KWA7XG4gICAgICB9IGVsc2UgaWYgKHBsYWNlZFNoaXBEaXJlY3Rpb24gPT09ICdkb3duJykge1xuICAgICAgICBoaWdobGlnaHQuc3R5bGUuaGVpZ2h0ID0gYGNhbGModmFyKC0tdGlsZS1zaXplKSoke3BsYWNlZFNoaXBTaXplfSlgO1xuICAgICAgfVxuICAgICAgdGlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoaGlnaGxpZ2h0KTtcbiAgICB9KTtcbiAgICB0aWxlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgdGlsZUVsZW1lbnQudG9nZ2xlQXR0cmlidXRlKCdwbGFjaW5nJywgZmFsc2UpO1xuICAgICAgdGlsZUVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgfSk7XG5cbiAgICB0aWxlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIFB1YlN1Yi5wdWJsaXNoKCdwbGF5ZXJUaWxlQ2xpY2tlZCcsIFt0aWxlLnJvdywgdGlsZS5jb2x1bW5dKTtcbiAgICB9KTtcbiAgICBwbGF5ZXJHYW1lQm9hcmRFbGVtZW50LmFwcGVuZENoaWxkKHRpbGVFbGVtZW50KTtcbiAgfSk7XG5cbiAgZ2FtZUJvYXJkc0VsZW1lbnQuYXBwZW5kQ2hpbGQocGxheWVyR2FtZUJvYXJkRWxlbWVudCk7XG4gIHBsYXllckdhbWVCb2FyZEVsZW1lbnQuc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9IGByZXBlYXQoJHtncmlkU2l6ZX0sIDFmcilgO1xufTtcblxuZXhwb3J0IHtcbiAgcmVuZGVyR2FtZUJvYXJkcyxcbiAgdG9nZ2xlVGlsZUV2ZW50TGlzdGVuZXJzLFxuICBjaGFuZ2VTdGF0dXMsXG4gIHJlbmRlckluaXRHYW1lQm9hcmQsXG59O1xuIiwiaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwJztcblxuY29uc3QgVGlsZSA9IChyb3csIGNvbHVtbiwgc2hpcCA9IG51bGwpID0+IHtcbiAgaWYgKCFyb3cgfHwgIWNvbHVtbikge1xuICAgIHRocm93IEVycm9yKCdJbnZhbGlkIGNvb3JkaW5hdGVzIScpO1xuICB9XG4gIHJldHVybiB7IHJvdywgY29sdW1uLCBzaGlwLCBhdHRhY2tlZDogZmFsc2UgfTtcbn07XG5cbmNvbnN0IEdhbWVCb2FyZCA9IChzaXplID0gMTApID0+IHtcbiAgY29uc3QgdGlsZXMgPSBbXTtcbiAgbGV0IGN1cnJlbnRSb3cgPSAxO1xuICBsZXQgY3VycmVudENvbHVtbiA9IDE7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZSAqIHNpemU7IGkgKz0gMSkge1xuICAgIHRpbGVzLnB1c2goVGlsZShjdXJyZW50Um93LCBjdXJyZW50Q29sdW1uKSk7XG4gICAgaWYgKGN1cnJlbnRDb2x1bW4gPCBzaXplKSB7XG4gICAgICBjdXJyZW50Q29sdW1uICs9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJlbnRDb2x1bW4gPSAxO1xuICAgICAgY3VycmVudFJvdyArPSAxO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGdldFNoaXBDb29yZGluYXRlcyA9IChoZWFkLCBzaGlwU2l6ZSwgZGlyZWN0aW9uKSA9PiB7XG4gICAgY29uc3QgY29vcmRpbmF0ZXMgPSBbWy4uLmhlYWRdXTtcbiAgICBjb25zdCBjdXJyZW50Q29vcmRpbmF0ZXMgPSBbLi4uaGVhZF07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwU2l6ZSAtIDE7IGkgKz0gMSkge1xuICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgICAgY2FzZSAndXAnOlxuICAgICAgICAgIGN1cnJlbnRDb29yZGluYXRlc1swXSAtPSAxO1xuICAgICAgICAgIGNvb3JkaW5hdGVzLnB1c2goWy4uLmN1cnJlbnRDb29yZGluYXRlc10pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgICAgY3VycmVudENvb3JkaW5hdGVzWzFdICs9IDE7XG4gICAgICAgICAgY29vcmRpbmF0ZXMucHVzaChbLi4uY3VycmVudENvb3JkaW5hdGVzXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2Rvd24nOlxuICAgICAgICAgIGN1cnJlbnRDb29yZGluYXRlc1swXSArPSAxO1xuICAgICAgICAgIGNvb3JkaW5hdGVzLnB1c2goWy4uLmN1cnJlbnRDb29yZGluYXRlc10pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgICBjdXJyZW50Q29vcmRpbmF0ZXNbMV0gLT0gMTtcbiAgICAgICAgICBjb29yZGluYXRlcy5wdXNoKFsuLi5jdXJyZW50Q29vcmRpbmF0ZXNdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNvb3JkaW5hdGVzO1xuICB9O1xuXG4gIGNvbnN0IHZhbGlkYXRlQ29vcmRpbmF0ZXMgPSAoY29vcmRpbmF0ZSwgYm9hcmRTaXplKSA9PiB7XG4gICAgY29uc3QgdmFsaWQgPVxuICAgICAgY29vcmRpbmF0ZVswXSA+PSAxICYmXG4gICAgICBjb29yZGluYXRlWzBdIDw9IGJvYXJkU2l6ZSAmJlxuICAgICAgY29vcmRpbmF0ZVsxXSA+PSAxICYmXG4gICAgICBjb29yZGluYXRlWzFdIDw9IGJvYXJkU2l6ZTtcblxuICAgIHJldHVybiB2YWxpZDtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHRpbGVzLFxuICAgIHNpemUsXG4gICAgYXR0YWNrZWRDb29yZGluYXRlczogW10sXG4gICAgc2hpcHM6IFtdLFxuXG4gICAgZ2V0QWRqYWNlbnRDb29yZGluYXRlcyhjb29yZGluYXRlcykge1xuICAgICAgY29uc3QgYWxsQWRqYWNlbnRDb29yZGluYXRlcyA9IFtcbiAgICAgICAgW2Nvb3JkaW5hdGVzWzBdIC0gMSwgY29vcmRpbmF0ZXNbMV1dLFxuICAgICAgICBbY29vcmRpbmF0ZXNbMF0gLSAxLCBjb29yZGluYXRlc1sxXSArIDFdLFxuICAgICAgICBbY29vcmRpbmF0ZXNbMF0sIGNvb3JkaW5hdGVzWzFdICsgMV0sXG4gICAgICAgIFtjb29yZGluYXRlc1swXSArIDEsIGNvb3JkaW5hdGVzWzFdICsgMV0sXG4gICAgICAgIFtjb29yZGluYXRlc1swXSArIDEsIGNvb3JkaW5hdGVzWzFdXSxcbiAgICAgICAgW2Nvb3JkaW5hdGVzWzBdICsgMSwgY29vcmRpbmF0ZXNbMV0gLSAxXSxcbiAgICAgICAgW2Nvb3JkaW5hdGVzWzBdLCBjb29yZGluYXRlc1sxXSAtIDFdLFxuICAgICAgICBbY29vcmRpbmF0ZXNbMF0gLSAxLCBjb29yZGluYXRlc1sxXSAtIDFdLFxuICAgICAgXTtcblxuICAgICAgY29uc3QgdmFsaWRBZGphY2VudENvb3JkaW5hdGVzID0gYWxsQWRqYWNlbnRDb29yZGluYXRlcy5maWx0ZXIoXG4gICAgICAgIChjb29yZGluYXRlKSA9PiB2YWxpZGF0ZUNvb3JkaW5hdGVzKGNvb3JkaW5hdGUsIHRoaXMuc2l6ZSlcbiAgICAgICk7XG5cbiAgICAgIHJldHVybiB2YWxpZEFkamFjZW50Q29vcmRpbmF0ZXM7XG4gICAgfSxcblxuICAgIGNoZWNrRm9yQWRqYWNlbnRTaGlwcyhjb29yZGluYXRlcykge1xuICAgICAgY29uc3QgYWRqYWNlbnRDb29yZGluYXRlcyA9IHRoaXMuZ2V0QWRqYWNlbnRDb29yZGluYXRlcyhjb29yZGluYXRlcyk7XG4gICAgICBjb25zdCBpc1NoaXBBZGphY2VudCA9IGFkamFjZW50Q29vcmRpbmF0ZXMuc29tZSgoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICBjb25zdCB0aWxlID0gdGhpcy5maW5kVGlsZShjb29yZGluYXRlKTtcbiAgICAgICAgaWYgKHRpbGUuc2hpcCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gaXNTaGlwQWRqYWNlbnQ7XG4gICAgfSxcblxuICAgIHZhbGlkYXRlU2hpcENvb3JkaW5hdGVzKGNvb3JkaW5hdGVzKSB7XG4gICAgICBsZXQgdmFsaWQgPSB0cnVlO1xuICAgICAgY29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgIXZhbGlkYXRlQ29vcmRpbmF0ZXMoY29vcmRpbmF0ZSwgdGhpcy5zaXplKSB8fFxuICAgICAgICAgIHRoaXMuY2hlY2tGb3JBZGphY2VudFNoaXBzKGNvb3JkaW5hdGUpIHx8XG4gICAgICAgICAgdGhpcy5maW5kVGlsZShjb29yZGluYXRlKS5zaGlwXG4gICAgICAgICkge1xuICAgICAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gdmFsaWQ7XG4gICAgfSxcblxuICAgIGZpbmRUaWxlKGNvb3JkaW5hdGVzKSB7XG4gICAgICBjb25zdCB0aWxlSW5kZXggPSAoY29vcmRpbmF0ZXNbMF0gLSAxKSAqIHRoaXMuc2l6ZSArIChjb29yZGluYXRlc1sxXSAtIDEpO1xuICAgICAgY29uc3QgdGlsZSA9IHRoaXMudGlsZXNbdGlsZUluZGV4XTtcblxuICAgICAgcmV0dXJuIHRpbGU7XG4gICAgfSxcblxuICAgIHBsYWNlU2hpcChoZWFkQ29vcmRpbmF0ZXMsIHNoaXBTaXplLCBkaXJlY3Rpb24pIHtcbiAgICAgIGlmIChzaGlwU2l6ZSA8IDEpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgY29uc3QgY29vcmRpbmF0ZXMgPSBnZXRTaGlwQ29vcmRpbmF0ZXMoXG4gICAgICAgIGhlYWRDb29yZGluYXRlcyxcbiAgICAgICAgc2hpcFNpemUsXG4gICAgICAgIGRpcmVjdGlvblxuICAgICAgKTtcbiAgICAgIGlmICghdGhpcy52YWxpZGF0ZVNoaXBDb29yZGluYXRlcyhjb29yZGluYXRlcykpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgY29uc3QgbmV3U2hpcCA9IFNoaXAoc2hpcFNpemUpO1xuICAgICAgdGhpcy5zaGlwcy5wdXNoKG5ld1NoaXApO1xuXG4gICAgICBjb29yZGluYXRlcy5mb3JFYWNoKChjb29yZGluYXRlKSA9PiB7XG4gICAgICAgIGNvbnN0IHRpbGUgPSB0aGlzLmZpbmRUaWxlKGNvb3JkaW5hdGUpO1xuICAgICAgICB0aWxlLnNoaXAgPSBuZXdTaGlwO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuXG4gICAgcGxhY2VTaGlwUmFuZG9tbHkoc2hpcFNpemUsIGRpcmVjdGlvbikge1xuICAgICAgY29uc3QgcmVtYWluaW5nVGlsZXMgPSBbLi4udGlsZXNdO1xuICAgICAgbGV0IGNob3NlbkNvb3JkaW5hdGVzO1xuXG4gICAgICB3aGlsZSAocmVtYWluaW5nVGlsZXMubGVuZ3RoID4gMCAmJiAhY2hvc2VuQ29vcmRpbmF0ZXMpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByZW1haW5pbmdUaWxlcy5sZW5ndGgpO1xuICAgICAgICBjb25zdCBoZWFkQ29vcmRpbmF0ZXMgPSBbXG4gICAgICAgICAgcmVtYWluaW5nVGlsZXNbaW5kZXhdLnJvdyxcbiAgICAgICAgICByZW1haW5pbmdUaWxlc1tpbmRleF0uY29sdW1uLFxuICAgICAgICBdO1xuICAgICAgICBjb25zdCBmdWxsQ29vcmRpbmF0ZXMgPSBnZXRTaGlwQ29vcmRpbmF0ZXMoXG4gICAgICAgICAgaGVhZENvb3JkaW5hdGVzLFxuICAgICAgICAgIHNoaXBTaXplLFxuICAgICAgICAgIGRpcmVjdGlvblxuICAgICAgICApO1xuICAgICAgICBjb25zdCB2YWxpZCA9IHRoaXMudmFsaWRhdGVTaGlwQ29vcmRpbmF0ZXMoZnVsbENvb3JkaW5hdGVzKTtcblxuICAgICAgICBpZiAodmFsaWQpIHtcbiAgICAgICAgICBjaG9zZW5Db29yZGluYXRlcyA9IGhlYWRDb29yZGluYXRlcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZW1haW5pbmdUaWxlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMucGxhY2VTaGlwKGNob3NlbkNvb3JkaW5hdGVzLCBzaGlwU2l6ZSwgZGlyZWN0aW9uKTtcbiAgICAgIHJldHVybiBjaG9zZW5Db29yZGluYXRlcztcbiAgICB9LFxuXG4gICAgdmFsaWRhdGVIaXQoY29vcmRpbmF0ZXMpIHtcbiAgICAgIGlmICghdmFsaWRhdGVDb29yZGluYXRlcyhjb29yZGluYXRlcywgdGhpcy5zaXplKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBjb25zdCBhbHJlYWR5SGl0ID0gdGhpcy5hdHRhY2tlZENvb3JkaW5hdGVzLnNvbWUoXG4gICAgICAgIChjb29yZCkgPT4gY29vcmRbMF0gPT09IGNvb3JkaW5hdGVzWzBdICYmIGNvb3JkWzFdID09PSBjb29yZGluYXRlc1sxXVxuICAgICAgKTtcbiAgICAgIGlmIChhbHJlYWR5SGl0KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcblxuICAgIHJlY2VpdmVIaXQoY29vcmRpbmF0ZXMpIHtcbiAgICAgIGlmICghdGhpcy52YWxpZGF0ZUhpdChjb29yZGluYXRlcykpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgdGhpcy5hdHRhY2tlZENvb3JkaW5hdGVzLnB1c2goY29vcmRpbmF0ZXMpO1xuXG4gICAgICBjb25zdCB0aWxlID0gdGhpcy5maW5kVGlsZShjb29yZGluYXRlcyk7XG4gICAgICB0aWxlLmF0dGFja2VkID0gdHJ1ZTtcbiAgICAgIGlmICghdGlsZS5zaGlwKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgdGlsZS5zaGlwLmhpdCgpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcblxuICAgIGlzRXZlcnl0aGluZ1N1bmsoKSB7XG4gICAgICBpZiAodGhpcy5zaGlwcy5sZW5ndGggPD0gMCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc2hpcFJlbWFpbmluZyA9IHRoaXMuc2hpcHMuc29tZSgoc2hpcCkgPT4gIXNoaXAuc3Vuayk7XG4gICAgICByZXR1cm4gIXNoaXBSZW1haW5pbmc7XG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVCb2FyZDtcbiIsImltcG9ydCBHYW1lQm9hcmQgZnJvbSAnLi9nYW1lLWJvYXJkJztcblxuY29uc3QgZ2V0UmFuZG9tSW50ID0gKG1heCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWF4KTtcblxuY29uc3QgUGxheWVyID0gKGlzSHVtYW4sIGJvYXJkU2l6ZSA9IDEwKSA9PiB7XG4gIGNvbnN0IGdhbWVCb2FyZCA9IEdhbWVCb2FyZChib2FyZFNpemUpO1xuICBjb25zdCBwb3NzaWJsZVRhcmdldHMgPSBbXTtcblxuICBsZXQgY3VycmVudFJvdyA9IDE7XG4gIGxldCBjdXJyZW50Q29sdW1uID0gMTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2FyZFNpemUgKiBib2FyZFNpemU7IGkgKz0gMSkge1xuICAgIHBvc3NpYmxlVGFyZ2V0cy5wdXNoKFtjdXJyZW50Um93LCBjdXJyZW50Q29sdW1uXSk7XG4gICAgaWYgKGN1cnJlbnRDb2x1bW4gPCBib2FyZFNpemUpIHtcbiAgICAgIGN1cnJlbnRDb2x1bW4gKz0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudENvbHVtbiA9IDE7XG4gICAgICBjdXJyZW50Um93ICs9IDE7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpc0h1bWFuLFxuICAgIGdhbWVCb2FyZCxcbiAgICBib2FyZFNpemUsXG4gICAgcG9zc2libGVUYXJnZXRzLFxuICAgIHRhcmdldGVkQ29vcmRpbmF0ZXM6IFtdLFxuXG4gICAgY2hvb3NlUmFuZG9tQXR0YWNrKHRhcmdldExpc3QgPSB0aGlzLnBvc3NpYmxlVGFyZ2V0cykge1xuICAgICAgaWYgKHRhcmdldExpc3QubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgY29uc3QgaW5kZXggPSBnZXRSYW5kb21JbnQodGFyZ2V0TGlzdC5sZW5ndGgpO1xuICAgICAgY29uc3QgYXR0YWNrQ29vcmRpbmF0ZXMgPSB0YXJnZXRMaXN0W2luZGV4XTtcblxuICAgICAgcmV0dXJuIGF0dGFja0Nvb3JkaW5hdGVzO1xuICAgIH0sXG5cbiAgICBwZXJmb3JtUmFuZG9tQXR0YWNrKGVuZW15UGxheWVyKSB7XG4gICAgICBjb25zdCByYW5kb21BdHRhY2sgPSB0aGlzLmNob29zZVJhbmRvbUF0dGFjaygpO1xuICAgICAgdGhpcy50YXJnZXRlZENvb3JkaW5hdGVzLnB1c2gocmFuZG9tQXR0YWNrKTtcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5wb3NzaWJsZVRhcmdldHMuZmluZEluZGV4KFxuICAgICAgICAodmFsdWUpID0+IHZhbHVlWzBdID09PSByYW5kb21BdHRhY2tbMF0gJiYgdmFsdWVbMV0gPT09IHJhbmRvbUF0dGFja1sxXVxuICAgICAgKTtcbiAgICAgIHRoaXMucG9zc2libGVUYXJnZXRzLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICAgIGVuZW15UGxheWVyLmdhbWVCb2FyZC5yZWNlaXZlSGl0KHJhbmRvbUF0dGFjayk7XG4gICAgICByZXR1cm4gcmFuZG9tQXR0YWNrO1xuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iLCJjb25zdCBTaGlwID0gKGxlbmd0aCkgPT4ge1xuICBpZiAoIWxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGxlbmd0aCxcbiAgICB0aW1lc0hpdDogMCxcbiAgICBzdW5rOiBmYWxzZSxcbiAgICBoaXQoKSB7XG4gICAgICB0aGlzLnRpbWVzSGl0ICs9IDE7XG4gICAgICB0aGlzLmlzU3VuaygpO1xuICAgIH0sXG4gICAgaXNTdW5rKCkge1xuICAgICAgaWYgKHRoaXMudGltZXNIaXQgPj0gdGhpcy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5zdW5rID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hpcDtcbiIsImltcG9ydCBQdWJTdWIgZnJvbSAncHVic3ViLWpzJztcbmltcG9ydCB7IGNoYW5nZVN0YXR1cywgcmVuZGVySW5pdEdhbWVCb2FyZCB9IGZyb20gJy4vZG9tJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9mYWN0b3JpZXMvcGxheWVyJztcbmltcG9ydCBnYW1lU3RhcnQgZnJvbSAnLi9nYW1lLWxvb3AnO1xuXG5jb25zdCBIVU1BTl9TSElQX1NJWkVTID0gWzQsIDMsIDMsIDIsIDIsIDIsIDEsIDEsIDEsIDFdO1xuY29uc3QgQk9BUkRfU0laRSA9IDEwO1xuXG5jb25zdCBodW1hblBsYXllciA9IFBsYXllcih0cnVlLCBCT0FSRF9TSVpFKTtcblxubGV0IGN1cnJlbnRTaGlwU2l6ZUluZGV4ID0gMDtcbmxldCBjdXJyZW50U2hpcFNpemUgPSBIVU1BTl9TSElQX1NJWkVTW2N1cnJlbnRTaGlwU2l6ZUluZGV4XTtcbmxldCBjdXJyZW50U2hpcERpcmVjdGlvbiA9ICdyaWdodCc7XG5cbmNvbnN0IGluaXRQdWJTdWIgPSAoKSA9PiB7XG4gIFB1YlN1Yi5zdWJzY3JpYmUoJ3BsYXllclRpbGVDbGlja2VkJywgKG1zZywgZGF0YSkgPT4ge1xuICAgIGNvbnN0IHNoaXBBZGRlZCA9IGh1bWFuUGxheWVyLmdhbWVCb2FyZC5wbGFjZVNoaXAoXG4gICAgICBkYXRhLFxuICAgICAgY3VycmVudFNoaXBTaXplLFxuICAgICAgY3VycmVudFNoaXBEaXJlY3Rpb25cbiAgICApO1xuXG4gICAgaWYgKHNoaXBBZGRlZCkge1xuICAgICAgY3VycmVudFNoaXBTaXplSW5kZXggKz0gMTtcbiAgICAgIGN1cnJlbnRTaGlwU2l6ZSA9IEhVTUFOX1NISVBfU0laRVNbY3VycmVudFNoaXBTaXplSW5kZXhdO1xuICAgICAgcmVuZGVySW5pdEdhbWVCb2FyZChcbiAgICAgICAgaHVtYW5QbGF5ZXIuZ2FtZUJvYXJkLFxuICAgICAgICBjdXJyZW50U2hpcFNpemUsXG4gICAgICAgIGN1cnJlbnRTaGlwRGlyZWN0aW9uLFxuICAgICAgICBCT0FSRF9TSVpFXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmICghY3VycmVudFNoaXBTaXplKSB7XG4gICAgICBQdWJTdWIuY2xlYXJBbGxTdWJzY3JpcHRpb25zKCk7XG4gICAgICBnYW1lU3RhcnQoaHVtYW5QbGF5ZXIpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBpbml0R2FtZSA9ICgpID0+IHtcbiAgY2hhbmdlU3RhdHVzKCdQbGFjZSB5b3VyIHNoaXBzJyk7XG4gIHJlbmRlckluaXRHYW1lQm9hcmQoXG4gICAgaHVtYW5QbGF5ZXIuZ2FtZUJvYXJkLFxuICAgIGN1cnJlbnRTaGlwU2l6ZSxcbiAgICBjdXJyZW50U2hpcERpcmVjdGlvbixcbiAgICBCT0FSRF9TSVpFXG4gICk7XG4gIGluaXRQdWJTdWIoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRHYW1lO1xuIiwiaW1wb3J0IFB1YlN1YiBmcm9tICdwdWJzdWItanMnO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL2ZhY3Rvcmllcy9wbGF5ZXInO1xuaW1wb3J0IHtcbiAgcmVuZGVyR2FtZUJvYXJkcyxcbiAgdG9nZ2xlVGlsZUV2ZW50TGlzdGVuZXJzLFxuICBjaGFuZ2VTdGF0dXMsXG59IGZyb20gJy4vZG9tJztcblxuY29uc3QgQk9BUkRfU0laRSA9IDEwO1xuY29uc3QgVFVSTl9ERUxBWSA9IDEwMDA7IC8vIGluIG1zXG5jb25zdCBDT01QVVRFUl9TSElQX1NJWkVTID0gWzQsIDMsIDMsIDIsIDIsIDIsIDEsIDEsIDEsIDFdO1xuXG5sZXQgcGxheWVyVHVybiA9IGZhbHNlO1xuXG5sZXQgaHVtYW5QbGF5ZXI7XG5jb25zdCBjb21wdXRlclBsYXllciA9IFBsYXllcihmYWxzZSwgQk9BUkRfU0laRSk7XG5cbmNvbnN0IHBvcHVsYXRlQ29tcHV0ZXJCb2FyZCA9ICgpID0+IHtcbiAgQ09NUFVURVJfU0hJUF9TSVpFUy5mb3JFYWNoKChzaXplKSA9PiB7XG4gICAgY29uc3QgZGlyZWN0aW9uID0gWydkb3duJywgJ3JpZ2h0J11bTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMildO1xuICAgIGNvbXB1dGVyUGxheWVyLmdhbWVCb2FyZC5wbGFjZVNoaXBSYW5kb21seShzaXplLCBkaXJlY3Rpb24pO1xuICB9KTtcbn07XG5cbmNvbnN0IGNoZWNrV2luQ29uZGl0aW9uID0gKCkgPT4ge1xuICBpZiAoaHVtYW5QbGF5ZXIuZ2FtZUJvYXJkLmlzRXZlcnl0aGluZ1N1bmsoKSkge1xuICAgIFB1YlN1Yi5wdWJsaXNoKCdnYW1lRW5kZWQnLCB7IHdpbm5lcjogJ2NvbXB1dGVyJyB9KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAoY29tcHV0ZXJQbGF5ZXIuZ2FtZUJvYXJkLmlzRXZlcnl0aGluZ1N1bmsoKSkge1xuICAgIFB1YlN1Yi5wdWJsaXNoKCdnYW1lRW5kZWQnLCB7IHdpbm5lcjogJ3BsYXllcicgfSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5jb25zdCBjaGFuZ2VUdXJuID0gKCkgPT4ge1xuICBpZiAoY2hlY2tXaW5Db25kaXRpb24oKSkge1xuICAgIHBsYXllclR1cm4gPSBmYWxzZTtcbiAgICB0b2dnbGVUaWxlRXZlbnRMaXN0ZW5lcnMoZmFsc2UpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBwbGF5ZXJUdXJuID0gIXBsYXllclR1cm47XG4gIHRvZ2dsZVRpbGVFdmVudExpc3RlbmVycyhwbGF5ZXJUdXJuKTtcbiAgY2hhbmdlU3RhdHVzKGBJdCdzICR7cGxheWVyVHVybiA/ICd5b3VyJyA6IFwidGhlIGNvbXB1dGVyJ3NcIn0gdHVybiFgKTtcblxuICByZXR1cm4gcGxheWVyVHVybjtcbn07XG5cbmNvbnN0IHBlcmZvcm1Db21wdXRlclR1cm4gPSAoZGVsYXkgPSAxMDAwKSA9PiB7XG4gIGlmICghcGxheWVyVHVybikge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgY29tcHV0ZXJNb3ZlID0gY29tcHV0ZXJQbGF5ZXIucGVyZm9ybVJhbmRvbUF0dGFjayhodW1hblBsYXllcik7XG4gICAgICBQdWJTdWIucHVibGlzaCgnY29tcHV0ZXJBdHRhY2tlZCcsIGNvbXB1dGVyTW92ZSk7XG4gICAgfSwgZGVsYXkpO1xuICB9XG59O1xuXG5jb25zdCB0cnlUb0F0dGFjayA9IChtc2csIGRhdGEpID0+IHtcbiAgaWYgKCFwbGF5ZXJUdXJuKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGF0dGFja2VkID0gY29tcHV0ZXJQbGF5ZXIuZ2FtZUJvYXJkLnJlY2VpdmVIaXQoW2RhdGEucm93LCBkYXRhLmNvbHVtbl0pO1xuICBpZiAoYXR0YWNrZWQpIHtcbiAgICBQdWJTdWIucHVibGlzaCgndXNlckF0dGFja2VkJywgW2RhdGEucm93LCBkYXRhLmNvbHVtbl0pO1xuICB9XG5cbiAgcmV0dXJuIGF0dGFja2VkO1xufTtcblxuY29uc3QgZ2FtZUVuZCA9ICh7IHdpbm5lciB9KSA9PiB7XG4gIGNoYW5nZVN0YXR1cyhgR2FtZSBlbmRlZCEgV2lubmVyOiAke3dpbm5lcn1gKTtcbn07XG5cbmNvbnN0IGluaXRQdWJTdWIgPSAoKSA9PiB7XG4gIFB1YlN1Yi5zdWJzY3JpYmUoJ2VuZW15VGlsZUNsaWNrZWQnLCB0cnlUb0F0dGFjayk7XG4gIFB1YlN1Yi5zdWJzY3JpYmUoJ3VzZXJBdHRhY2tlZCcsICgpID0+IHtcbiAgICByZW5kZXJHYW1lQm9hcmRzKGh1bWFuUGxheWVyLmdhbWVCb2FyZCwgY29tcHV0ZXJQbGF5ZXIuZ2FtZUJvYXJkKTtcbiAgICBjaGFuZ2VUdXJuKCk7XG4gICAgcGVyZm9ybUNvbXB1dGVyVHVybihUVVJOX0RFTEFZKTtcbiAgfSk7XG4gIFB1YlN1Yi5zdWJzY3JpYmUoJ2NvbXB1dGVyQXR0YWNrZWQnLCAoKSA9PiB7XG4gICAgcmVuZGVyR2FtZUJvYXJkcyhodW1hblBsYXllci5nYW1lQm9hcmQsIGNvbXB1dGVyUGxheWVyLmdhbWVCb2FyZCk7XG4gICAgY2hhbmdlVHVybigpO1xuICB9KTtcbiAgUHViU3ViLnN1YnNjcmliZSgnZ2FtZUVuZGVkJywgKG1zZywgZGF0YSkgPT4ge1xuICAgIFB1YlN1Yi5jbGVhckFsbFN1YnNjcmlwdGlvbnMoKTtcbiAgICBnYW1lRW5kKGRhdGEpO1xuICB9KTtcbn07XG5cbmNvbnN0IGdhbWVTdGFydCA9IChuZXdIdW1hblBsYXllcikgPT4ge1xuICBodW1hblBsYXllciA9IG5ld0h1bWFuUGxheWVyO1xuICBwb3B1bGF0ZUNvbXB1dGVyQm9hcmQoKTtcbiAgaW5pdFB1YlN1YigpO1xuICByZW5kZXJHYW1lQm9hcmRzKGh1bWFuUGxheWVyLmdhbWVCb2FyZCwgY29tcHV0ZXJQbGF5ZXIuZ2FtZUJvYXJkKTtcbiAgdG9nZ2xlVGlsZUV2ZW50TGlzdGVuZXJzKHRydWUpO1xuXG4gIGNoYW5nZVR1cm4oKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdhbWVTdGFydDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubm1kID0gKG1vZHVsZSkgPT4ge1xuXHRtb2R1bGUucGF0aHMgPSBbXTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL21haW4uY3NzJztcbmltcG9ydCAnLi9pbWcvYmFja2dyb3VuZC5qcGcnO1xuaW1wb3J0IGluaXRHYW1lIGZyb20gJy4vZ2FtZS1pbml0JztcblxuaW5pdEdhbWUoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==