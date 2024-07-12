/**
* Template Name: Company
* Updated: Mar 10 2023 with Bootstrap v5.2.3
* Template URL: https://bootstrapmade.com/company-free-html-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Hero carousel indicators
   */
  let heroCarouselIndicators = select("#hero-carousel-indicators")
  let heroCarouselItems = select('#heroCarousel .carousel-item', true)

  heroCarouselItems.forEach((item, index) => {
    (index === 0) ?
    heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "' class='active'></li>":
      heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "'></li>"
  });

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

})()

// ================ For Product Catalogue ============

// $(document).ready(function() {
//     $('#list').click(function(event){event.preventDefault();$('#products .item').addClass('list-group-item');});
//     $('#grid').click(function(event){event.preventDefault();$('#products .item').removeClass('list-group-item');$('#products .item').addClass('grid-group-item');});
// });

// <script>
    function superFeed(title, description) {
      $('#detailsModalLabel').text('Super Feed' +"");
      $('#detailsModalDescription').html(
        '<img class="card-img-top" src="static/img/portfolio/superFeed.png" alt="DCP">' +
        '<p><strong>Product Title: </strong>' + title + '</p>' +
        '<p>' + description + '</p>' +
        '<p><strong>Super Feed Composition:</strong></p>' +
        '<table class="table table-bordered table-striped">' +
        '<tr><th>Mineral</th><th>Amount</th></tr>' +
        '<tr><td>Nitrogen</td><td>19%</td></tr>' +
        '<tr><td>Nitrate Nitrogen (N-N02)</td><td>5.5%</td></tr>' +
        '<tr><td>Ammonical Nitrogen (N-NH4)</td><td>3.5%</td></tr>' +
        '<tr><td>Urea Nitrogen</td><td>10%</td></tr>' +
        '<tr><td>Phosphorus(P2O5)</td><td>19%</td></tr>' +
        '<tr><td>Potassium(K20)</td><td>19%</td></tr>' +
        '<tr><td>Iron (Fe)</td><td>500ppm</td></tr>' +
        '<tr><td>Manganese</td><td>250ppm</td></tr>' +
        '<tr><td>Boron (B)</td><td>100ppm</td></tr>' +
        '<tr><td>Zinc (Zn)</td><td>75ppm</td></tr>' +
        '<tr><td>Copper (Cu)</td><td>55ppm</td></tr>' +
        '<tr><td>Molybdenum (Mo)</td><td>35ppm</td></tr>' +
        '</table>' +
        '<p><strong>Super Feed Benefits:</strong></p>' +
        '<ul>' +
        '<li>It encourages leaf growth by synthensizing more green pigment called chlorophyl</li>' +
        '<li>Promotes healthy flowering</li>' +
        '<li>Promotes development of healthy fruits</li>' +
        '<li>Phosphorus in NPK fertilizers promotes root development, which helps plants better absorb water and nutrients from the soil, leading to healthier plants</li>' + 
        '<li>Potassium in NPK fertilizers helps plants become more resistant to stress, such as drought or extreme temperatures, leading to a healthier and more productive crop</li>' + 
        '</ul>'+
        '<img class="card-img-top" src="static/img/portfolio/sFeedDemo.png" alt="DCP">'+
        '<p><strong>How to Use Super Feed</strong></p>'+
        '<table class="table table-bordered table-striped">' +
        '<tr><th>Crop</th><th>GMS/20 Ltr WATER</th><th>INTERVALS</th></tr>' +
        '<tr><td>Vegetables</td><td>30-40</td><td>Every 2 Weeks</td></tr>' +
        '<tr><td>Coffee</td><td>60-80</td><td>Every 3-4 Weeks 4-8 Application</td></tr>' +
        '<tr><td>Cereals</td><td>100-120</td><td>Once at 3-5 Leaf Stage at once at booting</td></tr>' +
        '<tr><td>Cotton</td><td>100-120</td><td>Every 2-3 weeks 3-5 application</td></tr>' +
        '<tr><td>Fruits</td><td>70-80</td><td>Every 2-3 Weeks</td></tr>' +
        '<tr><td>Ornaments</td><td>30-40</td><td>Every 2 Weeks</td></tr>' +
        '</table>' 
      );
      
      // $('.card-text').not(':contains(' + title + ')').slideUp();
      $('.card-text:contains(' + title + ')').slideDown();
      
      $('#detailsModal').modal('show');
    }

function milkBooster(title, description) {
  $('#detailsModalLabel').text('Milk Booster' + "");
  $('#detailsModalDescription').html(
    '<img class="card-img-top" src="static/img/portfolio/milkBooster.png" alt="Milk Booster">' +
    // '<p><strong>Product Title:</strong> ' + title + '</p>' +
    '<p>' + description + '</p>' +
    '<img class="card-img-top" src="static/img/portfolio/cow.png" alt="Milk Booster">' +
    '<p><strong>Milk Booster Composition:</strong></p>' +
    '<table class="table table-bordered table-striped">' +
    '<tr><th>Mineral</th><th>Amount</th></tr>' +
    '<tr><td>Nitrogen</td><td>19%</td></tr>' +
    '<tr><td>Nitrate Nitrogen (N-N02)</td><td>5.5%</td></tr>' +
    '<tr><td>Ammonical Nitrogen (N-NH4)</td><td>3.5%</td></tr>' +
    '<tr><td>Urea Nitrogen</td><td>10%</td></tr>' +
    '<tr><td>Phosphorus(P2O5)</td><td>19%</td></tr>' +
    '<tr><td>Potassium(K20)</td><td>19%</td></tr>' +
    '<tr><td>Iron (Fe)</td><td>500ppm</td></tr>' +
    '<tr><td>Manganese</td><td>250ppm</td></tr>' +
    '<tr><td>Boron (B)</td><td>100ppm</td></tr>' +
    '<tr><td>Zinc (Zn)</td><td>75ppm</td></tr>' +
    '<tr><td>Copper (Cu)</td><td>55ppm</td></tr>' +
    '<tr><td>Molybdenum (Mo)</td><td>35ppm</td></tr>' +
    '</table>' +
    '<p><strong>Benefits of Milk Booster:</strong></p>' +
    '<ul>' +
    '<li>Increase milk production</li>' +
    '<li>Prevent fever and premature birth</li>' +
    '<li>Strengthening of animal bones</li>' +
    '<li>Improval of feathers</li>' +
    '<li>Improve growth and prevent stagnation</li>' +
    '<li>Contain Vitamin for nourishment of udders</li>' +
    '</ul>'+
    '<p><strong>How to Use Milk Booster</strong></p>'+
    '<p>For a cow that is being milked should be supplemented with 70gm which is equivalent to 7 food spoons every day.A bull should be given 4 food spoon equivalent to 40mg every day.A Calf should be given 3 food spoon equivalent to 30gm every day</p>'
  );

  // $('.card-text').not(':contains(' + title + ')').slideUp();
  $('.card-text:contains(' + title + ')').slideDown();

  $('#detailsModal').modal({
    backdrop: true,
    keyboard: true,
    show: true,
    backdrop: 'static'
  });

  $('.modal-backdrop').addClass('modal-background');
}

function pigBoost(title, description) {
  $('#detailsModalLabel').text('PigBoost' + "");
  $('#detailsModalDescription').html(
    '<img class="card-img-top" src="static/img/portfolio/pigBoost.png" alt="Milk Booster">' +
    // '<p><strong>Product Title:</strong> ' + title + '</p>' +
    '<p>' + description + '</p>' +
    '<p><strong>PigBoost Composition:</strong></p>' +
    '<table class="table table-bordered table-striped">' +
    '<tr><th>Mineral</th><th>Amount</th></tr>' +
    '<tr><td>Calcium</td><td>35%</td></tr>' +
    '<tr><td>Phosphorus</td><td>12%</td></tr>' +
    '<tr><td>Salt</td><td>11%</td></tr>' +
    '<tr><td>Iron</td><td>4.5g/kg%</td></tr>' +
    '<tr><td>Copper</td><td>1.0g/Kg%</td></tr>' +
    '<tr><td>Manganese</td><td>8.0g/Kg%</td></tr>' +
    '<tr><td>Zinc</td><td>10.0g/Kg%</td></tr>' +
    '<tr><td>Iodine</td><td>0.15g/Kg%</td></tr>' +
    '<tr><td>Selenium</td><td>0.02g/Kg%</td></tr>' +
    '<tr><td>Nicotinic Acid</td><td>1.5g/Kg%</td></tr>' +
    '<tr><td>Pantothenic Acid</td><td>1.0g/Kg%</td></tr>' +
    '<tr><td>Lysine</td><td>500mg</td></tr>' +
    '<tr><td>Methionine</td><td>500mg</td></tr>' +
    '</table>' +
    '<p><strong>Benefits of PigBoost Extra:</strong></p>' +
    '<ul>' +
    '<li>Increases the weight of pigs rapidly</li>' +
    '<li>Fastening the growth rate of pigs</li>' +
    '<li>Promotes stability and reduce bones fatigue</li>' +
    '<li>Promotes appetite and prevents metabolic stress</li>' +
    '<li>Has high level of olaquindox,Lysine and Methionine</li>' +
    '</ul>'+
    '<img class="card-img-top" src="static/img/portfolio/P.jpg" alt="Milk Booster">' +
    '<p><strong>How to Use PigBoost</strong></p>'+
    '<p>Add 1kg of PigBoost to 100kg of food supplements or equivalent of 10kg  to 1000kg (1tonne)</p>'
  );

  // $('.card-text').not(':contains(' + title + ')').slideUp();
  $('.card-text:contains(' + title + ')').slideDown();

  $('#detailsModal').modal({
    backdrop: true,
    keyboard: true,
    show: true,
    backdrop: 'static'
  });

  $('.modal-backdrop').addClass('modal-background');
}

function layersExtra(title, description) {
  $('#detailsModalLabel').text('Layers Extra & Growers Premix' + "");
  $('#detailsModalDescription').html(
    '<img class="card-img-top" src="static/img/portfolio/lyrXtr.png" alt="Milk Booster">' +
    '<p><strong>Product Title:</strong> ' + title + '</p>' +
    '<p>' + description + '</p>' +
    '<p><strong>Layers Extra & Growers Premix Composition:</strong></p>' +
    '<table class="table table-bordered table-striped">' +
    '<tr><th>Mineral</th><th>Amount</th></tr>' +
    '<tr><td>Vitamin A</td><td>1,000,000 IU</td></tr>' +
    '<tr><td>Vitamin D3</td><td>4,000,000 IU</td></tr>' +
    '<tr><td>Vitamin E</td><td>1200 IU</td></tr>' +
    '<tr><td>Vitamin K</td><td>300MG</td></tr>' +
    '<tr><td>Vitamin B1</td><td>320MG</td></tr>' +
    '<tr><td>Vitamin B2</td><td>8.0g/Kg%</td></tr>' +
    '<tr><td>Vitamin B12</td><td>650MCG</td></tr>' +
    '<tr><td>Calcium</td><td>36%</td></tr>' +
    '<tr><td>Phosphorous</td><td>10%</td></tr>' +
    '<tr><td>Salt</td><td>3%</td></tr>' +
    '<tr><td>Lysine</td><td>500mg</td></tr>' +
    '<tr><td>Methionine</td><td>500mg</td></tr>' +
    '</table>' +
    '<p><strong>Layers Extra & Growers Premix Benefits:</strong></p>' +
    '<ul>' +
    '<li>Strengthening bones and prevents deformation</li>' +
    '<li>Prevents poultry diseases and infections</li>' +
    '<li>Prevents fragility and brittleness of eggs</li>' +
    '<li>Provides large size of eggs with yellow yolk</li>' +
    '</ul>'+
    '<img class="card-img-top" src="static/img/portfolio/layers.jpg" alt="DCP">' +
    '<p><strong>How to Use Layers Extra & Growers Premix</strong></p>'+
    '<p>1kg of Layers Extra & Growers Premix is mixed with 100kg of poultry food. 2kg of Layers Extra & Growers Premix is mixed with 200kg of poultry food</p>'
  );

  // $('.card-text').not(':contains(' + title + ')').slideUp();
  $('.card-text:contains(' + title + ')').slideDown();

  $('#detailsModal').modal({
    backdrop: true,
    keyboard: true,
    show: true,
    backdrop: 'static'
  });

  $('.modal-backdrop').addClass('modal-background');
}

function boosterExtraSuper(title, description) {
  $('#detailsModalLabel').text('Booster Extra Super K' + "");
  $('#detailsModalDescription').html(
    '<img class="card-img-top" src="static/img/portfolio/superK.png" alt="Milk Booster">' +
    // '<p><strong>Product Title:</strong> ' + title + '</p>' +
    '<p>' + description + '</p>' +
    '<img class="card-img-top" src="static/img/portfolio/K.jpg" alt="Milk Booster">' +
    '<p></p>'+
    '<p style="color:green;"><strong>Booster Extra Super K Composition:</strong></p>' +
    '<table class="table table-bordered table-striped">' +
    '<tr><th>Mineral</th><th>Amount</th></tr>' +
    '<tr><td>Nitrogen (N)</td><td>23%</td></tr>' +
    '<tr><td>Phosphorus</td><td>4%</td></tr>' +
    '<tr><td>Potassium (K)</td><td>36%</td></tr>' +
    '</table>' +
    '<p style="color:green;"><strong>Booster Extra Super K Premix Benefits:</strong></p>' +
    '<ul>' +
    '<li>Increases the quality of products in terms of size,color,volume and flavour</li>' +
    '<li>Improves the soil and convert the exhausted land to a fertile land</li>' +
    '<li>It improves the growth rate of plants and prevents it from insects and infections</li>' +
    '<li>Rich in nutrients which maximize the efficiency of usage</li>' +
    '<li>Promotes the greenish by stimulate more chlorophyl synthesis</li>'+
    '</ul>'+
    '<p style="color:green;"><strong>Booster Extra Super K Instructions</strong></p>'+
    '<table class="table table-bordered table-striped">' +
    '<tr><th>Crops</th><th>Amount</th><th>Amount/20Lt</th><th>Duration</th></tr>' +
    '<tr><td>Tomatoes</td><td>1.0 Lt/Acre</td><td>20ml-30ml</td><td>14 Days</td></tr>' +
    '<tr><td>Coffee</td><td>2.0 Lt/Acre</td><td>50ml</td><td>14 Days</td></tr>' +
    '<tr><td>Fruits</td><td>1.0 Lt/Acre</td><td>20ml-30ml</td><td>14 Days</td></tr>' +
    '<tr><td>Onions</td><td>2.0 Lt/Acre</td><td>50ml</td><td>14 Days</td></tr>' +
    '<tr><td>Vegetables</td><td>1.0 Lt/Acre</td><td>20ml-30ml</td><td>14 Days</td></tr>' +
    '<tr><td>Mangoes</td><td>2.5 Lt/Acre</td><td>50ml</td><td>14 Days</td></tr>' +
    '<tr><td>Maize</td><td>1.0 Lt/Acre</td><td>20ml-30ml</td><td>14 Days</td></tr>' +
    '<tr><td>Flowers</td><td>1.0 Lt/Acre</td><td>20ml-30ml</td><td>14 Days</td></tr>' +
    '<tr><td>Potatoes</td><td>1.0 Lt/Acre</td><td>20ml-30ml</td><td>14 Days</td></tr>' +
    '<tr><td>Carrots</td><td>1.0 Lt/Acre</td><td>20ml-30ml</td><td>14 Days</td></tr>' +
    '<tr><td>Rice</td><td>1.0 Lt/Acre</td><td>20ml-30ml</td><td>14 Days</td></tr>' +
    '<tr><td>Beans</td><td>1.0 Lt/Acre</td><td>20ml-30ml</td><td>14 Days</td></tr>' +
    '<tr><td>Water Melons</td><td>1.0 Lt/Acre</td><td>20ml-30ml</td><td>14 Days</td></tr>' +
    '</table>' +
    '<p><strong>Note: </strong>Spray crops to the growing crops achieves better results when you followed above instruction carefully. Can be sprayed even four times</p>'
  );

  // $('.card-text').not(':contains(' + title + ')').slideUp();
  $('.card-text:contains(' + title + ')').slideDown();

  $('#detailsModal').modal({
    backdrop: true,
    keyboard: true,
    show: true,
    backdrop: 'static'
  });

  $('.modal-backdrop').addClass('modal-background');
}

function boosterExtraKijani(title, description) {
  $('#detailsModalLabel').text('Booster Extra Kijani' + "");
  $('#detailsModalDescription').html(
    '<img class="card-img-top" src="static/img/portfolio/extraKijani.png" alt="Milk Booster">' +
    // '<p><strong>Product Title:</strong> ' + title + '</p>' +
    '<p>' + description + '</p>' +
    '<p>Available in 1/2Litre,1Litre and 5Litres respectively</p>'+
    '<img class="card-img-top" src="static/img/portfolio/One.jpg" alt="Milk Booster">' +
    '<p></p>'+
    '<p style="color:green;"><strong>Booster Extra Kijani Composition:</strong></p>' +
    '<table class="table table-bordered table-striped">' +
    '<tr><th>Mineral</th><th>Amount</th></tr>' +
    '<tr><td>Nitrogen (N)</td><td>31%</td></tr>' +
    '<tr><td>Phosphorus</td><td>14%</td></tr>' +
    '<tr><td>Potassium (K)</td><td>6%</td></tr>' +
    '</table>' +
    '<p style="color:green;"><strong>Booster Extra Kijani Benefits:</strong></p>' +
    '<ul>' +
    '<li>Increases the quality of products in terms of size,color,volume and flavour</li>' +
    '<li>Improves the soil and convert the exhausted land to a fertile land</li>' +
    '<li>It improves the growth rate of plants and prevents it from insects and infections</li>' +
    '<li>Rich in nutrients which maximize the efficiency of usage</li>' +
    '<li>Promotes the greenish by stimulate more chlorophyl synthesis</li>'+
    '</ul>'+
    '<p style="color:green;"><strong>Booster Extra Kijani Instructions</strong></p>'+
    '<table class="table table-bordered table-striped">' +
    '<tr><th>Crops</th><th>Amount</th><th>Amount/20Lt</th><th>Duration</th></tr>' +
    '<tr><td>Tomatoes</td><td>1.0 Lt/Acre</td><td>50ml-60ml</td><td>14 Days</td></tr>' +
    '<tr><td>Coffee</td><td>2.0 Lt/Acre</td><td>80ml</td><td>14 Days</td></tr>' +
    '<tr><td>Fruits</td><td>2.0 Lt/Acre</td><td>50ml</td><td>14 Days</td></tr>' +
    '<tr><td>Onions</td><td>1.0 Lt/Acre</td><td>30ml-50ml</td><td>14 Days</td></tr>' +
    '<tr><td>Vegetables</td><td>1.0 Lt/Acre</td><td>50ml-60ml</td><td>14 Days</td></tr>' +
    '<tr><td>Mangoes</td><td>2.5 Lt/Acre</td><td>50ml</td><td>14 Days</td></tr>' +
    '<tr><td>Maize/Wheat</td><td>1.0 Lt/Acre</td><td>50ml-60ml</td><td>14 Days</td></tr>' +
    '<tr><td>Flowers</td><td>1.0 Lt/Acre</td><td>50ml-60ml</td><td>14 Days</td></tr>' +
    '<tr><td>Potatoes</td><td>1.0 Lt/Acre</td><td>80ml</td><td>14 Days</td></tr>' +
    '<tr><td>Carrots</td><td>1.0 Lt/Acre</td><td>50ml-60ml</td><td>14 Days</td></tr>' +
    '<tr><td>Rice</td><td>1.0 Lt/Acre</td><td>50ml-60ml</td><td>14 Days</td></tr>' +
    '<tr><td>Beans</td><td>1.0 Lt/Acre</td><td>50ml-60ml</td><td>14 Days</td></tr>' +
    '<tr><td>Water Melons</td><td>1.0 Lt/Acre</td><td>50ml-60ml</td><td>14 Days</td></tr>' +
    '</table>' 
);

  // $('.card-text').not(':contains(' + title + ')').slideUp();
  $('.card-text:contains(' + title + ')').slideDown();

  $('#detailsModal').modal({
    backdrop: true,
    keyboard: true,
    show: true,
    backdrop: 'static'
  });

  $('.modal-backdrop').addClass('modal-background');
}

function magicPigBoost(title, description) {
  $('#detailsModalLabel').text('Magic Pig Boost' + "");
  $('#detailsModalDescription').html(
    '<img class="card-img-top" src="static/img/portfolio/magicPig.png" alt="Milk Booster">' +
    '<p><strong>Product Title:</strong> ' + title + '</p>' +
    '<p>' + description + '</p>' +
    '<p><strong>Magic Pig Boost Composition:</strong></p>' +
    '<table class="table table-bordered table-striped">' +
    '<tr><th>Mineral</th><th>Amount</th></tr>' +
    '<tr><td>Sodium Chloride</td><td>6%</td></tr>' +
    '<tr><td>Magnesium</td><td>6%</td></tr>' +
    '<tr><td>Fluorine</td><td>0.2MG</td></tr>' +
    '<tr><td>Vitamin A</td><td>15000000 IU</td></tr>' +
    '<tr><td>Vitamin D3</td><td>240000 IU</td></tr>' +
    '<tr><td>Vitamin E</td><td>4000 IU</td></tr>' +
    '<tr><td>Cobalt</td><td>0.18%</td></tr>' +
    '<tr><td>Copper</td><td>0.3%</td></tr>' +
    '<tr><td>Iodine</td><td>200MG</td></tr>' +
    '<tr><td>Iron</td><td>12000MG</td></tr>' +
    '<tr><td>Selenium</td><td>0.04%</td></tr>' +
    '<tr><td>Zinc</td><td>300MG</td></tr>' +
    '<tr><td>Yeast</td><td>400 MG</td></tr>' +
    '<tr><td>Mycotoxin Inhibitor</td><td>100MG</td></tr>' +
    '<tr><td>Antioxidant</td><td>150 MG</td></tr>' +
    '<tr><td>Protein</td><td>10%</td></tr>' +
    '<tr><td>Enzymes</td><td>5%</td></tr>' +
    '<tr><td>Methonine</td><td>9000 GM</td></tr>' +
    '<tr><td>Lysine</td><td>2400 GM</td></tr>' +
    '<tr><td>Vitamin C</td><td>200000 IU</td></tr>' +
    '</table>' +
    '<p><strong>Magic Pig Boost Benefits:</strong></p>' +
    '<ul>' +
    '<li>Magic Pig Boost nourishes the health of pigs</li>' +
    '<li>Kupata joto kwa haraka</li>' +
    '<li>Adds important minerals zinc,iron and Magnesium</li>' +
    '<li>Provides a balanced diet and improves appetite</li>' +
    '<li>Prevents the metabolic stress for both piglet and pigs</li>' +
    '</ul>'+
    '<img class="card-img-top" src="static/img/portfolio/magic.jpg" alt="DCP">' +
    '<p><strong>How to Use Magic Pig Boost</strong></p>'+
    '<p>Mix 20 gm of magic pig boost in 20 Litres of clean water every day</p>'
  );

  // $('.card-text').not(':contains(' + title + ')').slideUp();
  $('.card-text:contains(' + title + ')').slideDown();

  $('#detailsModal').modal({
    backdrop: true,
    keyboard: true,
    show: true,
    backdrop: 'static'
  });

  $('.modal-backdrop').addClass('modal-background');
}

function broilerExtra(title, description) {
  $('#detailsModalLabel').text('Broiler Extra and Chick Premix' + "");
  $('#detailsModalDescription').html(
    '<img class="card-img-top" src="static/img/portfolio/broilerPremix.png" alt="Milk Booster">' +
    '<p><strong>Product Title:</strong> ' + title + '</p>' +
    '<p>' + description + '</p>' +
    '<p><strong>Broiler Extra and Chick Premix Composition:</strong></p>' +
    '<table class="table table-bordered table-striped">' +
    '<tr><th>Mineral</th><th>Amount</th></tr>' +
    '<tr><td>Vitamin A</td><td>5,000,000 IU</td></tr>' +
    '<tr><td>Vitamin D3</td><td>4,500,000 IU</td></tr>' +
    '<tr><td>Vitamin E</td><td>500 IU</td></tr>' +
    '<tr><td>Vitamin K</td><td>2000 mg</td></tr>' +
    '<tr><td>Vitamin B1</td><td>200 MG</td></tr>' +
    '<tr><td>Vitamin B2</td><td>350 MG</td></tr>' +
    '<tr><td>Vitamin B12</td><td>800 MCG</td></tr>' +
    '<tr><td>Calcium</td><td>30%</td></tr>' +
    '<tr><td>Phosphorous</td><td>8%</td></tr>' +
    '<tr><td>Salt</td><td>4%</td></tr>' +
    '<tr><td>Enzyme</td><td>5%</td></tr>' +
    '<tr><td>Lysine</td><td>5%</td></tr>' +
    '<tr><td>Methionine</td><td>5%</td></tr>' +
    '<tr><td>Olaquindox</td><td>15%</td></tr>' +
    '</table>' +
    '<p><strong>Broiler Extra and Chick Premix Benefits:</strong></p>' +
    '<ul>' +
    '<li>High content of Calcium improves bones</li>' +
    '<li>Kupata joto kwa haraka</li>' +
    '<li>prevents poultry diseases and infections</li>' +
    '<li>Increases weight and speed up growth rate</li>' +
    '<li>Prevents disabilities in poultry</li>' +
    '</ul>'+
    '<img class="card-img-top" src="static/img/portfolio/broiler.jpg" alt="Broiler">' +
    '<p><strong>How to Use Broiler Extra and Chick Premix</strong></p>'+
    '<p>Use 1kg of broiler premix to 100kg of food or 2kg of broiler premix to 200kg of food</p>'
  );

  // $('.card-text').not(':contains(' + title + ')').slideUp();
  $('.card-text:contains(' + title + ')').slideDown();

  $('#detailsModal').modal({
    backdrop: true,
    keyboard: true,
    show: true,
    backdrop: 'static'
  });

  $('.modal-backdrop').addClass('modal-background');
}

function broExtra(title, description) {
  $('#detailsModalLabel').text('Bro Extra' + "");
  $('#detailsModalDescription').html(
    '<img class="card-img-top" src="static/img/portfolio/broExtra.png" alt="Milk Booster">' +
    '<p><strong>Product Title:</strong> ' + title + '</p>' +
    '<p>' + description + '</p>' +
    '<p><strong>Bro Extra Composition:</strong></p>' +
    '<table class="table table-bordered table-striped">' +
    '<tr><th>Mineral</th><th>Amount</th></tr>' +
    '<tr><td>Vitamin A</td><td>5,500,000 IU</td></tr>' +
    '<tr><td>Vitamin D3</td><td>5100,000 IU</td></tr>' +
    '<tr><td>Vitamin E</td><td>2000 IU</td></tr>' +
    '<tr><td>Vitamin B12</td><td>2000 mg</td></tr>' +
    '<tr><td>Vitamin B1</td><td>16 MG</td></tr>' +
    '<tr><td>Riboflavin</td><td>2600 MG</td></tr>' +
    '<tr><td>Calcium Pantothenic Acid</td><td>10000 Mg</td></tr>' +
    '<tr><td>Niacin</td><td>30000 Mg</td></tr>' +
    '</table>' +
    '<p><strong>Bro Extra Benefits:</strong></p>' +
    '<ul>' +
    '<li>Achieves faster growth</li>' +
    '<li>Increases the weight in broilers</li>' +
    '<li>Increases appetite in broilers</li>' +
    '<li>Stimulate the metabolism</li>' +
    '<li>Achieves better absorption of food through the digestion system</li>' +
    '</ul>'+
    '<p><img class="card-img-top" src="static/img/portfolio/broiler.jpg" alt="DCP"></p>'+
    '<p><strong>How to Use Bro Extra</strong></p>'+
    '<p>Add 10g Bro Extra per 10 litres of drinking water continiously.</p>'+
    '<p><strong>Note: </strong>Store in a cool dry place (15-25 centigrade)</p>'
  );

  // $('.card-text').not(':contains(' + title + ')').slideUp();
  $('.card-text:contains(' + title + ')').slideDown();

  $('#detailsModal').modal({
    backdrop: true,
    keyboard: true,
    show: true,
    backdrop: 'static'
  });

  $('.modal-backdrop').addClass('modal-background');
}


function epsomSalt(title, description) {
  $('#detailsModalLabel').text('Epsom Salt' + "");
  $('#detailsModalDescription').html(
    '<img class="card-img-top" src="static/img/portfolio/epsomSalt.png" alt="Milk Booster">' +
    '<p><strong>Product Title:</strong> ' + title + '</p>' +
    '<p>' + description + '</p>' +
    '<p><strong>Epsom Salt Composition:</strong></p>' +
    '<table class="table table-bordered table-striped">' +
    '<tr><th>Mineral</th><th>Amount</th></tr>' +
    '<tr><td>Magnesium Sulphate</td><td>99.5%</td></tr>' +
    '</table>' +
    '<p><strong>Epsom Salt Benefits:</strong></p>' +
    '<ul>' +
    '<li>Provides reliefs from constipation</li>' +
    '<li>Stimulates bowel movement</li>' +
    '<li>Facilitate easier passage of stool</li>' +
    '</ul>'+
    '<p><strong>How to Use Epsom Salt</strong></p>'+
    '<table class="table table-bordered table-striped">' +
    '<tr><th>Animal</th><th>Amount</th></tr>' +
    '<tr><td>Cows</td><td>200-500gms</td></tr>' +
    '<tr><td>Sheeps and Goats</td><td>60-120gms</td></tr>' +
    '<tr><td>Horses</td><td>30-120gms</td></tr>' +
    '</table>'
  );

  // $('.card-text').not(':contains(' + title + ')').slideUp();
  $('.card-text:contains(' + title + ')').slideDown();

  $('#detailsModal').modal({
    backdrop: true,
    keyboard: true,
    show: true,
    backdrop: 'static'
  });

  $('.modal-backdrop').addClass('modal-background');
}

function layMoreExtra(title, description) {
  $('#detailsModalLabel').text('Lay More Extra' + "");
  $('#detailsModalDescription').html(
    '<img class="card-img-top" src="static/img/portfolio/layMore.png" alt="Milk Booster">' +
    '<p><strong>Product Title:</strong> ' + title + '</p>' +
    '<p>' + description + '</p>' +
    '<p><strong>Lay More Extra Composition:</strong></p>' +
    '<table class="table table-bordered table-striped">' +
    '<tr><th>Mineral</th><th>Amount</th></tr>' +
    '<tr><td>Vitamin A</td><td>20000IU</td></tr>' +
    '<tr><td>Vitamin C</td><td>30 MG</td></tr>' +
    '<tr><td>Vitamin D3</td><td>3600 IU</td></tr>' +
    '<tr><td>Vitamin E</td><td>6 IU</td></tr>' +
    '<tr><td>Vitamin K</td><td>7.2 Mg</td></tr>' +
    '<tr><td>Vitamin B12</td><td>6Mg</td></tr>' +
    '<tr><td>Vitamin B2</td><td>20Mg</td></tr>' +
    '<tr><td>Calcium Pantothenic Acid</td><td>16.8 Mg</td></tr>' +
    '<tr><td>Niacinamide</td><td>48Mg</td></tr>' +
    '</table>' +
    '<p><strong>Lay More Extra Benefits:</strong></p>' +
    '<ul>' +
    '<li>Lay More increases the number of egg production</li>' +
    '<li>Mantains pear for a long time</li>' +
    '<li>It boost the size and quality of eggs</li>' +
    '</ul>'+
    '<p><img class="card-img-top" src="static/img/portfolio/lay.jpg" alt="Milk Booster"></p>' +
    '<p><strong>How to Use Lay More Extra</strong></p>'+
    '<p>Add 10g Lay More extra per 10 litres of driking water continiuously</p>'
  );

  // $('.card-text').not(':contains(' + title + ')').slideUp();
  $('.card-text:contains(' + title + ')').slideDown();

  $('#detailsModal').modal({
    backdrop: true,
    keyboard: true,
    show: true,
    backdrop: 'static'
  });

  $('.modal-backdrop').addClass('modal-background');
}

function madumeLick(title, description) {
  $('#detailsModalLabel').text('Madume Lick' + "");
  $('#detailsModalDescription').html(
    '<img class="card-img-top" src="static/img/portfolio/madumeLick.png" alt="Milk Booster">' +
    '<p><strong>Product Title:</strong> ' + title + '</p>' +
    '<p>' + description + '</p>' +
    '<p><strong>Madume Lick Composition:</strong></p>' +
    '<table class="table table-bordered table-striped">' +
    '<tr><th>Component</th><th>Amount</th></tr>' +
    '<tr><td>Minerals</td><td>35%</td></tr>' +
    '<tr><td>Fat</td><td>0.9%</td></tr>' +
    '<tr><td>Fiber</td><td>10%</td></tr>' +
    '<tr><td>Energy</td><td>13%</td></tr>' +
    '<tr><td>Protein</td><td>45%</td></tr>' +
    '<tr><td>Vitamin D</td><td>50000IU</td></tr>' +
    '<tr><td>Vitamin A</td><td>250,000</td></tr>' +
    '<tr><td>Vitamin E</td><td>1000 IU</td></tr>' +
    '<tr><td>Lysine</td><td>1.115%</td></tr>' +
    '<tr><td>Methionine</td><td>0.68%</td></tr>' +
    '<tr><td>Olaquindox</td><td>15%</td></tr>' +
    '</table>' +
    '<p><strong>Madume Lick Benefits:</strong></p>' +
    '<ul>' +
    '<li>Nourshes the health of the cattles</li>' +
    '<li>Increase the weight of cattles rapidly</li>' +
    '<li>Very essential minerals for growth of cows and goats</li>' +
    '</ul>'+
    '<img class="card-img-top" src="static/img/portfolio/dume.jpg" alt="DCP">' +
    '<p><strong>How to Use Madume Lick</strong></p>'+
    '<table class="table table-bordered table-striped">' +
    '<tr><th>Animal</th><th>Amount</th></tr>' +
    '<tr><td>Cows</td><td>2-3 teaspoon of madume lick to 2kg of food or 1kg of madume lick in 100kg of food</td></tr>' +
    '<tr><td>Sheeps</td><td>30grams per day</td></tr>' +
    '<tr><td>Goats</td><td>10grams per day</td></tr>' +
    '</table>' 
  );

  // $('.card-text').not(':contains(' + title + ')').slideUp();
  $('.card-text:contains(' + title + ')').slideDown();

  $('#detailsModal').modal({
    backdrop: true,
    keyboard: true,
    show: true,
    backdrop: 'static'
  });

  $('.modal-backdrop').addClass('modal-background');
}

function layMoreExtra(title, description) {
  $('#detailsModalLabel').text('Lay More Extra' + "");
  $('#detailsModalDescription').html(
    '<img class="card-img-top" src="static/img/portfolio/layMore.png" alt="Milk Booster">' +
    '<p><strong>Product Title:</strong> ' + title + '</p>' +
    '<p>' + description + '</p>' +
    '<p><strong>Lay More Extra Composition:</strong></p>' +
    '<table class="table table-bordered table-striped">' +
    '<tr><th>Mineral</th><th>Amount</th></tr>' +
    '<tr><td>Vitamin A</td><td>20000IU</td></tr>' +
    '<tr><td>Vitamin C</td><td>30 MG</td></tr>' +
    '<tr><td>Vitamin D3</td><td>3600 IU</td></tr>' +
    '<tr><td>Vitamin E</td><td>6 IU</td></tr>' +
    '<tr><td>Vitamin K</td><td>7.2 Mg</td></tr>' +
    '<tr><td>Vitamin B12</td><td>6Mg</td></tr>' +
    '<tr><td>Vitamin B2</td><td>20Mg</td></tr>' +
    '<tr><td>Calcium Pantothenic Acid</td><td>16.8 Mg</td></tr>' +
    '<tr><td>Niacinamide</td><td>48Mg</td></tr>' +
    '</table>' +
    '<p><strong>Lay More Extra Benefits:</strong></p>' +
    '<ul>' +
    '<li>Lay More increases the number of egg production</li>' +
    '<li>Mantains pear for a long time</li>' +
    '<li>It boost the size and quality of eggs</li>' +
    '</ul>'+
    '<img class="card-img-top" src="static/img/portfolio/lay.jpg" alt="DCP">' +
    '<p><strong>How to Use Lay More Extra</strong></p>'+
    '<p>Add 10g Lay More extra per 10 litres of driking water continiuously</p>'
  );

  // $('.card-text').not(':contains(' + title + ')').slideUp();
  $('.card-text:contains(' + title + ')').slideDown();

  $('#detailsModal').modal({
    backdrop: true,
    keyboard: true,
    show: true,
    backdrop: 'static'
  });

  $('.modal-backdrop').addClass('modal-background');
}

function dcpChenga(title, description) {
  $('#detailsModalLabel').text('Madume Lick' + "");
  $('#detailsModalDescription').html(
    '<img class="card-img-top" src="static/img/portfolio/dcpChenga.png" alt="Milk Booster">' +
    // '<p><strong>Product Title:</strong> ' + title + '</p>' +
    '<p>' + description + '</p>' +
    '<img class="card-img-top" src="static/img/portfolio/D.png" alt="Milk Booster">' +
    '<p><strong>Madume Lick Composition:</strong></p>' +
    '<table class="table table-bordered table-striped">' +
    '<tr><th>Component</th><th>Amount</th></tr>' +
    '<tr><td>Minerals</td><td>35%</td></tr>' +
    '<tr><td>Fat</td><td>0.9%</td></tr>' +
    '<tr><td>Fiber</td><td>10%</td></tr>' +
    '<tr><td>Energy</td><td>13%</td></tr>' +
    '<tr><td>Protein</td><td>45%</td></tr>' +
    '<tr><td>Vitamin D</td><td>50000IU</td></tr>' +
    '<tr><td>Vitamin A</td><td>250,000</td></tr>' +
    '<tr><td>Vitamin E</td><td>1000 IU</td></tr>' +
    '<tr><td>Lysine</td><td>1.115%</td></tr>' +
    '<tr><td>Methionine</td><td>0.68%</td></tr>' +
    '<tr><td>Olaquindox</td><td>15%</td></tr>' +
    '</table>' +
    '<p><strong>Madume Lick Benefits:</strong></p>' +
    '<ul>' +
    '<li>Nourshes the health of the cattles</li>' +
    '<li>Increase the weight of cattles rapidly</li>' +
    '<li>Very essential minerals for growth of cows and goats</li>' +
    '</ul>'+
    '<p><strong>How to Use Madume Lick</strong></p>'+
    '<table class="table table-bordered table-striped">' +
    '<tr><th>Animal</th><th>Amount</th></tr>' +
    '<tr><td>Cows</td><td>2-3 teaspoon of madume lick to 2kg of food or 1kg of madume lick in 100kg of food</td></tr>' +
    '<tr><td>Sheeps</td><td>30grams per day</td></tr>' +
    '<tr><td>Goats</td><td>10grams per day</td></tr>' +
    '</table>' 
  );

  // $('.card-text').not(':contains(' + title + ')').slideUp();
  $('.card-text:contains(' + title + ')').slideDown();

  $('#detailsModal').modal({
    backdrop: true,
    keyboard: true,
    show: true,
    backdrop: 'static'
  });

  $('.modal-backdrop').addClass('modal-background');
}

function jotoLick(title, description) {
  $('#detailsModalLabel').text('Joto Lick' + "");
  $('#detailsModalDescription').html(
    '<img class="card-img-top" src="static/img/portfolio/jotoLick.png" alt="Milk Booster">' +
    '<p><strong>Product Title:</strong> ' + title + '</p>' +
    '<p>' + description + '</p>' +
    '<p><strong>Joto Lick Composition:</strong></p>' +
    '<table class="table table-bordered table-striped">' +
    '<tr><th>Component</th><th>Amount</th></tr>' +
    '<tr><td>Sodium Chloride</td><td>6%</td></tr>' +
    '<tr><td>Calcium</td><td>20%</td></tr>' +
    '<tr><td>Phosphorous</td><td>20%</td></tr>' +
    '<tr><td>Magnesium</td><td>6%</td></tr>' +
    '<tr><td>Fluorine</td><td>0.2</td></tr>' +
    '<tr><td>Vitamin A</td><td>15000000IU</td></tr>' +
    '<tr><td>Vitamin D3</td><td>240,0000IU</td></tr>' +
    '<tr><td>Vitamin E</td><td>4000IU</td></tr>' +
    '<tr><td>Cobalt</td><td>0.18%</td></tr>' +
    '<tr><td>Copper</td><td>0.3%</td></tr>' +
    '<tr><td>Iodine</td><td>200mg</td></tr>' +
    '<tr><td>Manganese</td><td>4%</td></tr>' +
    '<tr><td>Selenium</td><td>0.04%</td></tr>' +
    '<tr><td>Zinc</td><td>9%</td></tr>' +
    '</table>' +
    '<img class="card-img-top" src="static/img/portfolio/joto.jpg" alt="Milk Booster">' +
    '<p><strong>Joto Lick Benefits:</strong></p>' +
    '<ul>' +
    '<li>Joto lick induces heat rapidly even in heat resistance periods</li>' +
    '</ul>'+
    '<p><strong>How to Use Joto Lick</strong></p>'+
    '<p>Mix 50g of joto lick in 2kg of animal feed or 1kg in two times a day until the results are visible</p>'
  );

  // $('.card-text').not(':contains(' + title + ')').slideUp();
  $('.card-text:contains(' + title + ')').slideDown();

  $('#detailsModal').modal({
    backdrop: true,
    keyboard: true,
    show: true,
    // backdrop: 'static'
  });

  // $('.modal-backdrop').addClass('modal-background');
}






  // </script>