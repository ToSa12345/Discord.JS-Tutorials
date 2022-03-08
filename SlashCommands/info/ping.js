const { Client, CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "ping",
    description: "Отображает пинг бота",
    run: async (client, i, args, MessageEmbed) => {
        i.followUp({ content:`Понг! Пинг бота: **${client.ws.ping}ms**` });
    },
};
