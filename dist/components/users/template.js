"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var angular = _interopRequire(require("angular"));

module.exports = angular.module("ui-components/components/users/template.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("ui-components/components/users/template.html", "<ul>\n" + "    <li ng-repeat=\"user in users\">\n" + "        <h1>{{::user.email}}</h1>\n" + "        <p>{{::user.body}}</p>\n" + "    </li>\n" + "</ul>");
}]);