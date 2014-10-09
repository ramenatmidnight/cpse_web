// Controller for sorting best wallpapers

angular.module('SortBestCtrl',[]).controller('SortBestController', function ($scope, InstagramService) {
    $scope.tagline = "Is someone getting the best, the best ... of you?";

    $scope.layout = 'grid';

    // use the InstagramService to fetch a list of pics
    $scope.pics = [];
    InstagramService.fetchPopular(function(data){
        $scope.pics = data;
    });

});
