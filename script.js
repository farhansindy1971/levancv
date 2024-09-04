// Smooth Scrolling for Navbar Links
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Back to Top Button
const backToTopButton = document.createElement('button');
backToTopButton.classList.add('back-to-top', 'btn', 'btn-primary', 'position-fixed', 'bottom-0', 'end-0', 'm-4', 'd-none');
backToTopButton.innerHTML = '<i class="bi bi-arrow-up"></i>';
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTopButton.classList.remove('d-none');
    } else {
        backToTopButton.classList.add('d-none');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Sticky Navbar
const navbar = document.querySelector('.navbar');
const sticky = navbar.offsetTop;

window.addEventListener('scroll', () => {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});
