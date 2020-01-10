# Money-system
A simple money system in quick.db, open source code.

To get started, download the code.

In the console type :

```
npm init
```

And enter the information to design the `package.json` and `package-lock.json` file.

Install the modules :

```
npm i Discord.js
npm i fs
npm i parse-ms
npm i quick.db
```

Go to the folder named `config`.
Rename the `example_config.json` file to `config.json`.

Open the file and enter the following information : 

```js
{

    "token": "TOKEN",
    "owner": "ID OWNER",

    "prefix": "PREFIX BOT",
    "version": "VERSION (BASIC 1.0.0)", 
    
    "game": "GAME"

}
```

Information :

```
token = bot token
owner = bot moderator id

prefix = bot prefix
version = bot version

game = game that the bot will say in its status
```
All you have to do is start the bot !

This is used with [Discord.js](https://www.npmjs.com/package/discord.js) and [quick.db](https://www.npmjs.com/package/quick.db).
