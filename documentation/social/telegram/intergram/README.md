
Ok using the intergram bot works I just checked that :
* the user sends a message from website
* the telegram bot revceives the message into its telegram direct messages I guess (or its channel?)
* and if in the Intergram chat I reply to the message received, then the bot will send back to the website
* Alright, all telegram bots are at https://core.telegram.org/bots


Ok c'est bon jai l'idée :
* il me faut l'interface grapphique de la petite fenêtre flottante pour le chat
* et au lieu que ça soit lié à un channelm ou une discussion de @Integram , eh ben derrière ça va être lié au fil de discussion d'un post : le post qui annonce l'émission du soir, ou alors un post balancé sur le moment de l'émission direct. Donc là il faut une reconfigurationà chaud du bot pour qu'il prennen en compte le nouveau post sur la discussion duquel le bot doti se positionner.
* donc en clair au niveau backend j'ai rien à faire, jsute reprndre le code du bot telegram pour les discussions, et changer l'interface graphqiue en fenêtre flottante


## Provisioning the Intergram bot

* I have to deploy the nodejs server to something like Heroku (but Heroku actualy is something...?)
```bash
git clone git@github.com:idoco/intergram.git
cd ./intergram/
git checkout master

pnpm install

export CCC=
# pnpm start
pnpm run start
```


## Ok je vais devoir changer le code source

Modifs souhaitées :
* que le chat soit associé à une discussion sur un post
* scenar :
  * On a un groupe de discussion `Telegram` appelé "le live"
  * Dans ce groupe de discussion, un membre équipe RadioJaune.com envoie un message, qu ipeut être un poll. Ou alors l'annonce du live
  * Alors le fil de discussion des commentaires est le flux géré par le robot.
  * mais enfin quand même, si c'était possible...
  * après, si j'obitens le comportement par rapport à un post :
    * il suffit de lancer un tel truc à chaque fouis qu'on fait un live
    * et les mesages des utilsiateurs osont bien envoyés sur le telegram de radiojaune.com,
    * et au final tosu les messages restent dans le groupe de discussion
    * Question : l'idéal serait d'automatiser la création du groupe de discussions. Et on pourrait faire un nouveau groupe de discussion pour cahque live. MAis alors cela fera beauvoup de groupes de discussion crées 'maxAGe'

  * Reste à faire quelques


* c'est uen appli preact
https://www.youtube.com/watch?v=K4ZPliFfScw
