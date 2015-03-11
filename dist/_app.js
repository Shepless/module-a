System.register(["angular", "./directives/directive-one", "./directives/directive-two", "./components/users/_app", "./components/comments/_app"], function (_export) {
    var angular, DirectiveOne, DirectiveTwo, UsersComponent, CommentsComponent;
    return {
        setters: [function (_angular) {
            angular = _angular["default"];
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

            _export("default", angular.module("Tombola.Core.UiComponents", [DirectiveOne.name, DirectiveTwo.name, UsersComponent.name, CommentsComponent.name]));
        }
    };
});