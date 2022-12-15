import Categoria from "../models/Categoria.js";

export const traerCategorias = async (req, res) => {
  try {
    const categorias = await Categoria.find();
    res.status(200).json(categorias);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const traerCategoria = async (req, res) => {
  try {
    const { id } = req.params;
    const categoria = await Categoria.findById(id);
    res.status(200).json(categoria);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const crearCategoria = async (req, res) => {
  try {
    const { categoria } = req.body;
    await new Categoria(categoria).save();
    res.status(201).json({ message: "Categoria creada" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const actualizarCategoria = async (req, res) => {
  try {
    const { id } = req.params;
    const { categoria } = req.body;
    await Categoria.findByIdAndUpdate(id, categoria);
    res.status(200).json({ message: "Categoria actualizada" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const borrarCategoria = async (req, res) => {
  try {
    const { id } = req.params;
    await Categoria.findByIdAndDelete(id);
    res.status(200).json({ message: "Categoria eliminada" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
