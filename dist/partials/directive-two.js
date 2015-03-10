"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var angular = _interopRequire(require("angular"));

module.exports = angular.module("ui-components/partials/directive-two.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("ui-components/partials/directive-two.html", "<h1 class=\"directive-two\">Directive Two</h1>");
}]);