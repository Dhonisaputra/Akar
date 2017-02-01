window.app = angular.module("generator", ["ngRoute"]);
window.app.config(function($routeProvider) {
    $routeProvider
    .when("/add/component", {
        templateUrl : "templates/workplace.php",
        controller: 'workplaceCont as wp'
    })
    .when("/new/project", {
        templateUrl : "templates/projects/create__new_project.php",
        controller: 'new_project as np'
    })
    .when("/green", {
        templateUrl : "green.htm"
    })
    .when("/blue", {
        templateUrl : "blue.htm"
    })
    .otherwise('/');
});
