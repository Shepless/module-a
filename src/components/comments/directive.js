export default ['$templateCache', 'CommentsService', function ($templateCache, CommentsService) {
    return {
        restrict: 'E',
        replace: true,
        scope: {},
        template: $templateCache.get('ui-components/components/comments/template.html'),
        controller: ['$scope', function ($scope) {
            CommentsService.get().then(function (comments) {
                $scope.comments = comments;
            });
        }]
    };
}]