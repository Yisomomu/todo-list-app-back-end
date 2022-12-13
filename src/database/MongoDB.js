import { connect } from "mongoose";
import config from "./../config.js";

const URI = `mongodb+srv://${config.user_mongo}:${config.password_mongo}@${config.host_mongo}/${config.database_mongo}`;
// mongodb+srv://<user>:<password>@<localhost>/<database>?retryWrites=true&w=majority

export const connection = async () => {
  try {
    const db = await connect(URI, config.options_mongo);
    console.log("Conectado a",db.connection.name);
  } catch (error) {
    console.error(error);
  }
};
