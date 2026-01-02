$(document).ready(function () {
    // Add scroll effect to navbar - Updated selector with namespace
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.sgtech-new-navbar').addClass('shadow-sm');
        } else {
            $('.sgtech-new-navbar').removeClass('shadow-sm');
        }
    });

    // Form input animation example
    $('.form-control').focus(function () {
        $(this).parent().addClass('focused');
    }).blur(function () {
        if ($(this).val() === "") {
            $(this).parent().removeClass('focused');
        }
    });

    // Scroll Animation (Fade In)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                $(entry.target).addClass('is-visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Target sections to animate (add .fade-in-section class to main sections via JS for convenience)
    $('section').each(function () {
        $(this).addClass('fade-in-section');
        observer.observe(this);
    });
});
