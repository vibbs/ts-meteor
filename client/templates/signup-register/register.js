Template.register.events({
	//When user clicks button on registeration page
	"click #register-button" : function(event, template) {
		event.preventDefault();

		//Get the new users info
		var username = template.find("#username-register").value;
		var fname = template.find("#fname-register").value;
		var lname = template.find("#lname-register").value;
		var gender;
		if (document.getElementById('male').checked) {
  			gender = document.getElementById('male').value;
		}else {  
			gender = document.getElementById('female').value;
		}
		//var dob = template.find("#dob-register").value;
		var password = template.find("#password-register").value;
		var email = template.find("#email-register").value;
		console.log(username);
		console.log(fname);
		console.log(lname);
		console.log(gender);
		//console.log(dob);
		console.log(password);
		console.log(email);


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

		//Router.go('success');
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