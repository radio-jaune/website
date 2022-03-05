
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
