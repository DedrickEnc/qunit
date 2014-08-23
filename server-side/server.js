// un sever minimal avec express

var express      = require('express')
  , app          = express();

app.configure(function () {
  app.use(express.static('client-side')); //definition du dossier public equivalent du dossier www pour le serveur apache
  app.use(app.router);
});

app.get('/', function (req, res, next) {
  res.sendfile('/index.html');
});

app.listen(3000, console.log("Serveur tourne sur le port 3000"));
