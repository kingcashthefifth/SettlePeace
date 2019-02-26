module.exports = (app, db) => {
  // const pokemon = require('./controllers/pokemon')(db);
  const query = require('./controllers/query')(db);
  const quote = require('./controllers/quote')(db);

  app.get('/query', query.get);
  app.get('/quotelist', quote.getQuotes);
  app.get('/testjson', quote.jsonget);
  app.get('/testjson/new', quote.jsonform);
  app.post('/testjson', quote.jsoninsert);
  app.post('/quotelist', quote.addQuote);

  // app.get('/pokemon/:id', pokemon.get);
  // app.get('/api/pokemon/:id', pokemon.apiget);
};
