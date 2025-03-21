gsap.from(".img1",{
    delay:0.4,
    opacity:0,
    duration:1,
    y:60
})
gsap.from(".img2",{
    delay:0.4,
    opacity:0,
    duration:1,
    x:60
})
gsap.from(".img3",{
    delay:0.4,
    opacity:0,
    duration:1,
    y:-60
})
gsap.from(".text",{
    delay:0.8,
    opacity:0,
    duration:1,
})
gsap.from(".text h5",{
    delay:0.8,
    opacity:0,
    duration:1,
})
gsap.from(".find",{
    delay:0.8,
    opacity:0,
    duration:1,
})
gsap.from(".items button",{
    delay:.8,
    opacity:0,
    duration:1,
})
gsap.from(".line",{
    delay:.8,
    opacity:0,
    duration:1,
})
/* this code is for slider of the text */
const swiper = new Swiper('.swiper', {
    // Optional parameters
    autoplay:{
        delay:4000,
        disableonInteraction: false,
    },
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
   
  });






