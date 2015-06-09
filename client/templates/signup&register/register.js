Template.register.events({
	//When user clicks button on registeration page
	"click #register-button" : function(event, template) {
		event.preventDefault();

		//Get the new users info
		var fname = template.find("#fname-register").value;
		var lname = template.find("#lname-register").value;
		var password = template.find("#password-register").value;
		var email = template.find("#email-register").value;

		//Add an account document to the user collection
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
			}
		});

		Router.go('/');
	},
});