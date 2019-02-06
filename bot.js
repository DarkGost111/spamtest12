const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Legend");


client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","Tornados"));
    });
