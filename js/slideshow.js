
$(function() {
    $('body').vegas({
        slides: [
            { src: 'images/bass.jpeg' },
            { src: 'images/cat.jpeg' },
            { src: 'images/landscape.jpeg' },
            { src: 'images/shoes.jpeg' }
        ],
        delay: 15000,
        transition: 'fade',
        shuffle: true,
        animation: 'random'
    });
});
