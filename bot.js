const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Legend");


client.on("ready", () => {
let channel =     client.channels.get("524852684583469079")
setInterval(function() {
channel.send(`خروف العيد يوسف`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
