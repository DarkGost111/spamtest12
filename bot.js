const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("487745714227511316")
setInterval(function() {
channel.send(`test`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
