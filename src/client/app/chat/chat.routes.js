/*
 Created by: Lightnet


*/

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('chat', {
      url: '/chat',
      //template:'<span>chat</span>'
      templateUrl: 'app/chat/chat.html',
      controller: 'ChatController',
      controllerAs: 'chat'
    });
}