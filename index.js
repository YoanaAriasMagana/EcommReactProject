const express = require('express') 
const app = express();
const mysql = require('mysql')
const cors = require('cors')
const bodyparser = require('body-parser')

//starts express server
const port = process.env.PORT || 5001

app.use(express.json())
app.use(cors())

app.listen(port, () => console.log(`Listening on port ${port}`));


//connection to mysql database in RDS
const db = mysql.createConnection({
    user: "root",
    host: "ecommproject.ccwofqolezde.us-east-1.rds.amazonaws.com",
    password: "Catsrcool6!",
    database: "productInfo",
});

//checking to make sure database is connected
db.connect((error)=> {
    if(error) {
        throw error
    }console.log('database connected')
})

//grabbing data from my database
app.get('/', (req, res) => {
    db.query('SELECT * FROM products', (err, rows, fields) => {
        if (err) throw err;
        res.send(rows);
    });
});

app.get('/:id', (req, res) => {
    db.query('SELECT * FROM products WHERE id = ?', [req.params.id], (err, rows, fields) => {
        if (err) throw err;
        else if (rows == []) {
            res.status(404).send('Product not found');
        }
        else {
            res.send(rows);
        }
    });
});

