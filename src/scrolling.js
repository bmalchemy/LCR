
$(function () {
    var divPrayer = $('#prayershawl'), divBible = $('#biblestudy');
    $(window).on("load resize", function () {
        $(".fill-screen").css("height", window.innerHeight);
    });

    // add Bootstrap's scrollspy
    $('body').scrollspy({
        target: '.navbar',
        offset: 160
    });

    // smooth scrolling
    $('nav a, .down-button a').bind('click', function () {
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    // parallax scrolling with stellar.js
    $(window).stellar();

    //   $('[data-toggle="collapse"]').click(function () {
    //       document.getElementById('prayershawl').innerHTML = 'Your content';   
    //   });

    // Hide the extra content initially, using JS so that if JS is disabled, no problemo:
    $('.read-more-content').addClass('hide');
    $('.read-more-show, .read-more-hide').removeClass('hide');

    // Set up the toggle effect:
    $('.read-more-show').on('click', function (e) {
        $(this).next('.read-more-content').removeClass('hide');
        $(this).addClass('hide');
        e.preventDefault();
    });

    // Changes contributed by @diego-rzg
    $('.read-more-hide').on('click', function (e) {
        var p = $(this).parent('.read-more-content');
        p.addClass('hide');
        p.prev('.read-more-show').removeClass('hide'); // Hide only the preceding "Read More"
        e.preventDefault();
    });

    $('a[href="#biblestudy"]').click(function () {
        divPrayer.append("");
        divPrayer.append("blah blah blah bible study");
       // divPrayer.append("blah blah blah bible study");
        //if (divPrayer.is(':visible')) {
        //    divPrayer.toggle(false);
        //    divPrayer.hide();
        //    divBible.toggle(true);
        //    divBible.show();
        //} else {
            
        //    if (divBible.is(':hidden')) {
        //        divBible.toggle(true);
        //        divBible.show();
        //    } else {
        //        divBible.toggle(false);
        //        divBible.hide();
        //    }
        //}
    });

    $('a[href="#prayershawl"]').click(function () {

        divPrayer.append("");
        divPrayer.append("blah blah blah");
        //if (divBible.is(':visible')) {
        //    divBible.toggle(false);
        //    divBible.hide();
        //    divPrayer.toggle(true);
        //    divPrayer.show();
        //} else {
           
        //    if (divPrayer.is(':hidden')) {
        //        divPrayer.toggle(true);
        //        divPrayer.show();
        //    } else {
        //        divPrayer.toggle(false);
        //        divPrayer.hide();
        //    }
        //}

    });

});