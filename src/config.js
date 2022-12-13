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
};
