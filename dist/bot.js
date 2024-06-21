"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bot = void 0;
exports.startBotListens = startBotListens;
const node_telegram_bot_api_1 = __importDefault(require("node-telegram-bot-api"));
const config_1 = require("./config");
exports.bot = new node_telegram_bot_api_1.default(config_1.botToken, { polling: true });
function startBotListens() {
    // Matches "/echo [whatever]"
    exports.bot.onText(/\/echo (.+)/, (msg, match) => {
        if (!match)
            return;
        // 'msg' is the received Message from Telegram
        // 'match' is the result of executing the regexp above on the text content
        // of the message
        const chatId = msg.chat.id;
        const resp = match[1]; // the captured "whatever"
        // send back the matched "whatever" to the chat
        exports.bot.sendMessage(chatId, resp);
    });
    // Listen for any kind of message. There are different kinds of
    // messages.
    exports.bot.on("message", (msg) => {
        const chatId = msg.chat.id;
        // send a message to the chat acknowledging receipt of their message
        exports.bot.sendMessage(chatId, "Received your message");
    });
}
