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
