module.exports = (db) => {
  let jsonget = (request, response) => {
    db.pokemon.jsonget((error, data) => {
      if (error) {
        console.log('error getting data', error);
        response.statis(500);
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

  let apiget = (request, response) => {
    const stuff = {
      banana: 'oranges',
      kiwi: 'apple'
    };

    response.send(stuff);
  };

  let get = (request, response) => {
    // use pokemon model method `get` to retrieve pokemon data
    console.log(db);

    db.pokemon.get(request.params.id, (error, pokemon) => {
      // queryResult contains pokemon data returned from the pokemon model
      if (error) {
        console.error('error getting pokemon', error);
        response.status(500);
        response.send('server error');
      } else {
        if (pokemon === null) {
          // render pokemon view in the pokemon folder
          response.status(404);
          response.send('not found');
        } else {
          // render pokemon view in the pokemon folder
          response.render('pokemon/show', {pokemon: pokemon});
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
    get: get,
    apiget: apiget,
    jsonget: jsonget,
    jsonform: jsonform,
    jsoninsert: jsoninsert
  };
};
