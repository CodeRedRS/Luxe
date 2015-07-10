/**
 * Created by Dakota on 7/5/2015.
 */
setInterval(function () {
    $('.bounce').effect('bounce', 1500);
}, 5000);

$('.rand-img').each(function () {
    var rand = Math.floor((Math.random() * 55) + 1);

    if (rand > 55) {
        rand = Math.floor((Math.random() * 55) + 1)
    }

    $(this).attr('src', 'imgs/misc/misc%20(' + rand + ').jpg');
});

// SELECTION FOR QUOTE -- NO LONGER WANTED
// =======================================
/*
 var selection = $('#Selection');
 var images = $('#images');
 var getQuote = $('#getQuote');
 var rows = 3;
 $('img').click(function () {
 selection.fadeIn('slow');
 var imgSrc = $(this).attr('src');
 var imgName = $(this).attr('alt');
 var section = $(this).parent('div').parent('div').attr('id').toString();

 var html = "<div class='col-sm-2 col-xs-3' style='height: 150px; width: 150px;  max-height: 100%; max-width: 100%;'>";
 html += "<img class='img-responsive img-related stamp' src='" + imgSrc + "' alt='" + imgName + "'>";
 html += "</div>";

 getQuote.attr('rows', rows);
 getQuote.append('[' + section + '] ' + imgName + '\r\n');
 images.append(html);
 rows++;
 });
 */