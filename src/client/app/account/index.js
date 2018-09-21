/*
 Created by: Lightnet


*/

import angular from 'angular';
import uirouter from 'angular-ui-router';
import routes from './account.routes.js';

import AccountController from './account.controller';

export default angular.module('account', [uirouter])
  .controller('AccountController', AccountController)
  .config(routes).name;