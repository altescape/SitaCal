angular.module('calculation').factory('Calculations', function ($resource) {
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
      "updated": new Date(1429715706474) 
    },
    {
      "_id": 9812332132,
      "name": "calculation Two",
      "code": "456",
      "currency": "GBP",
      "exchange": 1.23,
      "term": 2,
      "model": "Business model two",
      "annual_passengers": 66000120,
      "annual_revenue": 22312223,
      "created": new Date(1429715705434),
      "updated": new Date(1429715705934) 
    },
    {
      "_id": 1123578532,
      "name": "calculation Three",
      "code": "789",
      "currency": "USD",
      "exchange": 1.43,
      "term": 1,
      "model": "Business model three",
      "annual_passengers": 99000120,
      "annual_revenue": 32312223,
      "created": new Date(1429705703934),
      "updated": new Date(1398782143000) 
    }];
  //return $resource('calculations/');
});
