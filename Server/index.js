const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const port = 5000;

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
  host:'localhost',
    user: 'root',
    password:'@Khalid2020',
    database:'job_adverts'
});

db.connect((err) => {
  if (err){
    console.log("An error has occured")
  };
  console.log('Connected to the MySQL database!');
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
  
app.get('/api/jobs', (req, res) => {
  const query = 'SELECT * FROM job_advertisements';
  db.query(query, (err, result) => { 
    if (err) {
      console.error('Error fetching jobs:', err);
      res.status(500).json({ error: 'Failed to fetch jobs.' });
    } else {
        console.log("Query results")
      res.status(200).json(result);
    }
  });
});

