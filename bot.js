//const { Telegraf } = require("telegraf");
require('dotenv').config()
const Consulta = require("./models/consultas");
const Server = require("./models/server");
const getconsulta = new Consulta();



const server = new Server();
server.listen();
