System.register(["angular", "../partials/directive-one", "../less/directive-one.css!"], function (_export) {
    var angular, template;
    return {
        setters: [function (_angular) {
            angular = _angular["default"];
        }, function (_partialsDirectiveOne) {
            template = _partialsDirectiveOne["default"];
        }, function (_lessDirectiveOneCss) {}],
        execute: function () {
            "use strict";

            _export("default", angular.module("ui-components-directive-one", [template.name]).directive("directiveOne", ["$templateCache", function ($templateCache) {
                return {
                    restrict: "E",
                    replace: true,
                    scope: {},
                    template: $templateCache.get("ui-components/partials/directive-one.html"),
                    link: function link() {
                        console.log("directive-one");
                    }
                };
            }]));
        }
    };
});