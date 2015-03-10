import angular from 'angular';
import template from '../partials/directive-one';
import '../less/directive-one.css!';

export default angular.module('ui-components-directive-one', [template.name])
    .directive('directiveOne', ['$templateCache', function ($templateCache) {
        return {
            restrict: 'E',
            replace: true,
            scope: {},
            template: $templateCache.get('ui-components/partials/directive-one.html'),
            link: function () {
                console.log('directive-one');
            }
        }
    }]);