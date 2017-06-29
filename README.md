## What is Twitter-bot

This simple Twitter bot keeps the conversation alive by performing 2 simple functions. It replies to new followers to engage them in conversation AND it retweets relevant industry specific topics. It uses **node.js** and **npm-twit**.


## Requirements 

You will need 

* node.js
* npm-twit

## Installation 

**You will need to edit three locations as below with your own data before use.**

* First add your API key data for twitter in file config.js:

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

