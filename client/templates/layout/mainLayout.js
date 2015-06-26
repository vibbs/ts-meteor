Template.mainLayout.helpers({
	

});

Template.mainLayout.events({
	'click #logout' : function  () {
		Meteor.logout();
		Router.go('home');
	},
	'click .maintitle' : function(){
		Router.go('home');
	}

});