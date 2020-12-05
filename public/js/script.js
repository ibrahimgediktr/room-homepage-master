var toggleButton = document.querySelector('.burger-menu > i');
var nav = document.querySelector('.nav-list');
var navLinks = document.querySelectorAll('.nav-link');
var navbar = document.querySelector('.navbar')


// Navbar Scroll Animation
document.body.addEventListener('scroll', () => {
    if (document.body.scrollTop > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
})

// Nav Slide
const navSlide = () => {
    toggleButton.addEventListener('click', () => {
        // Nav Active 
        nav.classList.toggle('nav-active');
        // Toggle Button Active 
        if (toggleButton.className == 'fas fa-bars') {
            toggleButton.classList.remove('fa-bars')
            toggleButton.classList.add('fa-times')
            toggleButton.style.color = 'hsl(0, 0%, 0%)'
        } else {
            toggleButton.classList.remove('fa-times')
            toggleButton.classList.add('fa-bars')
            toggleButton.style.color = 'hsl(0, 0%, 100%)'
        }
        // Toggle Button Animation
        if (toggleButton.style.animation) {
            toggleButton.style.animation = ''
        } else {
            toggleButton.style.animation = 'toggleActive 1s ease forwards'
        }
    });
    // Nav Links Animation
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = ''
        } else {
            link.style.animation = `navLinksFade 0.5s ease forwards ${index/3+0.5}s`
        }
    })
}
navSlide();


// Header Carousel 
$(document).ready(function () {
    $('.carousel-item').eq(0).addClass('active');
    var total = $('.carousel-item').length;
    var current = 0;
    $('#move-right').on('click', function () {
        var next = current;
        current = current + 1;
        setSlide(next, current);
    });
    $('#move-left').on('click', function () {
        var prev = current;
        current = current - 1;
        setSlide(prev, current)
    });

    function setSlide(prev, next) {
        var slide = current;
        if (next > total - 1) {
            slide = 0;
            current = 0;
        }
        if (next < 0) {
            slide = total - 1;
            current = total - 1
        }
        $('.carousel-item').eq(prev).removeClass('active');
        $('.carousel-item').eq(slide).addClass('active');
        setTimeout(function () {}, 800);
    }
});


// Window Onload Resize
window.onload = showViewport;
window.onresize = showViewport;
// Carousel Control Button Align
function showViewport() {
    var carouselControlBtn = document.querySelector('.carousel-controls');
    var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if (width > 1250) {
        carouselControlBtn.style.left = '60%'
    } else if (width < 1250) {
        carouselControlBtn.style.left = 'calc(100% - 500px)'
    }
}