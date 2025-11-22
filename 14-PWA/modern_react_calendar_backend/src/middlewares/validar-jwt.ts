import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

interface JWTPayload {
    uid: string;
    name: string;
}

export const validarJWT = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header("x-token");

    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: "No hay token en la petición",
        });
    }

    try {
        const { uid, name } = jwt.verify(
            token,
            process.env.SECRET_JWT_SEED as string
        ) as JWTPayload;

        // Añadir propiedades al request
        (req as any).uid = uid;
        (req as any).name = name;

        next();
    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: "Token no válido",
        });
    }
};

