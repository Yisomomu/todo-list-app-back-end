import { hash, compare } from "bcrypt";
import jwt from "jsonwebtoken";
import Usuario from "./../models/Usuario.js";
import config from "./../config.js";

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
  const token = jwt.sign({ id: usuario._id }, config.secret_key, {
    expiresIn: 86400,
  });
  res.status(200).json({ message: "Bienvenido", token });
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
  const usuarioNuevo = await newUser.save();
  const token = jwt.sign({ id: usuarioNuevo._id }, config.secret_key, {
    expiresIn: 86400,
  });
  res.status(201).json({ message: "Usuario creado", token });
};
