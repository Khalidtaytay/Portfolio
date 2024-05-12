let sr = ScrollReveal({
    distance: '80px',
    duration: 2000,
    reset: true
});
sr.reveal('h1',{origin:'top'});
sr.reveal('h2',{origin:'top'});
sr.reveal('button', { origin: 'right' });
sr.reveal('.icons', { origin: 'left' });
sr.reveal('.About-me', { origin: 'left' });
sr.reveal('.About-me-img', { origin: 'right' });
sr.reveal('.About-me-img', { origin: 'right' });

//skills
sr.reveal('.My-skills', { origin: 'right' });
sr.reveal('#skill1', { origin: 'right',});
sr.reveal('#skill2', { origin: 'left' });
sr.reveal('#skill3', { origin: 'right' });
sr.reveal('#skill4', { origin: 'left' });
sr.reveal('#skill5', { origin: 'right' });
sr.reveal('#skill6', { origin: 'left' });

//Projects

sr.reveal('#img1',);
sr.reveal('#img2', { delay:100 });
sr.reveal('#img3', { delay:200 });
sr.reveal('#img4', { delay:300 });
sr.reveal('#img5', { delay:400 });
sr.reveal('#img6', { delay:500 });
sr.reveal('#img7', { delay:0 });

sr.reveal('.text',{origin:'left'});


let menubar = document.querySelector('.menu');
let lines = document.querySelector('.lines');
let line1 = document.getElementById('line1');
let line2 = document.getElementById('line2');
let line3 = document.getElementById('line3');
lines.addEventListener('click', () => {
  if (menubar.style.display === 'flex') {
    menubar.style.transform = 'translateX(100%)';
    line1.style.transform = 'rotate(0deg)';
    line3.style.transform = 'rotate(0deg)';
    line2.style.opacity = 1;
    setTimeout(() => {
      menubar.style.display = 'none';
    }, 300); // Adjust the delay if needed
  } else {
    menubar.style.display = 'flex';
    line1.style.transform = 'translate3d(0,6px,0) rotate(45deg)';
    line3.style.transform = 'translate3d(0,-6px,0) rotate(-45deg)';
    line2.style.opacity = 0;
  }
});

