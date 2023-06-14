// Get the form element
var form = document.querySelector('form');

// Add event listener for form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get the input field values
  var nameInput = document.getElementById('name');
  var emailInput = document.getElementById('email');
  var messageInput = document.getElementById('message');
  var countryInput = document.getElementById('country');

  // Validate the inputs
  if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
    displayErrorMessage('Please fill in all fields.');
    return;
  }

  // Process the form data
  // You can perform any necessary operations with the form data here
  // For example, sending the data to a server using AJAX or performing client-side validation

  // Clear the form inputs
  nameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';
  countryInput.value = '';

  // Display success message
  displaySuccessMessage('Form submitted successfully.');
});

// Function to display an error message
function displayErrorMessage(message) {
  var errorDiv = document.createElement('div');
  errorDiv.classList.add('error-message');
  errorDiv.textContent = message;

  // Append the error message to the form
  form.appendChild(errorDiv);
}

// Function to display a success message
function displaySuccessMessage(message) {
  var successDiv = document.createElement('div');
  successDiv.classList.add('success-message');
  successDiv.textContent = message;

  // Append the success message to the form
  form.appendChild(successDiv);
}
