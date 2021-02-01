let { Client, MessageEmbed } = require('discord.js');
let { ClientOptions, prefix } = require('../../Config');
let FileSystem = require('fs');

class Creeper {

    constructor() {

        this.CreeperClient = new Client( ClientOptions )
        
        this.handler()
        this.login()
    }

    /**
     * Logging the bot into Discord
     */
    login() {
        this.CreeperClient.login(process.env.token).then(() => {console.info('Connected')})
    }

    handler() {
        let commands = []
        let basepath = FileSystem.readdirSync('./src/command')
                                 .filter(f => f.endsWith(".js"))
        for ( let file of basepath ) {
            let command = require('../command/' + file)
            commands.push(new command())
        }

        this.CreeperClient.on('message', async (message) => {
        if (message.author.id === this.CreeperClient.user.id) return
        if (message.channel.type !== 'text') return
        if (message.author.bot) return

        this.message = new MessageEmbed()
        .setDescription('**To view the list of commands i have say: `' + prefix + "help`**")
        .setColor('GREEN')

        if ([`<@!${this.CreeperClient.user.id}>`, `<@${this.CreeperClient.user.id}>`].includes(message.content)) return message.channel.send(this.message)

        const safePrefix = prefix.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
        const commandExpression = new RegExp(`^${safePrefix}([a-z]*) ?`)
  
        const commandMatch = commandExpression.exec(message.content)
        if (!commandMatch) return

       const invokedCommand = commandMatch[1]

       const command = commands.find(c => c.name === invokedCommand || c.aliases.includes(invokedCommand))
       if (!command) return

       if(command.spyOnly === true) return message.channel.send('<a:xDenied:805634781949853726> **Sorry this command is for spy only** <a:xDenied:805634781949853726>')

       let client = this.CreeperClient;

       command.run({client, message, commands, prefix})
        },
    )}
}

module.exports = new Creeper()