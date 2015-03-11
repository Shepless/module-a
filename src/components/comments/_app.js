import angular from 'angular';
import CommentsService from './service';
import CommentsDirective from './directive';
import Template from './template';
import './style.css!';

export default angular.module('Tombola.Core.Comments', [Template.name])
    .service('CommentsService', CommentsService)
    .directive('comments', CommentsDirective);