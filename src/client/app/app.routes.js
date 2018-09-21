routes.$inject = ['$urlRouterProvider'];
export default function routes($urlRouterProvider) {

    console.log($urlRouterProvider);

    $urlRouterProvider.otherwise('/access');

    //$urlRouterProvider
        //.otherwise('/access');
        //.when("/home")
        //.otherwise({redirectTo:"access"});
        //.when('/',{
            //template:'<span>Hello</span>'
        //})
}