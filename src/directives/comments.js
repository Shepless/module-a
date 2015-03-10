import angular from 'angular';
import service from '../services/comments';
import template from '../partials/comments';
import '../less/comments.css!';

export default angular.module('ui-components-comments', [service.name, template.name])
    .directive('comments', ['$templateCache', 'CommentsService', function ($templateCache, CommentsService) {
        return {
            restrict: 'E',
            replace: true,
            scope: {},
            template: $templateCache.get('ui-components/partials/comments.html'),
            controller: ['$scope', function ($scope) {
                CommentsService.get().then(function (comments) {
                    $scope.comments = comments;
                });
            }]
        };
    }]);