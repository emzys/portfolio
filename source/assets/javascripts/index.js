import 'bootstrap';

// $(document).scroll(function() {
//         const scrollTopVal = $(document.scrollingElement.scrollTop).toArray();

//         if (scrollTopVal[0] >= 200) {
//             $('#navbar').addClass('shadow-bg')
//         } else {
//             $('#navbar').removeClass('shadow-bg')
//         }
//     })

//     // fixes nav (closes it after clicking nav item on mobile devices)
//     $(document).click(function (event) {
//         const clickedItem = $(event.target);
//         const opened = $('.navbar-collapse').hasClass("show");
//         if (opened === true && !clickedItem.hasClass('navbar-toggler')) {
//             $(".navbar-toggler").click();
//         }
//     });
//   }
document.addEventListener('DOMContentLoaded', () => {
  const initUpdateNavbarOnScroll = () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      window.addEventListener('scroll', () => {
        if (window.scrollY >= window.innerHeight) {
          navbar.classList.add('bg-white');
        } else {
          navbar.classList.remove('bg-white');
        }
      });
    }
  };

  initUpdateNavbarOnScroll();
});
