const sha256 = require('js-sha256');

module.exports = (db) => {
  let signUpCheck = (request, response) => {
    console.log('request.body: ', request.body);
    db.user.signUpCheck(request, (err, data) => {
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

  let createUser = (request, response) => {
    console.log('request.body: ', request.body);
    db.user.createUser(request, (err, data) => {
      if (err) {
        console.log('error getting data', err);
        response.status(500);
        response.send('server error');
      } else {
        if (data == null) {
          response.status(404);
          response.send('not found');
        } else {
          let salt = 'i am so handsome, you are beautiful';
          let userid = data[0].id;
          let sessionCookie = sha256(userid + 'logged_in' + salt);
          response.cookie('user_id', userid);
          response.cookie('SPsession', sessionCookie);
          console.log('get data success: ', data);
          response.redirect('/');
        }
      }
    });
  };

  let isLoggedIn = (request, response) => {
    console.log('request.body: ', request.body);
    let salt = 'i am so handsome, you are beautiful';
    let result = {};
    if (request.cookies['SPsession'] == sha256(request.cookies['user_id'] + 'logged_in' + salt)) {
      console.log('controller isLoggedIn cookie true with user_id cookie authen');
      console.log(`request.cookies['SPsession']: `, request.cookies['SPsession']);
      console.log(`sha256(request.cookies['user_id']: `, sha256(request.cookies['user_id']));
      console.log(`salt: `, salt);

      result.authen = true;
      response.send(result);
    } else {
      result.authen = false;
      response.send(result);
    }
  };

  let loginCheck = (request, response) => {
    console.log('request.body: ', request.body);
    db.user.loginCheck(request, (err, data) => {
      if (err) {
        console.log('error getting data', err);
        response.status(500);
        response.send('server error');
      } else {
        if (data == null) {
          response.status(404);
          response.send('not found');
        } else {
          if (data.check) {
            let salt = 'i am so handsome, you are beautiful';
            let userid = data.id;
            let sessionCookie = sha256(userid + 'logged_in' + salt);
            response.cookie('user_id', userid);
            response.cookie('SPsession', sessionCookie);
            console.log('get data success: ', data);
            response.send(data);
          } else {
            response.send(data);
          }
        }
      }
    });
  };

  let logout = (request, response) => {
    response.clearCookie('SPsession');
    response.clearCookie('user_id');
    response.send('done');
  };

  return {
    signUpCheck: signUpCheck,
    createUser: createUser,
    isLoggedIn: isLoggedIn,
    loginCheck: loginCheck,
    logout: logout
  };
};
