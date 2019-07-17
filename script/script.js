$(document).ready(function () {

    /*ie9 placeholder plugin (jquery.placeholder.min.js) */
    $('input, textarea').placeholder({ customClass: 'my-placeholder' });

    /*Section 4a Box sizing */
    $(window).resize(function () {
        $('.box2').height($('.box1').height());
    });

    setTimeout(function () {
        $('.box2').height($('.box1').height());
    }, 500);
    /*Section 4a Box sizing Ends*/


    /*Section 5 Box sizing */
    $(window).resize(function () {
        $('.box4').height($('.box3').height());
    });

    setTimeout(function () {
        $('.box4').height($('.box3').height());
    }, 500);
    /*Section 5 Box sizing Ends*/



    /* hamburger-menu */
    $('.hamburger-btn').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('html,body').css('overflow-y', 'auto');
            $('.navList').addClass('mobileDisable');
        } else {
            $(this).addClass('active');
            $('html,body').css('overflow-y', 'hidden');
            $('.navList').removeClass('mobileDisable');
        }
    });

    $('.navList li a').click(function (e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('html,body').stop().animate({ scrollTop: $(target).offset().top }, 500);
        $('.hamburger-btn').removeClass('active');

        $('.navList').addClass('mobileDisable');
        $('html,body').css('overflow-y', 'auto');
    })
    /* hamburger-menu ends */


    /*Hamburger to X*/
    $('#pull').click(function () {
        if (is_fold($(this))) {
            fold_in($(this));
        } else {
            fold_out($(this));
        }
    });
    /*Hamburger to X ends*/



    /*Section 1 - Brain Animation Parallax*/
    var getPositionLArr = [];

    $('.leftAnimate').each(function () {
        getPositionLArr.push([$(this), $(this).css('left'), $(this).css('top')]);
    });

    $(document).on('mousemove', function (e) {
        iconAnimate(e)
    });

    function iconAnimate(e) {
        var horizontal = e.screenX;
        var vertical = e.screenY;
        var wWidth = $(window).width();
        var wHeight = $(window).height();
        var multiX, multiY;
        var xDiff, yDiff;
        wWidth / 2 < horizontal ? multiX = 1 : multiX = -1;
        wHeight / 2 < vertical ? multiY = -1 : multiY = 1;
        xDiff = Math.abs(horizontal - (wWidth / 2));
        yDiff = Math.abs(vertical - (wHeight / 2));

        var moveX = multiX * xDiff / 70;
        var moveY = multiY * yDiff / 70;
        for (i = 0; i < getPositionLArr.length; i++) {
            var mx = moveX;
            var my = moveY;
            if (getPositionLArr[i][0].hasClass('active')) {
                if (!getPositionLArr[i][0].hasClass('brainShadow')) {
                    mx = moveX * 3;
                    my = moveY * 3;
                } else {
                    mx = moveX * 0.3;
                    my = moveY * 0.3;
                }
                getPositionLArr[i][0].css({
                    'transform': 'translate(calc(' + -mx + 'px),calc(' + my + 'px)',
                    '-webkit-transform': 'translate(calc(' + -mx + 'px),calc(' + my + 'px)',
                    '-ms-transform': 'translate(calc(' + -mx + 'px),calc(' + my + 'px)',
                    '-moz-transform': 'translate(calc(' + -mx + 'px),calc(' + my + 'px)',
                    '-o-transform': 'translate(calc(' + -mx + 'px),calc(' + my + 'px)'
                });
            }
        }
    }
    /*Section 1 - Brain Animation Parallax Ends*/



    /*Section 3 - Mobile Accordion Menu*/
    $('.accordion-btn').click(function () {
        if (!$(this).hasClass('active')) {
            $('.accordion-desc').slideUp();
            $('.accordion-btn').removeClass('active');
            $(this).parent().find('.accordion-desc').slideDown();
            $(this).addClass('active');
        }
    });
    /*Section 3 - Mobile Accordion Menu Ends*/




    /*Owl Carousel - Owl Slider*/
    $("#owl-demo").owlCarousel({
        navigation: false, // Show next and prev buttons
        slideSpeed: 300,
        items: 1,
        paginationSpeed: 400,
        singleItem: true
    });
    /*Owl Carousel - Owl Slider Ends*/




    /*-- First tab table with 3 tabs in section_3 ---*/
    $('ul.threeTabs li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('ul.threeTabs li').removeClass('current');
        $('.threeTabsContent').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    })
    /*-- First tab table with 3 tabs in section_3 Ends---*/




    /* Second tab table with 2 tabs in section_4b --- */
    $('ul.twoTabs li').click(function () {
        var tabs_id = $(this).attr('data-tab');

        $('ul.twoTabs li').removeClass('current');
        $('.twoTabsContent').removeClass('current');

        $(this).addClass('current');
        $("#" + tabs_id).addClass('current');
    })
    /* Second tab table with 2 tabs in section_4b Ends---*/




    /* Every time the window is scrolled Animate content */
    $(window).scroll(function () {
        checkHidden(); /* Check the location of each desired element */
    });

    function checkHidden() {
        $('.hideme').each(function (i) {
            var bottom_of_object;
            if (!$(this).hasClass('text_4')) {
                bottom_of_object = $(this).offset().top + $(this).outerHeight() / 5;
            } else {
                bottom_of_object = $(this).offset().top + 250;
            }
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_object) {/* If the object is completely visible in the window, fade it in */
                $(this).addClass("fadeInUp").delay(500).animate({ 'opacity': '1' }, 300);
            }
        });
    }
    /* Every time the window is scrolled Animate content ends */



    /*Disable viewport zooming iOS 10 safari*/

    /*Stop pinch-to-zoom*/
    document.documentElement.addEventListener('touchstart', function (event) {
        if (event.touches.length > 1) {
            event.preventDefault();
        }
    }, false);

    /*Disabling double-tap-to-zoom*/
    var lastTouchEnd = 0;
    document.documentElement.addEventListener('touchend', function (event) {
        var now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);

    /*disable viewport zooming iOS 10 safari ends*/



    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
    // Add smooth scrolling to all links ends



    /* --- Form Validation ---*/
    var phoneInput = $("input[name='phone']");
    phoneInput.intlTelInput({
        initialCountry: "auto",
        geoIpLookup: function (callback) {
            $.get('http://ipinfo.io', function () { }, "jsonp").always(function (resp) {
                var countryCode = (resp && resp.country) ? resp.country : "";
                callback(countryCode);
            });
        }
    });

    $('.intl-tel-input').addClass('smallBox fl');

    $('.form_btn').click(function (e) {
        e.preventDefault();
        if (!checkFields()) {
            $.ajax({
                type: "POST",
                url: 'http://burkhartdimitriniguljespervanagteren.developtica.net/Home/SendMessage1',
                data: {
                    email: $.trim($('#email').val()),
                    name: $.trim($('#name').val()),
                    phone: $.trim($('#phone').intlTelInput("getNumber")),
                    sector: $.trim($('#sector').val()),
                    comment: $.trim($('#message').val())
                },
                success: function (data) {
                    if (data == '200') {
                        $('.errorText').html('Thanx.');
                    }
                    else {
                        $('.errorText').html('An error occured.');
                    }
                },
                error: function () {
                    $('.errorText').html('An error occured.');
                },
                dataType: 'JSON'
            })

        } else {
            $('.errorText').html('Please fill all mandatory fields.');
        }
    });

    $('.formTable input, .formTable textarea').focusin(function () {
        $(this).removeClass('error');
        if ($(this).parent().hasClass('intl-tel-input')) $(this).parent().removeClass('error');
        $('.errorText').html('');
    })


    function checkFields() {
        var err = false;

        $('.formTable input.req, .formTable textarea').each(function () {
            if ($(this).val() == null || $(this).val() == "") {
                $(this).addClass('error');
                err = true;
            }
        })
        if ($('#phone').val() == "") {
            err = true;
            $('.intl-tel-input').addClass('error');
        }

        if (!isEmail($('#email').val())) {
            $('#email').addClass('error')
            err = true;
        }
        return err;
    }




}) /*document ready function ends*/


function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}
/* --- Form Validation Ends---*/




/* --- Section 1 (Scroll Bounce Animation)---*/
setInterval(function () {
    $('.scrollBox').toggleClass('bounceScroll')
}, 2000);



/*Hamburger to X*/

var duration = 300;
var easing = "swing";

function is_fold($el) {
    if ($el.hasClass('fold_out')) {
        return true;
    } else {
        return false;
    }
}

function fold_out($el) {
    $el.addClass('fold_out');
    $el.removeClass('fold_in');

    $el.find('.outer_line').animate({ 'top': '6px' }, duration, function () {
        $el.find('.inner_line').hide();
        setTimeout(function () {
            $('#line1').animateRotate(0, 45, duration, easing, function () { });
            $('#line3').animateRotate(0, -45, duration, easing, function () { });
        }, 100);
    });
}

function fold_in($el) {
    $el.addClass('fold_in');
    $el.removeClass('fold_out');

    $('#line1').animateRotate(45, 0, duration, easing, function () { });
    $('#line3').animateRotate(-45, 0, duration, easing, function () {
        $el.find('.inner_line').show(80, function () {

            $el.find('#line1').animate({ 'top': '0px' }, duration);
            $el.find('#line3').animate({ 'top': '12px' }, duration);
        });
    });
}

$.fn.animateRotate = function (angle1, angle2, duration, easing, complete) {
    var args = $.speed(duration, easing, complete);
    var step = args.step;
    return this.each(function (i, e) {
        args.step = function (now) {
            $.style(e, 'transform', 'rotate(' + now + 'deg)');
            if (step) return step.apply(this, arguments);
        };

        $({ deg: angle1 }).animate({ deg: angle2 }, args);
    });
};
/*Hamburger to X ends*/