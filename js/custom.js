/**
 * Created by Dakota on 7/5/2015.
 */
setInterval(function () {
    $('.bounce').effect('bounce', 1500);
}, 5000);

$('.rand-img').each(function () {
    var rand = Math.floor((Math.random() * 66) + 1);

    $(this).attr('src', 'imgs/misc/misc%20(' + rand + ').jpg');
});