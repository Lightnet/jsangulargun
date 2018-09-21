/*
 Created by: Lightnet


*/

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: './app/home/home.html',
      controller: 'HomeController',
      controllerAs: 'home'
    });
}