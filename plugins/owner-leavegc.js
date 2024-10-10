let handler = async (m, { conn, text, command }) => {
let id = text ? text : m.chat  
await conn.reply(id, 'https://whatsapp.com/channel/0029VaNPPwR30LKQk437x51Q *[❗𝐈𝐍𝐅𝐎❗] Goodbye everyone, The group is so weird😞! (≧ω≦)ゞ*')
await conn.groupLeave(id)}
handler.command = /^(out|leavegc|leave|salirdelgrupo)$/i
handler.group = true
handler.rowner = true
export default handler
