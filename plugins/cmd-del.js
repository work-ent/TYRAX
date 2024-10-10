let handler = async (m, { conn, usedPrefix, text, command }) => {
let hash = text
if (m.quoted && m.quoted.fileSha256) hash = m.quoted.fileSha256.toString('hex')
if (!hash) throw `*https://whatsapp.com/channel/0029VaNPPwR30LKQk437x51Q [❗𝐈𝐍𝐅𝐎❗] Only texts or commands assigned to stickerd or images can be assigned, to obtain the assigned code use the command ${usedPrefix}listcmd*`
let sticker = global.db.data.sticker
if (sticker[hash] && sticker[hash].locked) throw '*https://whatsapp.com/channel/0029VaNPPwR30LKQk437x51Q [❗𝐈𝐍𝐅𝐎❗] Only the owner can perform the deletion*'
delete sticker[hash]
m.reply(`*https://whatsapp.com/channel/0029VaNPPwR30LKQk437x51Q [ ✔ ] The text/command assigned to the sticker/image. For deleted from database successfully*`)}
handler.command = ['delcmd']
handler.rowner = true
export default handler
