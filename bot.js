const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("509046139085914123")
setInterval(function() {
channel.send(`Hi , I'm Sad .`);
}, 25)
})
 
 
client.login();
