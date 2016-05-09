/* global $ */

var $overlay = $('<div class="modal-overlay"></div>');
var $image = $('<img class="modal-overlay__image mdl-shadow--16dp">');
var $dismissButton = $('<button class="mdl-button mdl-js-ripple-effect mdl-js-button mdl-button--raised mdl-button--accent">Close</button>')

$(document).ready(function() {
    $("body").append($overlay);
    $overlay.append($image);
    $overlay.append($dismissButton);

    var $galleryDivs = $(".gallery").children().children();

    $galleryDivs.addClass("gallery__picture--clickable");

    $galleryDivs.click(function() {
        var imageLocation = $(this).css("background-image").match(/"((?:\\.|[^"\\])*)"/).slice(1);
        $image.attr("src", imageLocation);
        $overlay.css({
            "display": "flex"
        });
    });
    $dismissButton.click(function() {
        $overlay.hide();
    });





	$('a[href^="#"].swing').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('.mdl-layout__content').stop().animate({
	        'scrollTop': ($target.offset().top - 55)
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});



});
