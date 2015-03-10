"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var angular = _interopRequire(require("angular"));

module.exports = angular.module("ui-components/partials/comments.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("ui-components/partials/comments.html", "<ul>\n" + "    <li ng-repeat=\"comment in comments\">\n" + "        <h1>{{::comment.email}}</h1>\n" + "        <p>{{::comment.body}}</p>\n" + "    </li>\n" + "</ul>");
}]);