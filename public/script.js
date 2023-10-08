
        // JavaScript code for handling form submission and signup button click
        document.getElementById("login-form").addEventListener("submit", function(event) {
            event.preventDefault();
            // Collect user input and send it to the backend API
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            // Make an API call to the backend (you need to implement this)
            // You can use fetch or any other method to call the backend API
            // Example: fetch('/api/login', { method: 'POST', body: JSON.stringify({ username, password }) })
        });

        document.getElementById("signup-button").addEventListener("click", function() {
            // Redirect to the signup page or show a signup modal (your choice)
            // Example: window.location.href = '/signup.html';
        });
        
fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
})
.then((response) => response.json())
.then((data) => {
    // Handle the response from the backend (e.g., display a success message or error)
    console.log(data);
})
.catch((error) => {
    console.error('API request error:', error);
});

    