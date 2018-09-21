localStorage.clear(); //clear database for gun

//#region import packages
//import _ from 'lodash/core';
import $ from 'jquery';
//import 'jquery-ui';
//$.ui = require('jquery-ui/ui/widget.js');

//import 'jquery-ui/themes/base/core.css';
//import 'jquery-ui/themes/base/base.css';
//import 'jquery-ui/themes/base/theme.css';
//import 'jquery-ui/themes/base/controlgroup.css';
//import 'jquery-ui/themes/base/menu.css';
//import 'jquery-ui/themes/base/button.css';
//import 'jquery-ui/themes/base/dialog.css';
//import 'jquery-ui/themes/base/button.css';
//import 'jquery-ui/ui/core';

//import 'jquery-ui/ui/effects/effect-drop';
//import 'jquery-ui/ui/widgets/dialog';

//gun.js
//import Gun from 'gun';//node
import Gun from 'gun/gun';//browser
import 'gun/sea';
//custom chain gun.js
import 'gun/nts';
import 'gun/lib/time';
import 'gun/lib/path';
import 'gun/lib/load';
import 'gun/lib/open';
import 'gun/lib/then';
import 'gun/lib/unset';
import _global from './_global';

//import angular from 'angular';

//#endregion
function init(){
    var SEA = Gun.SEA;
    window.SEA = SEA;
    var gun;
    if(location.origin == 'http://localhost:3000'){//check for browser proxy
        gun = Gun({
            peers:['http://localhost:8080' + '/gun'],
            secure: false, //not added?
        });
        console.log('local gun.js');
    }else{
        gun = Gun(location.origin + '/gun');
        console.log('host gun.js');
    }
    gun.on('hi', peer => {//peer connect
        console.log('peer connect!');
        //displayeffectmessage('Connect to peer!');
    });
    gun.on('bye', (peer)=>{// peer disconnect
        console.log('Disconnected from peer!');
    });

    //angular.prototype.gun = gun;
    _global.setgun(gun);
    $("#loading").empty();//empty element html when finish loading javascript...
    //console.log("====Init App?====");
    //angular.module('HelloWorldApp', [])
    //.controller('HelloWorldController', function($scope) {
        //$scope.greeting = "Hello World";
    //});
    require('./app/app.js');
}

init();