/*
 Created by: Lightnet


*/

import angular from 'angular';
import uirouter from 'angular-ui-router';
import routes from './todolist.routes.js';

import ToDoListController from './todolist.controller';

export default angular.module('todolist', [uirouter])
  .config(routes)
  .controller('ToDoListController', ToDoListController)
  .name;