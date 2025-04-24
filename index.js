const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');

const client = new Client();

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
