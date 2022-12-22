import express from "express";
import cors from "cors";
import { connection } from "./database/MongoDB.js";
import authRoutes from "./routes/auth.routes.js";
import tareaRoutes from "./routes/tarea.routes.js";
import categoriaRoutes from "./routes/categoria.routes.js";
import config from "./config.js";

const app = express();

app.use(
  cors({
    origin: config.app_url,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("port", config.port || 8080);

connection();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/auth", authRoutes);
app.use("/tareas", tareaRoutes);
app.use("/categorias", categoriaRoutes);

app.listen(app.get("port"), () => {
  console.log(`Se inicia la aplicación en el puerto ${app.get("port")}`);
});
