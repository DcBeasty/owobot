const Discord = require("discord.js");////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
const client = new Discord.Client();
const database = require("quick.db");
const fs = require("fs");////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
const conf = require("./botconfig/config.json");
require("./modules/eventLoader.js")(client);
let bot = client.user;

client.on("ready", () => {////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
    console.log(`[BOT]: Logged in as ${client.user.tag}`)
    client.user.setPresence({ 
        activity: { 
            name: `${client.guilds.cache.array().length} servers!`, 
            type: "PLAYING"////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
        }, 
        status: "online"
    });
});////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./commands/economy", (err, files) => {
  if (err) console.error(err);
  console.log(`[ECONOMY]: ${files.length} command will load.`);
  files.forEach(f => {////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
    let props = require(`./commands/economy/${f}`);
    console.log(`[ECONOMY]: ${props.config.name} named command loaded.`);
    client.commands.set(props.config.name, props);////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
    props.config.aliases.forEach(alias => {
      client.aliases.set(alias, props.config.name);
    });
  });////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
});

fs.readdir("./commands/mod", (err, files) => {
    if (err) console.error(err);
    console.log(`[MOD]: ${files.length} command will load.`);
    files.forEach(f => {////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
      let props = require(`./commands/mod/${f}`);
      console.log(`[MOD]: ${props.config.name} named command loaded.`);
      client.commands.set(props.config.name, props);
      props.config.aliases.forEach(alias => {////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
        client.aliases.set(alias, props.config.name);
      });
    });
  });

fs.readdir("./commands/owner", (err, files) => {////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
    if (err) console.error(err);////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
    console.log(`[OWNER]: ${files.length} command will load.`);
    files.forEach(f => {
      let props = require(`./commands/owner/${f}`);////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
      console.log(`[OWNER]: ${props.config.name} named command loaded.`);
      client.commands.set(props.config.name, props);////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
      props.config.aliases.forEach(alias => {
        client.aliases.set(alias, props.config.name);
      });////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
    });
  });

fs.readdir("./commands/utilies", (err, files) => {
    if (err) console.error(err);
    console.log(`[UTILIES]: ${files.length} command will load.`);////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
    files.forEach(f => {
      let props = require(`./commands/utilies/${f}`);////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
      console.log(`[UTILIES]: ${props.config.name} named command loaded.`);
      client.commands.set(props.config.name, props);
      props.config.aliases.forEach(alias => {////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
        client.aliases.set(alias, props.config.name);
      });////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
    });
  });

client.on("message", async (message) => {////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
    let miktar = "1";
    database.add(`msgcount.${message.guild.id}_${message.author.id}`, miktar)////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
});
////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
client.on("message", async (message) => {
  if(message.content == "uwu") {
    message.channel.send(`:no_entry_sign: **${message.author.username}**, use the __uwu help__ command!`)////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
  };
});
////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
client.on("message", async (message) => {
  if(message.content == `<@${client.user.id}>`) {////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
    message.channel.send(`:no_entry_sign: **${message.author.username}**, use the __uwu help__ command!`)////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
  };
});////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.

client.on("message", async (message) => {////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
  if(message.content == `<@!${client.user.id}>`) {////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
    message.channel.send(`:no_entry_sign: **${message.author.username}**, use the __uwu help__ command!`)
  };
});////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.

client.on("messageDelete", message => {////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
  const data = require("quick.db");
  data.set(`snipe.mesaj.${message.guild.id}`, message.content);////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
  data.set(`snipe.id.${message.guild.id}`, message.author.id);
});

client.on("message", message => {////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
  const db = require("quick.db");
  let mesajsayi = db.fetch(`msgcount.${message.guild.id}_${message.author.id}`);
    if(mesajsayi == "500") {
    db.add(`usermoney.${message.author.id}`, 50)////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
    message.channel.send(`:sparkles: **| ${message.author.username}**, congratulations you have reached 500 messages on this server and deserved 50 uwu money.`);
  };
  if(mesajsayi == "1000") {////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
    db.add(`usermoney.${message.author.id}`, 100)
    message.channel.send(`:sparkles: **| ${message.author.username}**, congratulations you have reached 1000 messages on this server and deserved 100 uwu money.`);
  };////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
    if(mesajsayi == "2000") {
    db.add(`usermoney.${message.author.id}`, 250)////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
    message.channel.send(`:sparkles: **| ${message.author.username}**, congratulations you have reached 2000 messages on this server and deserved 250 uwu money.`);
  };
    if(mesajsayi == "3000") {
    db.add(`usermoney.${message.author.id}`, 400)////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
    message.channel.send(`:sparkles: **| ${message.author.username}**, congratulations you have reached 3000 messages on this server and deserved 400 uwu money.`);
  };////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
});

client.on("guildCreate", async (guild, message, role, member) => {
    database.set(`premiume.${guild.id}`, false);
    console.log(`✅ | ${guild.name} (${guild.id}) named server's premium is de-active.`)////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
});

client.login(process.env.token);////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.