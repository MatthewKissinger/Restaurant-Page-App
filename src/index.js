import { pageLoad, homeLoad } from './home';
import menuLoad from './menu';
import aboutLoad from './about';
import contactUsLoad from './contact';

let clickedLink = '';

pageLoad();

// cache DOM
let main = document.querySelector('main');
const links = document.querySelectorAll('.link');

links.forEach(link => {
    link.addEventListener('click', function() {
        clickedLink = link.innerText;
        main.innerHTML = '';

        switch (clickedLink) {
            case 'Home':
                homeLoad();
                break;
            case 'Menu':
                menuLoad();
                break;
            case 'About': 
                aboutLoad();
                break;
            case 'Contact Us':
                contactUsLoad();
                break;
            default:
                console.log('There must be in error');
        }
    })
})

