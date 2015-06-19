Template.userDashBoard.helpers({
	test :function  () {
		console.log(this._id);
		return Meteor.userId();
	},
	story : function(){
		
		var arr = Story.find({creator_id : Meteor.userId()});
		console.log(arr);
		return arr;
	},
	contributed: function () {
		var arr = Story.find({storyLines: {line_creator_id:Meteor.userId()}});
		console.log("belwo is arg");
		console.log(arr);
		return arr;
	}
});

Template.userDashBoard.events({

});