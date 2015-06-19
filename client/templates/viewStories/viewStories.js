Template.viewStories.helpers({
	stories: function  () {
		return Story.find();
	}

});

Template.allStories.helpers({
	bool : function(){
		console.log(this.creator_id);
		return Meteor.userId()==this.creator_id?  true :false;
	}

});

Template.viewStories.events({
	'click .delete': function (event, template) {
		Meteor.call("deleteStory", this._id);
	},
	'click .edit-button': function (event, template) {
		var newTitle = prompt("Change this title:\n'" +this.title+"'");
		console.log(this._id);
		console.log(newTitle);
		var storyObj = Story.findOne({_id:this._id});
		console.log(storyObj);
		if (newTitle!=null) {
			Meteor.call("updateStoryTitle",this._id, newTitle);
		};
		
	}

});