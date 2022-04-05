// Home page 

// ToDo List
// Add in the social icons in the lower right of the footer

import potato from './potato.jpg';

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
    let linkNames = ['Home', 'Menu', 'About Us', 'Contact'];

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
    featuredImage.setAttribute('src', `${potato}`);
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
    featuredImage.setAttribute('alt', `${potato}`);

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

export { pageLoad, homeLoad }