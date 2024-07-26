require("dotenv").config();

const { Telegraf, Markup } = require("telegraf");

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  const welcomeMessage = `🚀 Welcome to Torq Network!

⛏️ Mining has never been simpler. Just click the mining button once every 24 hours, and you’re all set.

💎 Refer your friends to earn even more rewards. Plus, consider purchasing Torq Fuel for a host of benefits, including an accelerated mining rate.

📱 Don’t forget to follow us on social handles to stay tuned.

🤝 If you have any questions, feel free to reach out to our in-app support.`;

  const inlineKeyboard = Markup.inlineKeyboard([
    [Markup.button.url("Open App", "https://t.me/TorqNetwork_Bot/app")],
    [Markup.button.url("Join Telegram", "https://t.me/TheTorqNetwork")],
    [Markup.button.url("Follow X", "https://x.com/TheTorqNetwork")],
    [Markup.button.url("Subscribe YouTube","https://www.youtube.com/@thetorqnetwork")],
  ]);

  ctx.reply(welcomeMessage, inlineKeyboard);
});

bot.launch();
