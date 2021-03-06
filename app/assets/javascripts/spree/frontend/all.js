// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$( document ).ready(function() {
    console.log( "ready!" );

// WORKAROUND - If Chrome or Firefox and on mobile or small tablet
var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
var screensize = $(window).width()
if (screensize < 769) {
  if (isChrome == true || isFirefox) {
    document.getElementById("content").className = "columns eleven omega";
  }
}

$(".btn-buy-online").click(function(){
    $(".buy-online-section").slideDown( "slow", function() {});
    $(".buy-offline-section").slideUp( "slow", function() {});
    $('html, body').animate({
        scrollTop: $(".buy-online-section").offset().top
    }, 250);
});

$(".btn-try-instore").click(function(){
    $(".buy-online-section").slideUp( "slow", function() {});
    $(".buy-offline-section").slideDown( "slow", function() {});
    $('html, body').animate({
        scrollTop: $(".buy-offline-section").offset().top
    }, 250);
});



!function (a) {
    "use strict";
    /*Mobile menu selected to close menu*/
    $("#bs-example-navbar-collapse-1 ul li").click(function () {
        $("#bs-example-navbar-collapse-1").removeClass("in");
    });

    $("#js-grid-juicy-projects").on('initComplete.cbp', function() {
    	$(".cbp-l-loadMore-button").css({"visibility": "visible", "opacity": "1", "transition-delay": "0s"});
	});


}(this);


(function($, window, document, undefined) {
    'use strict';

    $('#js-grid-juicy-projects').cubeportfolio({
        filters: '.js-filters-juicy-projects',
        loadMore: '#js-loadMore-juicy-projects',
        loadMoreAction: 'click',
        layoutMode: 'grid',
        defaultFilter: '*',
        animationType: 'quicksand',
        gapHorizontal: 0,
        gapVertical: 0,
        gridAdjustment: 'responsive',
        mediaQueries: [{
            width: 1600,
            cols: 5
        }, {
            width: 1100,
            cols: 4
        }, {
            width: 800,
            cols: 3
        }, {
            width: 480,
            cols: 2
        }, {
            width: 320,
            cols: 1
        }],
        caption: 'overlayBottomReveal',
        displayType: 'sequentially',
        displayTypeSpeed: 80,

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

        // singlePage popup
        singlePageDelegate: '.cbp-singlePage',
        singlePageDeeplinking: true,
        singlePageStickyNavigation: false,
        singlePageCounter: '<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',
        singlePageCallback: function(url, element) {
            // to update singlePage content use the following method: this.updateSinglePage(yourContent)
            var t = this;

            $.ajax({
                    url: url,
                    type: 'GET',
                    dataType: 'html',
                    timeout: 30000
                })
                .done(function(result) {
                    t.updateSinglePage(result);
                })
                .fail(function() {
                    t.updateSinglePage('AJAX Error! Please refresh the page!');
                });
        },
    });
    
})(jQuery, window, document);

});
