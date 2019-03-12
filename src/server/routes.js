module.exports = (app, db) => {
  const query = require('./controllers/query')(db);
  const quote = require('./controllers/quote')(db);
  const user = require('./controllers/user')(db);

  app.post('/api/signupcheck', user.signUpCheck);
  app.post('/api/createuser', user.createUser);
  app.get('/api/isloggedin', user.isLoggedIn);
  app.post('/api/logincheck', user.loginCheck);
  app.get('/api/logout', user.logout);

  app.get('/query', query.get);
  app.get('/api/quotelist', quote.getQuotes);
  app.get('/testjson', quote.jsonget);
  app.get('/testjson/new', quote.jsonform);
  app.post('/testjson', quote.jsoninsert);
  app.post('/quotelist', quote.addQuote);
  app.get('/api/quote/:id', quote.getSingleQuote);
  app.post('/api/update/quote/:id', quote.updateSingleQuote);
  app.get('/api/delete/:id', quote.deleteSingleQuote);
};
