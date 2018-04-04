const Discord = require("discord.js");


const client = new discord.Client();
g = safygiphy.Giphy()
DEIN_NAME = "DEINE_USER_ID"

minutes = 0
hour = 0

print (discord.__version__)

@client.event
async def on_ready():
    print('Pregatim comenzile')
    print("Uite cine a venit " +client.user.name)
    print("Este Online cu ID-ul: " +client.user.id)
    print('------Simatrix-chan. este Online------')
    print('-------------- STATUS:OK--------------')
    await client.change_presence(game=discord.Game(name="on www.animesimatrix.ro"))


@client.event
async def on_message(message):
    if message.content.startswith('?hentai1'):
        response = requests.get("https://images.sex.com/images/pinporn/2018/03/28/620/19301099.gif", stream=True)
        await client.send_file(message.channel, io.BytesIO(response.raw.read()), filename='bild.gif', content='Test Bild.')

    if message.content.startswith('?hentai2'):
        response = requests.get("https://media.giphy.com/media/406Ylb1vcqLEmjwdW5/giphy.gif", stream=True)
        await client.send_file(message.channel, io.BytesIO(response.raw.read()), filename='bild.gif', content='Gif - Marina')
        
    if message.content.startswith('?hentai3'):
        response = requests.get("http://asiantvxxxx.com/wp-content/uploads/2018/03/KanojowaDaretodemoSexSuru-EroAnime-Episode2b.gif", stream=True)
        await client.send_file(message.channel, io.BytesIO(response.raw.read()), filename='bild.gif', content='Gif - kanojo-wa-dare-to-demo-sex-suru-vol-1-2')

    if message.content.startswith('?hentai4'):
        response = requests.get("https://images.sex.com/images/pinporn/2018/03/11/620/19227920.gif", stream=True)
        await client.send_file(message.channel, io.BytesIO(response.raw.read()), filename='bild.gif', content='Gif - Hentai Fanart')

    if message.content.startswith('?hentai5'):
        response = requests.get("https://images.sex.com/images/pinporn/2018/03/11/620/19229180.gif", stream=True)
        await client.send_file(message.channel, io.BytesIO(response.raw.read()), filename='bild.gif', content='Anime-Hentai 3D Mix Art')    

    if message.content.startswith('?hentai6'):
        response = requests.get("https://danbooru.donmai.us/data/__aori_and_hotaru_splatoon_and_splatoon_1_drawn_by_mike_inel__5a62fa120131c228627d652a6b2425db.gif", stream=True)
        await client.send_file(message.channel, io.BytesIO(response.raw.read()), filename='bild.gif', content='Gif - aori and hotaru (splatoon and splatoon 1) drawn by mike inel')    

    if message.content.startswith('?hentai7'):
        response = requests.get("https://images.sex.com/images/pinporn/2018/04/02/620/19317076.gif", stream=True)
        await client.send_file(message.channel, io.BytesIO(response.raw.read()), filename='bild.gif', content='pussy grind') 

    if message.content.startswith('?hentai8'):
        response = requests.get("https://images.sex.com/images/pinporn/2018/03/11/620/19228958.gif", stream=True)
        await client.send_file(message.channel, io.BytesIO(response.raw.read()), filename='bild.gif', content='Chun Li (Street Fighter)')

    if message.content.startswith('?hentai9'):
        response = requests.get("https://images.sex.com/images/pinporn/2018/04/03/620/19323872.gif", stream=True)
        await client.send_file(message.channel, io.BytesIO(response.raw.read()), filename='bild.gif', content='')

    if message.content.startswith('?hentai10'):
        response = requests.get("https://images.sex.com/images/pinporn/2018/03/07/620/19209586.gif", stream=True)
        await client.send_file(message.channel, io.BytesIO(response.raw.read()), filename='bild.gif', content='')

    if message.content.startswith('?hentai11'):
        response = requests.get("https://images.sex.com/images/pinporn/2018/03/17/620/19257050.gif", stream=True)
        await client.send_file(message.channel, io.BytesIO(response.raw.read()), filename='bild.gif', content='speedosausage')

    if message.content.startswith('?hentai12'):
        response = requests.get("https://images.sex.com/images/pinporn/2015/09/10/620/13754835.gif", stream=True)
        await client.send_file(message.channel, io.BytesIO(response.raw.read()), filename='bild.gif', content='Gif - Gaz butt jiggle [Invader Zim] (PurpleMantis/BigDad)')

    if message.content.startswith('?hentai13'):
        response = requests.get("https://images.sex.com/images/pinporn/2017/09/09/620/18333547.gif", stream=True)


    if message.content.startswith('?uptime'):
        await client.send_message(message.channel, ":watch:`Sunt deja Online de {0} oră(e) și {1} minute pe {2}.`".format(hour, minutes, message.server))

    if message.content.startswith('?ping'):
        await client.send_message(message.channel, ":ping_pong: `pong!! xD`")

    if message.content.startswith('?prajitura'):
        await client.send_message(message.channel, ":cookie: `Poftim, Hey! Minna!! Cine mai vrea prajituri!?`")
        print ("prajitura")

    if message.content.startswith('?anime'):
        gif_tag = "anime"
        rgif = g.random(tag=str(gif_tag))
        response = requests.get(
            str(rgif.get("data", {}).get('image_original_url')), stream=True
        )
        await client.send_file(message.channel, io.BytesIO(response.raw.read()), filename='video.gif')


    if message.content.startswith('?comenzi'):
        embed = discord.Embed(title="ver. Beta 0.1.6", description="Comenzile pot fi folosite de toti utilizatorii de pe acest canal de Discord.", color=0x00ff00)
        embed.set_author(name="Lista comenzilor:")
        embed.add_field(name=":watch: Află de cât timp Simatrix-chan este Online!", value="Comanda: ?uptime", inline=True)
        embed.add_field(name=":ping_pong: Joaca ping-pong cu Simatrix-chan.", value="Comanda: ?ping", inline=True)
        embed.add_field(name=":cookie: Ti-e foame? Si mie putin ce-i drept.. x( Cere o prajitura!!", value="Comanda: ?prajitura", inline=True)
        embed.add_field(name=":envelope_with_arrow: Află mai multe despre mesajele tale!", value="Comanda: ?mesaje", inline=True)
        embed.add_field(name=":spy: Spioneaza serverul! Simatrix-chan e aici sa noteze orice miscare din zona!", value="Comanda: ?spioneazaserver", inline=True)
        embed.add_field(name=":dart: Minna!! Mai multe Gif-uri!! Afisează gif-uri la întâmplare din Anime.", value="Comanda: ?anime", inline=True)
        embed.add_field(name=":hear_no_evil:  Spune-mi si iti voi repeta! Simatrix-chan repeta orice!", value="Comanda: ?spune (Nu mă pune să spun prostii BAKA! :pouting_cat: )", inline=True)
        embed.add_field(name=":gift_heart:  Gif-uri si Imagini Hentai.Permis doar pe canal NSFW!", value="Comanda: ?hentai<număr> (Permis doar in canalul de NSFW(hentai)!)", inline=True)
        embed.set_footer(text="Simatrix-chan este aici disponibilă pentru echipa noastră!")
        await client.send_message(message.channel, embed=embed)
        
    if message.content.startswith('?spioneazaserver'):
        embed = discord.Embed(name="{} este spionat...".format(message.server.name), description="Mai multe informatii despre server??!", color=0x00ff00)
        embed.set_author(name="Fondator:CosmiN")
        embed.add_field(name="Numele Server-ului", value=message.server.name, inline=True)
        embed.add_field(name="ID-UL", value=message.server.id, inline=True)
        embed.add_field(name="Roluri gasite", value=len(message.server.roles), inline=True)
        embed.add_field(name="Membrii", value=len(message.server.members))
        embed.set_thumbnail(url=message.server.icon_url)
        await client.send_message(message.channel, embed=embed)
        print ("spioneazaserver")



   
    if message.content.startswith('?mesaje'):
        counter = 0
        tmp = await client.send_message(message.channel, 'Calculez cele 200 de mesaje scrise...')
        time.sleep(5)
        async for log in client.logs_from(message.channel, limit=200):
            if log.author == message.author:
                counter += 1
        await client.edit_message(tmp,  ':incoming_envelope:`Hmm se pare ca ai scris de {} ori in ultimele 200 de mesaje.`'.format(counter))
        
    elif message.content.startswith('?spune'):
        kek = message.content[len("?spune "):].strip()
        await client.send_message(message.channel, kek)





async def tutorial_uptime():
    await client.wait_until_ready()
    global minutes
    minutes = 0
    global hour
    hour = 0
    while not client.is_closed:
        await asyncio.sleep(60)
        minutes += 1
        if minutes == 60:
            minutes = 0
            hour += 1





client.loop.create_task(tutorial_uptime())
client.login(process.env.BOT_TOKEN);
