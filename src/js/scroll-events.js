// effects on scroll
let windowHeight = window.innerHeight

let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;

    if (currentScrollPos > windowHeight - (windowHeight / 2)) {
        $(".side_panel_link, .side_panel_text").css('color', '#000');
        $(".side_panel_devider").css('background', '#000');
    } else {
        $(".side_panel_link, .side_panel_text").css('color', '#fff');
        $(".side_panel_devider").css('background', '#fff');
    }

    if (currentScrollPos > windowHeight - 50) {
        $(".hamburger span").css('background', '#000');
    } else {
        $(".hamburger span").css('background', '#fff');
    }
}