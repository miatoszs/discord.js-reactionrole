
//Modules
const fs = require('fs');
const { Client } = require('discord.js');
const client = new Client({
  partials: ["MESSAGE", "CHANNEL", "REACTION"]
});





  client.on('messageReactionAdd', async(reaction, user) => {// role hozzáadás
      if(reaction.message.partial) await reaction.message.fetch();
      if(reaction.partial) await reaction.fetch();
      if(user.bot) return;
      if(!reaction.message.guild) return;
      if(reaction.message.id === 'ÜZENET_ID'){ //ide kell az üzenet id-t írni amire reagálni fogsz
          if(reaction.emoji.name === '🔞') {// emoji neve amivel reagálni fogsz p:   :emoji:
              await reaction.message.guild.members.cache.get(user.id).roles.add('ROLE_ID')//ide kell a role id-t beilleszteni
              user.send('🔞 valami rangot hozzád adtam')// ezt az üzenetet fogja a bot privátban elküldeni annak az embernek akihez a rolet adta
          }
      }
  })
  client.on('messageReactionRemove', async(reaction, user) => {//role eltávolítás
      if(reaction.message.partial) await reaction.message.fetch();
      if(reaction.partial) await reaction.fetch();
      if(user.bot) return;
      if(!reaction.message.guild) return;
      if(reaction.message.id === 'ÜZENET_ID'){ //ide kell az üzenet id-t írni amire reagálni fogsz
          if(reaction.emoji.name === '🔞') {// emoji neve amivel reagálni fogsz p:   :emoji:
              await reaction.message.guild.members.cache.get(user.id).roles.remove('ROLE_ID')//ide kell a role id-t beilleszteni
              user.send('🔞 valami rangot elvettem')// ezt az üzenetet fogja a bot privátban elküldeni annak az embernek akihez a rolet adta
          }
      }
  })

  client.on('messageReactionAdd', async(reaction, user) => {// role hozzáadás
      if(reaction.message.partial) await reaction.message.fetch();
      if(reaction.partial) await reaction.fetch();
      if(user.bot) return;
      if(!reaction.message.guild) return;
      if(reaction.message.id === 'ÜZENET_ID'){ //ide kell az üzenet id-t írni amire reagálni fogsz
          if(reaction.emoji.name === '🎮') {// emoji neve amivel reagálni fogsz p:   :emoji1:
              await reaction.message.guild.members.cache.get(user.id).roles.add('ROLE_ID')//ide kell a role id-t beilleszteni
              user.send('🎮 valami rangot hozzád adtam')// ezt az üzenetet fogja a bot privátban elküldeni annak az embernek akihez a rolet adta
          }
      }
  })
  client.on('messageReactionRemove', async(reaction, user) => {//role eltávolítás
      if(reaction.message.partial) await reaction.message.fetch();
      if(reaction.partial) await reaction.fetch();
      if(user.bot) return;
      if(!reaction.message.guild) return;
      if(reaction.message.id === 'ÜZENET_ID'){ //ide kell az üzenet id-t írni amire reagálni fogsz
          if(reaction.emoji.name === '🎮') {// emoji neve amivel reagálni fogsz p:   :emoji1:
              await reaction.message.guild.members.cache.get(user.id).roles.remove('ROLE_ID')//ide kell a role id-t beilleszteni
              user.send('🎮 valami rangot elvettem')// ezt az üzenetet fogja a bot privátban elküldeni annak az embernek akihez a rolet adta
          }
      }
  })




client.login("TOKEN");//https://discord.com/developers/applications
