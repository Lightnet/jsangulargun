/*
 Created by: Lightnet


*/

import _global from '../../_global';

export default class MessageController {
    constructor($scope, $state) {
		console.log($scope)
		//console.log($state)
		this.$scope = $scope;
		//this.$state = $state;

		this.gun = _global.getgun();
		let user = this.gun.user();
		if(!user.is){
			$state.go('access');
		}
    }
}
