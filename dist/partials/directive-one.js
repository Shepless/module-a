"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var angular = _interopRequire(require("angular"));

module.exports = angular.module("ui-components/partials/directive-one.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("ui-components/partials/directive-one.html", "<h1 class=\"directive-one\">Directive One</h1>");
}]);