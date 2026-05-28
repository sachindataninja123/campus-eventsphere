require("dotenv").config();

const config = {
  MONGO_URL: process.env.MONGO_URL,
  PORT: process.env.PORT,
  JWT_SECRET: process.env.JWT_SECRET,
  CLOUD_API_KEY: process.env.CLOUD_API_KEY,
  CLOUD_KEY_NAME: process.env.CLOUD_KEY_NAME,
  CLOUD_API_SECRET: process.env.CLOUD_API_SECRET,
};

if (!config.MONGO_URL) {
  throw new Error("MONGO_URL is not defined in environment variables");
}
if (!config.PORT) {
  throw new Error("PORT is not defined in environment variables");
}
if (!config.JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in environment variables");
}
if (!config.CLOUD_API_KEY) {
  throw new Error("CLOUD_API_KEY is not defined in environment variables");
}
if (!config.CLOUD_API_SECRET) {
  throw new Error("CLOUD_API_SECRET is not defined in environment variables");
}
if (!config.CLOUD_KEY_NAME) {
  throw new Error("CLOUD_KEY_NAME is not defined in environment variables");
}

module.exports = config;
