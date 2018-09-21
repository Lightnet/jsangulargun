/*
 Created by: Lightnet


*/

import _global from '../../_global';

export default class AccountController {
    constructor($scope, $state) {
		console.log($scope)
		console.log($state)
		this.$scope = $scope;
		this.gun = _global.getgun();
		let user = this.gun.user();
		if(user.is == null){
			$state.go('access');
			console.log("return access?")
		}
    }
}
