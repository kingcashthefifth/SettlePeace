/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {
  // `dbPoolInstance` is accessible within this function scope

  let signUpCheck = (request, callback) => {
    let query = 'SELECT * from users where username=$1;';
    let query2 = 'SELECT * from users where email=$1;';

    let values = [request.body.username];
    let values2 = [request.body.email];

    dbPoolInstance.query(query, values, (error, queryResult) => {
      dbPoolInstance.query(query2, values2, (error2, queryResult2) => {
        if (error || error2) {
          if (error) {
            console.log('model error: ', error);
            callback(error, null);
          }
          console.log('model error: ', error2);
          callback(error2, null);
        } else {
          console.log('model success', queryResult.rows);
          let testResult = {
            username: true,
            email: true
          };
          if (queryResult.rows.length > 0) {
            testResult.username = false;
          }
          if (queryResult2.rows.length > 0) {
            testResult.email = false;
          }
          console.log('testResult: ', testResult);
          callback(null, testResult);
        }
      });
    });
  };

  let createUser = (request, callback) => {
    let query =
      'INSERT INTO users (username, firstname, lastname, password, email) VALUES ($1, $2, $3, $4, $5) returning *;';

    let values = [
      request.body.username,
      request.body.firstname,
      request.body.lastname,
      request.body.password,
      request.body.email
    ];

    dbPoolInstance.query(query, values, (error, queryResult) => {
      if (error) {
        console.log('model error: ', error);
        callback(error, null);
      } else {
        console.log('model success', queryResult.rows);
        if (queryResult.rows.length > 0) {
          callback(null, queryResult.rows);
        } else {
          console.log('model null null error');
          callback(null, null);
        }
      }
    });
  };

  let loginCheck = (request, callback) => {
    let query = 'SELECT * from users where username=$1 AND password=$2;';

    let values = [request.body.username, request.body.password];

    dbPoolInstance.query(query, values, (error, queryResult) => {
      if (error) {
        console.log('model error: ', error);
        callback(error, null);
      } else {
        let testResult = {};
        if (queryResult.rows.length > 0) {
          testResult.check = true;
          testResult.id = queryResult.rows[0].id;
        } else {
          testResult.check = false;
        }
        console.log('testResult: ', testResult);
        callback(null, testResult);
      }
    });
  };

  return {
    signUpCheck,
    createUser,
    loginCheck
  };
};
