const db = require('quick.db') //require module quick.db
const ms = require('parse-ms') //require module parse.ms
const Discord = require('discord.js') //require module Discord.js

exports.run = async (client, message, args, config) => {

    const db = require('quick.db')
    
    let timeout = 7200000  //2 hours in milliseconds, change if you'd like.

    let work = await db.fetch(`work_${message.author.id}`); //read the variable work
    
    if (work !== null && timeout - (Date.now() - work) > 0) {
    let time = ms(timeout - (Date.now() - work));
    
        const error = new Discord.RichEmbed()
        .setAuthor("Error")
        .setDescription(`Tired, let me rest before working back in **${time.hours} hours ${time.minutes} minutes and ${time.seconds} seconds** :hourglass:`)
        .setColor("RED")
        .setTimestamp()
    
        message.channel.send(error) //sends the message if the work is already retrieved

    } else {
        
        let amount = Math.floor(Math.random() * 500) + 1; // 1-500 random number, whatever you'd like
    
        let embed = new Discord.RichEmbed()
        .setAuthor("Work") 
        .setDescription(`Hoho ${message.author}, you just finished your day you win ${amount} :moneybag: !`)
        .setColor("GREEN")
            
        
        message.channel.send(embed) //sends the message if everything is correct

        db.add(`money_${message.author.id}`, amount) //adds the money to the db
        db.set(`work_${message.author.id}`, Date.now()) //counts down the time for the next work

    
}}
module.exports.config = {
  name: "work",
  aliases: [""]
}