import angular from 'angular';
import UsersService from './service';
import UsersDirective from './directive';
import Template from './template';
import './style.css!';

export default angular.module('Tombola.Core.Users', [Template.name])
    .service('UsersService', UsersService)
    .directive('users', UsersDirective);