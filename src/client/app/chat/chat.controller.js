
import _global from '../../_global';

export default class ChatController {
    constructor($scope, $location) {
		console.log($scope)
		console.log($location)
		this.$scope = $scope;
		this.$location = $location;

		this.gun = _global.getgun();
    }
}
