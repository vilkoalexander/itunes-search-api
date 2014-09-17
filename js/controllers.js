var itunesApp = angular.module('itunesApp', []);

itunesApp.controller('ArtistListCtrl', function($scope, $http) {

$scope.artistName = '';

$scope.ajaxGet = function() {$http({method:'JSONP', params : {callback : 'JSON_CALLBACK'}, 
	url : 'https://itunes.apple.com/search?term=' + $scope.artistName})
	
	.success(function(data){
  	if ( data.results.length >= 1) {

  	//data for fields
  	$scope.artImg = data.results[0].artworkUrl100.replace('100x100', '200x200'); 
  	$scope.artist = data.results[0].artistName; 
  	$scope.artId = data.results[0].artistId;
  	$scope.artGenre = data.results[0].primaryGenreName;
  	$scope.artUrl = data.results[0].artistViewUrl;
  	$scope.prevUrl = data.results[0].previewUrl;
  	//show_hide
  	$scope.showDiv = true;
  	$scope.noMutchDiv = false;
  	
  	} else if (data.results.length <= 1) {
  		//show_hide
  		$scope.noMutchDiv = true;
  		$scope.showDiv = false;
  	} else {
  		$scope.noMutchDiv = false;
  	}

  	//show_hide
  	$scope.preSearchDiv = true;

  	//cycle var
  	$scope.resu  = data.results;
  	
  }); //succsse end

	
} //function end
}); //controller end 