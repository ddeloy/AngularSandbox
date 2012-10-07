angular.module('website', []).
    config(function($routeProvider) {
        $routeProvider.
            when('/about', {template:'partials/basic-template.html', controller:AboutCtrl}).
            when('/experiments', {template:'partials/basic-template.html', controller:ExperimentsCtrl   }).
            when('/home', {template:'partials/basic-template.html', controller:HomeCtrl   }).
            otherwise({redirectTo:'/home'});
    });

function AboutCtrl($scope) {
    $scope.title = 'About Page';
    $scope.body = 'This is the about page body';
	$scope.snippet='This is some la de da';
}

function ExperimentsCtrl($scope) {
    $scope.title = 'Experiments Page';
    $scope.body = 'This is the about experiments body';
}

function HomeCtrl($scope) {
    $scope.title = 'Home Page';
    $scope.body = 'This is the about home body';
}