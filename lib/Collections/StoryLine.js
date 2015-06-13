StoryLine = new Mongo.Collection('storyLine');

Meteor.methods({
	"insertStoryLine": function(story_id, storyLine, user_id, mediafile_id) {
			//var tok = new Meteor.Collection.ObjectID()._str;
			//object.token = tok;
			//Add it to the DB
		

			var storyLineObj = {
				//id : id,
				story_id : story_id,
				storyLine : storyLine,
				likes : [],
				creator_id : user_id,
				media_file_id : mediafile_id,
				comments : [],
				createdOn : new Date()

			};

			StoryLine.insert(storyLineObj);

/*
			id
			story_id
			storyLine
			likes[user_id]
			creator_id
			media_file_id
			comments[comment]


*/
		
	},
	"likeStoryline": function(storyline_id, user_id){
		StoryLine.update({_id: storyline_id}, {$push : {likes : user_id}});
	},
	//have to think to implement it as a inc or value???
	"dislikeStoryline": function(storyline_id, user_id){
		StoryLine.update({_id: storyline_id}, {$pull : {likes : user_id}});
	},
	"addCommentToStoryLine": function(storyline_id,comment_id){
		StoryLine.update({_id: storyline_id}, {$push : {comments : comment_id}});
	},
	"updateMediaFile": function(storyline_id,newmedia_file_id){
		StoryLine.update({_id: storyline_id}, {$set : {media_file_id : newmedia_file_id}});
	},
	"updateStoryLine": function(storyline_id,newStoryLine){
		StoryLine.update({_id: storyline_id}, {$set : {storyLine : newStoryLine}});
	},
	"putStoryID": function(storyline_id,story_id){
		StoryLine.update({_id: storyline_id}, {$set : {story_id : story_id}});
	}



});