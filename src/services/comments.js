import angular from 'angular';

export default angular.module('ui-components-service-one', [])
    .service('CommentsService', ['$http', function ($http) {
        this.get = function () {
            return $http.get('http://jsonplaceholder.typicode.com/comments').then(function (response) {
                return response.data;
            });
        }
    }]);