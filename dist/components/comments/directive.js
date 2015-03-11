System.register([], function (_export) {
    return {
        setters: [],
        execute: function () {
            "use strict";

            _export("default", ["$templateCache", function ($templateCache) {
                return {
                    restrict: "E",
                    replace: true,
                    scope: {
                        comments: "="
                    },
                    template: $templateCache.get("ui-components/components/comments/template.html")
                };
            }]);
        }
    };
});