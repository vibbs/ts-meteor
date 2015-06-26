Template.userDashBoard.helpers({
	test :function  () {

		return Meteor.userId();
	},
	story : function(){
		
		var arr = Story.find({creator_id : Meteor.userId()});

		return arr;
	},
	contributed: function () {
		//var arr = Story.find({storyLines: {line_creator_id:Meteor.userId()}});

		
		var arrStr = [];
		var myCursor= Story.find().fetch();

		
		$.each( myCursor, function( key, value ) {

		

		for ( var i = 0;  i< Meteor.user().profile.storyLineWrote.length;i++) {  
		var obj = Story.findOne({$and : [{_id:value._id}, {'storyLines.line_creator_id' : Meteor.user().profile.storyLineWrote[i]}]});
		   if(obj){ arrStr.push(obj);}

		}   	
		});

		for(var j =0 ; j<Meteor.user().profile.storyStarted.length ; j++){ 
				 arrStr = $.grep(arrStr, function(e){ 
						return e._id != Meteor.user().profile.storyStarted[j]; 
				});
	  	}

	  	//cleaning for duplicates
	  	 var cleaned = [];
		    arrStr.forEach(function(itm) {
		        var unique = true;
		        cleaned.forEach(function(itm2) {
		            if (_.isEqual(itm, itm2)) unique = false;
		        });
		        if (unique)  cleaned.push(itm);
		    });

	

		return cleaned ;
	},
	name : function(){
		return Meteor.user().username;
	}
});

Template.userDashBoard.events({

});


