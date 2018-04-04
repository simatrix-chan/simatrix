const Discord = require("discord.js");
const client = new discord.Client();


@client.event
async def on_ready():
    print('Pregatim comenzile')
    print("Uite cine a venit " +client.user.name)
    print("Este Online cu ID-ul: " +client.user.id)
    print('------Simatrix-chan. este Online------')
    print('-------------- STATUS:OK--------------')
    await client.change_presence(game=discord.Game(name="on www.animesimatrix.ro"))


client.login(process.env.BOT_TOKEN);
