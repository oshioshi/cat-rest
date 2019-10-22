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