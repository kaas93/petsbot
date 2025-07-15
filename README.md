# PetsBot

A Discord.js bot built with TypeScript. Uses dotenv for secret management and pm2 for running in development and production environments.

## What does PetsBot do?

PetsBot listens for messages from a specific user (configurable via `.env`) in a specific channel (also configurable). When that user sends a message in the configured channel, the bot replies by mentioning a configurable role. This is useful for alerting or notifying a group when a particular user posts in a channel.

- **User, channel, and role IDs are all set in your `.env` file.**
- The bot ignores all other users and channels.

## Setup

1. Copy `.env.example` to `.env` and fill in your secrets and IDs:
   - `DISCORD_TOKEN`: Your Discord bot token
   - `USER_ID`: The user ID to listen to
   - `CHANNEL_ID`: The channel ID to listen in
   - `ROLE_ID`: The role ID to mention in replies
2. Install dependencies:
   ```sh
   npm install
   ```
3. Build the bot:
   ```sh
   npx tsc
   ```
4. Run in development:
   ```sh
   pm2 start ecosystem.config.js --env development
   ```
5. Run in production:
   ```sh
   pm2 start ecosystem.config.js --env production
   ```

## Scripts

- `npm run build` - Compile TypeScript
- `npm run start` - Start bot (production)
- `npm run dev` - Start bot (development)

## Requirements

- Node.js
- Discord bot token (see .env.example)
- User, channel, and role IDs (see .env.example)

---

## License

MIT
