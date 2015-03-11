export default ['$templateCache', function ($templateCache) {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            users: '='
        },
        template: $templateCache.get('ui-components/components/users/template.html')
    }
}]