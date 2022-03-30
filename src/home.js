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

export default pageLoad