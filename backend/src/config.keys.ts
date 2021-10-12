import dotenv from "dotenv";
dotenv.config();

export const DATABASE_URL = process.env.DATABASE_URL!;

export const JDOODLE = {
  clientID: process.env.JDOODLE_CLIENTID,
  clientSecret: process.env.JDOOLDE_CLIENTSECRET,
};

export const PROD: boolean = false;

export const port = parseInt(<string>process.env.PORT) || 5000;

export const SERVER_URL = process.env.SERVER_URL || "http://localhost:3000";

export const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:5000";

export const COOKIE_KEYS = [process.env.COOKIE_KEYS!];

export const JDOODLE_URL = process.env.JDOODLE_URL!;
