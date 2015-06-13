Story = new Mongo.Collection('story');

Meteor.methods({
	"insertStory": function(title,storyline_id,user_id) {
			//var tok = new Meteor.Collection.ObjectID()._str;
			//object.token = tok;
			//Add it to the DB
			
			var storyObj = {
				//id
				title : title,
				storyLine : [storyline_id],
				likes : [],
				creator_id : user_id,
				following : [],
				category : [],
				comments : [],
				blockuser : []

			};
			Story.insert(storyObj);



/*
			id
			storyLine[storyline_id]
			likes[user_id]
			creator_id
			following[user_id]
			category[]
			oneFile-- this was taken out since it will be a part of the story line object.
			comments[comment]
			blockuser : []


*/
		
	},
	"addStoryLine": function(story_id,StoryLine_id){
		Story.update({_id: story_id}, {$push : {storyLine : StoryLine_id}});
	},
	//have to think to implement it as a inc or value???
	"likeStory": function(story_id, user_id){
		Story.update({_id: story_id}, {$push : {likes : user_id}});
	},
	//have to think to implement it as a inc or value???
	"dislikeStory": function(story_id, user_id){
		Story.update({_id: story_id}, {$pull : {likes : user_id}});
	},
	"followStory": function(story_id, user_id){
		Story.update({_id: story_id}, {$push : {following : user_id}});
	},
	//have to think to implement it as a inc or value???
	"unfollowStory": function(story_id, user_id){
		Story.update({_id: story_id}, {$pull : {following : user_id}});
	},
	"addComment": function(story_id,comment_id){
		Story.update({_id: story_id}, {$push : {comments : comment_id}});
	},
	"addCategory": function(story_id,category){
		Story.update({_id: story_id}, {$push : {category : category}});
	}

});