const db = require('quick.db') //require module quick.db
const ms = require('parse-ms') //require module parse.ms
const Discord = require('discord.js') //require module Discord.js

exports.run = async (client, message, args, config) => {

    const db = require('quick.db') //require module quick.db
    
    let timeout = 86400000 //24 hours in milliseconds, change if you'd like
    let amount = 500 //money to be collected every day

    let daily = await db.fetch(`daily_${message.author.id}`); //read the variable daily

    if (daily !== null && timeout - (Date.now() - daily) > 0) {
    
        let time = ms(timeout - (Date.now() - daily));

        const error = new Discord.RichEmbed()
        .setAuthor("Error")
        .setDescription(`Smart guy, you already got your daily bonus back in **${time.hours} hours, ${time.minutes} minutes and ${time.seconds} seconds** :hourglass:`)
        .setColor("RED")
        .setTimestamp()

        message.channel.send(error) //sends the message if the daily is already retrieved

    } else {


    const good = new Discord.RichEmbed()
    .setAuthor("Money")
    .setThumbnail(message.author.avatarURL)
    .addField("Daily", `You get ${amount} :moneybag:`)
    .setFooter("Come back in 24 hours !")
    .setColor("GREEN")

    message.channel.send(good) //sends the message when the daily is picked up

    db.add("money_" + message.author.id, amount) //adds the money to the db
    db.set(`daily_${message.author.id}`, Date.now()) //counts down the time for the next daily
        
}
}
module.exports.config = {
  name: "daily",
  aliases: [""]
}