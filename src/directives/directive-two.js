import '../less/directive-two.css!';

var DirectiveTwo = function ($templateCache) {
    return {
        restrict: 'E',
        replace: true,
        scope: {},
        template: $templateCache.get('ui-components/partials/directive-two.html'),
        link: function () {
            console.log('directive-two');
        }
    }
};

DirectiveTwo.$inject = ['$templateCache'];

export default DirectiveTwo;