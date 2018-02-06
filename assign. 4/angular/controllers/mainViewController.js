myApp.controller('mainViewController', ['$http' , function($http){

	var main = this ;
	this.heading = " English Premeir Leauge Results " ;
	this.subheading = " Details of EPL matches 2015-16 & 2016-17 ";
	this.DataOf2015 = [] ;
	this.DataOf2016 = [] ;

	this.loadAllMatches = function(){

		main.loadMatchesHeldIn2015 = function(){
			$http({
				method: 'GET',
				url: 'https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json'

			}).then(function successCallback(response){

				console.log(response);
				main.DataOf2015 = response.data.rounds ;

			}, function errorCallback(response) {

				 alert("some error occurred. Check the console.");
                 console.log(response);
			});
			}();

        main.loadMatchesHeldIn2016 = function(){
			$http({
				method: 'GET',
				url: 'https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json'

			}).then(function successCallback(response){

				console.log(response);
				main.DataOf2016 = response.data.rounds ;

			}, function errorCallback(response) {

				 alert("some error occurred. Check the console.");
                 console.log(response);
			});
			}();
		

	} (); //end of loadAllMatches

}]); //end of mainViewController