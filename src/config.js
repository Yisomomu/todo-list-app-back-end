import { config } from "dotenv";

config();

export default {
  port: process.env.PORT || 8080,
  user_mongo: process.env.USER_MONGO,
  password_mongo: process.env.PASSWORD_MONGO,
  host_mongo: process.env.HOST_MONGO,
  database_mongo: process.env.DATABASE_MONGO,
  options_mongo: {
    retryWrites: true,
    w: "majority",
  },
  secret_key: process.env.SECRET_KEY,
  app_url: process.env.APP_URL || "http://localhost:3000",
};
