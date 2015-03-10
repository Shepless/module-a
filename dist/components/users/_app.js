System.register(["angular", "./service", "./directive", "./template", "./style.css!"], function (_export) {
    var angular, UsersService, UsersDirective, Template;
    return {
        setters: [function (_angular) {
            angular = _angular["default"];
        }, function (_service) {
            UsersService = _service["default"];
        }, function (_directive) {
            UsersDirective = _directive["default"];
        }, function (_template) {
            Template = _template["default"];
        }, function (_styleCss) {}],
        execute: function () {
            "use strict";

            _export("default", angular.module("Tombola.Core.Users", [Template.name]).service("UsersService", UsersService).directive("users", UsersDirective));
        }
    };
});