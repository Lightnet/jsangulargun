/*
 Created by: Lightnet


*/

import angular from 'angular';
import uirouter from 'angular-ui-router';
import routes from './app.routes';

import access from './access';
import home from './home';
import account from './account';
import message from './message';
import chat from './chat';
import todolist from './todolist';

//import fs from 'fs';

var modules = [
    uirouter,
    access,
    home,
    account,
    message,
    chat,
    todolist
]

angular.module('AngularjsApp', modules )
    .config(routes);
