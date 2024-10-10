
let handler = async (m, { conn, args, usedPrefix, command }) => {
	let pp = imagen4
  
	let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
   m.reply(`[[■■■■■■■■■■]100%]
╭────[ *𝙏𝙔𝙍𝘼𝙓𝙀𝙎* ]
│     𝘽𝙊𝙏 𝙍𝙐𝙉𝙏𝙄𝙈𝙀
│❖𝘾𝙃𝘼𝙉𝙉𝙀𝙇: https://whatsapp.com/channel/0029VaNPPwR30LKQk437x51Q 
│❖𝐂𝐑𝐄𝐀𝐓𝐎𝐑: 𝕬𝖗𝖑𝖔𝖉𝖗𝖆𝖌𝖔𝖓
│❖𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐍𝐔𝐌𝐁𝐄𝐑= wa.me/254702713600
╰────────────────\n\n${muptime}`) 
}
handler.help = ['runtime']
handler.tags = ['main']
handler.command = ['runtime', 'uptime']
export default handler

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, 'd ', h, 'h ', m, 'm ', s, 's '].map(v => v.toString().padStart(2, 0)).join('')
}
