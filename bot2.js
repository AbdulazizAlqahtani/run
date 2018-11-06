const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("509046139085914123")
setInterval(function() {
channel.send(`hey.`);
}, 25)
})
 
 
client.login("NTA5MzQ1MjMwNjgwNzUyMTI5.DsMcuA.RXT1kJied4oZTWsOn3KRUBPjbmI");
