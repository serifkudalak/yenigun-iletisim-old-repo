window.onscroll = function() {myFunction(), scrollFunction(), scrollFunction2()};
        
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= 100) {
    navbar.classList.add("sticky");
    document.getElementById('logo').src = 'img/logo.png';

  } else {
    navbar.classList.remove("sticky");
    document.getElementById('logo').src = 'img/logobeyaz.png';
  }
}


//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button

function scrollFunction() {
  if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
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


function scrollFunction2() {
  if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100) {
    document.getElementById('navbar').style.padding = ".7rem 0";
    document.getElementById("logo").style.width = "130px";
   
  } else {
    document.getElementById('navbar').style.padding = "2rem 0";
    document.getElementById("logo").style.width = "200px";
  }
}

AOS.init();