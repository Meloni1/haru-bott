const { Client, Attachment, Message, VoiceChannel } = require('discord.js');
const bot = new Client();
const ytdl = require('ytdl-core');
const PREFIX = '.';


const cheerio = require('cheerio');

const request = require('request');

var list = [];

const token = 'ODM3MjkyOTUxMjI2MDIzOTc3.YIqb0w.PaEjXj2UWM6Qc6142DFUTJDn9-4';



bot.on('ready', () => {
  console.log("This bot is online!");
  bot.user.setActivity('Persona 5', { type: 'WATCHING' });
})


bot.on('message', msg => {
  if (msg.content === "Quoi") {
    msg.channel.send('Feur! :kissing_closed_eyes: ');
  }
})
bot.on('message', msg => {
  if (msg.content === "quoi") {
    msg.channel.send('Feur! :kissing_closed_eyes: ');
  }
})
bot.on('message', msg => {
  const words = msg.content.split(' ');

  if (words.includes('feet')) {
    msg.channel.send("J'ai entendu feet? :smirk_cat: ");
  }
});




bot.on('message', msg => {
  const words = msg.content.split(' ');

  if (words.includes('Alicia')) {
    msg.channel.send("Oula! La prononciation de ce prénom est interdite sur ce serveur :confounded: ");
  }
});

bot.on('message', msg => {
  const words = msg.content.split(' ');

  if (words.includes('ALICIA')) {
    msg.channel.send("Oula! La prononciation de ce prénom est interdite sur ce serveur :confounded: ");
  }
});

bot.on('message', msg => {
  const words = msg.content.split(' ');

  if (words.includes('A-word')) {
    msg.channel.send("Oula! La prononciation de ce prénom est interdite sur ce serveur :confounded: ");
  }
});

bot.on('message', msg => {
  const words = msg.content.split(' ');

  if (words.includes("'A-word")) {
    msg.channel.send("Oula! La prononciation de ce prénom est interdite sur ce serveur :confounded: ");
  }
});

bot.on('message', msg => {
  const words = msg.content.split(' ');

  if (words.includes('a-word')) {
    msg.channel.send("Oula! La prononciation de ce prénom est interdite sur ce serveur :confounded: ");
  }
});

bot.on('message', msg => {
  const words = msg.content.split(' ');

  if (words.includes('L-word')) {
    msg.channel.send("Oula! La prononciation de ce prénom est interdite sur ce serveur :confounded: ");
  }
});

bot.on('message', msg => {
  const words = msg.content.split(' ');

  if (words.includes('l-word')) {
    msg.channel.send("Oula! La prononciation de ce prénom est interdite sur ce serveur :confounded: ");
  }
});

bot.on('message', msg => {
  const words = msg.content.split(' ');

  if (words.includes('alicia')) {
    msg.channel.send("Oula! La prononciation de ce prénom est interdite sur ce serveur :confounded: ");
  }
});
bot.on('message', msg => {
  const words = msg.content.split(' ');

  if (words.includes('lise')) {
    msg.channel.send("Oula! La prononciation de ce prénom est interdite sur ce serveur :confounded: ");
  }
});
bot.on('message', msg => {
  const words = msg.content.split(' ');

  if (words.includes('Lise')) {
    msg.channel.send("Oula! La prononciation de ce prénom est interdite sur ce serveur :confounded: ");
  }

});

bot.on('message', msg => {
  const words = msg.content.split(' ');

  if (words.includes('lise')) {
    msg.channel.send("Oula! La prononciation de ce prénom est interdite sur ce serveur :confounded: ");
  }
});

bot.on('message', msg => {
  const words = msg.content.split(' ');

  if (words.includes('fais')) {
    if (words.includes('une')) {
      if (words.includes('pause')) {
    msg.channel.send("Ok! Repose toi bien :smiley_cat:");
  }
}
  }

});

bot.on('message', msg => {
  const words = msg.content.split(' ');

  if (words.includes('prends')) {

      if (words.includes('pause')) {
    msg.channel.send("Ok! Repose toi bien :smiley_cat:");
  }

  }

});




bot.on('message', msg => {
  const words = msg.content.split(' ');

  if (words.includes('post')) {

      if (words.includes('Prochain')) {
        msg.delete();
    msg.channel.send("Tg toi Rayane :rolling_eyes:  ");
  }

  }

});
bot.on('message', msg => {
  const words = msg.content.split(' ');

  if (words.includes('post')) {

      if (words.includes('prochain')) {
        msg.delete();
    msg.channel.send("Tg toi Rayane :rolling_eyes:  ");
  }

  }

});

bot.on('message', msg => {
  const words = msg.content.split(' ');

  if (words.includes('post:')) {

      if (words.includes('Prochain')) {
        msg.delete();
    msg.channel.send("Tg Rayane :rolling_eyes:  ");
  }

  }

});

bot.on('message', msg => {
  const words = msg.content.split(' ');

  if (words.includes('post:')) {

      if (words.includes('prochain')) {
        msg.delete();
    msg.channel.send("Tg Rayane :rolling_eyes:  ");
  }

  }

});



bot.on('message', msg => {
  const words = msg.content.split(' ');

  if (words.includes('post=')) {

      if (words.includes('prochain')) {
        msg.delete();
    msg.channel.send("Tg Rayane :rolling_eyes:  ");
  }

  }

});


bot.on('message', msg => {
  const words = msg.content.split(' ');

  if (words.includes('post=')) {

      if (words.includes('Prochain')) {
        msg.delete();
    msg.channel.send("Tg Rayane :rolling_eyes:  ");
  }

  }

});

bot.on('message', msg => {
  const words = msg.content.split(' ');

  if (words.includes('fin')) {

      if (words.includes('pause')) {
    msg.channel.send("C'est reparti !");
  }

  }

});
bot.on('message', msg => {
  const words = msg.content.split(' ');

  if (words.includes('Rayane')) {

      if (words.includes('crois')) {
        if (words.includes('surprise')) {
    msg.channel.send("C'est vrai ! J'ai une surprise, écris .rayanesurprise :smirk:");
  }

}
  }

});



bot.on('message', msg => {

  let args = msg.content.substring(PREFIX.length).split(" ");

  switch (args[0]) {
    case 'adieu':
      msg.delete();
      msg.channel.send("Adieu !", { files: ["https://i.imgur.com/LpnI0e9.png"] });
      break;

  }
});

bot.on('message', msg => {

  let args = msg.content.substring(PREFIX.length).split(" ");

  switch (args[0]) {
    case 'bonnenuit':
      msg.delete();
      msg.channel.send("Bonne nuit :heartbeat: !", { files: ["https://imgur.com/lhlqjGw.png"] });
      break;

  }
});


bot.on('message', msg => {

  let args = msg.content.substring(PREFIX.length).split(" ");

  switch (args[0]) {
    case 'feet':
      msg.delete();
      msg.channel.send("Just for you !", { files: ["https://i.imgur.com/n6IrrX4.png"] });
      break;

  }
});

bot.on('message', msg => {

  let args = msg.content.substring(PREFIX.length).split(" ");

  switch (args[0]) {
    case 'kawai':
      msg.delete();
      msg.channel.send("**Kawaii ne!**", { files: ["https://i.imgur.com/qNLRiGM.jpg"] });
      break;

  }
});

bot.on('message', msg => {

  let args = msg.content.substring(PREFIX.length).split(" ");

  switch (args[0]) {
    case 'furry':
      msg.delete();
      msg.channel.send(":fox:", { files: ["https://i.imgur.com/v0PhWx9.jpg"] });
      break;

  }
});


bot.on('message', msg => {

  let args = msg.content.substring(PREFIX.length).split(" ");

  switch (args[0]) {
    case 'yahallo':
      msg.delete();
      msg.channel.send("**YAHALLO !!!**", { files: ["https://i.imgur.com/2uvE5RR.jpg"] });
      break;

  }
});
bot.on('message', msg => {

  let args = msg.content.substring(PREFIX.length).split(" ");

  switch (args[0]) {
    case 'cheh':
      msg.delete();
      msg.channel.send("**Cheh!**", { files: ["https://i.imgur.com/fAEsFcK.jpg"] });
      break;

  }
});

bot.on('message', msg => {

  let args = msg.content.substring(PREFIX.length).split(" ");

  switch (args[0]) {
    case 'yaoi':
      msg.delete();
      msg.channel.send(":hot_face:", { files: ["https://i.imgur.com/S0WUR7v.jpg"] });
      break;

  }
});



bot.on('message', msg => {

  let args = msg.content.substring(PREFIX.length).split(" ");

  switch (args[0]) {
    case 'worstmha':
      msg.delete();
      msg.channel.send("__Le pire personnage de MHA:__", { files: ["https://i.imgur.com/r5Cj2OO.jpg"] });
      break;

  }
});

bot.on('message', msg => {

  let args = msg.content.substring(PREFIX.length).split(" ");

  switch (args[0]) {
    case 'travail':
      msg.delete();
      msg.channel.send("**Hop hop hop !**", { files: ["https://i.imgur.com/yLnG7dQ.png"] });
      break;

  }
});


bot.on('message', msg => {

  let args = msg.content.substring(PREFIX.length).split(" ");

  switch (args[0]) {
    case 'present':
      msg.delete();
      msg.channel.send(":sleepy:", { files: ["https://i.imgur.com/k9WVF57.png"] });
      break;

  }
});

bot.on('message', msg => {

  let args = msg.content.substring(PREFIX.length).split(" ");

  switch (args[0]) {
    case 'logs':
      msg.delete();
      msg.channel.send("", { files: ["https://i.imgur.com/nwbkbqv.png"] });
      break;

  }
});

bot.on('message', msg => {

  let args = msg.content.substring(PREFIX.length).split(" ");

  switch (args[0]) {
    case 'rayanesurprise':
      msg.delete();
      msg.channel.send("", { files: ["https://i.imgur.com/Xvp0QKa.png"] });
      break;

  }
});



bot.on('message', msg => {

  let args = msg.content.substring(PREFIX.length).split(" ");

  switch (args[0]) {
    case 'stopmudae':
      msg.delete();
      msg.channel.send(":angry:", { files: ["https://i.imgur.com/DRYi2gJ.png"] });
      break;

  }
});

bot.on('message', msg => {

  let args = msg.content.substring(PREFIX.length).split(" ");

  switch (args[0]) {
    case 'dsl':
      msg.delete();
      msg.channel.send(":pensive:", { files: ["https://imgur.com/lBZ3Syh.png"] });
      break;

  }
});



bot.on('message', msg => {

  let args = msg.content.substring(PREFIX.length).split(" ");

  switch (args[0]) {
    case 'doubt':
      msg.delete();
      msg.channel.send("**X**", { files: ["https://i.imgur.com/KOXTMok.png"] });
      break;

  }
});

bot.on('message', msg => {

  let args = msg.content.substring(PREFIX.length).split(" ");

  switch (args[0]) {
    case 'this':
      msg.delete();
      msg.channel.send("", { files: ["https://i.imgur.com/7IZwjYE.png"] });
      break;

  }
});



bot.on('message', msg => {

  let args = msg.content.substring(PREFIX.length).split(" ");

  switch (args[0]) {
    case 'nword':
     
      msg.reply("pourquoi tu essaies de dire le n-word?? Pas besoin de supprimer on sait que c'est toi :woman_frowning:");
      break;

  }
});

bot.on('message', msg => {

  let args = msg.content.substring(PREFIX.length).split(" ");
  
  switch (args[0]) {
    case 'help':
      
      msg.reply('**Voici les différentes commandes que je peux faire:**\n**•** .help\n**•** .adieu\n**•** .bonnenuit\n**•** .feet\n**•** .kawai\n**•** .furry\n**•** .yahallo\n**•** .cheh\n**•** .yaoi\n**•** .worstmha\n**•** .travail\n**•** .rayanesurprise :smirk:\n**•** .stopmudae\n**•** .dsl\n**•** .doubt\n**•** .nword (À tes risques et périls ^^)');
      break;

  }
});

bot.on('message', msg => {

  let args = msg.content.substring(PREFIX.length).split(" ");

  switch (args[0]) {
    case 'theoffice':
      image(msg);
      break;

  }
});

function image(msg){

    var options = {
      url: "http://results.dogpile.com/serp?qc=images&q=" + "the office meme",
      method :"GET",
      headers : {
        "Accept" : "text/html",
        "User-Agent": "Chrome"
      }
    };


    request(options, function(error, response, responseBody){
      if (error) {
        return;
      }
      $ = cheerio.load(responseBody);

      var links = $(".image a.link");

      var urls = new Array(links.length).fill(0).map((v,i) => links.eq(i).attr("href"));

      console.log(urls);
      if (!urls.length) {

        return;

      }

      msg.channel.send( urls[Math.floor(Math.random() * urls.length)]);

    });


  
  }

  
 

bot.on('message', async msg => {
  if (msg.content === PREFIX + 'queue') {
    let test = "> **FILE D'ATTENTE !**\n";
    for (var i = 1; i < list.length; i++) {
      let name;

      let getinfo = await ytdl.getBasicInfo(list[i]);
      name = getinfo.videoDetails.title;
      test += '> *' + '**' + i + '**' + ".* " + name + '\n';

    }
    msg.channel.send(test);

    

  }

  else if (msg.content.startsWith(PREFIX + 'p')) {
    if (msg.member.voice.channel) {
      let args = msg.content.split(' ');

      if (args[1] == undefined || !args[1].startsWith("https://www.youtube.com/watch?v=")) {
        msg.reply("soit tu m'as rien donné, soit c'est pas un lien youtube... :worried:");
      }
      else {
        if (list.length > 0) {
          list.push(args[1]);
          msg.reply("ta vidéo a été ajoutée à la file d'attente :sunglasses:");

        }
        else {
          list.push(args[1]);
          msg.reply("ta vidéo a été ajoutée à la file d'attente :sunglasses:");

          msg.member.voice.channel.join().then(connection => {
            playMusic(connection);

            connection.on('disconnect', () => {
              list = [];

            });


          }).catch(err => {
            msg.reply('Erreur lors de la connexion :' + err);

          });
        }


      }
      
    }
    

  }
  

}
);

function playMusic(connection) {
  let dispatcher = connection.play(ytdl(list[0], { quality: 'highestaudio' }));

  dispatcher.on('finish', () => {
    list.shift();
    dispatcher.destroy();

    if (list.length > 0) {
      playMusic(connection);
    }
    else {
      connection.disconnect();
    }
  });

  dispatcher.on('error', err => {
    console.log('erreur de dispatcher :' + err);
    dispatcher.destroy();
    connection.disconnect();
  });

}



bot.login('process.env.TOKEN');

