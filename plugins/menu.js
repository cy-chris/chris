let handler  = async (m, { conn, usedPrefix: _p }) => {
  let preview = {}
  try {
    if (!conn.menu) preview = await conn.generateLinkPreview('https://github.com/Akbarsans/Miray-chan')
  } catch (e) {
    try {
      if (!conn.menu) preview = await global.conn.generateLinkPreview('https://github.com/Nurutomo/wabot-aq')
    } catch (e) {}
  } finally {
    let exp = global.DATABASE.data.users[m.sender].exp
    let name = conn.getName(m.sender)
    let d = new Date
    let locale = 'id-Id'
    let weton = ['Pon','Wage','Kliwon','Legi','Pahing'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })

    let text =  conn.menu ? conn.menu
      .replace(/%p/g, _p)
      .replace(/%exp/g, exp)
      .replace(/%name/g, name)
      .replace(/%weton/g, weton)
      .replace(/%week/g, week)
      .replace(/%date/g, date)
      .replace(/%time/g, time): `
 [chris-chan] 


EAEEE CU, ${name} milena na area 
Exp: ${exp}

📟 hora: ${time}
📆 Data: ${week}, ${date}

${more.repeat(1000)}

ganhar xp:
+1 Exp/mensagem normal
+10 Exp/comandos

═════✪〘 Menu 〙✪═══

═〘 Xp 〙 ═
➥ ${_p}leaderboard [jumlah user]

═〘 Comando 〙 ═
➥ ${_p}menu
➥ ${_p}help
➥ ${_p}?

═〘 Tutor BoT 〙 ═
➥ ${_p}tutorial

═〘 Outros 〙 ═
➥ ${_p}qr <texto>
➥ ${_p}stiker (rubrica)
➥ ${_p}stiker <url>
➥ ${_p}toimg (resposta)
➥ ${_p}bucin
➥ ${_p}ssweb <url>
➥ ${_p}sswebf <url>
➥ ${_p}google <pesquisa>
➥ ${_p}googlef <pesquisa>
➥ ${_p}readmore <texto/oculto>
➥ ${_p}quran
➥ ${_p}modApk

═〘 GRUPO 〙 ═
➥ ${_p} add [55xxxxxxxxx]
➥ ${_p} promote [@tagmember]
➥ ${_p} demote [@tagadmin]
➥ ${_p} linkgrup
➥ ${_p} pengumuman [texto]
➥ ${_p} hidetag [texto]
➥ ${_p} listonline
➥ ${_p} kick @Member
➥ ${_p} grouplist

═〘 EXPERIMENTAL 〙 ═
➥ ${_p}jadibot [código de login se houver/vazio]
➥ ${_p}berhenti
➥ ${_p}getcode

═〘 PROPRIETÁRIO 〙 ═
➥ ${_p}bcgc <texto>
➥ ${_p}setmenu <texto>
➥ ${_p}deletechat (chat do grupo)
➥ ${_p}deletechat group
➥ ${_p}mutechat (chat do grupo)
➥ ${_p}mutechat group

═〘 MEU NUMERO〙 ═
➥ wa.me//5581996207906
═〘 Info Bot 〙 ═
➥ nome : MILENA-BOT
➥ Codificado usando * Nano * no Android \\ w Termux
➥ 

Advanced:
  > return m

═〘 MILENA-BOT 〙═
`.trim()
    conn.reply(m.chat, {...preview, text}, m)
  }
}
handler.command = /^(menu|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
