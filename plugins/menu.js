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
 [BRUXINHO-MODS] 


SALVE, ${name} 👋
Exp: ${exp}

📟 hora: ${time}
📆 Data: ${week}, ${date}

${more.repeat(1000)}

Cara Tambah XP:
+1 Exp/pesan biasa
+10 Exp/command

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
➥ ${_p}qr <teks>
➥ ${_p}stiker (rubrica)
➥ ${_p}stiker <url>
➥ ${_p}toimg (resposta)
➥ ${_p}bucin
➥ ${_p}ssweb <url>
➥ ${_p}sswebf <url>
➥ ${_p}google <pesquisa>
➥ ${_p}googlef <pesquisa>
➥ ${_p}readmore <teks>|<sembunyi>
➥ ${_p}quran
➥ ${_p}modApk

═〘 GRUPO 〙 ═
➥ ${_p} add [55xxxxxxxxx]
➥ ${_p} promote [@tagmember]
➥ ${_p} demote [@tagadmin]
➥ ${_p} linkgrup
➥ ${_p} pengumuman [text]
➥ ${_p} hidetag [text]
➥ ${_p} listonline
➥ ${_p} kick @Member
➥ ${_p} grouplist

═〘 EXPERIMENTAL 〙 ═
➥ ${_p}jadibot [kode login jika ada / kosongin]
➥ ${_p}berhenti
➥ ${_p}getcode

═〘 PROPRIETÁRIO 〙 ═
➥ ${_p}bcgc <teks>
➥ ${_p}setmenu <teks>
➥ ${_p}deletechat (chat grup)
➥ ${_p}deletechat group
➥ ${_p}mutechat (chat grup)
➥ ${_p}mutechat group

═〘 MEU CANAL〙 ═
➥https://youtube.com/channel/UCalQOjX5BFqim6x8JyCMM-w
═〘 Info Bot 〙 ═
➥ Name : ARR157 BOT
➥ Coded using *Nano* on Android \\w Termux
➥ 

Advanced:
  > return m

═〘 BRUXINHO-MODS〙═
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
