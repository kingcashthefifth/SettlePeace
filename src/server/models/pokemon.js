/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {
  // `dbPoolInstance` is accessible within this function scope

  let create = (pokemon, callback) => {
    // set up query
    const queryString = `INSERT INTO pokemons (name, num, img, weight, height)
      VALUES ($1, $2, $3, $4, $5) RETURNING *`;
    const values = [pokemon.name, pokemon.num, pokemon.img, pokemon.weight, pokemon.height];

    // execute query
    dbPoolInstance.query(queryString, values, (error, queryResult) => {
      // invoke callback function with results after query has executed

      if (error) {
        console.log('query error', error);

        // invoke callback function with results after query has executed
        callback(error, null);
      } else {
        // invoke callback function with results after query has executed

        if (queryResult.rows.length > 0) {
          callback(null, queryResult.rows[0]);
        } else {
          callback(null, null);
        }
      }
    });
  };

  let get = (id, callback) => {
    const values = [id];

    dbPoolInstance.query('SELECT * from pokemons WHERE id=$1', values, (error, queryResult) => {
      if (error) {
        // invoke callback function with results after query has executed
        callback(error, null);
      } else {
        // invoke callback function with results after query has executed

        if (queryResult.rows.length > 0) {
          callback(null, queryResult.rows[0]);
        } else {
          callback(null, null);
        }
      }
    });
  };

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
    create,
    get,
    jsonget
  };
};
