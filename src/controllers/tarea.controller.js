import Tarea from "../models/Tarea.js";

export const traerTareas = async (req, res) => {
  try {
    const tareas = await Tarea.find();
    res.status(200).json(tareas);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const traerTarea = async (req, res) => {
  try {
    const { id } = req.params;
    const tarea = await Tarea.findById(id);
    res.status(200).json(tarea);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const crearTarea = async (req, res) => {
  try {
    const { tarea } = req.body;
    await new Tarea(tarea).save();
    res.status(201).json({ message: "Tarea creada" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const actualizarTarea = async (req, res) => {
  try {
    const { id } = req.params;
    const { tarea } = req.body;
    await Tarea.findByIdAndUpdate(id, tarea);
    res.status(200).json({ message: "Tarea actualizada" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const borrarTarea = async (req, res) => {
  try {
    const { id } = req.params;
    await Tarea.findByIdAndDelete(id);
    res.status(200).json({ message: "Tarea eliminada" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
