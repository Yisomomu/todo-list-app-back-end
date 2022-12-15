import { Router } from "express";
import {
  traerCategorias,
  traerCategoria,
  crearCategoria,
  actualizarCategoria,
  borrarCategoria,
} from "../controllers/categoria.controller.js";

const router = Router();

router
  .get("/", traerCategorias)
  .get("/:id", traerCategoria)
  .post("/", crearCategoria)
  .patch("/:id", actualizarCategoria)
  .delete("/:id", borrarCategoria);

export default router;
