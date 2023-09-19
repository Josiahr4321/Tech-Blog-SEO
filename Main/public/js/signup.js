const signupFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the signup form
  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (name && email && password) {
    // Send a POST request to the signup API endpoint
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If signup is successful, redirect the browser to the dashboard page
      document.location.replace('/dashboard');
    } else {
      // Display an alert with the error message if signup fails
      const errorMessage = await response.json();
      alert(errorMessage.message);
    }
  }
};

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);