const bot = require("../index");

bot.on("ready", () =>
    console.log(`Бот ${bot.user.tag} Готов!`)
);
