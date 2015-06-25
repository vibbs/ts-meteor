


Template.onestoryView.helpers({
	id : function(){
		Session.set('storyID',this._id);
	},
	'click .up': function (event, template) {
		
		Meteor.call("likeStory", this._id,Meteor.userId());
	},
	'click .down': function (event, template) {
		
		Meteor.call("dislikeStory", this._id,Meteor.userId());
	},
	'click .comment': function (event, template) {
	
		var comment = prompt("Comment, please dont be rude!!");

		var commentObj = {
				comment : comment,
				user_id : Meteor.userId()
			};
		Meteor.call("addComment", this._id, commentObj);
	}

});

Template.alllines.helpers({
	bool : function(){
		
		return Meteor.userId()==this.line_creator_id?  true :false;
		//return true;
	}
});

Template.onestoryView.events({
	'click .submitStory': function (event, template) {
		console.log("storyline added");
		
		var storyLine = template.find("#story_line").value;
		var media = template.find("#media").value;
		

		var file    = document.querySelector('input[type=file]').files[0];
		var fileObj ;
		if(file){
			fileObj = Media.insert(file);
		}
		template.find("#story_line").value = "";

        //story object: makes better data structure:
        
        var storylineObj = {
                _id: new Meteor.Collection.ObjectID()._str,
                text : storyLine,
                likes : [],
                line_creator_id : Meteor.userId(),
                media_file_id : fileObj,
                comments : [],
                createdOn : new Date()
            };
		Meteor.call('addStoryObj', this._id, storylineObj); 
		var res = Story.findOne({_id : this._id});
		
		var lastKey;
	
		for(var key in res.storyLines){
		    if(res.storyLines.hasOwnProperty(key)){
		        lastKey = key;
		    }
		}

		var responseUpdate = Meteor.users.update({_id:Meteor.user()._id}, { $push: {'profile.storyLineWrote' : res.storyLines[lastKey]._id} });
		console.log(responseUpdate);

        template.find("#media").value = null;
        template.find("#media_url").value = null;
        
	},
	'click .delete': function (event, template) {
		
		var storyID = Session.get('storyID');

		//thi below call works
		Meteor.call("deleteStoryLine",Session.get('storyID'), this._id);
		Meteor.users.update({_id:Meteor.user()._id}, { $pull: {'profile.storyLineWrote' : this._id} });
	},
	'click .edit-button': function (event, template) {
		var newStoryline = prompt("Change this line:\n'" +this.text+"'");

		var storyObj = Story.findOne({_id:Session.get('storyID')});
		
		if (newStoryline!="") {
			Meteor.call("updateStoryLine",Session.get('storyID'),this._id, newStoryline);
		};
		
	}

});

