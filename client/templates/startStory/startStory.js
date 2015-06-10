Template.startStory.helpers({


});

Template.startStory.events({
	'click .submitStory': function (event, template) {
		console.log("story submitted");

		var storyTitle = template.find("#story_title").value;
		var storyLine = template.find("#story_line").value;
		var media = template.find("#media").value;

		var file    = document.querySelector('input[type=file]').files[0];
		//accept="image/gif, image/jpeg, image/png" --will be usefull in future
		console.log(storyTitle);
		console.log(storyLine);
		console.log(media);

		if (file) {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            console.log("data of the image");
            console.log(reader);
        }
	}

});

