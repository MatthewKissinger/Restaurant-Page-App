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

export default menuLoad