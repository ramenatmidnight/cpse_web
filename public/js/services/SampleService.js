// Sample service page

angular.module('NerdService',[]).factory('Nerd', ['$http', function ($http) {
  return {
    // get all nerds
    get: function() {
      return $http.get('/api/nerds');
    },

    // POST and create a new nerd
    create: function (nerdData) {
      return $http.post('/api/nerds', nerdData);
    },

    // DELETE a nerd
    delete: function (id) {
      return $http.delete('/api/nerds' + id);
    }
  }
}]);