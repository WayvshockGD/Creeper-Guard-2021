const { MessageEmbed } = require('discord.js');
let Command = require('../struct/Command');

class Ping extends Command {

    constructor(...args) {

        super(...args)

            this.name = 'ping';
            this.aliases = [ 'pong' ];
            this.description = 'pings the bot';
            this.hidden = false;
    }

    run ({ message }) {

    this.ping = Date.now() - message.createdTimestamp

        let NewEmbed = new MessageEmbed()
        .setDescription(`:ping_pong: ping pong:  \`${this.ping}\``)
        .setColor('GREEN')
        message.channel.send(NewEmbed)
    }
}

module.exports = Ping;