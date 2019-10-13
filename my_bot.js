const Discord = require("discord.js");
const bot = new Discord.Client();
bot.on("ready", () => {
  console.log("Ready");
  bot.user.setActivity("Type !help");
})



client.on('ready', () => {

    console.log('I am ready!');


});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }
 
});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
