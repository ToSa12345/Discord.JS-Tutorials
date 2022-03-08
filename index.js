const { Client, Collection } = require("discord.js");

const bot = new Client({
    intents: 32767,
});
module.exports = bot;

// Global Variables
bot.commands = new Collection();
bot.slashCommands = new Collection();
bot.aliases = new Collection();
bot.config = require("./config.json");
const token = bot.config.token

// Initializing the project
require("./handler")(bot);


bot.login(token);
