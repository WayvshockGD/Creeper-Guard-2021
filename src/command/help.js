const Command = require("../struct/Command");
let { MessageEmbed } = require('discord.js');

class help extends Command {
    constructor(...args) {
        super(...args);

        this.name = 'help';
        this.aliases = [ 'commands', 'cmds' ];
        this.description = 'shows all the commands of the bot';
        this.hidden = false;
        this.spyOnly = false;
    }

    async run ({ message, commands, prefix, client }) {
        message.channel.send(
            new MessageEmbed()
            .setTitle(client.user.username + " Command List")
            .setColor('GREEN')
            .setDescription([
                commands.filter(c => !c.hidden).map(c => {
                return `**\`${prefix}${c.name} --- ${c.description}\`**`
            }).join('\n'),
            ])
            .setTimestamp()
            .setFooter(message.guild.name, client.user.avatarURL())
        )
    }
}

module.exports = help;