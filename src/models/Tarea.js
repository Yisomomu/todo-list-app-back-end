import { Schema, model } from "mongoose";

const Tarea = new Schema(
  {
    titulo: {
      type: String,
      required: true,
    },
    descripcion: {
      type: String,
      required: true,
    },
    estado: {
      type: String,
      default: "Pendiente",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model("tareas", Tarea);
