const Discord = require("discord.js")
const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MEMBERS,
        Discord.Intents.FLAGS.GUILD_PRESENCES
    ]
})
const config = require("./config.json")
const command = require("./command")

client.on("ready", () => {
    console.log("client readied")

    command(client, "ping", message => {
        message.channel.send("pog")
    })
})

client.login(config.token)

