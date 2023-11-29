//const { Telegraf } = require("telegraf");
require('dotenv').config()
const Telegram = require('telegram-node-bot');
const Consulta = require("./models/consultas");
const Server = require("./models/server");
//const tg = new Telegram.Telegram('6950681715:AAHgqAU7MosRkf_G9X-GWGTHC4qlX3dK3zU')
//const bot = new Telegraf('6950681715:AAHgqAU7MosRkf_G9X-GWGTHC4qlX3dK3zU');
const getconsulta = new Consulta();



const server = new Server();
server.listen();

// tg.router
//     .when(
//         new TextCommand('/start', 'startHandler'),
//         new StartController()
//     )

// tg.sendMessage('Hello!','6950681715:AAHgqAU7MosRkf_G9X-GWGTHC4qlX3dK3zU','-1002023907305')


// bot.start((ctx) => {
//   ctx.reply("Welcome");
// });

// bot.command("mycommand", (ctx) => {
//   ctx.reply("my custom command");
// });

// bot.launch();
