System.register(["angular"], function (_export) {
    var angular;
    return {
        setters: [function (_angular) {
            angular = _angular["default"];
        }],
        execute: function () {
            "use strict";

            _export("default", angular.module("ui-components-service-one", []).service("CommentsService", ["$http", function ($http) {
                this.get = function () {
                    return $http.get("http://jsonplaceholder.typicode.com/comments").then(function (response) {
                        return response.data;
                    });
                };
            }]));
        }
    };
});