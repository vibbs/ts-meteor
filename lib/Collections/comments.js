Comment = new Mongo.Collection('comment');


Meteor.methods({
	"insertComment": function(comment, user_id) {
			//var tok = new Meteor.Collection.ObjectID()._str;
			//object.token = tok;
			//Add it to the DB
			var commentObj = {
				comment : comment,
				user_id : user_id
			};

			Comment.insert(commentObj);


/*
			comment
			user_id


*/
		
	}

});