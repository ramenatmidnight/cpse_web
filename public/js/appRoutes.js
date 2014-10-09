// here defined the Angular routes
angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
    // risky layout incoming ...
    .when('/', {
        templateUrl: 'views/new.html',
        controller: 'SortNewController'
    })

    .when('/new', {
        templateUrl: 'views/new.html',
        controller: 'SortNewController'
    })

    .when('/best', {
        templateUrl: 'views/best.html',
        controller: 'SortBestController'
    });

    $locationProvider.html5Mode(true);
}]);
