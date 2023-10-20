import mysql from 'mysql';

const connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password:'@Khalid2020',
    database:'job_adverts'
})


connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err.message);
      return;
    }
    console.log('Connected to MySQL database!');

    const sqlQuery = 'SELECT * FROM counties'; // Replace 'your_table_name' with the actual table name

    connection.query(sqlQuery, (err, results) => {
      if (err) {
        console.error('Error executing SELECT query:', err.message);
        return;
      }
      // Process the results
      console.log('SELECT query results:');
      console.log(results[0]);
    });
    
  });

  


