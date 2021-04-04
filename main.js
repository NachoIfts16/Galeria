//HAMBURGUER MENU
document.querySelector('.menu-btn').addEventListener('click', ()=> {
  document.querySelector('.nav-list').classList.toggle('show');
});

//UP BUTTON
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//SCROLL REVEAL
ScrollReveal().reveal('.bio');
ScrollReveal().reveal('.photog', {delay: 500});
ScrollReveal().reveal('.photof', {delay: 500});
ScrollReveal().reveal('.photop', {delay: 500});
ScrollReveal().reveal('.photot', {delay: 500});
ScrollReveal().reveal('.photo1', {delay: 500});
ScrollReveal().reveal('.text', {delay: 500});
ScrollReveal().reveal('.inside-grid-photos', {delay: 500});
ScrollReveal().reveal('.serv', {delay: 200});
ScrollReveal().reveal('.servtext', {delay: 350});
ScrollReveal().reveal('.serv-img', {delay: 500});
ScrollReveal().reveal('.links', {delay: 500});
ScrollReveal().reveal('.up', {delay: 500});
