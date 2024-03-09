const mysql=require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Subham@02',
    database: 'nodeassignment',
  });

  connection.connect();

  exports.listUsers=(req,res)=>{
    connection.query('SELECT * FROM users',(err,results)=>{
        if (err) throw err;

        if(results.length>0){
            res.render('users',{
                title:'Users', users: results
            });
        } else{
            res.render('users',{title: 'Users', message: 'No users found'})
        }
    })
  }

  exports.createUserForm=(req,res)=>{
    res.render('create',{title:'Create User'});
  };

  exports.addUser =(req,res)=>{
    const {userName}= req.body;
    const user={ username: userName};

    connection.query('INSERT INTO users Set?',user,(err)=>{
        if(err) throw err;
        res.redirect('/users');
    })
  }