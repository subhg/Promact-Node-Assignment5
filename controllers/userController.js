// Import the MySQL module
const mysql = require('mysql');

// Create a MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',        
    user: 'root',             
    password: 'Subham@02',    
    database: 'nodeassignment' 
});

// Connect to the MySQL server
connection.connect();

// Controller function to list users
exports.listUsers = (req, res) => {
    // Execute a SELECT query to retrieve all users from the 'users' table
    connection.query('SELECT * FROM users', (err, results) => {
        if (err) throw err;

        
        if (results.length > 0) {
            res.render('users', {
                title: 'Users',
                users: results
            });
        } else {
            res.render('users', {
                title: 'Users',
                message: 'No users found'
            });
        }
    });
};

// Controller function to render the user creation form
exports.createUserForm = (req, res) => {
    res.render('create', {
        title: 'Create User'
    });
};

// Controller function to add a new user to the 'users' table
exports.addUser = (req, res) => {
    const { userName } = req.body;
    const user = {
        username: userName
    };

    // Execute an INSERT query to add the new user to the 'users' table
    connection.query('INSERT INTO users SET ?', user, (err) => {
        if (err) throw err;
        res.redirect('/users');
    });
};
