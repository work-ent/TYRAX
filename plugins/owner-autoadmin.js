/* Creditos a https://github.com/unptoadrih15/UPABOT-MD */

let handler = async (m, { conn, isAdmin }) => {  
if (m.fromMe) return
if (isAdmin) throw 'https://whatsapp.com/channel/0029VaNPPwR30LKQk437x51Q *[❗𝐈𝐍𝐅𝐎❗]  HELLO CREATOR, HOW ARE YOU ALREADY ADMIN OF THIS GROUP?*'
try {  
await conn.groupParticipantsUpdate(m.chat, [m.sender], "promote")
} catch {
await m.reply('https://whatsapp.com/channel/0029VaNPPwR30LKQk437x51Q *[❗𝐈𝐍𝐅𝐎❗ ] ERROR, IT WAS NOT POSSIBLE TO GIVE ADMIN*')}}
handler.command = /^autoadmin|me$/i
handler.rowner = true
handler.group = true
handler.botAdmin = true
export default handler
