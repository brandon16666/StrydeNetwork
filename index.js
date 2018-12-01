const Discord = require("discord.js")
const bot = new Discord.Client()
bot.on("ready", () => {
console.log(`${bot.user.username}` + "is online")

bot.user.setActivity("hub.stryde.tk : ~help", {type: "STREAMING"})
});

bot.on("message", (message) => {
if(message.content === "~hub") {
message.channel.send("hub.stryde.tk : 19132")
}
});

bot.on("message", (message) => {
if(message.content === "~youtube") {
message.channel.send("N/A")
 }
 });
 
bot.on("message", (message) => {
if(message.content === "~discord") {
message.channel.send("https://discord.gg/j9KJ3fy")
}
});
 
bot.on("message", (message) => {
if(message.content === "~help") {
console.log("Log")
message.channel.send(`${message.author.username}` + ", I Have Sent You The Commands 📪")
message.author.send("Please specify a module that you would like to look up:\n 1. ~hub ``hub.stryde.tk : 19132``\n 2. ~youtube ``N/A``\n 3. ~discord ``Join us on StrydeNetwork https://discord.gg/j9KJ3fy & Have Fun!``\n\n Powered By ``ModdingTwinz#4560``")
}
});

bot.login(process.env.TOKEN)
