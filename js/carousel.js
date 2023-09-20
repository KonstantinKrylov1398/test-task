$(function() {

    const owl = $("#slider");
    owl.owlCarousel({
        items: 1,
        margin: 10,
        loop: true,

        dots: true,
        dotsEach: true,
        dotsContainer: '.owl-dots-thumbnails',
    });
});
$('.owl-dot-thumbnail').click(function() {
    const index = $(this).index();
    $('.owl-carousel').trigger('to.owl.carousel', index);
});