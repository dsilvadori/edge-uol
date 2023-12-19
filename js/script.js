const swiperTopo = function(){
	return swiper = new Swiper('.swiper-topo', {
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
  
  swiperTopo();

  const swiperInsights = function(){
	return swiper = new Swiper('.swiper-posts', {
	  pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
	  },
	  breakpoints: {
		// when window width is >= 320px
		320: {
		  slidesPerView: 1,
		  spaceBetween: 10
		},
		// when window width is >= 640px
		640: {
		  slidesPerView: 2,
		  slidesPerGroup: 2,
		  spaceBetween: 5
		},
		// when window width is >= 992px
		992: {
		  slidesPerView: 3,
		  slidesPerGroup: 3,
		  spaceBetween: 24
		}
	  } 
	})
}
  
swiperInsights();

// Menu hamburger
var menuButton = document.getElementById("menu-button");
var menu = document.getElementById("menu");

menuButton.addEventListener("click", function() {
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});