var twitter = Meteor.npmRequire('twitter-api');

Meteor.methods({
    postTweet: function (text) {
    if(Meteor.user())
      twitter.postTweet(text);
      return true;
    },
      searchTwitter: function(term) {
        return twitter.search(term);
    }
});

