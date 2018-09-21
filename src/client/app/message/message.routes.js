/*
 Created by: Lightnet


*/

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('message', {
      url: '/message',
      //template:'<span>message</span>',
      templateUrl: 'app/message/message.html',
      //template: accesshtml,
      controller: 'MessageController',
      controllerAs: 'message'
    });
}