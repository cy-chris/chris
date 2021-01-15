let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
〘info do bot〙
bot feito com javascript/nodejs

➥ Github: https://github.com/cy-chris/chris
➥ Instagram: instagram.com/cychris_fds.trash
➥ zap: wa.me//5581996207906

〘 obrigado a 〙 
➥ CYchris

〘 DONATE 〙 
➥ cychris: 55 81 99620-7906

〘 chris-chan 〙 
`.trim(), m)
}
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

