"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_keys_1 = require("../config.keys");
var socket_io_1 = require("socket.io");
var chalk_1 = __importDefault(require("chalk"));
var chatService = function (httpServer) {
    var io = new socket_io_1.Server(httpServer, {
        cors: {
            origin: config_keys_1.CLIENT_URL,
            methods: ["GET", "POST"],
        },
    });
    io.on("connection", function (socket) {
        console.log("A user " + chalk_1.default.green(socket.id.slice(0, 5)) + " connection");
    });
};
exports.default = chatService;
