const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
	console.log('I am ready!');
});

client.on('message', message => {
	if (message.content === 'ping') {
		message.reply('pong');
	}
    client.user.setActivity("f-g!info ♦ Paczka Antycheat ♦")

    // Alternatively, you can set the activity to any of the following:
    // PLAYING, STREAMING, LISTENING, WATCHING
    // For example:
    // client.user.setActivity("TV", {type: "STREAMING"})
})
client.on('message', message => {
	if (message.content === 'f-g!Test') {
		message.channel.send('test :D');
	}
	if(message.content.toLowerCase() === 'f-g!info')
	{
		const embed = new Discord.RichEmbed()
  .setTitle("Discord Paczki")
  .setAuthor("F-GUARD", "https://i.imgur.com/C4xZKGw.png")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setDescription("Jest to paczka z skrzydlami oraz innymi dodatkami.")
  .setFooter("F-GUARD - PACZKA ANTYCHEAT", "https://i.imgur.com/C4xZKGw.png")
  .setThumbnail("https://i.imgur.com/Mn81obr.gif")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setTitle("Discord Paczki")
  .setURL("https://discord.gg/Ucxrw4")
  .addField("Komendy - Wkrotce",
    "f-g!help , f-g!infouser , f-g!server")
  /*
   * Inline fields may not display as inline if the thumbnail and/or image is too big.
   */
  .addField("O paczce", "Jest to paczka antycheat, tworzona od ludzi ktozy staraja sie zapobiec nadmiernemu cheatowaniu.", false)
  /*
   * Blank field, useful to create some space.
   */
  .addBlankField(false)
  .addField("Zalozyciele", "Michałg#0322 , wojtess#0443", false);
 
  message.channel.send({embed});
	}
});

//this must be this away
client.login("NjMwODE5OTgzMDU1NzgxOTI4.XZ-nrg.mfmW_RNTMdPfvj5LnYoUClVGocA") // Replace XXXXX with your bot token
