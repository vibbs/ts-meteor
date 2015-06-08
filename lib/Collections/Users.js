User = new Mongo.Collection('user');

Meteor.methods({
	"insertUser": function(object) {
			//var tok = new Meteor.Collection.ObjectID()._str;
			//object.token = tok;
			//Add it to the DB
			User.insert(object);


/*
			id
			firstname
			lastname
			emailID =
			verified = false;
			currentProfileImageID
			currentCoverImageID
			profileImage[fileID's]
			coverImage[fileID's]
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

	"verified": function(user_id){
		Emp.update({_id: user_id}, {verified : true});
	}

});