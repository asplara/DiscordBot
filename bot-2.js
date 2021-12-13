const Discord = require("discord.js");
const channel = new Discord.Channel

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", ] });

client.login("OTA1NjQ1Njc5NTg0NjA4Mjg2.YYNGRA.lXnCG_uA0qsJoLUm6CG_fbXhHi8");


client.on("ready", discord_bot_is_ready);
client.on("messageCreate",  theMessage )

function discord_bot_is_ready() {
    console.log("The bot is ready!");

    client.user.setActivity("Rock Paper Scissors");
}


function theMessage(Message1) {
    const moves = ["Rock", "Paper", "Scissors"];
    const randomnum = Math.floor(Math.random() * 3);
    let botmove = moves[randomnum];

        if (Message1.content === "RPS")
            Message1.reply("Let's play Rock Paper Scissors! Type Rock, Paper, or Scissors.");

        
        let filter = (m)=> m.author.id === Message1.author.id;
        const options = {
            max: 1
        }


        let collector =  Message1.channel.createMessageCollector({ filter, options });

        collector.on('collect', m=>{

        if ((m.content === "Rock" && botmove=== "Scissors")|| (m.Content==="Paper" &&botmove==="Rock")||(m.content==="Scissors"&& botmove==="Paper")){
            m.reply(`You won. My move was ${botmove}`);
            collector.stop()
        }

        else if ((m.content === "Paper" && botmove==="Scissors")||(m.Content==="Rock"&&botmove==="Paper")||(m.Content==="Scissors"&& botmove==="Rock")){
            m.reply(`I won. My move was ${botmove}`);
            collector.stop()
        }
    
        else if (m.content === botmove) {
            m.reply(` My move was ${botmove}. It was a tie!`)
            collector.stop()
    
        }
        collector.stop()
        })


    }

