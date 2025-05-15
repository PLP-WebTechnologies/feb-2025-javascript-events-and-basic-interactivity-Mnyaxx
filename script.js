const colors = [
  '#947BD3', '#BBB6DF', '#AF3800', '#BEC5AD',
  '#A4B494', '#52154E', '#FD5200', '#A30B37',
  '#383B53', '#136F63', '#032B43', '#FFBA08',
  '#D00000'
];

let colorIndex = 0;

const colorButton = document.getElementById('colorButton');
colorButton.addEventListener('click', () => {
  // Set background to the current color
  document.body.style.backgroundColor = colors[colorIndex];

  // Cycle to the next color
  colorIndex = (colorIndex + 1) % colors.length;

  // Update button text
  colorButton.textContent = `Color changed! 🎉`;
});

// Keypress to change background color and show message
document.addEventListener('keydown', () => {
  document.body.style.backgroundColor = '#fdfd96'; // Light yellow
  const keypressMessage = document.getElementById('keypressMessage');
  if (keypressMessage) {
    keypressMessage.textContent = 'You pressed a key! 🎹';
  }
});

// Surprise message setup
const surpriseMessage = document.createElement('div');
surpriseMessage.id = 'surpriseMessage';
surpriseMessage.textContent = '🎊 Surprise! You discovered the secret! 🎊';
surpriseMessage.style.cssText = `
  position: fixed;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #582B11;
  color: #EFFFC8;
  padding: 20px 40px;
  border-radius: 20px;
  font-size: 24px;
  font-family: 'Underdog', cursive;
  display: none;
  z-index: 999;
  animation: popUp 1s ease-in-out;
`;
document.body.appendChild(surpriseMessage);

// Animation style
const style = document.createElement('style');
style.innerHTML = `
@keyframes popUp {
  0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
  100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
}`;
document.head.appendChild(style);

// Confetti function (requires confetti library)
function launchConfetti() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
}

// Show surprise message
function showSurprise() {
  document.body.style.backgroundColor = '#FFB6C1'; // Light pink
  launchConfetti();
  surpriseMessage.style.display = 'block';
  setTimeout(() => {
    surpriseMessage.style.display = 'none';
    document.body.style.backgroundColor = colors[colorIndex]; // Reset to current color
  }, 3000);
}

// Double-click or long-press secret
const secretButton = document.getElementById('secretButton');
secretButton.addEventListener('dblclick', showSurprise);

let pressTimer;
secretButton.addEventListener('mousedown', () => {
  pressTimer = setTimeout(showSurprise, 1000);
});
secretButton.addEventListener('mouseup', () => clearTimeout(pressTimer));
secretButton.addEventListener('mouseleave', () => clearTimeout(pressTimer));

// Slideshow gallery - using class 'current' for highlight
const images = document.querySelectorAll('.gallery-image');
let current = 0;
setInterval(() => {
  images[current].classList.remove('current');
  current = (current + 1) % images.length;
  images[current].classList.add('current');
}, 3000);

// Form validation
const form = document.getElementById('myForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailFeedback = document.getElementById('emailFeedback');
const passwordFeedback = document.getElementById('passwordFeedback');

emailInput.addEventListener('input', () => {
  const email = emailInput.value;
  const isValid = /^\S+@\S+\.\S+$/.test(email);
  emailFeedback.textContent = isValid ? '' : 'Invalid email format';
});

passwordInput.addEventListener('input', () => {
  const password = passwordInput.value;
  passwordFeedback.textContent =
    password.length >= 8 ? '' : 'Password must be at least 8 characters';
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = emailInput.value;
  const password = passwordInput.value;
  const isEmailValid = /^\S+@\S+\.\S+$/.test(email);
  const isPasswordValid = password.length >= 8;

  if (isEmailValid && isPasswordValid) {
    alert('✅ Form submitted successfully!');
    form.reset();
    emailFeedback.textContent = '';
    passwordFeedback.textContent = '';
  } else {
    alert('❌ Please correct the form errors.');
  }
});

// Hover effect on box (#hoverBox)
const hoverBox = document.getElementById('hoverBox');
hoverBox.addEventListener('mouseover', () => {
  hoverBox.style.backgroundColor = 'lightgreen';
});

hoverBox.addEventListener('mouseout', () => {
  hoverBox.style.backgroundColor = '#6D3D14'; // original color from your CSS
});
