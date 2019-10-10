<template>
  <div class="topCat">
    <h1>おすすめ猫ランキング</h1>
  </div>
</template>


<script>
// テスト
const twitter = require("twitter");
const fs = require("fs");

//const client = new twitter(JSON.parse(fs.readFileSync("../secret.json","utf-8")));
var client = new twitter({
  consumer_key       :'XXX',
  consumer_secret     :'XXX',
  access_token_key: 'XXX',
  access_token_secret: 'XXX'
});

/*
~共通部分~
*/
const params = {screen_name: 'osshy_01',count:20};

console.log("@" + params.screen_name);
client.get('statuses/user_timeline', params, function(error, tweets, response){
    if (!error) {
        console.log(tweets);
        fs.appendFileSync("timeline.json",JSON.stringify(tweets) + "\n","utf-8");
    }
});

</script>