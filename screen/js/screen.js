
$(function($) {
    // popup window setting
    $('#yt_link').magnificPopup({
        delegate: 'a',
        type: 'iframe',
        iframe: {
            markup: '<div class="mfp-iframe-scaler">' +
                '<div class="mfp-close"></div>' +
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                '<div class="mfp-title">Some caption</div>' +
                '</div>'
        },
        gallery: {
            enabled: true
        },
        callbacks: {
            markupParse: function(template, values, item) {
                values.title = item.el.attr('title');
            }
        },
        disableOn: function() {
            if ($(window).width() < 480) {
                return false;
            }
            return true;
        }
    });

    // milkcocoa setting
    var milkcocoa = new MilkCocoa("https://io-oi6aqv4vb.mlkcca.com");

    milkcocoa.dataStore("selectChannel").on('push', function(data) {
        console.log(data);
        var ch = data.value.click;
        if(ch) {
            play(ch);
            return;
        }
        closeMovie();
    });
    milkcocoa.dataStore("leftArrow").on('push', function(data) {
        console.log(data);
        pageChange("left");
        // if(typeof $.magnificPopup.instance !== "undefined") {
        //     return;
        // }else{
        // }
    });
    milkcocoa.dataStore("rightArrow").on('push', function(data) {
        console.log(data);
        pageChange("right");
        // if(typeof $.magnificPopup.instance !== "undefined") {
        //     return;
        // }else{
        // }
    });

    function play (ch) {
        var el = $(".video_image").eq(ch-1).children('a');
        el.trigger('click');
        console.log(el);
    }
    function closeMovie () {
        $.magnificPopup.close();
    }
    function pageChange (direction) {
        if(direction == 'left') {
            $.magnificPopup.instance.prev();
        }
        if (direction == 'right') {
            $.magnificPopup.instance.next();
        }
    }

});

