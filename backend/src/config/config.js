require("dotenv").config();

const config = {
  MONGO_URL: process.env.MONGO_URL,
  PORT: process.env.PORT,
  JWT_SECRET: process.env.JWT_SECRET,
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

module.exports = config;
