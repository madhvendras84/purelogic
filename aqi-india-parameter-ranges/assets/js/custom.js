$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $('.sidebar-main').toggleClass('activenow');
    });

    $('a[href^="#"]').on('click', function (e) {
        if (window.outerWidth > 768) {
            var target = this.hash,
                $target = $(target);
            var xdistance = 68;
            $('html, body').stop().animate({
                'scrollTop': ($target.offset().top) - xdistance
            }, 1000, '', function () {
                window.location.hash = target;
            });
        }
    });

    $('#hideShow').on('click', function (event) {
        $('#sidebar').toggleClass('active');
        $('.sidebar-main').toggleClass('activenow');
    });

});
