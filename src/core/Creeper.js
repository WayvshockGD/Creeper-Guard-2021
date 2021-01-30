let { Client } = require('discord.js');
let { ClientOptions } = require('../../Config');

class Creeper {



    constructor() {

        this.CreeperClient = new Client( ClientOptions )
    }
}

module.exports = new Creeper()