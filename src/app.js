import express from "express";

const app = express();

app.set("port", process.env.PORT || 8080);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(app.get("port"), () => {
  console.log(`Se inicia la aplicación en el puerto ${app.get("port")}`);
});
