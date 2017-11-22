const Discord = require('discord.js');
const client = new Discord.Client();
const profanities = require('profanities')

// Profanity
for (x = 0, x < profanities.length; x++) {
    if (message.content.toUpperCase() == profanities[x].toUpperCase()) {
        message.channel.send('| :no_entry: One of the phrases you have used is blocked.')
        message.delete();
        return;
    }
}

client.login('BOT_TOKEN');
