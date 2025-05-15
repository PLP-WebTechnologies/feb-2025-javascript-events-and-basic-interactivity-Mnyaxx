const colors = [
  '#947BD3', '#BBB6DF', '#AF3800', '#BEC5AD',
  '#A4B494', '#52154E', '#FD5200', '#A30B37',
  '#383B53', '#136F63', '#032B43', '#FFBA08',
  '#D00000'
];

let colorIndex = 0;

document.getElementById('colorButton').addEventListener('click', () => {
  document.body.style.backgroundColor = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
  document.getElementById('colorButton').textContent = 'Color changed! 🎉';
});

document.addEventListener('keydown', () => {
  document.body.style.backgroundColor = '#fdfd96';
  document.getElementById('keypressMessage').textContent = 'You pressed a key! 🎹';
});

function launchConfetti() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
}

function showSurprise() {
  document.body.style.backgroundColor = '#FFB6C1';
  document.getElementById('surpriseMessage').style.display = 'block';
  launchConfetti();
  setTimeout(() => {
    document.getElementById('surpriseMessage').style.display = 'none';
    document.body.style.backgroundColor = colors[colorIndex];
  }, 3000);
}

const secretButton = document.getElementById('secretButton');
secretButton.addEventListener('dblclick', showSurprise);

let pressTimer;
secretButton.addEventListener('mousedown', () => {
  pressTimer = setTimeout(showSurprise, 1000);
});
secretButton.addEventListener('mouseup', () => clearTimeout(pressTimer));
secretButton.addEventListener('mouseleave', () => clearTimeout(pressTimer));

const images = document.querySelectorAll('.gallery-image');
let current = 0;
setInterval(() => {
  images[current].classList.remove('current');
  current = (current + 1) % images.length;
  images[current].classList.add('current');
}, 3000);

const form = document.getElementById('myForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailFeedback = document.getElementById('emailFeedback');
const passwordFeedback = document.getElementById('passwordFeedback');

emailInput.addEventListener('input', () => {
  const email = emailInput.value;
  emailFeedback.textContent = /^\S+@\S+\.\S+$/.test(email) ? '' : 'Invalid email format';
});

passwordInput.addEventListener('input', () => {
  const password = passwordInput.value;
  passwordFeedback.textContent = password.length >= 8 ? '' : 'Password must be at least 8 characters';
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailValid = /^\S+@\S+\.\S+$/.test(emailInput.value);
  const passwordValid = passwordInput.value.length >= 8;

  if (emailValid && passwordValid) {
    alert('✅ Form submitted successfully!');
    form.reset();
    emailFeedback.textContent = '';
    passwordFeedback.textContent = '';
  } else {
    alert('❌ Please correct the form errors.');
  }
});
