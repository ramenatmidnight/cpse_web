// Controller for sorting new wallpapers

angular.module('SortNewCtrl',[]).controller('SortNewController', function ($scope, InstagramService) {
    $scope.tagline = "Stay HUNGRY! Stay FOOLISH!";

    $scope.layout = 'grid';

    // use the InstagramService to fetch a list of pics
    // THIS IS WHERE THE DATA ARE PUT INTO,
    // SO THAT THEY CAN BE PASSED ONTO THE VIEWS
    $scope.pics = [];
    InstagramService.fetchPopular(function(data){
        $scope.pics = data;
    });
});
