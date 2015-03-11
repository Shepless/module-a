export default ['$templateCache', function ($templateCache) {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            comments: '='
        },
        template: $templateCache.get('ui-components/components/comments/template.html')
    };
}]