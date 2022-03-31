// contact us page loader from clicking tab

const contactUsLoad = function() {

    //cache DOM
    let main = document.querySelector('main');

    let h1Test = document.createElement('h1');
    h1Test.innerText = `Contact Us Page load test...`;

    main.appendChild(h1Test);
}

export default contactUsLoad