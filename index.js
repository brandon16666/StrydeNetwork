const Discord = require("discord.js")
const bot = new Discord.Client()
bot.on("ready", () => {
console.log(`${bot.user.username}` + "is online")

bot.user.setActivity("hub.stryde.tk", {type: "STREAMING"})
});

bot.login(process.env.TOKEN)
