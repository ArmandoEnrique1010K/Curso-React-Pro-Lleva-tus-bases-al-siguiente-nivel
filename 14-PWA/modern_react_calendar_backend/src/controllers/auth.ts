import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { User } from "../models/User";
import { generarJWT } from "../helpers/jwt";

interface CustomRequest extends Request {
    uid?: string;
    name?: string;
    body: {
        email: string;
        password: string;
        name: string;
    };
}

export const crearUsuario = async (req: CustomRequest, res: Response) => {
    const { email, password } = req.body;

    try {
        let usuario = await User.findOne({ email });

        if (usuario) {
            return res.status(400).json({
                ok: false,
                msg: "El usuario ya existe",
            });
        }

        usuario = new User(req.body);

        // Encriptar contraseña
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password, salt);

        await usuario.save();

        // Generar JWT
        const token = await generarJWT(usuario.id, usuario.name);

        return res.status(201).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            token,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: "Por favor hable con el administrador",
        });
    }
};

export const loginUsuario = async (req: CustomRequest, res: Response) => {
    const { email, password } = req.body;

    try {
        const usuario = await User.findOne({ email });

        if (!usuario) {
            return res.status(400).json({
                ok: false,
                msg: "El usuario no existe con ese email",
            });
        }

        // Confirmar los passwords
        const validPassword = bcrypt.compareSync(password, usuario.password);

        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: "Password incorrecto",
            });
        }

        // Generar JWT
        const token = await generarJWT(usuario.id, usuario.name);

        return res.json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            token,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: "Por favor hable con el administrador",
        });
    }
};

export const revalidarToken = async (req: CustomRequest, res: Response) => {
    const { uid, name } = req;

    if (!uid || !name) {
        return res.status(400).json({
            ok: false,
            msg: "Token inválido",
        });
    }

    const token = await generarJWT(uid, name);

    const user = await User.findById(uid);

    return res.json({
        ok: true,
        token,
        uid,
        name: user?.name,
    });
};
