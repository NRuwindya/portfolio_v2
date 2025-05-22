 AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

(function($) {

	"use strict";

	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();



   // Burger Menu
	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){

			event.preventDefault();

			if ( $('#ftco-nav').is(':visible') ) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');	
			}

			
			
		});

	};
	burgerMenu();


	var onePageClick = function() {


		$(document).on('click', '#ftco-nav a[href^="#"]', function (event) {
	    event.preventDefault();

	    var href = $.attr(this, 'href');

	    $('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top - 70
	    }, 500, function() {
	    	// window.location.hash = href;
	    });
		});

	};

	onePageClick();
	

	var carousel = function() {
		$('.home-slider').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:false,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:1
	      },
	      1000:{
	        items:1
	      }
	    }
		});
	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	

	var counter = function() {
		
		$('#section-counter, .hero-wrap, .ftco-counter, .ftco-about').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();


	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();

	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });





})(jQuery);

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    let roleText = document.getElementById('roleText');
    let roles = ['UI/UX Designer', 'Front-end Developer', 'Web Designer'];  // Array of roles
    let currentRole = 0;  // Start with the first role
    let textIndex = 0;  // Start typing from the first character
    let interval;
    let isDeleting = false;

    function type() {
        if (!isDeleting && textIndex < roles[currentRole].length) {
            roleText.textContent += roles[currentRole].charAt(textIndex);
            textIndex++;
            interval = setTimeout(type, 100);
        } else if (isDeleting && textIndex > 0) {
            roleText.textContent = roles[currentRole].substring(0, textIndex - 1);
            textIndex--;
            interval = setTimeout(type, 50);
        } else {
            clearTimeout(interval);

            // Wait before deleting or typing again
            setTimeout(() => {
                isDeleting = !isDeleting;  // Toggle between typing and deleting
                if (isDeleting) {
                    setTimeout(type, 1000);  // Wait before starting to delete
                } else {
                    currentRole = (currentRole + 1) % roles.length;  // Cycle through roles
                    setTimeout(type, 500);  // Wait before typing the next role
                }
            }, 1000);
        }
    }

    // Start the typing animation
    type();
});


'use strict';

const config = {
    particleCount: 100,
    particlePropCount: 9,
    baseTTL: 1,
    rangeTTL: 2,
    baseSpeed: 0.001,
    rangeSpeed: 0.002,
    circularSpeed: 0.001,
    baseRadius: 2,
    rangeRadius: 3,
    baseHue: 220,
    rangeHue: 120,
    backgroundColor: '#111827',
    circleRadius: 250,
    glowStrength: 10,
    randomnessFactor: 4,
    trailLength: 10.2,
    mouseForce: 2,            // Increased mouse attraction force
    mouseRadius: 200          // Radius of mouse influence
};

let container, canvas, ctx, tick = 0, particleProps;
let mouseX = 0, mouseY = 0, isMouseOnCanvas = false;
const TAU = Math.PI * 2;

function setup() {
    createCanvas();
    resize();
    initParticles();
    draw();
}

function initParticles() {
    particleProps = new Float32Array(config.particleCount * config.particlePropCount);
    const angleIncrement = TAU / config.particleCount;

    for (let i = 0; i < config.particleCount; i++) {
        initParticle(i * config.particlePropCount, i * angleIncrement);
    }
}

function initParticle(i, angleOffset) {
    const radius = config.baseRadius + rand(config.rangeRadius);
    const hue = config.baseHue + rand(config.rangeHue);
    
    particleProps.set([
        Math.cos(angleOffset) * config.circleRadius + canvas.a.width / 2,
        Math.sin(angleOffset) * config.circleRadius + canvas.a.height / 2,
        0, 0, 0,
        config.baseTTL + rand(config.rangeTTL),
        config.baseSpeed + rand(config.rangeSpeed),
        radius, hue
    ], i);
}

function drawParticles() {
    const centerX = canvas.a.width / 2;
    const centerY = canvas.a.height / 2;

    for (let i = 0; i < config.particleCount * config.particlePropCount; i += config.particlePropCount) {
        updateParticle(i, centerX, centerY);
    }
}

function updateParticle(i, centerX, centerY) {
    const angle = tick * config.circularSpeed + (i / config.particlePropCount) * TAU / config.particleCount;
    const scatterX = Math.sin(tick * 0.05 + i) * 10 * config.randomnessFactor;
    const scatterY = Math.cos(tick * 0.05 + i) * 10 * config.randomnessFactor;

    // Calculate the default circular position
    let x = Math.cos(angle) * config.circleRadius + centerX + scatterX;
    let y = Math.sin(angle) * config.circleRadius + centerY + scatterY;

    // Apply mouse interaction if mouse is on canvas
    if (isMouseOnCanvas) {
        const dx = mouseX - x;
        const dy = mouseY - y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < config.mouseRadius) {
            const force = (1 - distance / config.mouseRadius) * config.mouseForce;
            x += dx * force;
            y += dy * force;
        }
    }

    // Update particle position
    particleProps[i] = x;
    particleProps[i + 1] = y;

    // Draw the particle
    drawParticle(x, y, particleProps[i + 7], particleProps[i + 8]);
}

function drawParticle(x, y, radius, hue) {
    ctx.a.save();
    ctx.a.fillStyle = `hsla(${hue},100%,60%,${config.trailLength})`;
    ctx.a.beginPath();
    ctx.a.arc(x, y, radius, 0, TAU);
    ctx.a.fill();
    ctx.a.restore();
}

function createCanvas() {
    container = document.querySelector('.content--canvas');
    canvas = { a: document.createElement('canvas'), b: document.createElement('canvas') };
    ctx = { a: canvas.a.getContext('2d'), b: canvas.b.getContext('2d') };
    container.appendChild(canvas.a);
    container.appendChild(canvas.b);
    canvas.a.style.position = 'absolute';
    canvas.a.style.top = 0;
    canvas.a.style.left = 0;

    canvas.a.addEventListener('mousemove', mouseHandler);
    canvas.a.addEventListener('mouseenter', () => {
        isMouseOnCanvas = true;
    });
    canvas.a.addEventListener('mouseleave', () => {
        isMouseOnCanvas = false;
    });
}

function mouseHandler(e) {
    [mouseX, mouseY] = [e.clientX, e.clientY];
}

function resize() {
    const { innerWidth, innerHeight } = window;
    [canvas.a.width, canvas.a.height] = [innerWidth, innerHeight];
    [canvas.b.width, canvas.b.height] = [innerWidth, innerHeight];
    ctx.a.clearRect(0, 0, innerWidth, innerHeight);
    ctx.b.clearRect(0, 0, innerWidth, innerHeight);
}

function renderGlow() {
    const blur1 = `blur(${config.glowStrength}px) brightness(200%)`;
    const blur2 = `blur(${config.glowStrength / 2}px) brightness(200%)`;
    
    ctx.b.save();
    ctx.b.filter = blur1;
    ctx.b.globalCompositeOperation = 'lighter';
    ctx.b.drawImage(canvas.a, 0, 0);
    ctx.b.restore();

    ctx.b.save();
    ctx.b.filter = blur2;
    ctx.b.globalCompositeOperation = 'lighter';
    ctx.b.drawImage(canvas.a, 0, 0);
    ctx.b.restore();
}

function renderToScreen() {
    ctx.b.save();
    ctx.b.globalCompositeOperation = 'lighter';
    ctx.b.drawImage(canvas.a, 0, 0);
    ctx.b.restore();
}

function draw() {
    tick++;
    ctx.a.clearRect(0, 0, canvas.a.width, canvas.a.height);
    ctx.b.fillStyle = config.backgroundColor;
    ctx.b.fillRect(0, 0, canvas.a.width, canvas.a.height);

    drawParticles();
    renderGlow();
    renderToScreen();
    requestAnimationFrame(draw);
}

window.addEventListener('load', setup);
window.addEventListener('resize', resize);

function rand(n) {
    return Math.random() * n;
}
