/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Home page 

const pageLoad = function() {

    //cache DOM
    let contentWrapper = document.getElementById('content');

    // header with title
    let header = document.createElement('header');

    let restaurantName = document.createElement('h2');
    restaurantName.setAttribute('id', 'rest-name');
    restaurantName.innerHTML = `M<span id="ampersand">&</span>J's`;

    let restaurantSubHeading = document.createElement('h5');
    restaurantSubHeading.setAttribute('id', 'rest-sub-heading');
    restaurantSubHeading.textContent = `est. 2014`;

    header.appendChild(restaurantName);
    header.appendChild(restaurantSubHeading);

    let main = document.createElement('main');
    
    // navbar in main
    let nav = document.createElement('div');
    nav.setAttribute('id', 'nav');

    let navLinks = document.createElement('ul');
    navLinks.setAttribute('id', 'nav-links');

    let links = [];
    let linkNames = ['Home', 'Menu', 'About', 'Contact Us'];

    for (let i = 0; i <= 3; i++) {
        let link = document.createElement('li');
        link.classList.add('link');
        link.innerText = linkNames[i];
        links.push(link);
    }

    links.forEach(link => {
        navLinks.appendChild(link);
    })

    nav.appendChild(navLinks);

    // Featured Card
    let featuredWrapper = document.createElement('div');
    featuredWrapper.setAttribute('id', 'featured-wrapper');

    let featuredHeadline = document.createElement('h4');
    featuredHeadline.innerHTML = `Home of the World famous <br>'Baked Potato Chili Bowls'`;

    let featuredImageWrapper = document.createElement('div');
    featuredImageWrapper.setAttribute('id', 'featured-image-wrapper');
    let featuredImage = document.createElement('img');
    featuredImage.setAttribute('id', 'featured-image');
    featuredImage.setAttribute('src', '/src/potato.jpg');
    featuredImage.setAttribute('alt', 'baked potato');

    featuredImageWrapper.appendChild(featuredImage);

    let ctaMenuBtn = document.createElement('button');
    ctaMenuBtn.setAttribute('id', 'cta-menu');
    ctaMenuBtn.innerText = 'Click for Menu';

    featuredWrapper.appendChild(featuredHeadline);
    featuredWrapper.appendChild(featuredImageWrapper);
    featuredWrapper.appendChild(ctaMenuBtn);

    // Append children to main
    main.appendChild(nav);
    main.appendChild(featuredWrapper);

    // Append children to #content div
    contentWrapper.appendChild(header);
    contentWrapper.appendChild(main);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");


(0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWU7Ozs7OztVQy9FZjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTjhCOztBQUU5QixpREFBUSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLWFwcC8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEhvbWUgcGFnZSBcblxuY29uc3QgcGFnZUxvYWQgPSBmdW5jdGlvbigpIHtcblxuICAgIC8vY2FjaGUgRE9NXG4gICAgbGV0IGNvbnRlbnRXcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAgIC8vIGhlYWRlciB3aXRoIHRpdGxlXG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuXG4gICAgbGV0IHJlc3RhdXJhbnROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICByZXN0YXVyYW50TmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Jlc3QtbmFtZScpO1xuICAgIHJlc3RhdXJhbnROYW1lLmlubmVySFRNTCA9IGBNPHNwYW4gaWQ9XCJhbXBlcnNhbmRcIj4mPC9zcGFuPkonc2A7XG5cbiAgICBsZXQgcmVzdGF1cmFudFN1YkhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xuICAgIHJlc3RhdXJhbnRTdWJIZWFkaW5nLnNldEF0dHJpYnV0ZSgnaWQnLCAncmVzdC1zdWItaGVhZGluZycpO1xuICAgIHJlc3RhdXJhbnRTdWJIZWFkaW5nLnRleHRDb250ZW50ID0gYGVzdC4gMjAxNGA7XG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQocmVzdGF1cmFudE5hbWUpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChyZXN0YXVyYW50U3ViSGVhZGluZyk7XG5cbiAgICBsZXQgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICBcbiAgICAvLyBuYXZiYXIgaW4gbWFpblxuICAgIGxldCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYXYuc2V0QXR0cmlidXRlKCdpZCcsICduYXYnKTtcblxuICAgIGxldCBuYXZMaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgbmF2TGlua3Muc2V0QXR0cmlidXRlKCdpZCcsICduYXYtbGlua3MnKTtcblxuICAgIGxldCBsaW5rcyA9IFtdO1xuICAgIGxldCBsaW5rTmFtZXMgPSBbJ0hvbWUnLCAnTWVudScsICdBYm91dCcsICdDb250YWN0IFVzJ107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSAzOyBpKyspIHtcbiAgICAgICAgbGV0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBsaW5rLmNsYXNzTGlzdC5hZGQoJ2xpbmsnKTtcbiAgICAgICAgbGluay5pbm5lclRleHQgPSBsaW5rTmFtZXNbaV07XG4gICAgICAgIGxpbmtzLnB1c2gobGluayk7XG4gICAgfVxuXG4gICAgbGlua3MuZm9yRWFjaChsaW5rID0+IHtcbiAgICAgICAgbmF2TGlua3MuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgfSlcblxuICAgIG5hdi5hcHBlbmRDaGlsZChuYXZMaW5rcyk7XG5cbiAgICAvLyBGZWF0dXJlZCBDYXJkXG4gICAgbGV0IGZlYXR1cmVkV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZlYXR1cmVkV3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2ZlYXR1cmVkLXdyYXBwZXInKTtcblxuICAgIGxldCBmZWF0dXJlZEhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBmZWF0dXJlZEhlYWRsaW5lLmlubmVySFRNTCA9IGBIb21lIG9mIHRoZSBXb3JsZCBmYW1vdXMgPGJyPidCYWtlZCBQb3RhdG8gQ2hpbGkgQm93bHMnYDtcblxuICAgIGxldCBmZWF0dXJlZEltYWdlV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZlYXR1cmVkSW1hZ2VXcmFwcGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnZmVhdHVyZWQtaW1hZ2Utd3JhcHBlcicpO1xuICAgIGxldCBmZWF0dXJlZEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgZmVhdHVyZWRJbWFnZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2ZlYXR1cmVkLWltYWdlJyk7XG4gICAgZmVhdHVyZWRJbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsICcvc3JjL3BvdGF0by5qcGcnKTtcbiAgICBmZWF0dXJlZEltYWdlLnNldEF0dHJpYnV0ZSgnYWx0JywgJ2Jha2VkIHBvdGF0bycpO1xuXG4gICAgZmVhdHVyZWRJbWFnZVdyYXBwZXIuYXBwZW5kQ2hpbGQoZmVhdHVyZWRJbWFnZSk7XG5cbiAgICBsZXQgY3RhTWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGN0YU1lbnVCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdjdGEtbWVudScpO1xuICAgIGN0YU1lbnVCdG4uaW5uZXJUZXh0ID0gJ0NsaWNrIGZvciBNZW51JztcblxuICAgIGZlYXR1cmVkV3JhcHBlci5hcHBlbmRDaGlsZChmZWF0dXJlZEhlYWRsaW5lKTtcbiAgICBmZWF0dXJlZFdyYXBwZXIuYXBwZW5kQ2hpbGQoZmVhdHVyZWRJbWFnZVdyYXBwZXIpO1xuICAgIGZlYXR1cmVkV3JhcHBlci5hcHBlbmRDaGlsZChjdGFNZW51QnRuKTtcblxuICAgIC8vIEFwcGVuZCBjaGlsZHJlbiB0byBtYWluXG4gICAgbWFpbi5hcHBlbmRDaGlsZChuYXYpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoZmVhdHVyZWRXcmFwcGVyKTtcblxuICAgIC8vIEFwcGVuZCBjaGlsZHJlbiB0byAjY29udGVudCBkaXZcbiAgICBjb250ZW50V3JhcHBlci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGNvbnRlbnRXcmFwcGVyLmFwcGVuZENoaWxkKG1haW4pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBwYWdlTG9hZCIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHBhZ2VMb2FkIGZyb20gJy4vaG9tZSc7XG5cbnBhZ2VMb2FkKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9