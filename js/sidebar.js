/**
 * Created by Dakota on 6/25/2015.
 */


function controlsIn() {
    $('#testimonialControlls').fadeIn('slow');
}

function controlsOut() {
    $('#testimonialControlls').fadeOut('slow');
}

expandBtn = $('#expand');
function expand() {
    if (expandBtn.hasClass('expanded')) {
//          Out
        $('#expand').find('span').switchClass('icon-bar-default', 'icon-bar-sidebar', 'slow');
        $('#expand').switchClass('btn-default', 'btn-sidebar', 'slow');
        $('#navigation').fadeOut(250);


        $('.navbar-left').animate({
            width: '60px',
            backgroundColor: 'rgba(0, 0, 0, 0)'
        }, {
            durration: 'slow',
            specialEasing: {
                width: 'easeOutBack'
            }
        });
        $('#body').animate({
            left: '-=240px'
        }, {
            durration: 'slow',
            specialEasing: {
                left: 'easeOutBack'
            }
        });
        expandBtn.removeClass('expanded');
    } else {
//          In
        $('#expand').find('span').switchClass('icon-bar-sidebar', 'icon-bar-default', 'slow');
        $('#expand').switchClass('btn-sidebar', 'btn-default', 'slow');
        $('#navigation').fadeIn('slow');

        $('.navbar-left').animate({
            width: '300px',
            backgroundColor: '#E5E4E2'
        }, {
            durration: 'slow',
            specialEasing: {
                width: 'easeOutBack'
            }
        });


        $('#body').animate({
            left: '+=240px'
        }, {
            durration: 'slow',
            specialEasing: {
                left: 'easeOutBack'
            }
        });
        expandBtn.addClass('expanded');
    }
}
function collapse() {
    if (expandBtn.hasClass('expanded')) {
//          Out
        $('#expand').find('span').switchClass('icon-bar-default', 'icon-bar-sidebar', 'slow');
        $('#expand').switchClass('btn-default', 'btn-sidebar', 'slow');
        $('#navigation').fadeOut(250);

        $('.navbar-left').animate({
            width: '60px',
            backgroundColor: 'rgba(0, 0, 0, 0)'
        }, {
            durration: 'slow',
            specialEasing: {
                width: 'easeOutBack'
            }
        });
        $('#body').animate({
            left: '-=240px'
        }, {
            durration: 'slow',
            specialEasing: {
                left: 'easeOutBack'
            }
        });
    }
    $('#expand').removeClass('expanded');
}