/*
 Created by: Lightnet


*/

import angular from 'angular';
import uirouter from 'angular-ui-router';
import routes from './chat.routes.js';

import ChatController from './chat.controller';

export default angular.module('chat', [uirouter])
  .controller('ChatController', ChatController)
  .config(routes).name;