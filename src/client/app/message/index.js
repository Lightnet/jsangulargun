/*
 Created by: Lightnet


*/

import angular from 'angular';
import uirouter from 'angular-ui-router';
import routes from './message.routes.js';

import MessageController from './message.controller';

export default angular.module('message', [uirouter])
  .controller('MessageController', MessageController)
  .config(routes).name;