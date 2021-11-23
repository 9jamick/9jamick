const hamburger = document.querySelector('.hamburger')
const menu = document.querySelector('.menu')
const closeMenu = document.querySelector('.menu_close')


hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeMenu.addEventListener('click', () => {
    menu.classList.remove('active');
});

$('.menu_overlay').on('click', () => {
    menu.classList.remove('active');
});

$('.menu_link').on('click', () => {
    setTimeout(() => {
        menu.classList.remove('active');
    }, 500)
});


$(window).scroll(function () {
    if ($(this).scrollTop() > 700) {
        $('.page_up').fadeIn();
    } else {
        $('.page_up').fadeOut();
    }
});

























// // Open Navbar
// $('.hamburger').on('click', function() {
//     $(this).toggleClass('active');
//     $('.mob-nav .list').toggleClass('active');
//     $('.body').toggleClass('active');
// });

// // Close Navbar and go to id
// $('.mob-nav a').on('click', () => {
//     $('.mob-nav .list').toggleClass('active');
//     $('.ham').toggleClass('active');
//     document.documentElement.style.overflow = '';
//     $('.body').toggleClass('active');
// });

// // Close Navbar and go to id
// $('.search i').on('click', function() {
//     $('.search').toggleClass('active');
// });

// // Close Navbar and go to id
// $('.app-drop-mob').on('click', function() {
//     $(this).toggleClass('active')
// });