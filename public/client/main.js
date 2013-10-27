var app = angular.module('shortly', []);

app.controller('shortenUrlCtrl', function($scope, $http) {
  // construct our http request
  $http({
    method: 'Get',
    url: '/links',
  }).success(function(data, status) {
  	$scope.dataBody = data;
  }).error(function(data, status) {
    // Some error occurred
  });
});