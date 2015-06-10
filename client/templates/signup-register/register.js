Template.register.events({
	//When user clicks button on registeration page
	"click #register-button" : function(event, template) {
		event.preventDefault();

		//Get the new users info
		var username = template.find("#username-register").value;
		var fname = template.find("#fname-register").value;
		var lname = template.find("#lname-register").value;
		var gender = template.find("#gender-register").value;
		var dob = template.find("#dob-register").value;
		var password1 = template.find("#password1-register").value;
		var password2 = template.find("#password2-register").value;
		var email = template.find("#email-register").value;

		if(password1 != password2){
			//alert(error.reason);
			Session.set('message', "Passwords don't match!!");
				Router.go('register');
		}

		//Add an account document to the user collection
		/*
		Accounts.createUser({
			email: email,
			password: password,
			profile: {
				first_name: fname,
				last_name: lname,
				accountSetupComplete: false
			},
		}, function(error) { // Catch any errors
			if( error ) {
				console.log(error.reason);
				alert(error.reason);
				Router.go('register');
			}
		});
*/

		Router.go('success');
	},
});


Template.register.helpers({
	hasMessage : function () {
		if (Session.get('message') != false) {
			return true; 
		}else{
			return false;
		}
	},
	message: function () {
		return Session.get('message');
	}
})