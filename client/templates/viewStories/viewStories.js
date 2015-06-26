Template.viewStories.helpers({
	stories: function  () {
		return Story.find();
	}

});
Template.commentline.helpers({
	thisname : function(){
		var obj = Meteor.users.findOne({_id: this.user_id});
		return obj.username;
	}

});

Template.allStories.helpers({
	bool : function(){
		
		return Meteor.userId()==this.creator_id?  true :false;
	},
	count : function(){
		var obj = Story.findOne({ _id: this._id});
		return obj.like_count;
	},
	thisname : function(){
		var obj = Meteor.users.findOne({_id: this.creator_id});
		return obj.username;
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
		//call post fucntion
		/*
		Meteor.call("postTweet", tweet +"from http://katha.herokuapp.com/", function(err,result) {
    		if(!err) {
       		 alert("Tweet posted");
    		}else{
    			alert("falied!")
    		}
		});

*/
		
	}


});

