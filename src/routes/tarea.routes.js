import { Router } from "express";
import {
  traerTareas,
  traerTarea,
  crearTarea,
  actualizarTarea,
  borrarTarea,
} from "../controllers/tarea.controller.js";

const router = Router();

router
  .get("/", traerTareas)
  .get("/:id", traerTarea)
  .post("/", crearTarea)
  .patch("/:id", actualizarTarea)
  .delete("/:id", borrarTarea);

export default router;
