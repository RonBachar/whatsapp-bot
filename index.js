const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--disable-accelerated-2d-canvas',
            '--no-first-run',
            '--no-zygote',
            '--disable-gpu'
        ],
        headless: true
    }
});

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('✅ הבוט מחובר לוואטסאפ!');
});

client.on('message', message => {
    if (message.body === 'היי') {
        message.reply('מה נשמע ? כאן הבוט שלך מדבר 🤖');
    }
});

client.initialize();
