
import _global from '../../_global';

export default class AccessController {
    constructor($scope, $location) {
		//console.log($scope)
		//console.log($location)
		this.$scope = $scope;
		this.$location = $location;

		this.gun = _global.getgun();
		this.name = 'Guest';
		this.alias = "";
		this.passphrase = "";
    }
	
	clickLogin() {
		console.log("clickLogin")
		//console.log(this.$scope);
		//this.$location.path('/home');
		//console.log(this.alias);
		//console.log(this.passphrase);
		//console.log(this.gun);

		var user = this.gun.user();
        var self = this;

		user.auth(this.alias, this.passphrase,(ack)=>{
			//console.log(ack);
			if(ack.err){
				console.log("fail!");
				//self.$toast.open({
					//message: 'Auth attempt failed!',
					//type: 'is-danger'
				//});
			}else{
				console.log("Authorized!");
				self.$location.path('/home');
				self.$location.path('/home');
				self.$location.path('/home');
				//self.$parent.$emit('view','index');
				//self.$toast.open({
					//message: 'Authorized!',
					//type: 'is-success'
				//});
				//bus.$emit('login');
				//bus.$emit('action','hidelogin');
			}
		});
	}
	
	clickSignUp() {
		console.log("clickSignUp")
		this.$location.path('/signup');
	}

	clickRegister() {
		console.log("clickSignUp")
		//this.$location.path('/signup');
		console.log(this.alias);
		console.log(this.passphrase);

		var user = this.gun.user();
        //var self = this;

		user.create(this.alias, this.passphrase, function(ack){
			//console.log(ack);
			if(ack.err){
				console.log("fail!");
				//self.msg = "Register Alias Fail!";
			}
			if(ack.pub){
				console.log("created!", ack.pub);
				//self.msg = "Alias Created!";
			}
		});


	}

	clickBackSignIn(){
		this.$location.path('/access');
	}

	clickForgot() {
		console.log("clickForgot");
		this.$location.path('/hint');
	}

	clickGetHint() {
		console.log("clickGetHint");
	}
	  
}
