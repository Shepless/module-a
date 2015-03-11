"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var angular = _interopRequire(require("angular"));

module.exports = angular.module("ui-components/components/comments/template.html", []).run(["$templateCache", function ($templateCache) {
   $templateCache.put("ui-components/components/comments/template.html", "<ul class=\"comments\">\n" + "    <li ng-repeat=\"comment in comments\">\n" + "        <h3>{{::comment.email}}</h3>\n" + "        <p>{{::comment.body}}</p>\n" + "    </li>\n" + "</ul>");
}]);