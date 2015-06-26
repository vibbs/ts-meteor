Template.home.helpers({
	top : function () {
		var objarr = Story.find().fetch();
		console.log(objarr);
		objarr.sort(function(a, b) {
    		return parseFloat(b.like_count) - parseFloat(a.like_count);
		});
		return objarr.slice(0,5);
	}
});

Template.home.events({
	'click #startButton' : function(){
		if(!Meteor.userId()){
			alert("You need to login to use this function!");
		}
	}
});