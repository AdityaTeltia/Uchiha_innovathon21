"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.COOKIE_KEYS = exports.CLIENT_URL = exports.SERVER_URL = exports.port = void 0;
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.port = parseInt(process.env.PORT) || 5000;
exports.SERVER_URL = process.env.SERVER_URL || "http://localhost:3000";
exports.CLIENT_URL = process.env.CLIENT_URL || "http://localhost:5000";
exports.COOKIE_KEYS = [process.env.COOKIE_KEYS];
