Template.login.events({
	"click #login-button" : function(event, template) {
		var email = template.find("#login-email").value;
		var password = template.find("#login-password").value;
		Meteor.loginWithPassword(email, password, function(error){
			if (error) { //Show user why he can't log in
				Session.set('errors', error.reason);
			}else{// Head to homepage
				Router.go('surveyList');
			}
		});
	}
});

Template.login.helpers({
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