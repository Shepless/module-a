System.register(["angular", "../partials/directive-two", "../less/directive-two.css!"], function (_export) {
    var angular, template;
    return {
        setters: [function (_angular) {
            angular = _angular["default"];
        }, function (_partialsDirectiveTwo) {
            template = _partialsDirectiveTwo["default"];
        }, function (_lessDirectiveTwoCss) {}],
        execute: function () {
            "use strict";

            _export("default", angular.module("ui-components-directive-two", [template.name]).directive("directiveTwo", ["$templateCache", function ($templateCache) {
                return {
                    restrict: "E",
                    replace: true,
                    scope: {},
                    template: $templateCache.get("ui-components/partials/directive-two.html"),
                    link: function link() {
                        console.log("directive-two");
                    }
                };
            }]));
        }
    };
});