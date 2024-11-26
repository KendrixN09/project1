const express = require('express'); 
const app = express();
const port = 3005;

// Middleware to serve static files
app.use(express.static('public')); 

app.use(express.urlencoded({ extended: true })); // for parsing form data

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); // serve HTML form
});

app.post('/submit-form', (req, res) => {
    const username = req.body.username; // get form input
    // Add validation logic here
    res.send(`Username is ${username}`);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
