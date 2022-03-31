// about page loader from clicking tab

const aboutLoad = function() {

    //cache DOM
    let main = document.querySelector('main');

    let h1Test = document.createElement('h1');
    h1Test.innerText = `About Page load test...`;

    main.appendChild(h1Test);
}

export default aboutLoad