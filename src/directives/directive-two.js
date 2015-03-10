import angular from 'angular';
import template from '../partials/directive-two';
import '../less/directive-two.css!';

export default angular.module('ui-components-directive-two', [template.name])
    .directive('directiveTwo', ['$templateCache', function ($templateCache) {
        return {
            restrict: 'E',
            replace: true,
            scope: {},
            template: $templateCache.get('ui-components/partials/directive-two.html'),
            link: function () {
                console.log('directive-two');
            }
        }
    }]);