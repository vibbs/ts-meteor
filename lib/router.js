Router.configure({
	loadingTemplate: 'loading',
	layoutTemplate: 'mainLayout',
	waitOn: function () {
		return [Meteor.subscribe('user'), 
						Meteor.subscribe('storyline'),
						Meteor.subscribe('comment'),
						Meteor.subscribe('media'),
						Meteor.subscribe('story'),
						Meteor.subscribe('categories'),
						Meteor.subscribe('users')
//array of the router names and user id required for 
				];
	}
});


Router.route('/', {
	name: 'home',
	layoutTemplate: 'mainLayout'
});

Router.route('/user', {
	name: 'userDashBoard',
	layoutTemplate: 'mainLayout'
});

Router.route('/startStory', {
	name: 'startStory',
	layoutTemplate: 'mainLayout',
	data: function(){
		return Story.find();
	}
	
});

Router.route('/viewStories', {
	name: 'viewStories',
	layoutTemplate: 'mainLayout',
	data: function(){
		return Categories.find();
	}
});
Router.route('/onestoryView/:_id', {
	name: 'onestoryView',
	layoutTemplate: 'mainLayout',
	data: function(){
		return Story.findOne(this.params._id);
	}
});

Router.route('/search', {
	name: 'search',
	layoutTemplate: 'mainLayout'
});

Router.route('/success', {
	name: 'success',
	layoutTemplate: 'mainLayout'
});

Router.route('/login', {
	name: 'login1',
	layoutTemplate: 'mainLayout'
});

Router.route('/registration', {
	name: 'register',
	layoutTemplate: 'mainLayout'
});


Router.route('/editStory', {
	name: 'editStory',
	layoutTemplate: 'mainLayout',
	data: function () {
		return Story.findOne(this.params._id);
	}
});



var requireLogin = function() {
  if (! Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
     	Router.go('home');
    }
  } else {
    this.next();
  }
}

/*
	Require user to be logged in to access any of the route NAMES listed in the only field
*/


Router.onBeforeAction(requireLogin, {
    only: ['userDashBoard', 'startStory']
});


