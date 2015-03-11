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
                        users: "="
                    },
                    template: $templateCache.get("ui-components/components/users/template.html")
                };
            }]);
        }
    };
});