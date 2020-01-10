const db = require('quick.db') //require module quick.db
const Discord = require('discord.js') //require module Discord.js

module.exports.run = async (bot, message, args) => {

    let user = message.mentions.users.first() || message.author //if the member doesn't mention anyone, the money goes to himself

    let money = db.fetch(`money_${user.id}`) //read the variable money

    if (money === null) money = 0; //if the member has no money then it displays 0

    const good = new Discord.RichEmbed()
    .setAuthor("Money")
    .setThumbnail(user.avatarURL) //member profile picture
    .addField("Money", `You have ${money} :moneybag:`) //displays the member's money
    .setFooter("Earn money with the daily order !")
    .setColor("BLUE")

    message.channel.send(good) //sends the message if everything is correct

}
module.exports.config = {
  name: "money",
  aliases: [""]
}