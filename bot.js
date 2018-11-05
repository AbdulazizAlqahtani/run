const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("509046139085914123")
setInterval(function() {
channel.send(`سبآمم فقطط .`);
}, 25)
})
 
 
client.login("NTA4NzI5NjgyNzQ5OTQ3OTA0.DsIE1g.niKeyC67Xh4aNSh83pgWNJkabSY");
