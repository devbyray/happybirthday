var hbapp;

(function() {
	'use strict';

	hbapp = angular.module('hbapp', ['ngRoute']);
  
	hbapp.config(['$routeProvider', function($routeProvider) {
		$routeProvider.
		when('/', {
			templateUrl: 'views/home.html',
		}).
		otherwise({
			redirectTo: '/'
		});
	}]);


	hbapp.controller('bdButtonCtrl', ['$scope', function($scope) {

		$('#hide_editor').click(function() {
			$('#header_editor').slideToggle();
		});
	}]);

	hbapp.controller('bdMessageCtrl', ['$scope', function($scope) {
		$scope.hb_message = "Cupcake ipsum dolor sit. Amet chocolate cake candy apple pie applicake. I love cupcake lemon drops jelly-o. Apple pie gingerbread I love oat cake soufflé lemon drops. Cake cotton candy caramels muffin pie cake I love. Macaroon fruitcake croissant. I love bear claw I love I love pastry candy.";
	}]);


	hbapp.controller('bdFormCtrl', ['$scope', '$location', function($scope, $location) {

		$scope.location = $location;
		$scope.currentUrl = window.location;
	    $scope.$watch('location.search()', function() {
	        // $scope.target = ($location.search()).target;
	        $scope.hb_name_to = ($location.search()).hb_name_from;
	        // $scope.hb_email_from = ($location.search()).hb_email_from;

	        // $scope.hb_name_to = ($location.search()).hb_name_to;
	        // $scope.hb_date_of_birth = ($location.search()).hb_date_of_birth;

	        // $scope.hb_title = ($location.search()).hb_title;
	        // $scope.hb_message = ($location.search()).hb_message;

	    }, true);

	    $scope.changeTarget = function(name) {
	        // $location.search('target', name);
	    };


	}]);


	var t = new Trianglify({
    x_gradient: colorbrewer.YlGnBu[2], 
    y_gradient: colorbrewer.RdPu[0], 
    noiseIntensity: 0, 
    cellpadding: 10, 
    cellsize: 150});
	var pattern = t.generate(800, 600); // svg width, height
	document.body.setAttribute('style', 'background-image: '+pattern.dataUrl+'; background-size: cover;');


}());

