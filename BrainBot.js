//
// BrainBot
//
// @author  Philipp Jäger [nilBrain]
// @date  23/07/2020
// @node Main Class from Brain Discord Bot

const Discord = require('discord.js');
const fs = require('fs');
const Embeds = require('./embed');

const config = JSON.parse(fs.readFileSync('config.json', 'utf8'));

var client = new Discord.Client();


client.on('ready', () => {
    console.log('Logged in as ${client.user.username}...');
});

client.on('message', (msg) => {
    var cont = msg.content,
        author = msg.member,
        chan = msg.channel,
        guild = msg.guild;

    if (author.id != client.user.id && cont.startsWith(config.prefix)) {
        var invoke = cont.split(' ')[0].substr(config.prefix.lenght),
            args = cont.split(' ').slice(1);

        console.log(invoke, args);
    };
});

client.login(config.token);