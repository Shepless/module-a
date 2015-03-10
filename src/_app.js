import angular from 'angular';
import directiveOne from './directives/directive-one';
import directiveTwo from './directives/directive-two';
import comments from './directives/comments';
import usersComponent from './components/users/_app';

export default angular.module('ui-components', [directiveOne.name, directiveTwo.name, comments.name, usersComponent.name]);