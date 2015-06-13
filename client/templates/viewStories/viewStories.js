Template.viewStories.helpers({
	stories: function  () {
		return Story.find();
	}
});

Template.allStories.helpers({
	

});

Template.viewStories.events({
	'click .delete': function (event, template) {
		Meteor.call("deleteStory", this._id);
	}

});