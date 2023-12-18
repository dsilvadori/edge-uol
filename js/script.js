const swiper = function(){
	return swiper = new Swiper('.swiper', {
	  // Default parameters
	  slidesPerView: 1,
      fadeEffect: { crossFade: true },
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
        },
        effect: "fade",
	  pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
	  }, 
	})
  }
  
  swiper();