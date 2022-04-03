// contact us page loader from clicking tab

const contactUsLoad = function() {
    let hours = [
        {
            day: 'Sunday',
            open: '6am - 10pm'
        },
        {
            day: 'Monday',
            open: 'closed'
        },
        {
            day: 'Tuesday',
            open: '6am - 10pm'
        },
        {
            day: 'Wednesday',
            open: '6am - 10pm'
        },
        {
            day: 'Thursday',
            open: '6am - 10pm'
        },
        {
            day: 'Friday',
            open: '6am - 12am'
        },
        {
            day: 'Saturday',
            open: '6am - 12am'
        }
    ];

    //cache DOM
    let main = document.querySelector('main');

    let contactHeading = document.createElement('div');
    contactHeading.classList.add('menu-heading');
    contactHeading.innerText = `Contact`;

    let hoursWrapper = document.createElement('div');
    hoursWrapper.classList.add('card-wrapper');
    hoursWrapper.setAttribute('id', 'hours-wrapper');

    let hoursHeading = document.createElement('h2');
    hoursHeading.innerText = `Hours`;
    hoursHeading.setAttribute('id', 'hours-heading');

    hoursWrapper.appendChild(hoursHeading);

    hours.forEach(hour => {
        let dayInfo = document.createElement('div');
        dayInfo.classList.add('day-info');
        let day = document.createElement('p');
        day.innerText = `${hour.day}`;
        let open = document.createElement('p');
        open.innerText = `${hour.open}`;

        dayInfo.appendChild(day);
        dayInfo.appendChild(open);

        hoursWrapper.appendChild(dayInfo);
    })

    let phoneWrapper = document.createElement('div');
    phoneWrapper.classList.add('card-wrapper');
    phoneWrapper.setAttribute('id', 'phone-wrapper');
    let phoneHeading = document.createElement('h2');
    phoneHeading.setAttribute('id', 'phone-heading');
    phoneHeading.innerText = `Phone`;
    let phoneNumber = document.createElement('h3');
    phoneNumber.innerText = `(555) 555-5555`;

    phoneWrapper.appendChild(phoneHeading);
    phoneWrapper.appendChild(phoneNumber);

    let emailWrapper = document.createElement('div');
    emailWrapper.classList.add('card-wrapper');
    emailWrapper.setAttribute('id', 'email-wrapper');
    let emailHeading = document.createElement('h2');
    emailHeading.setAttribute('id', 'email-heading');
    emailHeading.innerText = `Email`;
    let emailAddress = document.createElement('h3');
    emailAddress.innerText = `info@m&jsdiner.com`;

    emailWrapper.appendChild(emailHeading);
    emailWrapper.appendChild(emailAddress);

    main.appendChild(contactHeading);
    main.appendChild(hoursWrapper);
    main.appendChild(phoneWrapper);
    main.appendChild(emailWrapper);
}

export default contactUsLoad