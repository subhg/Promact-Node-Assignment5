const express= require('express');
const bodyParser= require ('body-parser');
const app = express();
const port=3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', './views');

const mainController= require('./controllers/mainController.js');
const userController= require('./controllers/userController');

app.get('/',mainController.home);
app.get ('/users',userController.listUsers);
app.get('/create', userController.createUserForm);
app.post('/add',userController.addUser);

app.use((req, res) => {
    res.status(404).render('404', { title: '404 Page Not Found' });
  });

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });