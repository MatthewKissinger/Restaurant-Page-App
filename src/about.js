// about page loader from clicking tab

const aboutLoad = function() {

    //cache DOM
    let main = document.querySelector('main');

    let aboutUsHeading = document.createElement('div');
    aboutUsHeading.classList.add('menu-heading');
    aboutUsHeading.innerText = 'About Us';

    main.appendChild(aboutUsHeading);

    let aboutWrapper = document.createElement('div');
    aboutWrapper.setAttribute('class', 'card-wrapper');
    aboutWrapper.classList.add('about-wrapper');

    let p1 = document.createElement('p');
    p1.setAttribute('id', 'about-p1');
    p1.innerText = `In the heart of Toluca Lake, and a stone's throw from Universal Studios, M&J's is that classic diner full of scrumptious dishes that you are looking for.`;

    let p2 = document.createElement('p');
    p2.setAttribute('id', 'about-p2');
    p2.innerText = `Started in 2014, owners Matt and Jenna decided to create a little slice of nostalgia in their community.  Gathering time-honored recipes, and sometimes putting in their own twist, it is now a mainstay and a must visit if you are in the LA area.`

    let p3 = document.createElement('p');
    p3.setAttribute('id', 'about-p3');
    p3.innerText = `Recently awarded 'sickest baked potato' from Guy Fieri, the baked potato chili bowl is to die for. See you at the counter or booth. No reservations!`;

    aboutWrapper.appendChild(p1);
    aboutWrapper.appendChild(p2);
    aboutWrapper.appendChild(p3);

    main.appendChild(aboutWrapper);
}

export default aboutLoad