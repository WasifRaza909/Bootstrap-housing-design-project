const navbarToggler = document.querySelector('.navbar-toggler');
const navbarTogglerIcon = document.querySelector('.toggler-icon');
const body = document.querySelector('.body');
const navbar = document.querySelector('.navbar');
const navbarNav = document.querySelector('.navbar-nav');
const navbarDev = document.querySelector('.navbar-div');
const navLinks = document.querySelectorAll('.nav-link');

let navToggle = false;

navbarToggler.addEventListener('click', function () {
  if (!navToggle) {
    navToggle = true;

    navbarTogglerIcon.classList.remove('fa-bars');
    navbarTogglerIcon.classList.add('fa-times');
    navbarTogglerIcon.style.paddingBottom = '0rem';
    navbarTogglerIcon.style.marginLeft = '5rem';
    navbarTogglerIcon.style.marginBottom = '0.2rem';
    // navLinks.style.textAlign = 'center';

    body.style.opacity = 1;
  } else {
    navToggle = false;
    navbarTogglerIcon.classList.remove('fa-times');
    navbarTogglerIcon.classList.add('fa-bars');
    navbarTogglerIcon.style.marginLeft = '5rem';
    navbarTogglerIcon.style.marginBottom = '0rem';

    body.style.opacity = 1;
  }
});

// if (!navToggle) {
// }
// if (navToggle) {
//   console.log('WORLD');
// }

// navbarToggler.addEventListener('click', function () {
//   navToggle = true;
//   // navbarTogglerIcon.classList.remove('fa-bars');
//   // navbarTogglerIcon.classList.add('fa-times');
//   // navbarTogglerIcon.style.paddingBottom = '1.5rem';
//   // navbarTogglerIcon.style.paddingLeft = '5rem';
//   // navLinks.style.textAlign = 'center';

//   // navToggle = true;
// });

// if (!navToggle) {
//   navbarToggler.addEventListener('click', function () {});
// }

document.addEventListener('click', (e) => {
  const activeNavLink = document.querySelector('.active');

  if (e.target.classList.contains('nav-link')) {
    activeNavLink.classList.remove('active');
    e.target.classList.add('active');
  }
});
