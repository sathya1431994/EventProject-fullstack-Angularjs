angular.module('mainApp', ['ui.router']).config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home")
    $stateProvider
        .state('eventindex', {
            url: "/home",
            templateUrl: "App/Event/EventIndex.html",
            controller: "eventindexctrl",
            controllerAs: "ad"
        })
        .state('addevent', {
            url: "/AddEvent",
            params: {
                'index': null,
                'events': null
            },
            templateUrl: "App/Event/AddEvent.html",
            controller: "addeventctrl",
            controllerAs: "ad"
        })
}]);