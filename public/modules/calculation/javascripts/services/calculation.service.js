angular.module('calculation').factory('Calculation', function ($resource) {
  return [
    {
      "_id": 1231232132,
      "name": "calculation One",
      "code": "123",
      "currency": "USD",
      "exchange": 1.03,
      "term": 5,
      "model": "Business model one",
      "annual_passengers": 33000120,
      "annual_revenue": 12312223,
      "created": new Date(1429715706454),
      "updated": new Date(1429715706554)
    }];
  //return $resource('calculations/":calculationId"');
});
