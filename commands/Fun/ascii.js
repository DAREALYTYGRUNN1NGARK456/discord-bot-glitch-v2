const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.json");
const figlet = require("figlet");
const { promisify } = require("util");
const figletAsync = promisify(figlet);

module.exports = {
  name: "ascii",
  aliases: null,
  category: "fun",
  description: "Ascii Art!",
  usage: "Ascii <Text>",
  accessableby: "everyone",
  run: async (client, message, args) => {
    //Start
/*
    let Content = args.join(" ");

    if (!Content) return message.channel.send(`Please Give Me Text!`);

     let Result = await figletAsync(Content);

    let embed = new MessageEmbed()
      .setColor(Color)
      .setDescription("```" + Result + "```")
      .setTimestamp();

    
    if (args.length === 1) return message.channel.send(`1 Word Really? whatever`)
    
    

    if (Content.length > 20)
      return message.channel.send(`Please Make Shorter! | Limit : 20`);

   message.channel.send(embed)
    

    //End
  }
};
*/
     let text = args.join(" ");
   if(!text) {
return message.channel.send(`Please provide text for the ascii conversion!`)
}
   let maxlen = 20
if(text.length > 20) {
return message.channel.send(`Please put text that has 20 characters or less because the conversion won't be good!`)
}
let Content = args.join(" ");
    
 let Result = await figletAsync(Content);

    let embed = new MessageEmbed()
      .setColor(Color)
      .setDescription("```" + Result + "```")
      .setTimestamp();
message.channel.send(embed)
    }
};