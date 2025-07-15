import { Client, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';

dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

const USER_ID = process.env.USER_ID;
const CHANNEL_ID = process.env.CHANNEL_ID;
const ROLE_ID = process.env.ROLE_ID;

client.once('ready', () => {
  console.log(`Logged in as ${client.user?.tag}!`);
});


client.on('messageCreate', async message => {
  // Only respond to the configured user in the configured channel
  if (
    message.author.id === USER_ID &&
    message.channel.id === CHANNEL_ID
  ) {
    if (ROLE_ID) {
      await message.reply(`<@&${ROLE_ID}>`);
    }
  }
});

client.login(process.env.DISCORD_TOKEN);
