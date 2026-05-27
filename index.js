const mineflayer = require('mineflayer')
const http = require('http')

// Fake web server to keep Render happy
http.createServer((req, res) => {
  res.write('DrippyBot is alive! 🔥')
  res.end()
}).listen(3000)

const messages = [
  'Guyz Am Afk For A Bit',
  'Nvm',
  'I Have Drip In My Nerves',
  'W Puchu',
  'Sub To DrippyBlox',
  'still here lol',
  'dont mind me',
  'drip never stops',
  'Pack Me In Obsedian',
  'W Drip'
]
function createBot() {
  const bot = mineflayer.createBot({
    host: 'DevXDarshXRohit.aternos.me',
    port: 63478,
    username: 'DripBot',
    version: '1.20.1',
    auth: 'offline',
    checkTimeoutInterval: 60000,
    connect_timeout: 30000
  })
  bot.once('spawn', () => {
    console.log('Drippy Bot is online! 🔥')
    setTimeout(() => {
      setInterval(() => {
        bot.setControlState('jump', true)
        setTimeout(() => {
          bot.setControlState('jump', false)
        }, 500)
      }, 30000)
      setInterval(() => {
        const msg = messages[Math.floor(Math.random() * messages.length)]
        bot.chat(msg)
        console.log('Drippy Bot said: ' + msg)
      }, 60000)
    }, 5000)
  })
  bot.on('kicked', (reason) => {
    console.log('Bot got kicked:', reason)
    setTimeout(createBot, 5000)
  })
  bot.on('error', (err) => {
    console.log('Error:', err)
    setTimeout(createBot, 5000)
  })
  bot.on('end', () => {
    console.log('Bot disconnected, reconnecting...')
    setTimeout(createBot, 5000)
  })
}
createBot()
