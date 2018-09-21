/*
 Created by: Lightnet


*/

import angular from 'angular';
import uirouter from 'angular-ui-router';
import routes from './access.routes.js';

import AccessController from './access.controller';

export default angular.module('access', [uirouter])
  .config(routes)
  .controller('AccessController', AccessController)
  .name;