
if(Categories.find().count() == 0 ){

var cat = [
	{
		text : "Others"
	},
	{
		text : "Horror"
	},
	{
		text : "Science Fiction"
	},
	{
		text : "Romance"
	},
	{
		text : "RomCom"
	},
	{
		text : "Spiritual"
	},
	{
		text : "Dark"
	},
	{
		text : "Sexy"
	},
	{
		text : "Dark"
	}
];

	for( var i = 0; i < cat.length; i ++) {
		Categories.insert(cat[i]);
	}
}