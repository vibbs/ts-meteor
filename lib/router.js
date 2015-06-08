Router.configure({
	loadingTemplate: 'loading',
	layoutTemplate: 'mainLayout'
	/*waitOn: function () {
		return [Meteor.subscribe('user', Meteor.userId()), 
					Meteor.subscribe('story', Meteor.userId()),
						Meteor.subscribe('storyline', Meteor.userId()),
						Meteor.subscribe('comment', Meteor.userId())
//array of the router names and user id required for 
				];
	}*/
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
	layoutTemplate: 'mainLayout'
});
Router.route('/viewStories', {
	name: 'viewStories',
	layoutTemplate: 'mainLayout'
});
Router.route('/search', {
	name: 'search',
	layoutTemplate: 'mainLayout'
});
Router.route('/success', {
	name: 'success',
	layoutTemplate: 'mainLayout'
});


/*
Router.route('survey/:user_token/:survey_id', {
	name: 'survey',
	data: function () {
		Session.set('user_token', this.params.user_token);

		if(Emp.findOne({'token' :this.params.user_token}))
			return Surveys.findOne(this.params.survey_id);				
	},
	layoutTemplate: 'surveyLayout',
});

Router.route('survey-preview/:_id', {
	name: 'surveyPreview',
	layoutTemplate: 'surveyDetailedLayout',
	data: function () {
		return Surveys.findOne(this.params._id);
		
	},
});



Router.route('/tracking', {
	name: 'tracking'
});

*/
/*
var requireLogin = function() {
  if (! Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
     	Router.go('login');
    }
  } else {
    this.next();
  }
}
*/
/*
	Require user to be logged in to access any of the route NAMES listed in the only field
*/

/*
Router.onBeforeAction(requireLogin, {
    only: ['settings', 'createSurvey', 'customQuestions','surveyList', 'progress', 'reporting']
});

*/
