User = new Mongo.Collection('user');

Meteor.methods({
	"insertUser": function(firstname, lastname, username, emailID, dateBirth, gender) {
			var tok = new Meteor.Collection.ObjectID()._str;
			//object.token = tok;
			//Add it to the DB
			

			var userObj = {
				//id
				userName : username,
				firstname : firstname,
				lastname : lastname,
				emailID : emailID,
				dateBirth : dateBirth,
				gender : gender,
				verified : false,
				currentProfileImageID : null,
				currentCoverImageID : null,
				profileImages : [],
				coverImages : [],
				friends : [],
				pendingRequests : [],
				requestSent : [],
				storylikes : [],
				storyLineLike : [],
				storyStarted : [],
				storyLineWrote : [],
				following : [],
				twitterToken : null,
				fbToken : null,
				googlePlusToken : null

			};

			userObj.token = tok;

			User.insert(userObj);

/*
			id
			firstname
			lastname
			emailID =
			verified = false;
			currentProfileImageID
			currentCoverImageID
			profileImages[fileID's]
			coverImages[fileID's]
			friends[userID's]
			pendingRequests[userIDS]
			requestSent[userID's]
			storylikes[story_id]
			storyLineLike[storyline_id]
			storyStarted[story_id]
			storyLineWrote[storyline_id]
			following[story_id]
			twitterToken
			fbToken
			googlePlusToken

*/
		
	},

	"verified": function(token){
		User.update({token: token}, {$set :{verified : true} });
	},

	"addProfileImage" : function(user_id, mediaFile_id){
		User.update({_id: user_id}, {$set : {currentProfileImageID : mediaFile_id}});
		User.update({_id: user_id}, {$push : {profileImages : mediaFile_id}});
	},

	"addCoverImage" : function(user_id, mediaFile_id){
		User.update({_id: user_id}, {$set : {currentCoverImageID : mediaFile_id}});
		User.update({_id: user_id}, {$push : {coverImages : mediaFile_id}});
	},
	"addStoryStarted": function(user_id, story_id){
		User.update({_id: user_id}, {$push : {storyStarted : story_id}});
	},
	"addStoryLineWritten": function(user_id, storyline_id){
		User.update({_id: user_id}, {$push : {storyLineWrote : story_id}});
	},



});