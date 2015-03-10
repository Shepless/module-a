System.register(["angular"], function (_export) {
  var angular;
  return {
    setters: [function (_angular) {
      angular = _angular["default"];
    }],
    execute: function () {
      "use strict";

      angular.module("ui-components-templates", []).run(["$templateCache", function ($templateCache) {
        $templateCache.put("ui-components/partials/directive-one.html", "<h1 class=\"directive-one\">Directive One</h1>");
        $templateCache.put("ui-components/partials/directive-two.html", "<h1 class=\"directive-two\">Directive Two</h1>");
      }]);
    }
  };
});