import { pageLoad, homeLoad } from './home';
import menuLoad from './menu';
import aboutLoad from './about';
import contactUsLoad from './contact';
import './style.css';
import background from './dinerBackground.jpg';

let clickedLink = '';

pageLoad();



// cache DOM
let body = document.querySelector('body');
body.style.backgroundImage = `url(${background})`;

let main = document.querySelector('main');
const links = document.querySelectorAll('.link');

let menuBtn = document.querySelector('#cta-menu');
menuBtn.addEventListener('click', function() {
    main.innerHTML = '';
    menuLoad();
})

links.forEach(link => {
    link.addEventListener('click', function() {
        clickedLink = link.innerText;
        main.innerHTML = '';

        switch (clickedLink) {
            case 'Home':
                homeLoad();
                let menuBtn = document.querySelector('#cta-menu');
                menuBtn.addEventListener('click', function() {
                main.innerHTML = '';
                menuLoad();
                })
                break;
            case 'Menu':
                menuLoad();
                break;
            case 'About Us': 
                aboutLoad();
                break;
            case 'Contact':
                contactUsLoad();
                break;
            default:
                console.log('There must be in error');
        }
    })
})

