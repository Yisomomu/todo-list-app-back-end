import { Schema, model } from "mongoose";

const Categoria = new Schema(
  {
    titulo: {
      type: String,
      required: true,
    },
    descripcion: {
      type: String,
      required: true,
    },
    tareas: [
      {
        type: Schema.Types.ObjectId,
        ref: "tareas",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default model("categorias", Categoria);
