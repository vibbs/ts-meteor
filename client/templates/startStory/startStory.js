

if (Meteor.isClient) {
Template.startStory.helpers({
	


});

Template.startStory.events({
	'click .submitStory': function (event, template) {
		console.log("story submitted");

		var storyTitle = template.find("#story_title").value;
		var storyLine = template.find("#story_line").value;
		var media = template.find("#media").value;
		var StoryCategory = template.find("#category").value;

		var file    = document.querySelector('input[type=file]').files[0];
		//accept="image/gif, image/jpeg, image/png" --will be usefull in future
		console.log(storyTitle);
		console.log(storyLine);
		console.log(media);
		console.log(StoryCategory);
        var fileObj;
        //story object: makes better data structure:
        //creator_id : user_id,
		if (file) {
             fileObj = Media.insert(file);
        }
        template.find("#story_title").value = "";
        template.find("#story_line").value = "";

        console.log("file object:::--->>>");
        console.log(fileObj);
        var storylineObj = {
                _id: new Meteor.Collection.ObjectID()._str,
                text : storyLine,
                likes : [],
                line_creator_id : Meteor.userId(),
                media_file_id : fileObj,
                comments : [],
                createdOn : new Date()
            };

        //Meteor.call('insertStory', storyTitle, storyLine,1234); 
        //--need the storyline id first before start

        //Meteor.call('insertStoryLine', story_id, storyLine, user_id, mediafile_id);
        //need to work on the media file id storage by that package manager..
/*
        Meteor.call('insertStoryLine', null, storyLine, 1234, null);
        var storylineObj = StoryLine.findOne({storyLine:storyLine, creator_id : 1234});
        console.log(storylineObj);
        console.log(storylineObj._id);
        //now adding the story object---
        */
        Meteor.call('insertStory', storyTitle, storylineObj,Meteor.userId(),StoryCategory); 
        var storyObj = Story.findOne({title : storyTitle,creator_id:Meteor.userId()});
        console.log(storyObj);
        console.log(storyObj._id);
        Meteor.users.update({_id:Meteor.user()._id}, { $push: {'profile.storyStarted' : storyObj._id} });

        //Meteor.call('putStoryID', storylineObj._id, storyObj._id);
        //var storylineObj2 = StoryLine.findOne({storyLine:storyLine, creator_id : 1234});
       // console.log("final storylineobject"+storylineObj2);
        //this should take care of evreythign

	}
	


});

}

