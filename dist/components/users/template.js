"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var angular = _interopRequire(require("angular"));

module.exports = angular.module("ui-components/components/users/template.html", []).run(["$templateCache", function ($templateCache) {
   $templateCache.put("ui-components/components/users/template.html", "<ul class=\"users\">\n" + "    <li ng-repeat=\"user in users\">\n" + "        <h3>{{::user.email}}</h3>\n" + "        <p>{{::user.body}}</p>\n" + "    </li>\n" + "</ul>");
}]);