const Discord = require('discord.js')
const covid = require('novelcovid')

module.exports = {
   name: "covid-19",
  aliases: ["corona", "covid", "coronavirus"],
  category: "fun",
  description: "Show you the status of covid-19!",
  usage: "covid-19",
  accessableby: "everyone",
  run: async (client, msg, args) => {
     const covidStats = await covid.all()
  const Covid19Embed =  new Discord.MessageEmbed()
      .setTitle('covid19 stats')
      .setColor("BLUE")
      .addFields(
        { name: `Cases`, value: covidStats.cases.toLocaleString(), inline: true},
        { name: `Cases Today`, value: covidStats.todayCases.toLocaleString(), inline: true},
        { name: `Deaths`, value: covidStats.deaths.toLocaleString(), inline: true},
        { name: `Deaths today`, value:covidStats.deaths.toLocaleString(), inline: true},
        { name: `Recovered`, value: covidStats.recovered.toLocaleString(), inline: true},
        { name: `Recovered today`, value: covidStats.todayRecovered.toLocaleString(), inline: true},
        { name: `Infected right now`, value: covidStats.active.toLocaleString(), inline: true},
        { name: `Critical condition`, value: covidStats.critical.toLocaleString(), inline: true},
        { name: `Tested`,  value: covidStats.tests.toLocaleString(), inline: true },
      )
  msg.channel.send(Covid19Embed)
  }
  
  
  
}