/*
 Created by: Lightnet


*/

import _global from '../../_global';

export default class ChatController {
	constructor($scope, $state) {
		console.log($scope)
		console.log($state)
		this.$scope = $scope;
		this.$state = $state;

		this.gun = _global.getgun();

		let user = this.gun.user();
		if(!user.is){
			this.$state.go('access');
		}
    }
}
