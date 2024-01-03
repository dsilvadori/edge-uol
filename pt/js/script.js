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


  const swiperOQF = function(){
	return swiper = new Swiper('.swiper-oqf', {
	  // Default parameters
	  loop: true,
	  slidesPerView: 1,
	  spaceBetween: 24,
	  navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	  },
	  pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
	  }, 
	})
  }
  
  swiperOQF();

  const swiperInsights = function(){
	return swiper = new Swiper('.swiper-posts', {
	  loop: true,
	  pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
	  },
	  navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	  },	  
	  breakpoints: {
		// when window width is >= 320px
		320: {
		  slidesPerView: 1.3,
		  slidesPerGroup: 1,
		  spaceBetween: 24
		},
		// when window width is >= 640px
		640: {
		  slidesPerView: 2.4,
		  slidesPerGroup: 2,
		  spaceBetween: 24
		},
		// when window width is >= 992px
		992: {
		  slidesPerView: 3.02,
		  slidesPerGroup: 3,
		  spaceBetween: 24
		}
	  } 
	})
}
  
swiperInsights();

const swiperDnaCards = function(){
	return swiper = new Swiper('.swiper-dna', {
	  loop: true,
	  pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
	  },
	  navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	  },
	  breakpoints: {
		// when window width is >= 320px
		320: {
		  slidesPerView: 1,
		  slidesPerGroup: 1,
		  spaceBetween: 10
		},
		// when window width is >= 640px
		640: {
		  slidesPerView: 2,
		  slidesPerGroup: 2,
		  spaceBetween: 24
		},
		// when window width is >= 992px
		992: {
		  slidesPerView: 4,
		  slidesPerGroup: 4,
		  spaceBetween: 24
		}
	  } 
	})
}

swiperDnaCards();

const swiperProdutos = function(){
	return swiper = new Swiper('.swiper-produtos', {
	  loop: true,
	  pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
	  },
	  navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	  },	  
	  breakpoints: {
		// when window width is >= 320px
		320: {
		  slidesPerView: 1.3,
		  slidesPerGroup: 1,
		  spaceBetween: 24
		},
		// when window width is >= 640px
		640: {
		  slidesPerView: 3.4,
		  slidesPerGroup: 3,
		  spaceBetween: 24
		},
		// when window width is >= 992px
		992: {
		  slidesPerView: 6,
		  slidesPerGroup: 6,
		  spaceBetween: 24
		}
	  } 
	})
}
  
swiperProdutos();

// Menu hamburger
var menuButton = document.querySelector("#menu-button img");
var menu = document.getElementById("menu");

menuButton.addEventListener("click", function() {
  if (menu.style.display === "flex") {
    menu.style.display = "none";
	menuButton.src = "../img/icon-open-menu.f2cee984.svg";
  } else {
    menu.style.display = "flex";
	menuButton.src = "../img/icon-close-menu.d3296239.svg"
  }
});

function verMais() {
	var x = document.querySelector(".cards-benef-mobile");
	var btn = document.getElementById("btn-ver-mais");
	if (x.style.display === "none") {
	  x.style.display = "block";
	  btn.innerHTML='Ver menos benefícios' + '<img src="../img/navigation-contract.f8fbcffa.svg" alt="" style="transform: rotate(0);">';
	} else {
	  x.style.display = "none";
	  btn.innerHTML='Ver mais benefícios' + '<img src="../img/navigation-contract.f8fbcffa.svg" alt="">';
	}
}

function verMaisPlat() {
	var x = document.querySelector(".cards-plat-mobile");
	var btn = document.getElementById("btn-ver-mais");
	if (x.style.display === "none") {
	  x.style.display = "block";
	  btn.innerHTML='Ver menos benefícios' + '<img src="../img/navigation-contract.f8fbcffa.svg" alt="" style="transform: rotate(0);">';
	} else {
	  x.style.display = "none";
	  btn.innerHTML='Ver mais benefícios' + '<img src="../img/navigation-contract.f8fbcffa.svg" alt="">';
	}
}
