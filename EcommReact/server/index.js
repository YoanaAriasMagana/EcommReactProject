const express = require('express') 
const app = express();
const mysql = require('mysql')
const cors = require('cors')
const bodyparser = require('body-parser')

app.use(express.json())
app.use(cors())
const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "productInfo",
});
db.connect((error)=> {
    if(error) {
        throw error
    }console.log('database connected')
})
app.get('/productsdb', (req, res) => {
    db.query('SELECT * FROM products', (err, response) => {
        if(err) {
            throw error
        }else {
            res.send(response) 
        }
    })
})

app.listen(3001, () => {
    console.log("Your server is running on port 3001");
});
