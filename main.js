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
    featuredImageWrapper.setAttribute('class', 'image-wrapper');
    let featuredImage = document.createElement('img');
    featuredImage.setAttribute('class', 'featured-image');
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
    featuredImageWrapper.setAttribute('class', 'image-wrapper');
    let featuredImage = document.createElement('img');
    featuredImage.setAttribute('class', 'featured-image');
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

const menuItems = [];

function createMenuItem(name, description, price, picture, menuType) {
    return {
        name: name,
        description: description,
        price: price,
        picture: picture,
        menuType: menuType
    }
}

let breakfast1 = createMenuItem('Scramble', 'Classic 2 egg scamble breakfast with side of toast and home fries', '$12', '../src/scramble.jpg', 'breakfast');
let breakfast2 = createMenuItem('Avocado Toast', 'This millenial income destroyer is healthy and nutritious. Toast for $12!! You must be crazy!', '$12', '../src/avocado-toast.jpg', 'breakfast');
let lunch1 = createMenuItem('Pastrami on Rye', `Is there a better sandwich on the planet? I don't think so.`, '$16', '../src/pastrami.jpg', 'lunch');
let lunch2 = createMenuItem('Double Trouble', `Two all-beef patties on a sesame seed bun... If we continue the song we'll have to lawyer up`, `$15`, '../src/burger.jpg', 'lunch');
let dinner1 = createMenuItem('Salmon Steak', `You're going to order salmon from a diner?! Your funeral friend`, '$20', '../src/salmon.jpg', 'dinner');
let dinner2 = createMenuItem('Meatloaf', 'A true American dinner standard. No naps in the booths after the meal please!', '$18', '../src/meatloaf.jpg', 'dinner');

menuItems.push(breakfast1);
menuItems.push(breakfast2);
menuItems.push(lunch1);
menuItems.push(lunch2);
menuItems.push(dinner1);
menuItems.push(dinner2);

const menuLoad = function() {

    //cache DOM
    let main = document.querySelector('main');

    // Breakfast Menu Heading
    let breakfastHeading = document.createElement('div');
    breakfastHeading.classList.add('menu-heading');
    breakfastHeading.innerText = 'Breakfast';

    main.appendChild(breakfastHeading);

    menuItems.forEach(item => {
        if (item.menuType === 'breakfast') {
            menuItemCardCreator(item);
        }
    })

    let lunchHeading = document.createElement('div');
    lunchHeading.classList.add('menu-heading');
    lunchHeading.innerText = 'Lunch';

    main.appendChild(lunchHeading);

    menuItems.forEach(item => {
        if (item.menuType === 'lunch') {
            menuItemCardCreator(item);
        }
    })

    let dinnerHeading = document.createElement('div');
    dinnerHeading.classList.add('menu-heading');
    dinnerHeading.innerText = 'Dinner';

    main.appendChild(dinnerHeading);

    menuItems.forEach(item => {
        if (item.menuType === 'dinner') {
            menuItemCardCreator(item);
        }
    })
}


// method to generate menu item cards from menuItems array
function menuItemCardCreator(object) {
    //Menu Item Cards

    let main = document.querySelector('main');

    let menuItemWrapper = document.createElement('div');
    menuItemWrapper.setAttribute('class', 'card-wrapper');

    let menuItemName = document.createElement('h2');
    menuItemName.innerText = `${object.name}`;

    let menuItemDesc = document.createElement('h4');
    menuItemDesc.innerHTML = `${object.description}`;

    let menuImageWrapper = document.createElement('div');
    menuImageWrapper.setAttribute('class', 'image-wrapper');
    let menuImage = document.createElement('img');
    menuImage.setAttribute('class', 'featured-image');
    menuImage.setAttribute('src', object.picture);

    menuImageWrapper.appendChild(menuImage);

    let menuItemPrice = document.createElement('h2');
    menuItemPrice.innerText = `${object.price}`;

    menuItemWrapper.appendChild(menuItemName);
    menuItemWrapper.appendChild(menuItemDesc);
    menuItemWrapper.appendChild(menuImageWrapper);
    menuItemWrapper.appendChild(menuItemPrice);

    main.appendChild(menuItemWrapper);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlOzs7Ozs7Ozs7Ozs7OztBQ2JmOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7QUNiZjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzSEE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsZ0NBQWdDLFlBQVk7O0FBRTVDO0FBQ0EsZ0NBQWdDLG1CQUFtQjs7QUFFbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGlDQUFpQyxhQUFhOztBQUU5QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlOzs7Ozs7VUMxR2Y7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ040QztBQUNkO0FBQ0U7QUFDTTs7QUFFdEM7O0FBRUEsK0NBQVE7O0FBRVI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IsK0NBQVE7QUFDeEI7QUFDQTtBQUNBLGdCQUFnQixpREFBUTtBQUN4QjtBQUNBO0FBQ0EsZ0JBQWdCLGtEQUFTO0FBQ3pCO0FBQ0E7QUFDQSxnQkFBZ0Isb0RBQWE7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1hcHAvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLWFwcC8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1hcHAvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtYXBwLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gYWJvdXQgcGFnZSBsb2FkZXIgZnJvbSBjbGlja2luZyB0YWJcblxuY29uc3QgYWJvdXRMb2FkID0gZnVuY3Rpb24oKSB7XG5cbiAgICAvL2NhY2hlIERPTVxuICAgIGxldCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuXG4gICAgbGV0IGgxVGVzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaDFUZXN0LmlubmVyVGV4dCA9IGBBYm91dCBQYWdlIGxvYWQgdGVzdC4uLmA7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKGgxVGVzdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFib3V0TG9hZCIsIi8vIGNvbnRhY3QgdXMgcGFnZSBsb2FkZXIgZnJvbSBjbGlja2luZyB0YWJcblxuY29uc3QgY29udGFjdFVzTG9hZCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgLy9jYWNoZSBET01cbiAgICBsZXQgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcblxuICAgIGxldCBoMVRlc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGgxVGVzdC5pbm5lclRleHQgPSBgQ29udGFjdCBVcyBQYWdlIGxvYWQgdGVzdC4uLmA7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKGgxVGVzdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3RVc0xvYWQiLCIvLyBIb21lIHBhZ2UgXG5cbi8vIFRvRG8gTGlzdFxuLy8gQWRkIGluIHRoZSBsb2NhdGlvbiBhbmQgaG91cnMgc2VjdGlvbiBvbiB0aGUgaG9tZSBwYWdlXG4vLyBBZGQgaW4gdGhlIHNvY2lhbCBpY29ucyBpbiB0aGUgbG93ZXIgcmlnaHQgb2YgdGhlIGZvb3RlclxuXG5jb25zdCBwYWdlTG9hZCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgLy9jYWNoZSBET01cbiAgICBsZXQgY29udGVudFdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gICAgLy8gaGVhZGVyIHdpdGggdGl0bGVcbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG5cbiAgICBsZXQgbG9nb1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsb2dvV3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xvZ28td3JhcHBlcicpO1xuXG4gICAgbGV0IHJlc3RhdXJhbnROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICByZXN0YXVyYW50TmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Jlc3QtbmFtZScpO1xuICAgIHJlc3RhdXJhbnROYW1lLmlubmVySFRNTCA9IGBNPHNwYW4gaWQ9XCJhbXBlcnNhbmRcIj4mPC9zcGFuPkonc2A7XG5cbiAgICBsZXQgcmVzdGF1cmFudFN1YkhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xuICAgIHJlc3RhdXJhbnRTdWJIZWFkaW5nLnNldEF0dHJpYnV0ZSgnaWQnLCAncmVzdC1zdWItaGVhZGluZycpO1xuICAgIHJlc3RhdXJhbnRTdWJIZWFkaW5nLnRleHRDb250ZW50ID0gYGVzdC4gMjAxNGA7XG5cbiAgICBsb2dvV3JhcHBlci5hcHBlbmRDaGlsZChyZXN0YXVyYW50TmFtZSk7XG4gICAgbG9nb1dyYXBwZXIuYXBwZW5kQ2hpbGQocmVzdGF1cmFudFN1YkhlYWRpbmcpO1xuXG4gICAgLy8gbmF2YmFyIGluIGhlYWRlclxuICAgIGxldCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYXYuc2V0QXR0cmlidXRlKCdpZCcsICduYXYnKTtcblxuICAgIGxldCBuYXZMaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgbmF2TGlua3Muc2V0QXR0cmlidXRlKCdpZCcsICduYXYtbGlua3MnKTtcblxuICAgIGxldCBsaW5rcyA9IFtdO1xuICAgIGxldCBsaW5rTmFtZXMgPSBbJ0hvbWUnLCAnTWVudScsICdBYm91dCcsICdDb250YWN0IFVzJ107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSAzOyBpKyspIHtcbiAgICAgICAgbGV0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBsaW5rLmNsYXNzTGlzdC5hZGQoJ2xpbmsnKTtcbiAgICAgICAgbGluay5pbm5lclRleHQgPSBsaW5rTmFtZXNbaV07XG4gICAgICAgIGxpbmtzLnB1c2gobGluayk7XG4gICAgfVxuXG4gICAgbGlua3MuZm9yRWFjaChsaW5rID0+IHtcbiAgICAgICAgbmF2TGlua3MuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgfSlcblxuICAgIG5hdi5hcHBlbmRDaGlsZChuYXZMaW5rcyk7XG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobG9nb1dyYXBwZXIpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChuYXYpO1xuXG4gICAgLy8gbWFpbiBpcyB3aGVyZSB0aGUgdGFiIGRhdGEgd2lsbCBnb1xuICAgIGxldCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIFxuICAgIC8vIEZlYXR1cmVkIENhcmRcbiAgICBsZXQgZmVhdHVyZWRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZmVhdHVyZWRXcmFwcGVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZC13cmFwcGVyJyk7XG5cbiAgICBsZXQgZmVhdHVyZWRIZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgZmVhdHVyZWRIZWFkbGluZS5pbm5lckhUTUwgPSBgSG9tZSBvZiB0aGUgV29ybGQgZmFtb3VzIDxicj4nQmFrZWQgUG90YXRvIENoaWxpIEJvd2xzJ2A7XG5cbiAgICBsZXQgZmVhdHVyZWRJbWFnZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmZWF0dXJlZEltYWdlV3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ltYWdlLXdyYXBwZXInKTtcbiAgICBsZXQgZmVhdHVyZWRJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGZlYXR1cmVkSW1hZ2Uuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmZWF0dXJlZC1pbWFnZScpO1xuICAgIGZlYXR1cmVkSW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCAnL3NyYy9wb3RhdG8uanBnJyk7XG4gICAgZmVhdHVyZWRJbWFnZS5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdiYWtlZCBwb3RhdG8nKTtcblxuICAgIGZlYXR1cmVkSW1hZ2VXcmFwcGVyLmFwcGVuZENoaWxkKGZlYXR1cmVkSW1hZ2UpO1xuXG4gICAgbGV0IGN0YU1lbnVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjdGFNZW51QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnY3RhLW1lbnUnKTtcbiAgICBjdGFNZW51QnRuLmlubmVyVGV4dCA9ICdDbGljayBmb3IgTWVudSc7XG5cbiAgICBmZWF0dXJlZFdyYXBwZXIuYXBwZW5kQ2hpbGQoZmVhdHVyZWRIZWFkbGluZSk7XG4gICAgZmVhdHVyZWRXcmFwcGVyLmFwcGVuZENoaWxkKGZlYXR1cmVkSW1hZ2VXcmFwcGVyKTtcbiAgICBmZWF0dXJlZFdyYXBwZXIuYXBwZW5kQ2hpbGQoY3RhTWVudUJ0bik7XG5cbiAgICAvLyBBcHBlbmQgY2hpbGRyZW4gdG8gbWFpblxuICAgIG1haW4uYXBwZW5kQ2hpbGQoZmVhdHVyZWRXcmFwcGVyKTtcblxuICAgIGxldCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICBmb290ZXIuaW5uZXJUZXh0ID0gYENyZWF0ZWQgYnkgTWF0dCBLaXNzaW5nZXJgO1xuXG4gICAgLy8gQXBwZW5kIGNoaWxkcmVuIHRvICNjb250ZW50IGRpdlxuICAgIGNvbnRlbnRXcmFwcGVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgY29udGVudFdyYXBwZXIuYXBwZW5kQ2hpbGQobWFpbik7XG4gICAgY29udGVudFdyYXBwZXIuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbn1cblxuY29uc3QgaG9tZUxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAvL2NhY2hlIERPTVxuICAgIGxldCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuXG4gICAgLy8gRmVhdHVyZWQgQ2FyZFxuICAgIGxldCBmZWF0dXJlZFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmZWF0dXJlZFdyYXBwZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkLXdyYXBwZXInKTtcblxuICAgIGxldCBmZWF0dXJlZEhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBmZWF0dXJlZEhlYWRsaW5lLmlubmVySFRNTCA9IGBIb21lIG9mIHRoZSBXb3JsZCBmYW1vdXMgPGJyPidCYWtlZCBQb3RhdG8gQ2hpbGkgQm93bHMnYDtcblxuICAgIGxldCBmZWF0dXJlZEltYWdlV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZlYXR1cmVkSW1hZ2VXcmFwcGVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaW1hZ2Utd3JhcHBlcicpO1xuICAgIGxldCBmZWF0dXJlZEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgZmVhdHVyZWRJbWFnZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZlYXR1cmVkLWltYWdlJyk7XG4gICAgZmVhdHVyZWRJbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsICcvc3JjL3BvdGF0by5qcGcnKTtcbiAgICBmZWF0dXJlZEltYWdlLnNldEF0dHJpYnV0ZSgnYWx0JywgJ2Jha2VkIHBvdGF0bycpO1xuXG4gICAgZmVhdHVyZWRJbWFnZVdyYXBwZXIuYXBwZW5kQ2hpbGQoZmVhdHVyZWRJbWFnZSk7XG5cbiAgICBsZXQgY3RhTWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGN0YU1lbnVCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdjdGEtbWVudScpO1xuICAgIGN0YU1lbnVCdG4uaW5uZXJUZXh0ID0gJ0NsaWNrIGZvciBNZW51JztcblxuICAgIGZlYXR1cmVkV3JhcHBlci5hcHBlbmRDaGlsZChmZWF0dXJlZEhlYWRsaW5lKTtcbiAgICBmZWF0dXJlZFdyYXBwZXIuYXBwZW5kQ2hpbGQoZmVhdHVyZWRJbWFnZVdyYXBwZXIpO1xuICAgIGZlYXR1cmVkV3JhcHBlci5hcHBlbmRDaGlsZChjdGFNZW51QnRuKTtcblxuICAgIC8vIEFwcGVuZCBjaGlsZHJlbiB0byBtYWluXG4gICAgbWFpbi5hcHBlbmRDaGlsZChmZWF0dXJlZFdyYXBwZXIpO1xufVxuXG5leHBvcnQgeyBwYWdlTG9hZCwgaG9tZUxvYWQgfSIsIi8vIG1lbnUgcGFnZSBsb2FkZXIgZnJvbSBjbGlja2luZyB0YWJcblxuY29uc3QgbWVudUl0ZW1zID0gW107XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVJdGVtKG5hbWUsIGRlc2NyaXB0aW9uLCBwcmljZSwgcGljdHVyZSwgbWVudVR5cGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICAgIHByaWNlOiBwcmljZSxcbiAgICAgICAgcGljdHVyZTogcGljdHVyZSxcbiAgICAgICAgbWVudVR5cGU6IG1lbnVUeXBlXG4gICAgfVxufVxuXG5sZXQgYnJlYWtmYXN0MSA9IGNyZWF0ZU1lbnVJdGVtKCdTY3JhbWJsZScsICdDbGFzc2ljIDIgZWdnIHNjYW1ibGUgYnJlYWtmYXN0IHdpdGggc2lkZSBvZiB0b2FzdCBhbmQgaG9tZSBmcmllcycsICckMTInLCAnLi4vc3JjL3NjcmFtYmxlLmpwZycsICdicmVha2Zhc3QnKTtcbmxldCBicmVha2Zhc3QyID0gY3JlYXRlTWVudUl0ZW0oJ0F2b2NhZG8gVG9hc3QnLCAnVGhpcyBtaWxsZW5pYWwgaW5jb21lIGRlc3Ryb3llciBpcyBoZWFsdGh5IGFuZCBudXRyaXRpb3VzLiBUb2FzdCBmb3IgJDEyISEgWW91IG11c3QgYmUgY3JhenkhJywgJyQxMicsICcuLi9zcmMvYXZvY2Fkby10b2FzdC5qcGcnLCAnYnJlYWtmYXN0Jyk7XG5sZXQgbHVuY2gxID0gY3JlYXRlTWVudUl0ZW0oJ1Bhc3RyYW1pIG9uIFJ5ZScsIGBJcyB0aGVyZSBhIGJldHRlciBzYW5kd2ljaCBvbiB0aGUgcGxhbmV0PyBJIGRvbid0IHRoaW5rIHNvLmAsICckMTYnLCAnLi4vc3JjL3Bhc3RyYW1pLmpwZycsICdsdW5jaCcpO1xubGV0IGx1bmNoMiA9IGNyZWF0ZU1lbnVJdGVtKCdEb3VibGUgVHJvdWJsZScsIGBUd28gYWxsLWJlZWYgcGF0dGllcyBvbiBhIHNlc2FtZSBzZWVkIGJ1bi4uLiBJZiB3ZSBjb250aW51ZSB0aGUgc29uZyB3ZSdsbCBoYXZlIHRvIGxhd3llciB1cGAsIGAkMTVgLCAnLi4vc3JjL2J1cmdlci5qcGcnLCAnbHVuY2gnKTtcbmxldCBkaW5uZXIxID0gY3JlYXRlTWVudUl0ZW0oJ1NhbG1vbiBTdGVhaycsIGBZb3UncmUgZ29pbmcgdG8gb3JkZXIgc2FsbW9uIGZyb20gYSBkaW5lcj8hIFlvdXIgZnVuZXJhbCBmcmllbmRgLCAnJDIwJywgJy4uL3NyYy9zYWxtb24uanBnJywgJ2Rpbm5lcicpO1xubGV0IGRpbm5lcjIgPSBjcmVhdGVNZW51SXRlbSgnTWVhdGxvYWYnLCAnQSB0cnVlIEFtZXJpY2FuIGRpbm5lciBzdGFuZGFyZC4gTm8gbmFwcyBpbiB0aGUgYm9vdGhzIGFmdGVyIHRoZSBtZWFsIHBsZWFzZSEnLCAnJDE4JywgJy4uL3NyYy9tZWF0bG9hZi5qcGcnLCAnZGlubmVyJyk7XG5cbm1lbnVJdGVtcy5wdXNoKGJyZWFrZmFzdDEpO1xubWVudUl0ZW1zLnB1c2goYnJlYWtmYXN0Mik7XG5tZW51SXRlbXMucHVzaChsdW5jaDEpO1xubWVudUl0ZW1zLnB1c2gobHVuY2gyKTtcbm1lbnVJdGVtcy5wdXNoKGRpbm5lcjEpO1xubWVudUl0ZW1zLnB1c2goZGlubmVyMik7XG5cbmNvbnN0IG1lbnVMb2FkID0gZnVuY3Rpb24oKSB7XG5cbiAgICAvL2NhY2hlIERPTVxuICAgIGxldCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuXG4gICAgLy8gQnJlYWtmYXN0IE1lbnUgSGVhZGluZ1xuICAgIGxldCBicmVha2Zhc3RIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnJlYWtmYXN0SGVhZGluZy5jbGFzc0xpc3QuYWRkKCdtZW51LWhlYWRpbmcnKTtcbiAgICBicmVha2Zhc3RIZWFkaW5nLmlubmVyVGV4dCA9ICdCcmVha2Zhc3QnO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChicmVha2Zhc3RIZWFkaW5nKTtcblxuICAgIG1lbnVJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpZiAoaXRlbS5tZW51VHlwZSA9PT0gJ2JyZWFrZmFzdCcpIHtcbiAgICAgICAgICAgIG1lbnVJdGVtQ2FyZENyZWF0b3IoaXRlbSk7XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgbGV0IGx1bmNoSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGx1bmNoSGVhZGluZy5jbGFzc0xpc3QuYWRkKCdtZW51LWhlYWRpbmcnKTtcbiAgICBsdW5jaEhlYWRpbmcuaW5uZXJUZXh0ID0gJ0x1bmNoJztcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQobHVuY2hIZWFkaW5nKTtcblxuICAgIG1lbnVJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpZiAoaXRlbS5tZW51VHlwZSA9PT0gJ2x1bmNoJykge1xuICAgICAgICAgICAgbWVudUl0ZW1DYXJkQ3JlYXRvcihpdGVtKTtcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBsZXQgZGlubmVySGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpbm5lckhlYWRpbmcuY2xhc3NMaXN0LmFkZCgnbWVudS1oZWFkaW5nJyk7XG4gICAgZGlubmVySGVhZGluZy5pbm5lclRleHQgPSAnRGlubmVyJztcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQoZGlubmVySGVhZGluZyk7XG5cbiAgICBtZW51SXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaWYgKGl0ZW0ubWVudVR5cGUgPT09ICdkaW5uZXInKSB7XG4gICAgICAgICAgICBtZW51SXRlbUNhcmRDcmVhdG9yKGl0ZW0pO1xuICAgICAgICB9XG4gICAgfSlcbn1cblxuXG4vLyBtZXRob2QgdG8gZ2VuZXJhdGUgbWVudSBpdGVtIGNhcmRzIGZyb20gbWVudUl0ZW1zIGFycmF5XG5mdW5jdGlvbiBtZW51SXRlbUNhcmRDcmVhdG9yKG9iamVjdCkge1xuICAgIC8vTWVudSBJdGVtIENhcmRzXG5cbiAgICBsZXQgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcblxuICAgIGxldCBtZW51SXRlbVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51SXRlbVdyYXBwZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkLXdyYXBwZXInKTtcblxuICAgIGxldCBtZW51SXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIG1lbnVJdGVtTmFtZS5pbm5lclRleHQgPSBgJHtvYmplY3QubmFtZX1gO1xuXG4gICAgbGV0IG1lbnVJdGVtRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgbWVudUl0ZW1EZXNjLmlubmVySFRNTCA9IGAke29iamVjdC5kZXNjcmlwdGlvbn1gO1xuXG4gICAgbGV0IG1lbnVJbWFnZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51SW1hZ2VXcmFwcGVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaW1hZ2Utd3JhcHBlcicpO1xuICAgIGxldCBtZW51SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBtZW51SW1hZ2Uuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmZWF0dXJlZC1pbWFnZScpO1xuICAgIG1lbnVJbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIG9iamVjdC5waWN0dXJlKTtcblxuICAgIG1lbnVJbWFnZVdyYXBwZXIuYXBwZW5kQ2hpbGQobWVudUltYWdlKTtcblxuICAgIGxldCBtZW51SXRlbVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBtZW51SXRlbVByaWNlLmlubmVyVGV4dCA9IGAke29iamVjdC5wcmljZX1gO1xuXG4gICAgbWVudUl0ZW1XcmFwcGVyLmFwcGVuZENoaWxkKG1lbnVJdGVtTmFtZSk7XG4gICAgbWVudUl0ZW1XcmFwcGVyLmFwcGVuZENoaWxkKG1lbnVJdGVtRGVzYyk7XG4gICAgbWVudUl0ZW1XcmFwcGVyLmFwcGVuZENoaWxkKG1lbnVJbWFnZVdyYXBwZXIpO1xuICAgIG1lbnVJdGVtV3JhcHBlci5hcHBlbmRDaGlsZChtZW51SXRlbVByaWNlKTtcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQobWVudUl0ZW1XcmFwcGVyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVudUxvYWQiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHBhZ2VMb2FkLCBob21lTG9hZCB9IGZyb20gJy4vaG9tZSc7XG5pbXBvcnQgbWVudUxvYWQgZnJvbSAnLi9tZW51JztcbmltcG9ydCBhYm91dExvYWQgZnJvbSAnLi9hYm91dCc7XG5pbXBvcnQgY29udGFjdFVzTG9hZCBmcm9tICcuL2NvbnRhY3QnO1xuXG5sZXQgY2xpY2tlZExpbmsgPSAnJztcblxucGFnZUxvYWQoKTtcblxuLy8gY2FjaGUgRE9NXG5sZXQgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbmNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpbmsnKTtcblxubGlua3MuZm9yRWFjaChsaW5rID0+IHtcbiAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNsaWNrZWRMaW5rID0gbGluay5pbm5lclRleHQ7XG4gICAgICAgIG1haW4uaW5uZXJIVE1MID0gJyc7XG5cbiAgICAgICAgc3dpdGNoIChjbGlja2VkTGluaykge1xuICAgICAgICAgICAgY2FzZSAnSG9tZSc6XG4gICAgICAgICAgICAgICAgaG9tZUxvYWQoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ01lbnUnOlxuICAgICAgICAgICAgICAgIG1lbnVMb2FkKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdBYm91dCc6IFxuICAgICAgICAgICAgICAgIGFib3V0TG9hZCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQ29udGFjdCBVcyc6XG4gICAgICAgICAgICAgICAgY29udGFjdFVzTG9hZCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVGhlcmUgbXVzdCBiZSBpbiBlcnJvcicpO1xuICAgICAgICB9XG4gICAgfSlcbn0pXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==