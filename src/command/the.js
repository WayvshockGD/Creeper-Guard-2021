const Command = require("../struct/Command");

class the extends Command {

    constructor(...args) {
        super(...args);

        this.name = 'the';
        this.aliases = [ 'the' ];
        this.hidden = true;
        this.spyOnly = true;
    }

    async run ({ message }) {
        return await message.channel.send('`t   h   e`')
    }
}

module.exports = the;