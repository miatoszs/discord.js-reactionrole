
//Modules
const fs = require('fs');
const { Client } = require('discord.js');
const client = new Client({
  partials: ["MESSAGE", "CHANNEL", "REACTION"]
});





  client.on('messageReactionAdd', async(reaction, user) => {// role add
      if(reaction.message.partial) await reaction.message.fetch();
      if(reaction.partial) await reaction.fetch();
      if(user.bot) return;
      if(!reaction.message.guild) return;
      if(reaction.message.id === 'ÜZENET_ID'){ //here you need to write the message id to which you will react
          if(reaction.emoji.name === '🔞') {// emoji name   :emoji:
              await reaction.message.guild.members.cache.get(user.id).roles.add('ROLE_ID')
              user.send('🔞 valami rangot hozzád adtam')// this message will be sent privately by the bot to the person who react
          }
      }
  })
  client.on('messageReactionRemove', async(reaction, user) => {//role remove
      if(reaction.message.partial) await reaction.message.fetch();
      if(reaction.partial) await reaction.fetch();
      if(user.bot) return;
      if(!reaction.message.guild) return;
      if(reaction.message.id === 'ÜZENET_ID'){ //here you need to write the message id to which you will react
          if(reaction.emoji.name === '🔞') {// emoji name   :emoji:
              await reaction.message.guild.members.cache.get(user.id).roles.remove('ROLE_ID')
              user.send('🔞 valami rangot elvettem')// this message will be sent privately by the bot to the person who react
          }
      }
  })

  client.on('messageReactionAdd', async(reaction, user) => {// role add
      if(reaction.message.partial) await reaction.message.fetch();
      if(reaction.partial) await reaction.fetch();
      if(user.bot) return;
      if(!reaction.message.guild) return;
      if(reaction.message.id === 'ÜZENET_ID'){ //here you need to write the message id to which you will react
          if(reaction.emoji.name === '🎮') {// emoji name   :emoji1:
              await reaction.message.guild.members.cache.get(user.id).roles.add('ROLE_ID')
              user.send('🎮 valami rangot hozzád adtam')// this message will be sent privately by the bot to the person who react
          }
      }
  })
  client.on('messageReactionRemove', async(reaction, user) => {//role remove
      if(reaction.message.partial) await reaction.message.fetch();
      if(reaction.partial) await reaction.fetch();
      if(user.bot) return;
      if(!reaction.message.guild) return;
      if(reaction.message.id === 'ÜZENET_ID'){ //here you need to write the message id to which you will react
          if(reaction.emoji.name === '🎮') {// emoji emoji name    :emoji1:
              await reaction.message.guild.members.cache.get(user.id).roles.remove('ROLE_ID')
              user.send('🎮 valami rangot elvettem')// this message will be sent privately by the bot to the person who react
          }
      }
  })




client.login("TOKEN");//https://discord.com/developers/applications
