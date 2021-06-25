
//this is the script that makes the navbar hide and reappear.
var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
var currentScrollPos = window.pageYOffset;

if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
} else {
    document.getElementById("navbar").style.top = "-100px";
}
prevScrollpos = currentScrollPos;
} 

//gallery
$(document).on("click", '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });





