import angular from 'angular';
import angularRoute from 'angular-route';
import DirectiveOne from './directives/directive-one';
import DirectiveTwo from './directives/directive-two';
import UsersComponent from './components/users/_app';
import CommentsComponent from './components/comments/_app';

export default angular.module('Tombola.Core.UiComponents', [
    'ngRoute',
    DirectiveOne.name,
    DirectiveTwo.name,
    UsersComponent.name,
    CommentsComponent.name
]).config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            template: '<div><h1>Users</h1><users users="application.users"></users><h1>Comments</h1><comments comments="application.comments"></comments></div>',
            resolve: {
                users: ['UsersService', function (UsersService) {
                    return UsersService.get();
                }],
                comments: ['CommentsService', function (CommentsService) {
                    return CommentsService.get();
                }]
            },
            controllerAs: 'application',
            controller: ['$scope', 'users', 'comments', function ($scope, users, comments) {
                this.users = users;
                this.comments = comments;
            }]
        })
        .otherwise({
            redirectTo: '/'
        });
}]);