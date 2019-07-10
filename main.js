i=0;

function changeWho(){
  var who=document.querySelector('.whoiam');
  var whoarr=['A designer.',
              'A web developer.',
              'A problem solver.'
              ];
  if (i>=whoarr.length){
    i=0;
  }
  who.innerHTML=whoarr[i];
  i++;
}

//slides the nav bar in and out
const navSlide=()=>{
  const burger=document.querySelector('.hamburger');
  const nav=document.querySelector('.nav-links');
  const navLinks=document.querySelectorAll('.nav-links li');
//toggle navigator
  burger.addEventListener('click',()=>{
    nav.classList.toggle('nav-active');

// does animation when toggled each time inside the toggle
    navLinks.forEach((link,index)=>{
      if (link.style.animation){
        link.style.animation='';
      }
      else{
        link.style.animation=`navLinkFade 0.5s ease forwards ${index/7+.1}s`;
      }
    });
  //burger animation
  burger.classList.toggle('toggle');
  })
}
navSlide();

setInterval(changeWho, 2000);
