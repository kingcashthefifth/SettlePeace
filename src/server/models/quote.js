/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {
  // `dbPoolInstance` is accessible within this function scope

  let getQuotes = (request, callback) => {
    let query = 'SELECT * from quotes where author_id=$1 ORDER BY id ASC;';
    let values = [request.cookies['user_id']];
    // let query2 = 'SELECT quote_ref, title, attention from quotes;';

    dbPoolInstance.query(query, values, (error, queryResult) => {
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

  let getSingleQuote = (request, callback) => {
    let query = `SELECT * from quotes WHERE id=$1;`;
    const values = [request.params.id];

    dbPoolInstance.query(query, values, (error, queryResult) => {
      if (error) {
        console.log('model error: ', error);
        callback(error, null);
      } else {
        // invoke callback function with results after query has executed
        console.log('model success', queryResult.rows);

        if (queryResult.rows.length > 0) {
          console.log('queryResult.rows :', queryResult.rows);
          callback(null, queryResult.rows[0]);
        } else {
          console.log('model null null error');
          callback(null, null);
        }
      }
    });
  };

  let updateSingleQuote = (request, callback) => {
    console.log('reached updateSingleQuote model!!!!!!!');
    let query = `UPDATE quotes SET company_name=$1, company_addr1=$2, company_addr2=$3, company_postal=$4, company_gst=$5, customer_com_name=$6, customer_com_addr1=$7, customer_com_postal=$8, customer_attention=$9, customer_email=$10, customer_number=$11, quote_ref=$12, quote_date=$13, job_title=$14, discount=$15, part_no=$16, description=$17, quantity=$18, price=$19 WHERE id=$20 returning *`;

    let values = [
      request.body.company_name,
      request.body.company_addr1,
      request.body.company_addr2,
      request.body.company_postal,
      request.body.company_gst,
      request.body.customer_com_name,
      request.body.customer_com_addr1,
      request.body.customer_com_postal,
      request.body.customer_attention,
      request.body.customer_email,
      request.body.customer_number,
      request.body.quote_ref,
      request.body.quote_date,
      request.body.job_title,
      request.body.discount,
      request.body.part_no,
      request.body.description,
      request.body.quantity,
      request.body.price,
      request.params.id
    ];

    dbPoolInstance.query(query, values, (error, queryResult) => {
      if (error) {
        console.log('model error: ', error);
        callback(error, null);
      } else {
        // invoke callback function with results after query has executed
        console.log('model success', queryResult.rows);

        if (queryResult.rows.length > 0) {
          console.log('queryResult.rows :', queryResult.rows);
          callback(null, queryResult.rows[0]);
        } else {
          console.log('model null null error');
          callback(null, null);
        }
      }
    });
  };

  let deleteSingleQuote = (request, callback) => {
    console.log('reached deleteSingleQuote model!!!!!!!');
    let query = `DELETE from quotes WHERE id=$1 returning *`;

    let values = [request.params.id];

    dbPoolInstance.query(query, values, (error, queryResult) => {
      if (error) {
        console.log('model error: ', error);
        callback(error, null);
      } else {
        // invoke callback function with results after query has executed
        console.log('model success', queryResult.rows);

        if (queryResult.rows.length > 0) {
          console.log('queryResult.rows :', queryResult.rows);
          callback(null, queryResult.rows[0]);
        } else {
          console.log('model null null error');
          callback(null, null);
        }
      }
    });
  };

  let jsonget = (callback) => {
    // const values = [id];
    // let query = 'SELECT json_array_elements(docline) as docline from quotes;'
    // let query = 'SELECT quote_ref, title, attention from quotes where id=3;';
    let query = 'SELECT * from quotes where id=1;';
    // let query2 = 'SELECT json_array_elements(docline) as docline from quotes where id=3;';

    // dbPoolInstance.query(query, (error, queryResult) => {
    dbPoolInstance.query(query, (error, queryResult) => {
      if (error) {
        console.log('model error', error);
        // invoke callback function with results after query has executed
        callback(error, null);
      } else {
        // invoke callback function with results after query has executed
        console.log('model success', queryResult.rows);

        if (queryResult.rows.length > 0) {
          callback(null, queryResult.rows);
        } else {
          console.log('model null null error');
          callback(null, null);
        }
      }
    });
    // });
  };

  let addQuote = (request, callback) => {
    let query =
      'INSERT INTO quotes (company_name, company_addr1, company_addr2, company_postal, company_gst, customer_com_name, customer_com_addr1, customer_com_postal, customer_attention, customer_email, customer_number, quote_ref, quote_date, job_title, discount, part_no, description, quantity, price, author_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20) returning *;';

    let values = [
      request.body.company_name,
      request.body.company_addr1,
      request.body.company_addr2,
      request.body.company_postal,
      request.body.company_gst,
      request.body.customer_com_name,
      request.body.customer_com_addr1,
      request.body.customer_com_postal,
      request.body.customer_attention,
      request.body.customer_email,
      request.body.customer_number,
      request.body.quote_ref,
      request.body.quote_date,
      request.body.job_title,
      request.body.discount,
      request.body.part_no,
      request.body.description,
      request.body.quantity,
      request.body.price,
      request.cookies['user_id']
    ];

    dbPoolInstance.query(query, values, (error, queryResult) => {
      if (error) {
        console.log('model error', error);
        // invoke callback function with results after query has executed
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

  return {
    getSingleQuote,
    updateSingleQuote,
    deleteSingleQuote,
    addQuote,
    getQuotes,
    jsonget
  };
};
