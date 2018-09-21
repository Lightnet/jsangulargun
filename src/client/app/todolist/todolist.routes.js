/*
 Created by: Lightnet


*/

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('todolist', {
      url: '/todolist',
      //template:'<span>todolist</span>',
      //template: accesshtml,
      templateUrl: 'app/todolist/todolist.html',
      controller: 'ToDoListController',
      controllerAs: 'todolist'
    });
}