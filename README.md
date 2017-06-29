## What is Twitter-bot

This is a simple Twitter bot which keeps the conversation alive by perfroming two simple functions. Replying to new followers to engage in conversation and the second function is to retweet relevant industry specific topics. It uses node.js & npm-twit.

## Installation 

You will need 

* node.js
* npm twit

You will need edit 3 locations below before you can use this bot.

First you need to add your API key data for twitter in file config.js:

```
module.exports = {
  consumer_key:         'your-keys-here',
  consumer_secret:      'your-keys-here',
  access_token:         'your-keys-here',
  access_token_secret:  'your-keys-here',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
}

```

Then on line 23 add your reply tweet info:

```
tweetIt("@" + screenName + " Hello there! What's your favourite cryptocurrency?"); // REQUIRED USER DATA
```
And lastly on line 50 add your hastag or serach term(s), comma delimit if you want multiple:

```
q: '#blockchain',  // REQUIRED USER DATA
```

## What is Twitter-bot
