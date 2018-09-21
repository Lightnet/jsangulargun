/*
 Created by: Lightnet


*/
/*
 Created by: Lightnet


*/



routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
	$stateProvider    
	.state('access', {
		url: '/access',
		templateUrl: 'app/access/access.html',
		controller: 'AccessController',
		controllerAs: 'access'
	})
	.state('signup', {
		url:'/signup',
		templateUrl: 'app/access/signup.html',
		controller: 'AccessController',
		controllerAs: 'access'
	})
	.state('hint', {
		url: '/hint',
		templateUrl: 'app/access/hint.html',
		controller: 'AccessController',
		controllerAs: 'access'
    })
    ;
}