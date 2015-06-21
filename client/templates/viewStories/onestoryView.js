


Template.onestoryView.helpers({
	id : function(){
		Session.set('storyID',this._id);
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
		//console.log(this._id);
		
		//console.log(Session.get('storyID'));
		//console.log(Story.findOne({_id:Session.get('storyID')}));

		
		var storyLine = template.find("#story_line").value;
		var media = template.find("#media").value;
		

		var file    = document.querySelector('input[type=file]').files[0];
		var fileObj ;
		if(file){
			fileObj = Media.insert(file);
		}

        //story object: makes better data structure:
        //creator_id : user_id,
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
		console.log("response");
		console.log(res);
		console.log(res.storyLines);
		var lastKey;
	
		for(var key in res.storyLines){
		    if(res.storyLines.hasOwnProperty(key)){
		        lastKey = key;


		    }
		}
		console.log("lastObject");
		console.log(res.storyLines[lastKey]._id);
		var responseUpdate = Meteor.users.update({_id:Meteor.user()._id}, { $push: {'profile.storyLineWrote' : res.storyLines[lastKey]._id} });
		console.log(responseUpdate);

		if (file) {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            console.log("data of the image");
            console.log(reader);
        }
        template.find("#media").value = null;
        template.find("#media_url").value = null;
        template.find("#story_line").value = "";



        
       
	},
	'click .delete': function (event, template) {
		console.log(this._id);
		//console.log(Session.get('storyID'));
		
		//var obj = Story.findOne({"_id" :  Session.get('storyID') });
		//console.log(obj.storyLines);
		//i need to get the story _id which is not being able to retrive from the database.
		var storyID = Session.get('storyID');
		console.log(storyID);
		//thi below call works
		Meteor.call("deleteStoryLine",Session.get('storyID'), this._id);
		Meteor.users.update({_id:Meteor.user()._id}, { $pull: {'profile.storyLineWrote' : this._id} });
	},
	'click .edit-button': function (event, template) {
		var newStoryline = prompt("Change this line:\n'" +this.text+"'");
		console.log(this._id);
		console.log(newStoryline);
		var storyObj = Story.findOne({_id:Session.get('storyID')});
		

		console.log(storyObj.storyLines);
		if (newStoryline!="") {
			Meteor.call("updateStoryLine",Session.get('storyID'),this._id, newStoryline);
		};
		
	}

});

