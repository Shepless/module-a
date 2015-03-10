System.register(["angular", "../services/comments", "../partials/comments", "../less/comments.css!"], function (_export) {
    var angular, service, template;
    return {
        setters: [function (_angular) {
            angular = _angular["default"];
        }, function (_servicesComments) {
            service = _servicesComments["default"];
        }, function (_partialsComments) {
            template = _partialsComments["default"];
        }, function (_lessCommentsCss) {}],
        execute: function () {
            "use strict";

            _export("default", angular.module("ui-components-comments", [service.name, template.name]).directive("comments", ["$templateCache", "CommentsService", function ($templateCache, CommentsService) {
                return {
                    restrict: "E",
                    replace: true,
                    scope: {},
                    template: $templateCache.get("ui-components/partials/comments.html"),
                    controller: ["$scope", function ($scope) {
                        CommentsService.get().then(function (comments) {
                            $scope.comments = comments;
                        });
                    }]
                };
            }]));
        }
    };
});