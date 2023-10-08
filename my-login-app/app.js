const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = 4000;

// Create a MySQL database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Geeta@6204',
    database: 'my-login-app'
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
    } else {
        console.log('Connected to the database');
    }
});

// Middleware for parsing JSON requests
app.use(bodyParser.json());

// Define a route for handling login
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Query the database for the user's credentials
    const query = `SELECT * FROM users WHERE username = ? AND password = ?`;

    db.query(query, [username, password], (err, results) => {
        if (err) {
            console.error('Database query error:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else if (results.length === 0) {
            // User not found or incorrect credentials
            res.status(401).json({ error: 'Invalid username or password' });
        } else {
            // Successful login
            res.status(200).json({ message: 'Login successful' });
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
