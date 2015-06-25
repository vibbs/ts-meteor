Template.home.helpers({
	top : function () {
		var objarr = Story.find().fetch();
		console.log(objarr);
		objarr.sort(function(a, b) {
    		return parseFloat(b.like_count) - parseFloat(a.like_count);
		});
		return objarr.slice(0,5);
	}
});