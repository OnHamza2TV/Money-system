const Discord = require('discord.js') //require module Discord.js

exports.run = async (client, message, args, config) => {

    const help = new Discord.RichEmbed()
    .setAuthor("Help (4)")
    .setDescription("All bot commands available here. Mandatory arguments `[]`, optional arguments `<>`.")
    .addField("daily", "```To collect every day 500 of money.```")
    .addField("give [number] [@user]", "```To give money to a member.```")
    .addField("money <@user>", "```To see his or a member's money.```")
    .addField("work", "```To collect between 1 and 500 of money every 2 hours.```")
    .setColor("BLUE")
    .setFooter("Template by ZerioDev on Github, license 2020.")
    .setTimestamp()

    message.channel.send(help) //sends the message if everything is correct

}
module.exports.config = {
  name: "help",
  aliases: [""]
}