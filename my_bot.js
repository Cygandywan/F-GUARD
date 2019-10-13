const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    // Set bot status to: "Playing with JavaScript"
    client.user.setActivity("with JavaScript")

    // Alternatively, you can set the activity to any of the following:
    // PLAYING, STREAMING, LISTENING, WATCHING
    // For example:
    // client.user.setActivity("TV", {type: "WATCHING"})
})

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
