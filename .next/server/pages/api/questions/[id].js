module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("7F7b");


/***/ }),

/***/ "7F7b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return handler; });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("iFqS");

function handler({
  query: {
    id
  }
}, res) {
  const filtered = _data__WEBPACK_IMPORTED_MODULE_0__[/* questions */ "a"].filter(question => question.id === id);

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({
      message: `Question with the id of ${id} is not found`
    });
  }
}

/***/ }),

/***/ "iFqS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return questions; });
const questions = [{
  id: '1',
  question: 'What do you want to learn or do more of at work?',
  excerpt: 'To meet new people and learn new technical skills...',
  answer: 'What I want to learn or do more of at work is to continue expanding my knowledge and skill set in different areas of technology. I am passionate about learning new technologies and frameworks, as they present exciting opportunities for me to solve complex problems and puzzles. I find the process of discovering and mastering new technologies to be exhilarating, and I take great pride in being able to bring that knowledge to bear on real-world projects. One of the things that I love most about software engineering is being able to help people. There is something incredibly rewarding about using my technical skills to solve problems and make a difference in peoples lives. Whether its helping a small business optimize their website or providing support to a large enterprise, I find it deeply satisfying to work with people and help them achieve their goals. Continuously learning and improving my skills not only benefits my clients but also helps me stay challenged and motivated in my work. Overall, I am excited about the prospect of continuing to learn and grow in my role and being able to provide valuable solutions to clients while expanding my knowledge and skill set'
}, {
  id: '2',
  question: 'Describe how you solved a challenge that one of your previous support teams faced. How did you determine your solution was successful?',
  excerpt: '...',
  answer: '...'
}, {
  id: '3',
  question: 'How would you compare Next.js with another framework? Feel free to compare with a framework of your choice?',
  excerpt: '...',
  answer: '...'
}, {
  id: '4',
  question: 'When would you choose to use Edge Functions, Serverless Functions, or Edge Middleware with Vercel?',
  excerpt: '...',
  answer: '...'
}, {
  id: '5',
  question: 'Imagine a customer writes in, requesting help with the following question. Write a first response for triaging this case and helping them solve the issue.',
  excerpt: '...',
  answer: '...'
}];

/***/ })

/******/ });