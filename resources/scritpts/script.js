
var form = document.querySelector('form');


form.addEventListener('submit', function(event) {
  event.preventDefault(); 


  var nameInput = document.getElementById('name');
  var emailInput = document.getElementById('email');
  var messageInput = document.getElementById('message');
  var countryInput = document.getElementById('country');

  // Validate the inputs
  if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
    displayErrorMessage('Please fill in all fields.');
    return;
  }


  nameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';
  countryInput.value = '';

  displaySuccessMessage('Form submitted successfully.');
});


function displayErrorMessage(message) {
  var errorDiv = document.createElement('div');
  errorDiv.classList.add('error-message');
  errorDiv.textContent = message;


  form.appendChild(errorDiv);
}


function displaySuccessMessage(message) {
  var successDiv = document.createElement('div');
  successDiv.classList.add('success-message');
  successDiv.textContent = message;


  form.appendChild(successDiv);
}
