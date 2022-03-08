const { Message, Client } = require("discord.js");

module.exports = {
    name: "ping",
    run: async (bot, message, args) => {
        message.channel.send(`**Мой пинг: \`${bot.ws.ping}\`**`);
    },
};
