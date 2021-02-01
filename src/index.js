let { CreeperClient } = require('./core/Creeper');

CreeperClient.once('ready', async => {
    CreeperClient.user.setActivity(
        `King Deads Server`, {
            "type": "WATCHING"
        })
})