"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.botToken = void 0;
require("dotenv/config");
exports.botToken = process.env.TELEGRAM_TOKEN || "";
