$(function () {
  $('.header__slider').slick({
    fade: true,
    infinite: true,
    nextArrow:
      '<span  class="slider-arrows slider-arrows__right"><i class="fa fa-arrow-right "></i></span>',
    prevArrow:
      '<span  class="slider-arrows slider-arrows__left"><i class="fa fa-arrow-left "></i></span>',
    asNavFor: '.slider-dots',
  });

  $('.slider-dots').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.header__slider',
  });

  $('.menu-wrap').on('click', function () {
    $('.menu').toggleClass('active');
  });
  $(document).mouseup(function (e) {
    // событие клика по веб-документу
    let menu = $('.menu-wrap'); // тут указываем ID элемента
    let menuList = $('.menu');

    if (
      !menu.is(e.target) && // если клик был не по нашему блоку
      menu.has(e.target).length === 0
    ) {
      // и не по его дочерним элементам
      if(menuList.has('active')){
         menuList.removeClass('active'); 
      }
     // скрываем его
    }
  });

  $('.isla-slider').slick({
    fade: true,
    infinite: true,
    dots: true,
    adaptiveHeight: true,
    nextArrow:
      '<span  class="isla-arrows isla-arrows__right"><i class="fa fa-arrow-right "></i></span>',
    prevArrow:
      '<span  class="isla-arrows isla-arrows__left"><i class="fa fa-arrow-left "></i></span>',
  });
  let controller = new ScrollMagic.Controller();

  // create a scene
  let scene = new ScrollMagic.Scene({
    triggerElement: '#abb',
    duration: 390,
  })
    .setClassToggle('#abb', 'fade-in')
    .addTo(controller);

  let porfolioScene = new ScrollMagic.Scene({
    triggerElement: '.portfolio-title',
    duration: 390,
    triggerHook: 0.7,
  })
    .setClassToggle('.portfolio-title', 'portfolio-in')
    .addTo(controller);

  let footScene = new ScrollMagic.Scene({
    triggerElement: '.triggerFoot',
  })
    .setClassToggle('.footer-icon__img', 'foot-in')
    .addTo(controller);

  let imgScene = new ScrollMagic.Scene({
    triggerElement: '#me',
    duration: 350,
  })
    .setClassToggle('#me', 'ap-in')
    .addTo(controller);

  let pinScene = new ScrollMagic.Scene({
    triggerElement: '#skills',
    triggerHook: 0,
  })
    .setPin('#skills')
    .addTo(controller);

  let w = window.innerWidth;

  function sizeAll() {
    if (w < 500) {
      // location.reload();
      pinScene.enabled(false);
      console.log('false ');
    } else {
      console.log('true');
      // location.reload();
      pinScene.enabled(true);
    }
  }

  $(window).resize(function () {
    if (w != $(window).width()) {
      location.reload();
      return;
    }
  });

  $(window).resize(sizeAll);
  sizeAll();

  $('.exampleProject').each(function () {
    let tween = TweenMax.from($(this), 0.3, {
      autoAlpha: 0,
      scale: 0.5,
      y: '+=30',
      ease: Linear.easeNone,
    });

    let scrollScene = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 1,
    })
      .setTween(tween)
      .addTo(controller);
  });
});
