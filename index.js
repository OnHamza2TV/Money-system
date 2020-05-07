const Discord = require('discord.js'); //require module Discord.js
const fs = require("fs"); //require module fs

const client = new Discord.Client(); //new client

const config = require ('./config/config.json') //look for the configuration file

client.login(config.token); //login

client.on('ready', () => { //when the client is ready
  
console.log('[LOGS] I am ready.'); //sends a message when the bot is turned on in the console
  
client.user.setGame(config.game) //displays the configured game

})

//commands

    client.on("message", async message => {
    
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0].toLowerCase();
    let args = messageArray.slice(1);
  
    const config = require ('./config/config.json') //look for the configuration file

    let prefix = config.prefix //prefix
  
    if (!message.content.startsWith(prefix)) return;
    
    let commandfile =
      
      client.commands.get(cmd.slice(prefix.length)) ||
      client.commands.get(client.aliases.get(cmd.slice(prefix.length)));
    
    if (commandfile) commandfile.run(client, message, args); //run

    });
  
    client.commands = new Discord.Collection();
    client.aliases = new Discord.Collection();


    fs.readdir("./commands/", (err, files) => { //look for the commands in the folder
    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if (jsfile.length <= 0) {
      return console.log("[LOGS] Couldn't Find Commands!"); //no order found
    }
    jsfile.forEach((f, i) => {
      console.log(`[FILE] Order loaded ${f}`);
      let pull = require(`./commands/${f}`);  //look for the commands in the folder
      client.commands.set(pull.config.name, pull);
      pull.config.aliases.forEach(alias => {
        client.aliases.set(alias, pull.config.name);
      
      });
    });
  });
