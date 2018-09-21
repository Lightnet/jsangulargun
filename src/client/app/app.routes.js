/*
 Created by: Lightnet


*/

routes.$inject = ['$urlRouterProvider'];

export default function routes($urlRouterProvider) {
    //console.log($urlRouterProvider);
    //$urlRouterProvider
        //.otherwise('/');

    $urlRouterProvider.otherwise('/access');
    
}