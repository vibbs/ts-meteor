Template.viewStories.helpers({
	stories: function  () {
		return Story.find();
	}

});

Template.allStories.helpers({
	bool : function(){
		console.log(this.creator_id);
		return Meteor.userId()==this.creator_id?  true :false;
	},
	count : function(){
		var obj = Story.findOne({ _id: this._id});
		return obj.like_count;
	}

});

Template.viewStories.events({
	'click .delete': function (event, template) {
		Meteor.call("deleteStory", this._id);
		Meteor.users.update({_id:Meteor.user()._id}, { $pull: {'profile.storyStarted' : this._id} });
	},
	'click .edit-button': function (event, template) {
		var newTitle = prompt("Change this title:\n'" +this.title+"'");
		
		var storyObj = Story.findOne({_id:this._id});
		console.log(storyObj);
		if (newTitle!="") {
			Meteor.call("updateStoryTitle",this._id, newTitle);
		};
		
	},
	'click .comment': function (event, template) {
	
		var comment = prompt("Comment, please dont be rude!!");

		var commentObj = {
				comment : comment,
				user_id : Meteor.userId()
			};
		Meteor.call("addComment", this._id, commentObj);
	},
	'click .up': function (event, template) {
		
		Meteor.call("likeStory", this._id,Meteor.userId());
	},
	'click .down': function (event, template) {
		
		Meteor.call("dislikeStory", this._id,Meteor.userId());
	},
	'click .sendtweet': function (event, template) {
		var tweet = prompt("Send this tweet!");
		
		Meteor.call("postTweet", tweet, function(err,result) {
		    if(!err) {
		        alert("Tweet posted");
		    }else{
		    	alert("Your twitter account is not linked!");
		    }
		});
	}


});

