var bodyParser = require('body-parser');

module.exports = function(app, express) {
  app.use("/", express.static("public/"));
  app.set("views", __dirname + "/../public/views");
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
};
