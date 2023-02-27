
// show nav onscroll
const myNav=document.querySelector(".header_nav")
window.addEventListener('scroll',()=>{
   if(window.scrollY>myNav.offsetHeight+150){
      myNav.classList.add("show-nav")
   }else{
      myNav.classList.remove("show-nav")
   }
})


 
//  tour slider
var swiper = new Swiper(".mySwiper", {
   slidesPerView: 4,
   spaceBetween: 20,
   autoplay:true,
   loop:true,
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },


    breakpoints: {
     
      // when window width is >= 480px
      0: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 640px
     
      640: {
         slidesPerView: 3,
         spaceBetween: 40
       },
     992: {
         slidesPerView: 4,
         spaceBetween: 40
       },
       1140: {
         slidesPerView: 5,
         spaceBetween: 40
       }
    }
     

 });

// test monial
 var swiper = new Swiper(".personSlider", {
 
   spaceBetween:10,
   autoplay:true,
   loop:true,
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },


    breakpoints: {
     
      // when window width is >= 480px
      0: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 640px
     
      640: {
         slidesPerView: 3,
         spaceBetween: 40
       },
     992: {
         slidesPerView: 4,
         spaceBetween: 40
       },
       1140: {
         slidesPerView: 6,
         spaceBetween: 40
       }
    }
     

 });















 //  const links=document.querySelectorAll(".navbar-nav a ")
  
// links.forEach((link)=>{
//    link.addEventListener("click",()=>{
//       links.forEach((btn)=>{
//          btn.classList.remove("active")
//       })
//        link.classList.add("active")
//    })
// })


// //  hide expand nav on click
// const navLinks = document.querySelectorAll('.nav-item')
// const menuToggle = document.getElementById('collapsibleNavId')
// const bsCollapse = new bootstrap.Collapse(menuToggle)
// navLinks.forEach((l) => {
//     l.addEventListener('click', () => { bsCollapse.toggle() })
// })
 