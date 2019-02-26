/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {
  // `dbPoolInstance` is accessible within this function scope

  let getQuotes = (callback) => {
    let query = 'SELECT * from quotes;';
    let query2 = 'SELECT quote_ref, title, attention from quotes;';

    dbPoolInstance.query(query2, (error, queryResult) => {
      if (error) {
        console.log('model error: ', error);
        callback(error, null);
      } else {
        // invoke callback function with results after query has executed
        console.log('model success', queryResult.rows);

        if (queryResult.rows.length > 0) {
          console.log('queryResult.rows :', queryResult.rows);
          callback(null, queryResult.rows);
        } else {
          console.log('model null null error');
          callback(null, null);
        }
      }
    });
  };

  // let get = (id, callback) => {
  //   const values = [id];

  //   dbPoolInstance.query('SELECT * from pokemons WHERE id=$1', values, (error, queryResult) => {
  //     if (error) {
  //       // invoke callback function with results after query has executed
  //       callback(error, null);
  //     } else {
  //       // invoke callback function with results after query has executed

  //       if (queryResult.rows.length > 0) {
  //         callback(null, queryResult.rows[0]);
  //       } else {
  //         callback(null, null);
  //       }
  //     }
  //   });
  // };

  let jsonget = (callback) => {
    // const values = [id];
    // let query = 'SELECT json_array_elements(docline) as docline from quotes;'
    let query = 'SELECT quote_ref, title, attention from quotes where id=3;';
    let query2 = 'SELECT json_array_elements(docline) as docline from quotes where id=3;';

    dbPoolInstance.query(query, (error, queryResult) => {
      dbPoolInstance.query(query2, (error2, queryResult2) => {
        if (error) {
          console.log('model error', error);
          // invoke callback function with results after query has executed
          callback(error, null);
        } else {
          // invoke callback function with results after query has executed
          console.log('model success', queryResult.rows);

          if (queryResult.rows.length > 0) {
            let doclineArr = [];
            let result = queryResult2.rows;
            result.forEach(function(lines) {
              let tempObj = {
                part_no: lines.docline.part_no,
                description: lines.docline.description,
                price: lines.docline.price,
                tax: lines.docline.tax
              };
              doclineArr.push(tempObj);
            });
            console.log('doclineArr: ', doclineArr);

            let finalResult = {
              info: queryResult.rows[0],
              lines: doclineArr
            };
            console.log('resultObj: ', finalResult);
            callback(null, finalResult);
          } else {
            console.log('model null null error');
            callback(null, null);
          }
        }
      });
    });
  };

  return {
    getQuotes,
    jsonget
  };
};
