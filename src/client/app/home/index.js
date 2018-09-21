/*
 Created by: Lightnet


*/
import angular from 'angular';
import uirouter from 'angular-ui-router';
import routes from './home.routes.js';

import HomeController from './home.controller';

export default angular.module('home', [uirouter])
  .config(routes)
  .controller('HomeController', HomeController)
  .name;