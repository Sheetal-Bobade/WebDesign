document.querySelector('.home-main-text:first-child').classList.add('active');

setInterval(function() {
    var active = document.querySelector('.home-main-text.active');
    var next = active.nextElementSibling;

    if (!next || !next.classList.contains('home-main-text')) {
        next = document.querySelector('.home-main-text:first-child');
    }

    active.classList.remove('active');
    next.classList.add('active');
}, 5000);

setInterval(function() {
    var firstElement = document.querySelector('.home-main-text:first-child');

    if (firstElement.classList.contains('active')) {
        document.querySelector('.home-main-icon').style.top = '0px';
        document.querySelector('.home-main-icon').animate([
            { top: '125px' },
            { top: '0px' }
        ], {
            duration: 800,
            fill: 'forwards'
        });
    } else {
        document.querySelector('.home-main-icon').style.top = '125px';
        document.querySelector('.home-main-icon').animate([
            { top: '0px' },
            { top: '125px' }
        ], {
            duration: 800,
            fill: 'forwards'
        });
    }
}, 5000);
