// http://stackoverflow.com/questions/19051041/cannot-overwrite-model-once-compiled-mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Scheme;

var CalculationSchema = new Schema({
  name: String,
  code: String,
  currency: String,
  exchange: String,
  term: Number,
  model: String,
  annual_passengers: String,
  annual_revenue: String
});

module.exports = mongoose.model('calculations', CalculationSchema);
