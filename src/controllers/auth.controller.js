import { hash, compare } from "bcrypt";
import Usuario from "./../models/Usuario.js";

export const login = async (req, res) => {
  const {
    usuario: { email, password },
  } = req.body;
  const usuario = await Usuario.findOne({ email });
  if (!usuario) {
    return res
      .status(400)
      .json({ message: "Usuario o contraseña incorrectos" });
  }
  const matchPassword = await compare(password, usuario.password);
  if (!matchPassword) {
    return res
      .status(400)
      .json({ message: "Usuario o contraseña incorrectos" });
  }
  res.status(200).json({ message: "Bienvenido" });
};

export const signup = async (req, res) => {
  const {
    usuario: { nombres, apellidos, email, password },
  } = req.body;
  const usuario = await Usuario.findOne({ email });
  if (usuario) {
    return res.status(400).json({
      message: "El correo ya existe :(",
    });
  }
  const hashedPassword = await hash(password, 10);
  const newUser = new Usuario({
    nombres,
    apellidos,
    email,
    password: hashedPassword,
  });
  await newUser.save();
  res.status(201).json({ message: "Usuario creado" });
};
