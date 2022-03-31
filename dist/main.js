/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// about page loader from clicking tab

const aboutLoad = function() {

    //cache DOM
    let main = document.querySelector('main');

    let h1Test = document.createElement('h1');
    h1Test.innerText = `About Page load test...`;

    main.appendChild(h1Test);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (aboutLoad);

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// contact us page loader from clicking tab

const contactUsLoad = function() {

    //cache DOM
    let main = document.querySelector('main');

    let h1Test = document.createElement('h1');
    h1Test.innerText = `Contact Us Page load test...`;

    main.appendChild(h1Test);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactUsLoad);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homeLoad": () => (/* binding */ homeLoad),
/* harmony export */   "pageLoad": () => (/* binding */ pageLoad)
/* harmony export */ });
// Home page 

// ToDo List
// Add in the location and hours section on the home page
// Add in the social icons in the lower right of the footer

const pageLoad = function() {

    //cache DOM
    let contentWrapper = document.getElementById('content');

    // header with title
    let header = document.createElement('header');

    let logoWrapper = document.createElement('div');
    logoWrapper.setAttribute('id', 'logo-wrapper');

    let restaurantName = document.createElement('h2');
    restaurantName.setAttribute('id', 'rest-name');
    restaurantName.innerHTML = `M<span id="ampersand">&</span>J's`;

    let restaurantSubHeading = document.createElement('h5');
    restaurantSubHeading.setAttribute('id', 'rest-sub-heading');
    restaurantSubHeading.textContent = `est. 2014`;

    logoWrapper.appendChild(restaurantName);
    logoWrapper.appendChild(restaurantSubHeading);

    // navbar in header
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

    header.appendChild(logoWrapper);
    header.appendChild(nav);

    // main is where the tab data will go
    let main = document.createElement('main');
    
    // Featured Card
    let featuredWrapper = document.createElement('div');
    featuredWrapper.setAttribute('class', 'card-wrapper');

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
    main.appendChild(featuredWrapper);

    let footer = document.createElement('footer');
    footer.innerText = `Created by Matt Kissinger`;

    // Append children to #content div
    contentWrapper.appendChild(header);
    contentWrapper.appendChild(main);
    contentWrapper.appendChild(footer);
}

const homeLoad = function() {
    //cache DOM
    let main = document.querySelector('main');

    // Featured Card
    let featuredWrapper = document.createElement('div');
    featuredWrapper.setAttribute('class', 'card-wrapper');

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
    main.appendChild(featuredWrapper);
}



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// menu page loader from clicking tab

// make an array of objects for menu items
// use a factory function to create the objects and then push them into the array
// loop through that array to make the generated html inside of the card-wrapper divs

const menuItems = [];

const createMenuItem = function() {
    
}

const menuLoad = function() {

    //cache DOM
    let main = document.querySelector('main');

    let h1Test = document.createElement('h1');
    h1Test.innerText = `Menu Page load test...`;

    main.appendChild(h1Test);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuLoad);

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
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ "./src/about.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");





let clickedLink = '';

(0,_home__WEBPACK_IMPORTED_MODULE_0__.pageLoad)();

// cache DOM
let main = document.querySelector('main');
const links = document.querySelectorAll('.link');

links.forEach(link => {
    link.addEventListener('click', function() {
        clickedLink = link.innerText;
        main.innerHTML = '';

        switch (clickedLink) {
            case 'Home':
                (0,_home__WEBPACK_IMPORTED_MODULE_0__.homeLoad)();
                break;
            case 'Menu':
                (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
                break;
            case 'About': 
                (0,_about__WEBPACK_IMPORTED_MODULE_2__["default"])();
                break;
            case 'Contact Us':
                (0,_contact__WEBPACK_IMPORTED_MODULE_3__["default"])();
                break;
            default:
                console.log('There must be in error');
        }
    })
})


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlOzs7Ozs7Ozs7Ozs7OztBQ2JmOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7QUNiZjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzSEE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZTs7Ozs7O1VDdkJmO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNONEM7QUFDZDtBQUNFO0FBQ007O0FBRXRDOztBQUVBLCtDQUFROztBQUVSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLCtDQUFRO0FBQ3hCO0FBQ0E7QUFDQSxnQkFBZ0IsaURBQVE7QUFDeEI7QUFDQTtBQUNBLGdCQUFnQixrREFBUztBQUN6QjtBQUNBO0FBQ0EsZ0JBQWdCLG9EQUFhO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtYXBwLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1hcHAvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtYXBwLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLWFwcC8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGFib3V0IHBhZ2UgbG9hZGVyIGZyb20gY2xpY2tpbmcgdGFiXG5cbmNvbnN0IGFib3V0TG9hZCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgLy9jYWNoZSBET01cbiAgICBsZXQgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcblxuICAgIGxldCBoMVRlc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGgxVGVzdC5pbm5lclRleHQgPSBgQWJvdXQgUGFnZSBsb2FkIHRlc3QuLi5gO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChoMVRlc3QpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhYm91dExvYWQiLCIvLyBjb250YWN0IHVzIHBhZ2UgbG9hZGVyIGZyb20gY2xpY2tpbmcgdGFiXG5cbmNvbnN0IGNvbnRhY3RVc0xvYWQgPSBmdW5jdGlvbigpIHtcblxuICAgIC8vY2FjaGUgRE9NXG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG5cbiAgICBsZXQgaDFUZXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoMVRlc3QuaW5uZXJUZXh0ID0gYENvbnRhY3QgVXMgUGFnZSBsb2FkIHRlc3QuLi5gO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChoMVRlc3QpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb250YWN0VXNMb2FkIiwiLy8gSG9tZSBwYWdlIFxuXG4vLyBUb0RvIExpc3Rcbi8vIEFkZCBpbiB0aGUgbG9jYXRpb24gYW5kIGhvdXJzIHNlY3Rpb24gb24gdGhlIGhvbWUgcGFnZVxuLy8gQWRkIGluIHRoZSBzb2NpYWwgaWNvbnMgaW4gdGhlIGxvd2VyIHJpZ2h0IG9mIHRoZSBmb290ZXJcblxuY29uc3QgcGFnZUxvYWQgPSBmdW5jdGlvbigpIHtcblxuICAgIC8vY2FjaGUgRE9NXG4gICAgbGV0IGNvbnRlbnRXcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAgIC8vIGhlYWRlciB3aXRoIHRpdGxlXG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuXG4gICAgbGV0IGxvZ29XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbG9nb1dyYXBwZXIuc2V0QXR0cmlidXRlKCdpZCcsICdsb2dvLXdyYXBwZXInKTtcblxuICAgIGxldCByZXN0YXVyYW50TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgcmVzdGF1cmFudE5hbWUuc2V0QXR0cmlidXRlKCdpZCcsICdyZXN0LW5hbWUnKTtcbiAgICByZXN0YXVyYW50TmFtZS5pbm5lckhUTUwgPSBgTTxzcGFuIGlkPVwiYW1wZXJzYW5kXCI+Jjwvc3Bhbj5KJ3NgO1xuXG4gICAgbGV0IHJlc3RhdXJhbnRTdWJIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcbiAgICByZXN0YXVyYW50U3ViSGVhZGluZy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Jlc3Qtc3ViLWhlYWRpbmcnKTtcbiAgICByZXN0YXVyYW50U3ViSGVhZGluZy50ZXh0Q29udGVudCA9IGBlc3QuIDIwMTRgO1xuXG4gICAgbG9nb1dyYXBwZXIuYXBwZW5kQ2hpbGQocmVzdGF1cmFudE5hbWUpO1xuICAgIGxvZ29XcmFwcGVyLmFwcGVuZENoaWxkKHJlc3RhdXJhbnRTdWJIZWFkaW5nKTtcblxuICAgIC8vIG5hdmJhciBpbiBoZWFkZXJcbiAgICBsZXQgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmF2LnNldEF0dHJpYnV0ZSgnaWQnLCAnbmF2Jyk7XG5cbiAgICBsZXQgbmF2TGlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIG5hdkxpbmtzLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmF2LWxpbmtzJyk7XG5cbiAgICBsZXQgbGlua3MgPSBbXTtcbiAgICBsZXQgbGlua05hbWVzID0gWydIb21lJywgJ01lbnUnLCAnQWJvdXQnLCAnQ29udGFjdCBVcyddO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gMzsgaSsrKSB7XG4gICAgICAgIGxldCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgbGluay5jbGFzc0xpc3QuYWRkKCdsaW5rJyk7XG4gICAgICAgIGxpbmsuaW5uZXJUZXh0ID0gbGlua05hbWVzW2ldO1xuICAgICAgICBsaW5rcy5wdXNoKGxpbmspO1xuICAgIH1cblxuICAgIGxpbmtzLmZvckVhY2gobGluayA9PiB7XG4gICAgICAgIG5hdkxpbmtzLmFwcGVuZENoaWxkKGxpbmspO1xuICAgIH0pXG5cbiAgICBuYXYuYXBwZW5kQ2hpbGQobmF2TGlua3MpO1xuXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGxvZ29XcmFwcGVyKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2KTtcblxuICAgIC8vIG1haW4gaXMgd2hlcmUgdGhlIHRhYiBkYXRhIHdpbGwgZ29cbiAgICBsZXQgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICBcbiAgICAvLyBGZWF0dXJlZCBDYXJkXG4gICAgbGV0IGZlYXR1cmVkV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZlYXR1cmVkV3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmQtd3JhcHBlcicpO1xuXG4gICAgbGV0IGZlYXR1cmVkSGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIGZlYXR1cmVkSGVhZGxpbmUuaW5uZXJIVE1MID0gYEhvbWUgb2YgdGhlIFdvcmxkIGZhbW91cyA8YnI+J0Jha2VkIFBvdGF0byBDaGlsaSBCb3dscydgO1xuXG4gICAgbGV0IGZlYXR1cmVkSW1hZ2VXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZmVhdHVyZWRJbWFnZVdyYXBwZXIuc2V0QXR0cmlidXRlKCdpZCcsICdmZWF0dXJlZC1pbWFnZS13cmFwcGVyJyk7XG4gICAgbGV0IGZlYXR1cmVkSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBmZWF0dXJlZEltYWdlLnNldEF0dHJpYnV0ZSgnaWQnLCAnZmVhdHVyZWQtaW1hZ2UnKTtcbiAgICBmZWF0dXJlZEltYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywgJy9zcmMvcG90YXRvLmpwZycpO1xuICAgIGZlYXR1cmVkSW1hZ2Uuc2V0QXR0cmlidXRlKCdhbHQnLCAnYmFrZWQgcG90YXRvJyk7XG5cbiAgICBmZWF0dXJlZEltYWdlV3JhcHBlci5hcHBlbmRDaGlsZChmZWF0dXJlZEltYWdlKTtcblxuICAgIGxldCBjdGFNZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY3RhTWVudUJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2N0YS1tZW51Jyk7XG4gICAgY3RhTWVudUJ0bi5pbm5lclRleHQgPSAnQ2xpY2sgZm9yIE1lbnUnO1xuXG4gICAgZmVhdHVyZWRXcmFwcGVyLmFwcGVuZENoaWxkKGZlYXR1cmVkSGVhZGxpbmUpO1xuICAgIGZlYXR1cmVkV3JhcHBlci5hcHBlbmRDaGlsZChmZWF0dXJlZEltYWdlV3JhcHBlcik7XG4gICAgZmVhdHVyZWRXcmFwcGVyLmFwcGVuZENoaWxkKGN0YU1lbnVCdG4pO1xuXG4gICAgLy8gQXBwZW5kIGNoaWxkcmVuIHRvIG1haW5cbiAgICBtYWluLmFwcGVuZENoaWxkKGZlYXR1cmVkV3JhcHBlcik7XG5cbiAgICBsZXQgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgZm9vdGVyLmlubmVyVGV4dCA9IGBDcmVhdGVkIGJ5IE1hdHQgS2lzc2luZ2VyYDtcblxuICAgIC8vIEFwcGVuZCBjaGlsZHJlbiB0byAjY29udGVudCBkaXZcbiAgICBjb250ZW50V3JhcHBlci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGNvbnRlbnRXcmFwcGVyLmFwcGVuZENoaWxkKG1haW4pO1xuICAgIGNvbnRlbnRXcmFwcGVyLmFwcGVuZENoaWxkKGZvb3Rlcik7XG59XG5cbmNvbnN0IGhvbWVMb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgLy9jYWNoZSBET01cbiAgICBsZXQgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcblxuICAgIC8vIEZlYXR1cmVkIENhcmRcbiAgICBsZXQgZmVhdHVyZWRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZmVhdHVyZWRXcmFwcGVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZC13cmFwcGVyJyk7XG5cbiAgICBsZXQgZmVhdHVyZWRIZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgZmVhdHVyZWRIZWFkbGluZS5pbm5lckhUTUwgPSBgSG9tZSBvZiB0aGUgV29ybGQgZmFtb3VzIDxicj4nQmFrZWQgUG90YXRvIENoaWxpIEJvd2xzJ2A7XG5cbiAgICBsZXQgZmVhdHVyZWRJbWFnZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmZWF0dXJlZEltYWdlV3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2ZlYXR1cmVkLWltYWdlLXdyYXBwZXInKTtcbiAgICBsZXQgZmVhdHVyZWRJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGZlYXR1cmVkSW1hZ2Uuc2V0QXR0cmlidXRlKCdpZCcsICdmZWF0dXJlZC1pbWFnZScpO1xuICAgIGZlYXR1cmVkSW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCAnL3NyYy9wb3RhdG8uanBnJyk7XG4gICAgZmVhdHVyZWRJbWFnZS5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdiYWtlZCBwb3RhdG8nKTtcblxuICAgIGZlYXR1cmVkSW1hZ2VXcmFwcGVyLmFwcGVuZENoaWxkKGZlYXR1cmVkSW1hZ2UpO1xuXG4gICAgbGV0IGN0YU1lbnVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjdGFNZW51QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnY3RhLW1lbnUnKTtcbiAgICBjdGFNZW51QnRuLmlubmVyVGV4dCA9ICdDbGljayBmb3IgTWVudSc7XG5cbiAgICBmZWF0dXJlZFdyYXBwZXIuYXBwZW5kQ2hpbGQoZmVhdHVyZWRIZWFkbGluZSk7XG4gICAgZmVhdHVyZWRXcmFwcGVyLmFwcGVuZENoaWxkKGZlYXR1cmVkSW1hZ2VXcmFwcGVyKTtcbiAgICBmZWF0dXJlZFdyYXBwZXIuYXBwZW5kQ2hpbGQoY3RhTWVudUJ0bik7XG5cbiAgICAvLyBBcHBlbmQgY2hpbGRyZW4gdG8gbWFpblxuICAgIG1haW4uYXBwZW5kQ2hpbGQoZmVhdHVyZWRXcmFwcGVyKTtcbn1cblxuZXhwb3J0IHsgcGFnZUxvYWQsIGhvbWVMb2FkIH0iLCIvLyBtZW51IHBhZ2UgbG9hZGVyIGZyb20gY2xpY2tpbmcgdGFiXG5cbi8vIG1ha2UgYW4gYXJyYXkgb2Ygb2JqZWN0cyBmb3IgbWVudSBpdGVtc1xuLy8gdXNlIGEgZmFjdG9yeSBmdW5jdGlvbiB0byBjcmVhdGUgdGhlIG9iamVjdHMgYW5kIHRoZW4gcHVzaCB0aGVtIGludG8gdGhlIGFycmF5XG4vLyBsb29wIHRocm91Z2ggdGhhdCBhcnJheSB0byBtYWtlIHRoZSBnZW5lcmF0ZWQgaHRtbCBpbnNpZGUgb2YgdGhlIGNhcmQtd3JhcHBlciBkaXZzXG5cbmNvbnN0IG1lbnVJdGVtcyA9IFtdO1xuXG5jb25zdCBjcmVhdGVNZW51SXRlbSA9IGZ1bmN0aW9uKCkge1xuICAgIFxufVxuXG5jb25zdCBtZW51TG9hZCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgLy9jYWNoZSBET01cbiAgICBsZXQgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcblxuICAgIGxldCBoMVRlc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGgxVGVzdC5pbm5lclRleHQgPSBgTWVudSBQYWdlIGxvYWQgdGVzdC4uLmA7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKGgxVGVzdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbnVMb2FkIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBwYWdlTG9hZCwgaG9tZUxvYWQgfSBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IG1lbnVMb2FkIGZyb20gJy4vbWVudSc7XG5pbXBvcnQgYWJvdXRMb2FkIGZyb20gJy4vYWJvdXQnO1xuaW1wb3J0IGNvbnRhY3RVc0xvYWQgZnJvbSAnLi9jb250YWN0JztcblxubGV0IGNsaWNrZWRMaW5rID0gJyc7XG5cbnBhZ2VMb2FkKCk7XG5cbi8vIGNhY2hlIERPTVxubGV0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG5jb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saW5rJyk7XG5cbmxpbmtzLmZvckVhY2gobGluayA9PiB7XG4gICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjbGlja2VkTGluayA9IGxpbmsuaW5uZXJUZXh0O1xuICAgICAgICBtYWluLmlubmVySFRNTCA9ICcnO1xuXG4gICAgICAgIHN3aXRjaCAoY2xpY2tlZExpbmspIHtcbiAgICAgICAgICAgIGNhc2UgJ0hvbWUnOlxuICAgICAgICAgICAgICAgIGhvbWVMb2FkKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdNZW51JzpcbiAgICAgICAgICAgICAgICBtZW51TG9hZCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQWJvdXQnOiBcbiAgICAgICAgICAgICAgICBhYm91dExvYWQoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0NvbnRhY3QgVXMnOlxuICAgICAgICAgICAgICAgIGNvbnRhY3RVc0xvYWQoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RoZXJlIG11c3QgYmUgaW4gZXJyb3InKTtcbiAgICAgICAgfVxuICAgIH0pXG59KVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=