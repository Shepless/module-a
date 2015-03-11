import angular from 'angular';
import DirectiveOne from './directives/directive-one';
import DirectiveTwo from './directives/directive-two';
import UsersComponent from './components/users/_app';
import CommentsComponent from './components/comments/_app';

export default angular.module('Tombola.Core.UiComponents', [
    DirectiveOne.name,
    DirectiveTwo.name,
    UsersComponent.name,
    CommentsComponent.name
]);