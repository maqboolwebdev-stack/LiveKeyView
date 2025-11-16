let h1 = document.querySelector('h1');

window.addEventListener('keydown', function(e) {
   h1.textContent = e.key;
   h1.style.color = `hsl(${Math.random() * 360}, 70%, 50%)`;
   document.body.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 10%)`;

   if (e.key == ' ') {
    h1.textContent = 'Space';
   }

   //  Add animation class
   h1.classList.add('pressed');

   // Remove after animation so it can trigger again
   setTimeout(() => {
     h1.classList.remove('pressed');
   }, 200);
});
