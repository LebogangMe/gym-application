// (i) mobile menu toggle
const toggleBtn = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
toggleBtn.addEventListener('click', () => {
 nav.classList.toggle('show'); // add/remove .show to open/close menu
});
// (ii) contact form handler
const form = document.getElementById('contactForm');
const msg = document.getElementById('formMsg');
form.addEventListener('submit', (e) => {
 e.preventDefault(); // stop page reload
 // read inputs
 const name = document.getElementById('name').value.trim();
 const email = document.getElementById('email').value.trim();
 const message = document.getElementById('message').value.trim();
 // very simple validation
 if (!name || !email || !message) {
 msg.textContent = 'Please fill in all fields.';
 return;
 }
 // pretend to send (here you’d normally call a backend/API)
 msg.textContent = `Thanks, ${name}! We’ll reply to ${email} soon.`;

 form.reset();
});
// (iii) current year in footer
document.getElementById('year').textContent = new Date().getFullYear();