/*
 Created by: Lightnet


*/

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  	$stateProvider
    	.state('account', {
      		url: '/account',
			//template:'<span>account</span>',
			templateUrl: 'app/account/account.html',
      		//template: accesshtml,
      		controller: 'AccountController',
      		controllerAs: 'account'
    });
}