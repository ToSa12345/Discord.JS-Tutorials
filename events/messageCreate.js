const bot = require("../index");

bot.on("messageCreate", async (message) => {
    if (
        message.author.bot ||
        !message.guild ||
        !message.content.toLowerCase().startsWith(bot.config.prefix)
    )
        return;

    const args = message.content
        .slice(bot.config.prefix.length)
        .trim()
        .split(" ");
        const cmd = args.shift().toLowerCase();
        
        if (cmd.length === 0) return;
            let command = bot.commands.get(cmd);
        // If none is found, try to find it by alias
        if (!command) command = bot.commands.get(bot.aliases.get(cmd));

    if (!command) return;
    await command.run(bot, message, args);
});
