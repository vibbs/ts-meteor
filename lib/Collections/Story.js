Story = new Mongo.Collection('story');

Meteor.methods({
	"insertStory": function(title,storyObj,user_id, cat) {
			//var tok = new Meteor.Collection.ObjectID()._str;
			//object.token = tok;
			//Add it to the DB
			
			var storyObj = {
				//id
				title : title,
				storyLines : [storyObj],
				likes : [],
				like_count: 0,
				creator_id : user_id,
				following : [],
				category : [cat],
				comments : [],
				blockuser : [],
				createdOn : new Date(),
				notEnded : true

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
		Story.update({_id: story_id}, {$push : {storyLines : StoryLine_id}});
	},
	//have to think to implement it as a inc or value???
	"likeStory": function(story_id, user_id){
		var obj = Story.findOne({_id: story_id , likes : user_id})
		if(!obj){ 
		Story.update({_id: story_id}, {$push : {likes : user_id}});
		Story.update({_id: story_id}, {$inc : {like_count : 1}});
		}
	},
	//have to think to implement it as a inc or value???
	"dislikeStory": function(story_id, user_id){
		var obj = Story.findOne({_id: story_id , likes : user_id})
		if(obj){ 
		Story.update({_id: story_id}, {$pull : {likes : user_id}});
		Story.update({_id: story_id}, {$inc : {like_count : -1}});
		}
	},
	"followStory": function(story_id, user_id){
		Story.update({_id: story_id}, {$push : {following : user_id}});
	},
	//have to think to implement it as a inc or value???
	"unfollowStory": function(story_id, user_id){
		Story.update({_id: story_id}, {$pull : {following : user_id}});
	},
	"addComment": function(story_id,comment_obj){
		Story.update({_id: story_id}, {$push : {comments : comment_obj}});
	},
	"addCategory": function(story_id,category){
		Story.update({_id: story_id}, {$push : {category : category}});
	},
	"addStoryObj": function(story_id,storyObj){
		Story.update({_id: story_id}, {$push : {storyLines : storyObj}});
	},
	"deleteStory": function(story_id){
		Story.remove(story_id);
	},
	"deleteStoryLine": function(story_id,_id){
		Story.update({_id: story_id},  
			{ $pull: { "storyLines" : { _id: _id } } }
			//false,
			//true 
			);
	},
	"updateStoryLine": function(story_id,id,text){
		Story.update({_id: story_id,"storyLines._id": id },  
			{ $set: {"storyLines.$.text":text}} 
			 );
	},
	"updateStoryTitle": function(story_id,text){
		Story.update({_id: story_id},  
			{ $set: {"title":text}} 
			 );
	},
	"updateMediaFile": function(story_id,id,newmedia_file_id){
		Story.update({_id: story_id,"storyLines._id": id }, 
			{ $set: {"storyLines.$.media_file_id":newmedia_file_id}} 
			);
	},
	"endStory" : function(story_id){
		Story.update({_id: story_id}, {$set : {notEnded : false}});
	}

});