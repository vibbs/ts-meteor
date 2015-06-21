Template.userDashBoard.helpers({
	test :function  () {
		console.log(this._id);
		return Meteor.userId();
	},
	story : function(){
		
		var arr = Story.find({creator_id : Meteor.userId()});
		console.log(arr);
		return arr;
	},
	contributed: function () {
		//var arr = Story.find({storyLines: {line_creator_id:Meteor.userId()}});
		console.log("belwo is arg");
		
		var arrStr = [];
		var myCursor= Story.find({'storyLines': {line_creator_id:Meteor.userId()}});

		
		
		$.each( myCursor.collection._docs._map, function( key, value ) {
		console.log("key" );
		   	console.log(key );
		   	for(var i in Meteor.user().profile.storyStarted){

		   		console.log("id-->"+Meteor.user().profile.storyStarted[i] );
			  	if (Meteor.user().profile.storyStarted[i]!=key) {
			  		//console.log("many");
			  		//console.log(key);
			  		arrStr.push(Story.findOne({_id:key}));
			  	};
			}
		   
		   	
		   	
		});

		return arrStr ;
	},
	name : function(){
		return Meteor.user().profile.first_name;
	}
});

Template.userDashBoard.events({

});