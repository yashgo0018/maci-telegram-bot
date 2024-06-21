import TelegramBot from "node-telegram-bot-api";
import { botToken } from "./config";

export const bot = new TelegramBot(botToken, { polling: true });

export function startBotListens() {
  // Matches "/echo [whatever]"
  bot.onText(/\/echo (.+)/, (msg, match) => {
    if (!match) return;
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message

    const chatId = msg.chat.id;
    const resp = match[1]; // the captured "whatever"

    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, resp);
  });

  // Listen for any kind of message. There are different kinds of
  // messages.
  bot.on("message", (msg) => {
    const chatId = msg.chat.id;

    // send a message to the chat acknowledging receipt of their message
    bot.sendMessage(chatId, "Received your message");
  });
}
