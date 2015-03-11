System.register(["angular", "angular-route", "./components/users/_app", "./components/comments/_app"], function (_export) {
    var angular, angularRoute, UsersComponent, CommentsComponent;
    return {
        setters: [function (_angular) {
            angular = _angular["default"];
        }, function (_angularRoute) {
            angularRoute = _angularRoute["default"];
        }, function (_componentsUsers_app) {
            UsersComponent = _componentsUsers_app["default"];
        }, function (_componentsComments_app) {
            CommentsComponent = _componentsComments_app["default"];
        }],
        execute: function () {
            "use strict";

            _export("default", angular.module("Tombola.Core.UiComponents", ["ngRoute", UsersComponent.name, CommentsComponent.name]).config(["$routeProvider", function ($routeProvider) {
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