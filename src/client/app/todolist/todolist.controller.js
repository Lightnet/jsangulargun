/*
 Created by: Lightnet


*/

import _global from '../../_global';

export default class ToDoListController {
    constructor($scope, $state) {
		console.log($scope)
		console.log($state)
		this.$scope = $scope;
		//this.$location = $location;

		this.gun = _global.getgun();
		
		let user = this.gun.user();
		if(!user.is){
			//this.$location.path('/access');
			$state.go('access');
		}
	}
}
