const bot = require("../index");
const {MessageEmbed} = require("discord.js")

bot.on("interactionCreate", async (i) => {
    // Слэш команды
    if (i.isCommand()) {
        await i.deferReply({ ephemeral: false }).catch(() => {});

        const cmd = bot.slashCommands.get(i.commandName);
        if (!cmd)
            return i.followUp({ content: "An error has occured " });

        const args = [];

        for (let option of i.options.data) {
            if (option.type === "SUB_COMMAND") {
                if (option.name) args.push(option.name);
                option.options?.forEach((x) => {
                    if (x.value) args.push(x.value);
                });
            } else if (option.value) args.push(option.value);
        }

        cmd.run(bot, i, args, MessageEmbed);
    }
});
