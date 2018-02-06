myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/',{
            // location of the template
        	templateUrl		: 'views/mainView.html',
        	// Which controller it should use 
            controller 		: 'mainViewController',
            // what is the alias of that controller.
        	controllerAs 	: 'mainView'
        })
        .when('/views/matchView.html',{
             // location of the template
        	templateUrl     : 'views/matchView.html',
            // Which controller it should use 
        	controller 		: 'matchController',
            // what is the alias of that controller.
        	controllerAs 	: 'matchView'
        })
        .otherwise(
            {
                //redirectTo:'/'
                template   : '<h1><center>Error 404 : Page not found</center></h1>'
            }
        );
}]);