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

export default menuLoad