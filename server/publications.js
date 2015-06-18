Meteor.publish('story', function(){
	return Story.find();
});
Meteor.publish('storyline', function(){
	return StoryLine.find();
});
Meteor.publish('user', function(){
	return User.find();
});
Meteor.publish('comment', function(){
	return Comment.find();
});
Meteor.publish('media', function(){
	return Media.find();
});