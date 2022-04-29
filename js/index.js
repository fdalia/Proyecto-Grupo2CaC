/* --------- Instancias Carousel------------*/
var myCarouselEl = document.getElementById('myCarousel')
var carousel = bootstrap.Carousel.getInstance(myCarouselEl) // Retrieve a Carousel instance

myCarouselEl.addEventListener('slid.bs.carousel', function (event) {
  carousel.to('2') // Will slide to the slide 2 as soon as the transition to slide 1 is finished
})

carousel.to('1') // Will start sliding to the slide 1 and returns to the caller
carousel.to('2') // !! Will be ignored, as the transition to the slide 1 is not finished !!

function confirmarCompra() {
  alert("Tu compra acaba de ser confirmada.");
}
