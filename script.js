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




// Keypress to change background color
document.addEventListener('keydown', () => {
  document.body.style.backgroundColor = '#fdfd96';
  document.getElementById('keypressMessage').textContent = 'You pressed a key! 🎹';
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

// Confetti function
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
    document.body.style.backgroundColor = '#947BD3'; // Reset background
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

// Slideshow gallery
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


// Button to change text or color
document.getElementById('colorButton').addEventListener('click', function() {
  document.body.style.backgroundColor = 'lightblue';
  this.innerHTML = 'Color Changed!';
});

// Hover effect on box
document.getElementById('hoverBox').addEventListener('mouseover', function() {
  this.style.backgroundColor = 'lightgreen';
});

document.getElementById('hoverBox').addEventListener('mouseout', function() {
  this.style.backgroundColor = 'lightgrey';
});

// Keypress detection
document.addEventListener('keydown', function() {
  document.body.style.backgroundColor = 'lightyellow';
});

// Secret double-click or long press
let longPressTimer;
document.getElementById('secretButton').addEventListener('mousedown', function() {
  longPressTimer = setTimeout(function() {
    alert('Long press detected!');
  }, 1000); // 1 second for long press
});

document.getElementById('secretButton').addEventListener('mouseup', function() {
  clearTimeout(longPressTimer); // Cancel long press timer if released too soon
});

document.getElementById('secretButton').addEventListener('dblclick', function() {
  alert('Double-click detected!');
});

// Image gallery functionality
let images = document.querySelectorAll('.gallery-image');
let currentIndex = 0;
setInterval(function() {
  images[currentIndex].style.border = '';
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].style.border = '3px solid red';
}, 2000);

// Form validation
document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault();
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  if (!email || !password) {
    alert('Please fill all the fields.');
  } else if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
  } else if (password.length < 8) {
    alert('Password must be at least 8 characters.');
  } else {
    alert('Form submitted successfully!');
  }
});

function validateEmail(email) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return re.test(email);
}
