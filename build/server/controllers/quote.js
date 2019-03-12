module.exports = (db) => {
  let getQuotes = (request, response) => {
    db.quote.getQuotes(request, (err, data) => {
      if (err) {
        console.log('error getting data', err);
        response.status(500);
        response.send('server error');
      } else {
        if (data == null) {
          response.status(404);
          response.send('not found');
        } else {
          console.log('get data success: ', data);
          response.send(data);
        }
      }
    });
  };

  let getSingleQuote = (request, response) => {
    db.quote.getSingleQuote(request, (err, data) => {
      if (err) {
        console.log('error getting data', err);
        response.status(500);
        response.send('server error');
      } else {
        if (data == null) {
          response.status(404);
          response.send('not found');
        } else {
          console.log('get data success: ', data);
          response.send(data);
        }
      }
    });
  };

  let updateSingleQuote = (request, response) => {
    console.log('request.body', request.body);
    console.log('request.body.part_no', request.body.part_no);

    db.quote.updateSingleQuote(request, (err, data) => {
      if (err) {
        console.log('error getting data', err);
        response.status(500);
        response.send('server error');
      } else {
        if (data == null) {
          response.status(404);
          response.send('not found');
        } else {
          console.log('get data success: ', data);
          response.redirect('/quotes');
        }
      }
    });
  };

  let deleteSingleQuote = (request, response) => {
    console.log('request.body', request.body);
    console.log('request.body.part_no', request.body.part_no);

    db.quote.deleteSingleQuote(request, (err, data) => {
      if (err) {
        console.log('error getting data', err);
        response.status(500);
        response.send('server error');
      } else {
        if (data == null) {
          response.status(404);
          response.send('not found');
        } else {
          console.log('get data success: ', data);
          response.redirect('/quotes');
        }
      }
    });
  };

  let addQuote = (request, response) => {
    console.log('request.body', request.body);
    console.log('request.body.part_no', request.body.part_no);
    // response.redirect('/quotes');
    // response.send(request.body);

    // response.send(request.body);
    db.quote.addQuote(request, (err, data) => {
      if (err) {
        console.log('error getting data', err);
        response.status(500);
        response.send('server error');
      } else {
        if (data == null) {
          response.status(404);
          response.send('not found');
        } else {
          console.log('get data success: ', data);
          response.redirect('/quotes');
        }
      }
    });
  };

  let jsonget = (request, response) => {
    db.quote.jsonget((error, data) => {
      if (error) {
        console.log('error getting data', error);
        response.status(500);
        response.send('server error');
      } else {
        if (data == null) {
          response.status(404);
          response.send('not found');
        } else {
          console.log('get data success: ', data);
          response.send(data);
        }
      }
    });
  };

  const jsonform = (request, response) => {
    response.render('pokemon/jsonform');
  };

  const jsoninsert = (request, response) => {
    console.log('TCL: jsoninsert -> request.body', request.body);
    let docline = [];
    for (i = 0; i < request.body.part_no.length; i++) {
      let tempObj = {
        part_no: request.body.part_no[i],
        description: request.body.description[i],
        price: request.body.price[i],
        tax: request.body.tax[i]
      };
      docline.push(tempObj);
    }
    console.log('TCL: jsoninsert -> docline after loop', docline);
    debugger;
    db.pokemon.jsonget((error, data) => {
      if (error) {
        console.log('error getting data', error);
        response.status(500);
        response.send('server error');
      } else {
        if (data == null) {
          response.status(404);
          response.send('not found');
        } else {
          console.log('insert data success: ', data);
          response.send(data);
        }
      }
    });
  };

  return {
    getQuotes: getQuotes,
    getSingleQuote: getSingleQuote,
    updateSingleQuote: updateSingleQuote,
    deleteSingleQuote: deleteSingleQuote,
    addQuote: addQuote,
    jsonget: jsonget,
    jsonform: jsonform,
    jsoninsert: jsoninsert
  };
};
