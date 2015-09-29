var angular = require('angular');

angular.module('app')
  .factory('JediService', JediService);

JediService.$inject = ['$http'];

function JediService($http) {
  return {
    getList: getList
  };

  function getList() {
    return $http({
      method: 'GET',
      url: '/jedis'
    }).then(function(response) {
      return response.data;
    });
  }
}