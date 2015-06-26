if(Meteor.isServer){
Meteor.methods({
	
	"sEmail" : function(email){
		Email.send({
			to: email,
			from: 'katha@gmail.com',
			subject: 'Katha',
			text: "Visit http://katha.herokuapp.com/ to explore more."

		});
		console.log(email+"email sent");
	}
});

}