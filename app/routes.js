// here defined routes for the Node backend, APi routes or any other routes of that nature
// API or CRUD goes here
// other routes ....

module.exports = function (express, app) {
  // server routes.
  // handle things like API calls
  // authentication routes

  // Express' router
  //var express = require('express');
  var router = express.Router();

  // API route ////////////////////////////////////////////
  // ignore this
  /*
  app.get('/api/nerds', function (req, res) {
    console.log('getting nerd');
    // FOR APIs: USE MONGOOSE to get all nerds in the DATABASE
    Nerd.find(function (err, nerds) {
      // if there's an error, only send the error
      if (err) res.send(err);
      // return all nerds in JSON format
      res.json(nerds);
    });
  });
  */

  // logging to console whenever some API is accessed
  /*app.use(function (req, res, next) {
    console.log('API shit going on');
    next();
  });*/

  // logging at /api
  app.get('/api', function (req, res) {
    res.json({ message: 'Whalecum to the realm of API!'});
  });

  // imminent horrible layout
  app.post('/api/wallpapers', function (req, res) {
    console.log('Creating Wallpaper');
    // new instance of Wallpaper model
    var wallpaper = new Wallpaper();
    // request includes the name
    wallpaper.name = req.body.name;
    wallpaper.save(function (err) {
      if (err)
        res.send(err);
      res.json({ message: 'YARRRRRRRRR!'});
      console.log('Wallpaper Created');
    });
  });

  // front end route //////////////////////////////////////
  // to handle Angular requests
  app.get('*', function (req, res) {
    // only load index.html regardless of url
    res.sendfile('./public/views/index.html');
  });

  // register the routes.
  // whatever uses router doesnt need to add /api before that
  // check above
  //app.use('/api', router);
};