
/*
 Created by: Lightnet


*/

import _global from '../../_global';

export default class HomeController {

	//constructor($scope, $location) {
	constructor($scope, $state) {
		
		//console.log($scope)
		//console.log($location)
		this.$scope = $scope;
		//this.$location = $location;

		this.gun = _global.getgun();
		this.name = 'World';
		let user = this.gun.user();
		if(!user.is){
			console.log(user.is);
			//this.$location.path('/access');
			//$location.url('/access');
			$state.go('access');
		}

		//var url = $location.url();
		//console.log(url);
	}

	changeName() {
		this.name = 'angular-tips';
		//this.$location.path('/hint');
		this.$location.url('/access');
	}
}