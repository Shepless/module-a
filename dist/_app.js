System.register(["angular", "./directives/directive-one", "./directives/directive-two", "./directives/comments", "./components/users/_app"], function (_export) {
  var angular, directiveOne, directiveTwo, comments, usersComponent;
  return {
    setters: [function (_angular) {
      angular = _angular["default"];
    }, function (_directivesDirectiveOne) {
      directiveOne = _directivesDirectiveOne["default"];
    }, function (_directivesDirectiveTwo) {
      directiveTwo = _directivesDirectiveTwo["default"];
    }, function (_directivesComments) {
      comments = _directivesComments["default"];
    }, function (_componentsUsers_app) {
      usersComponent = _componentsUsers_app["default"];
    }],
    execute: function () {
      "use strict";

      _export("default", angular.module("ui-components", [directiveOne.name, directiveTwo.name, comments.name, usersComponent.name]));
    }
  };
});