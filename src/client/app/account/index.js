/*
 Created by: Lightnet


*/

import angular from 'angular';
import uirouter from 'angular-ui-router';
import routes from './account.routes.js';

export default angular.module('account', [uirouter])
  .config(routes).name