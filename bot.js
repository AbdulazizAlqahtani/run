const Discord = require("discord.js");
const client = new Discord.Client();



client.on("ready", () => {
console.log('By : moshaks');
client.user.setPresence({
  status: 'dnd',
  game: {
     type: 0,
     name: ' لآ تستسلم ، آلحياآة جميله .. ,',
       details: `ولآ شيء يستحق آلحزن .`,
     url: 'http://twitch.tv/moshaks-Dev',
     state: `#JuSTN#7766`,
    application_id: '501486494402215947',
     assets: {
        small_image: `501757794257469450`,
        small_text: 'Fuck Off',
        large_image: `501758018682355723`,
        large_text: `SeeYou.` }

  }
    });
});





client.login("NTAxNDg2NDk0NDAyMjE1OTQ3.DqeDWg.O25z4dzmppj-PNSoA6wkGL5oKGk");
