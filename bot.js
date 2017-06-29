// SECTION 1 ******************************
// Announce program start and get things initialized
console.log("Twitter Bot is starting now")
// This Program Requires the abilities of Twit package
var Twit = require("twit");
// Authenticate with Twitter API
var config = require("./config");
var T = new Twit(config);

//SECTION 2 ******************************
// This whole section is the reply bot that says thanks to new followers!
// Setup a user stream
var stream = T.stream("user");
// We monitor for when people follow us
stream.on("follow", followed);
// When they follow we prepare a response tweet
function followed(event){
  console.log("Follow Event!")
  var name = event.source.name;
  var screenName = event.source.screen_name;
  tweetIt("@" + screenName + "#FIATCRUSH salutes you! Tweet us your favourite cryptocurrency?");
}
// This is the section that Tweets our response to the new follower
function tweetIt(txt) {
  var tweet = {
    status: txt
  }
// Post to Twitter using Twitter API
  T.post('statuses/update', tweet, tweeted);
// Manage the data returned
  function tweeted(err, data, response) {
    if (err) {
      console.log("Something Went Wrong!");
    } else {
        console.log("It Worked");
        }
  }
}

// SECTION 3 **************************
// Find latest tweet related to our favorite subject #blockchain
var retweet = function() {
    var params = {
        q: '#blockchain',  // REQUIRED
        result_type: 'recent',
        lang: 'en'
    }

    T.get('search/tweets', params, function(err, data) {
      // if there no errors
        if (!err) {
          // grab ID of tweet to retweet
            var retweetId = data.statuses[0].id_str;
            // Tell TWITTER to retweet
            T.post('statuses/retweet/:id', {
                id: retweetId
            }, function(err, response) {
                if (response) {
                    console.log('Retweeted!!!');
                }
                // if there was an error while tweeting
                if (err) {
                    console.log('Something went wrong while RETWEETING... Duplication maybe...');
                }
            });
        }
        // if unable to Search a tweet
        else {
          console.log('Something went wrong while SEARCHING...');
        }
    });
}
// grab & retweet as soon as program is running...
retweet();
// retweet in every 10 minutes
setInterval(retweet, 600000);
