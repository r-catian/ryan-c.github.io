



var elem = document.querySelector('.sidenav');
  var instance = new M.Sidenav(elem);

  // Initialize collapsible (uncomment the lines below if you use the dropdown variation)
  // var collapsibleElem = document.querySelector('.collapsible');
  // var collapsibleInstance = new M.Collapsible(collapsibleElem, options);

  // Or with jQuery

  $(document).ready(function(){
    $('.sidenav').sidenav();
  });

  // parallax

  document.addEventListener('DOMContentLoaded', function() {
    var para=document.querySelectorAll('.parallax');
    M.Parallax.init(para);
     var secondParallax = document.querySelector('.secondparallax');
  });

 
  // var type

  var typed = new Typed('.text', {
    strings: ["Technical Support.", "Front-end Developer."],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });

 

  // buttonbacktotop
  // Get the button
let mybutton = document.getElementById("myBtn");

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
      window.scrollTo({
        top:0,
        behavior:'smooth'
      });

  }

const observer = new IntersectionObserver ((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});


const hiddenElement = document.querySelectorAll('.hidden');
hiddenElement.forEach((el) => observer.observe(el));


// CONTACT FORM 


function sendMail() {
  let params = {
      name : document.getElementById("name").value,
      email : document.getElementById("email").value,
      message : document.getElementById("message").value,
  }

  emailjs.send("service_o3epnb9", "template_anxlyu4",params).then(function(response) {
    alert("Your message has been sent!");
    location.reload();
  });


}











  