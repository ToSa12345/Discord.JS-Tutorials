const { glob } = require("glob");
const { promisify } = require("util");
const bot = require('./index.js')

const globPromise = promisify(glob);
module.exports = async (bot) => {
    // Команды
    const commandFiles = await globPromise(`${process.cwd()}/commands/**/*.js`);
    commandFiles.map((value) => {
        const file = require(value);
        const splitted = value.split("/");
        const directory = splitted[splitted.length - 2];

        if (file.name) {
            const properties = { directory, ...file };
            bot.commands.set(file.name, properties);
        }
    });

    // Ивенты
    const eventFiles = await globPromise(`${process.cwd()}/events/*.js`);
    eventFiles.map((value) => require(value));

    // Слэш команды
    const slashCommands = await globPromise(
        `${process.cwd()}/SlashCommands/*/*.js`
    );

    const arrayOfSlashCommands = [];
    slashCommands.map((value) => {
        const file = require(value);
        if (!file?.name) return;
        bot.slashCommands.set(file.name, file);
        arrayOfSlashCommands.push(file);
    });
    bot.on("ready", async () => {
        await bot.application.commands.set(arrayOfSlashCommands);
    });
};
