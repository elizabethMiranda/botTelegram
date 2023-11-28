const { Telegraf } = require("telegraf");
const bot = new Telegraf(process.env.BOT_TOKEN);
const Consulta = require("./models/consultas");
const getconsulta = new Consulta();

bot.start((ctx) => {
  ctx.reply("Welcome");
});

bot.command("mycommand", (ctx) => {
  ctx.reply("my custom command");
});

bot.launch();
