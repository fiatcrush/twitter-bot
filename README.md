## What is Twitter-Bot

This simple Twitter bot keeps the conversation alive by performing 2 simple functions. It replies to new followers to engage them in conversation AND it retweets relevant industry specific topics. It is programmed in Javascript and uses **node.js** and **npm-twit**.


## Built With 

* [NPMJS](https://www.npmjs.com/package/twit) - Twit-NPM
* [NODEJS](https://nodejs.org/en/) - NodeJS


## Code Sample

Thankyou to Daniel Shiffman for your assistance with writing this. Code sample below: 

```
// *** SECTION 2 ***
// This section is the reply bot that says thanks to new followers!

// Setup a user stream and monitor for when people follow us
var stream = T.stream("user");
stream.on("follow", followed);
// When they follow we prepare a response tweet
function followed(event){
  console.log("Follow Event!")
  var name = event.source.name;
  var screenName = event.source.screen_name;
  tweetIt("@" + screenName + " Thanks! What is your favourite cryptocurrency right now?"); // REQUIRED USER DATA
}
// This is the section that Tweets our response to the new follower
function tweetIt(txt){
  var tweet = {
  status: txt
}
```


## Installation 

**You will need to edit three locations as below with your own data before use.**


* First extract the files to a directory of your choice, then in that directory at the command line type

```
npm install

```

* Tthen add your API key data for twitter in file config.js:

```
module.exports = {
  consumer_key:         'your-keys-here',
  consumer_secret:      'your-keys-here',
  access_token:         'your-keys-here',
  access_token_secret:  'your-keys-here',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
}
```

* Then on line 23 add your reply tweet info:

```
tweetIt("@" + screenName + " Hello there! What's your favourite cryptocurrency?"); // REQUIRED USER DATA
```

* And lastly on line 50 add your #hashtag or search term(s), comma delimited if using multiple:

```
q: '#blockchain',  // REQUIRED USER DATA
```

