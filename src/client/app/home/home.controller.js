

import _global from '../../_global';

export default class HomeController {

	constructor($scope, $location) {
		console.log($scope)
		console.log($location)
		this.$scope = $scope;
		this.$location = $location;

		this.gun = _global.getgun();
		this.name = 'World';
	}

	changeName() {
		this.name = 'angular-tips';
		this.$location.path('/hint');
	}
}