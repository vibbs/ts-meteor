


Template.onestoryView.helpers({
	id : function(){
		Session.set('storyID',this._id);
		console.log(this._id);
	}

});

Template.alllines.helpers({
	
});

Template.onestoryView.events({
	'click .submitStory': function (event, template) {
		console.log("storyline added");
		//console.log(this._id);
		
		//console.log(Session.get('storyID'));
		//console.log(Story.findOne({_id:Session.get('storyID')}));

		
		var storyLine = template.find("#story_line").value;
		var media = template.find("#media").value;
		

		
		console.log(media);
		console.log(fileObj);

		var file    = document.querySelector('input[type=file]').files[0];
		var fileObj = Media.insert(file);

        //story object: makes better data structure:
        //creator_id : user_id,
        var storylineObj = {
                _id: new Meteor.Collection.ObjectID()._str,
                text : storyLine,
                likes : [],
                creator_id : 1234,
                media_file_id : fileObj,
                comments : [],
                createdOn : new Date()
            };
		var res = Meteor.call('addStoryObj', this._id, storylineObj); 
		console.log("response");
		console.log(res);

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
	},
	'click .edit-button': function (event, template) {
		var newStoryline = prompt("Change this line:\n'" +this.text+"'");
		console.log(this._id);
		console.log(newStoryline);
		var storyObj = Story.findOne({_id:Session.get('storyID')});
		

		console.log(storyObj.storyLines);
		if (newStoryline!=null) {
			Meteor.call("updateStoryLine",Session.get('storyID'),this._id, newStoryline);
		};
		
	}

});

