import 'bootstrap';
import AOS from 'aos';

document.addEventListener('DOMContentLoaded', () => {
  // Adds background color on scroll
  const initUpdateNavbarOnScroll = () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      window.addEventListener('scroll', () => {
        // if (window.scrollY >= window.innerHeight)
        if (window.scrollY >= 100) {
          navbar.classList.add('bg-scroll');
        } else {
          navbar.classList.remove('bg-scroll');
        }
      });
    }
  };

  initUpdateNavbarOnScroll();

  // fixes nav (closes it after clicking nav item on mobile devices)
  const navLinks = document.querySelectorAll('.nav-link');

  if (document.body.clientWidth <= 992) {
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        document.querySelector('button.navbar-toggler').click();
      });
    });
  }

  AOS.init();

  // Z-index
  // const ztxt = new Ztextify('.navbar-brand', {
  //   depth: '30px',
  //   layers: 8,
  //   fade: true,
  //   direction: 'both',
  //   event: 'pointer',
  //   eventRotation: '35deg'
  // });
});
