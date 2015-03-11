System.register(["angular", "./service", "./directive", "./template", "./style.css!"], function (_export) {
    var angular, CommentsService, CommentsDirective, Template;
    return {
        setters: [function (_angular) {
            angular = _angular["default"];
        }, function (_service) {
            CommentsService = _service["default"];
        }, function (_directive) {
            CommentsDirective = _directive["default"];
        }, function (_template) {
            Template = _template["default"];
        }, function (_styleCss) {}],
        execute: function () {
            "use strict";

            _export("default", angular.module("Tombola.Core.Comments", [Template.name]).service("CommentsService", CommentsService).directive("comments", CommentsDirective));
        }
    };
});