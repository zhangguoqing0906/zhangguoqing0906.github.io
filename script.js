// JavaScript Document
/*
jQuery( document ).ready(function($) {
// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'vertical',
  getSortData: {
    name: '.name',
    symbol: '.symbol',
    number: '.number parseInt',
    category: '[data-category]',
    weight: function( itemElem ) {
      var weight = $( itemElem ).find('.weight').text();
      return parseFloat( weight.replace( /[\(\)]/g, '') );
    }
  }
});

// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  },
  // show if name ends with -ium
  ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};

// bind filter button click
$('#filters').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});
	
// bind filter button click
$('#filters1').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});

// bind sort button click
$('#sorts').on( 'click', 'button', function() {
  var sortByValue = $(this).attr('data-sort-by');
  $grid.isotope({ sortBy: sortByValue });
});

// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});
  


});

*/

jQuery( document ).ready(function() {
  function filterRoadmapItems(){
    var cat = $('.roadmap__selector__categoryselector').val();
    var year = $('.roadmap__selector__yearselector').val();

    $('.roadmap__itemssection__item').each(function(idx, item){
      var item_cats = $(item).data('category').split(',');
      var item_year = $(item).data('year');

      $(item).removeClass('d-none');
      if(cat != 'show-all' && item_cats.indexOf(cat) == -1){
        $(item).addClass('d-none');
      }
      
      if(year != 'show-all' && parseInt(item_year) !== parseInt(year)){
        $(item).addClass('d-none');
      }
    });

    filterGroups();
  }

  function filterGroups(){
    $('.roadmap__itemssection__group').each(function(idx, item){
      if($(item).find(".roadmap__itemssection__item:not(.d-none)").length > 0){
        $(item).removeClass('d-none');
      }else{
        $(item).addClass('d-none');
      }
    });
  }

  $('.roadmap__selector__categoryselector, .roadmap__selector__yearselector').on('change', function() {
    filterRoadmapItems();
  });

  filterRoadmapItems();
});
