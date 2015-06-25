if(Meteor.isServer){
Meteor.methods({
	//to do : add company name in the subject & send the link in hte function call
	"sEmail" : function(email,name,lname, link){
		Email.send({
			to: email,
			from: 'ronnie.simonelli@gmail.com',
			subject: 'ESG Compass',
			text: "test email to,"+name+lname+"Please take this survey"+link+""

		});
		console.log(email+"email sent");
	}
})

}