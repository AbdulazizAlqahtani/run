const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("509046139085914123")
setInterval(function() {
channel.send(`سبآمم فقطط .`);
}, 25)
})
 
 
client.login("NTA5MDQ2Nzc2NDA2MzQzNjgx.DsIuNA.-zMEY32-Lr-fRNbZuMdpfTpkR10");
