// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');

// Create an Express application
const app = express();

// Set up middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Set view engine and views directory
app.set('view engine', 'ejs');
app.set('views', './views');

// Import controllers
const mainController = require('./controllers/mainController.js');
const userController = require('./controllers/userController');

// Define routes
app.get('/', mainController.home);
app.get('/users', userController.listUsers);
app.get('/create', userController.createUserForm);
app.post('/add', userController.addUser);

// 404 Page
app.use((req, res) => {
    res.status(404).render('404', { title: '404 Page Not Found' });
});

// Start the server on specified port
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
