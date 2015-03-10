export default ['$templateCache', function ($templateCache) {
    return {
        restrict: 'E',
        replace: true,
        scope: {},
        template: $templateCache.get('ui-components/components/users/template.html'),
        controller: ['$scope', 'UsersService', function ($scope, UsersService) {
            UsersService.get().then(function (users) {
                $scope.users = users;
            });
        }]
    }
}]