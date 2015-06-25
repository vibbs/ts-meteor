Template.login1.events({
	"click #login-button" : function(event, template) {
		var user = template.find("#login-userName").value;
		var password = template.find("#login-password").value;
		//var userObject = Meteor.users.findOne({"profile.username" : user});
		//console.log(userObject);
		//Session.set('userID', userObject._id);
		//console.log(Session.get('userID'));
		/*
		Meteor.loginWithPassword(user, password, function(error){
			if (error) { //Show user why he can't log in
				Session.set('errors', error.reason);
			}else{// Head to homepage
				
				//console.log(Session.get('userID'));
				console.log(this._id);
				Router.go('userDashBoard');
			}
		});
*/
	}
});

Template.login1.helpers({
	hasErrors : function () {
		if (Session.get('errors') != false) {
			return true; 
		}else{
			return false;
		}
	},
	errors: function () {
		return Session.get('errors');
	}
})


	Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});
