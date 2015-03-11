System.register(["angular", "angular-route", "./directives/directive-one", "./directives/directive-two", "./components/users/_app", "./components/comments/_app"], function (_export) {
    var angular, angularRoute, DirectiveOne, DirectiveTwo, UsersComponent, CommentsComponent;
    return {
        setters: [function (_angular) {
            angular = _angular["default"];
        }, function (_angularRoute) {
            angularRoute = _angularRoute["default"];
        }, function (_directivesDirectiveOne) {
            DirectiveOne = _directivesDirectiveOne["default"];
        }, function (_directivesDirectiveTwo) {
            DirectiveTwo = _directivesDirectiveTwo["default"];
        }, function (_componentsUsers_app) {
            UsersComponent = _componentsUsers_app["default"];
        }, function (_componentsComments_app) {
            CommentsComponent = _componentsComments_app["default"];
        }],
        execute: function () {
            "use strict";

            _export("default", angular.module("Tombola.Core.UiComponents", ["ngRoute", DirectiveOne.name, DirectiveTwo.name, UsersComponent.name, CommentsComponent.name]).config(["$routeProvider", function ($routeProvider) {
                $routeProvider.when("/", {
                    template: "<div><h1>Users</h1><users users=\"application.users\"></users><h1>Comments</h1><comments comments=\"application.comments\"></comments></div>",
                    resolve: {
                        users: ["UsersService", function (UsersService) {
                            return UsersService.get();
                        }],
                        comments: ["CommentsService", function (CommentsService) {
                            return CommentsService.get();
                        }]
                    },
                    controllerAs: "application",
                    controller: ["$scope", "users", "comments", function ($scope, users, comments) {
                        this.users = users;
                        this.comments = comments;
                    }]
                }).otherwise({
                    redirectTo: "/"
                });
            }]));
        }
    };
});