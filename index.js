// script.js
document.getElementById('signInForm').addEventListener('submit', function(event) {
     event.preventDefault(); // Prevent the form from submitting

    // Example validation
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'user' && password === 'password') {
        // Show success alert
        showAlert('successAlert');
        console.log("successful")
    } else {
        // Show error alert
        showAlert('errorAlert');
        console.log("error")

    }
});

function showAlert(alertId) {
    // Hide both alerts initially
    document.getElementById('errorAlert').style.display = 'none';
    document.getElementById('successAlert').style.display = 'none';

    // Show the selected alert
    document.getElementById(alertId).style.display = 'block';
}



