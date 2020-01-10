const db = require('quick.db') //require module quick.db
const Discord = require('discord.js') //require module Discord.js

module.exports.run = async (bot, message, args) => {

    let user = message.mentions.users.first() || message.author //if the member doesn't mention anyone, the money goes to himself

    let author = await db.fetch(`money_${message.author.id}`) //read the variable money
    
    let compteur = args[0] - author //count the money that's missing

    if (author < args[0]) { 

    const ss = new Discord.RichEmbed()
    .setAuthor("Error")
    .setDescription("Money, you need to `" + args[0] + "` you're missing `" + compteur + "` in your bank :hourglass:")
    .setColor("RED")
    .setTimestamp()

        return message.channel.send(ss) //if the member does not have enough money
    }
    
    const error = new Discord.RichEmbed()
    .setAuthor("Error")
    .setDescription("Missing arguments, please enter a `number and @user` :hourglass:")
    .setColor("RED")
    .setTimestamp()
    

    const good = new Discord.RichEmbed()
    .setAuthor("Transfer")
    .setDescription("Nice, " + message.author.username + " just gave " + args[0] + " to " + user + " :pencil:")
    .setColor("GREEN")
    .setTimestamp()

    if (!args[0]) return message.channel.send(error) //if the member does not type the command correctly
    if (isNaN(args[0])) return message.channel.send(error) //if the member does not type the command correctly


    message.channel.send(good) //sends the message if everything is correct

    db.add(`money_${user.id}`, args[0]) //adds the money to the db
    db.subtract(`money_${message.author.id}`, args[0]) //remove the money to the db

}
module.exports.config = {
  name: "give",
  aliases: [""]
}