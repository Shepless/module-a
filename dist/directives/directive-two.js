System.register(["../less/directive-two.css!"], function (_export) {
    var DirectiveTwo;
    return {
        setters: [function (_lessDirectiveTwoCss) {}],
        execute: function () {
            "use strict";

            DirectiveTwo = function DirectiveTwo($templateCache) {
                return {
                    restrict: "E",
                    replace: true,
                    scope: {},
                    template: $templateCache.get("ui-components/partials/directive-two.html"),
                    link: function link() {
                        console.log("directive-two");
                    }
                };
            };

            DirectiveTwo.$inject = ["$templateCache"];

            _export("default", DirectiveTwo);
        }
    };
});