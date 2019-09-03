$('document').ready(function(){
	var jsBtn = document.querySelector(".js-btn");
	var item = document.querySelector(".js-popubchik");

	jsBtn.onclick = function(){
		item.classList.toggle("active");
	}

	var btn_prev = document.querySelector('.btn__prev');
	var btn_next = document.querySelector('.btn__next');
	var images = document.querySelectorAll('.works__slider img');
	var buttons = document.querySelectorAll('.works__slider-item li');
	var i = 0;
	var x = 0;

	btn_prev.onclick = function () {
		images[i].className = '';
		buttons[x].className = '';
		i--;
		x--;
		if( i < 0 ){
			i = images.length -1;
		}
		if( x < 0 ){
			x = buttons.length -1;
		}
		images[i].className = 'shower';
		buttons[x].className = 'active-item';
	}
	btn_next.onclick = function () {
		images[i].className = '';
		buttons[x].className = '';
		i++;
		x++;
		if(i >= images.length){
			i = 0;
		}
		if( x >= buttons.length ){
			x = 0;
		}
		images[i].className = 'shower';
		buttons[x].className = 'active-item';
	}

	$('.contact__slider').slick({
		infinite: true,
		dots: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		prevArrow: $('.slider__btn__prev'),
		nextArrow: $('.slider__btn__next'),
		speed: 1500,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 1160,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	$('.contact__btn').click(function (e) {
		e.preventDefault();
	})
	
	$('.js-click').click(function () {
		window.scrollTo(500, 0);
	})

	window.onscroll = function() {
		var scrolled = window.pageYOffset || document.documentElement.scrollTop;
		if (scrolled > 2000){
			$('.js-click').css( "opacity", "0.7" );
		} else if (scrolled <= 2000){
			$('.js-click').css( "opacity", "0" );
		}
	}


	// $('.js-click').viewportChecker({
	// 	offset: [100 OR 10%], // The offset of the elements (let them appear earlier or later). This can also be percentage based by adding a '%' at the end
	// 	callbackFunction: function(elem, action){
	// 		$('.js-click').css( "opacity", "1" );
	// 	}, // Callback to do after a class was added to an element. Action will return "add" or "remove", depending if the class was added or removed
	// 	scrollHorizontal: false // Set to true if your website scrolls horizontal instead of vertical.
	// });
});

