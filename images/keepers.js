
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


//pod gallery
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});





document.getElementById("practice").addEventListener("mouseover", function() {
    document.getElementById("practice").style.color = "pink";
  });
  document.getElementById("practice").addEventListener("mouseout", function() {
    document.getElementById("practice").style.color = "yellow";
  });