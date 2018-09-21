/*
 Created by: Lightnet


*/

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('account', {
      url: '/account',
      template:'<span>account</span>'
      //template: accesshtml,
      //controller: 'HomeController',
      //controllerAs: 'home'
    });
}