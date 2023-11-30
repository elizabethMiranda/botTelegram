

const express = require('express')
const Telegram = require('telegram-node-bot');


class Server{

    constructor(){
        this.app = express();
        this.port= process.env.PORT;
        //Middlewares
        this.middlewares();
        //Rrutas de mi aplicacion
        this.routes();

    }

    routes(){
        this.app.get('/mensaje', async(req, res) => {
            try{
                const tg = new Telegram.Telegram(process.env.TELEGRAM_TOKEN)
                const results = await tg.api.sendMessage('','Four message!',process.env.TELEGRAM_TOKEN,'HTML');
                const { _messageId, _text } = results;
                console.log('datos de messageid');
                console.log(_messageId);
                console.log('Texto enviado');
                console.log(_text);
            }catch(err){
                console.log('Error al enviar mensaje', err);
                throw err;
            }
          })
        
          this.app.get('/update-mensaje', async(req, res) => {
            try{
                const tg = new Telegram.Telegram(process.env.TELEGRAM_TOKEN)
                let chatId={
                    chat_id:'',
                    message_id:0,
                }
                const resultsEd = await tg.api.editMessageText('Four message editado!',chatId);
                //const { _messageId, _text } = results;
                console.log('datos de messageid');
                console.log(resultsEd);
                //console.log('Texto enviado');
                //console.log(_text);
            }catch(err){
                console.log('Error al enviar mensaje', err);
                throw err;
            }
          })
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log('Servidor corriendo en el puerto', this.port);
        });
    }
    middlewares(){
        //Directorio Publico
        this.app.use(express.static('public'));
    }   
}

module.exports = Server;