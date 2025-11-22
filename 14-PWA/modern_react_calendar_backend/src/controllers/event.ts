import { Request, Response } from "express";
import { Event } from "../models/Event";
import { ObjectId, Types } from "mongoose";

interface CustomRequest extends Request {
    uid?: ObjectId;
    name?: string;
}

interface AuthRequest extends Request {
    uid: string;
}


const getEventos = async (req: Request, res: Response) => {

    const eventos = await Event.find()
        .populate('user', 'name');

    res.json({
        ok: true,
        eventos
    });
}

const crearEvento = async (req: AuthRequest, res: Response) => {

    const evento = new Event(req.body);

    try {

        const evento = new Event(req.body);
        evento.user = new Types.ObjectId(req.uid); // Convert string to ObjectId

        const eventoGuardado = await evento.save();

        res.json({
            ok: true,
            evento: eventoGuardado
        })


    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}

const actualizarEvento = async (req: CustomRequest, res: Response) => {

    const eventoId = req.params.id;
    const uid = req.uid;

    try {

        const evento = await Event.findById(eventoId);

        if (!evento) {
            return res.status(404).json({
                ok: false,
                msg: 'Evento no existe por ese id'
            });
        }

        if (evento.user.toString() !== uid.toString()) {
            return res.status(401).json({
                ok: false,
                msg: 'No tiene privilegio de editar este evento'
            });
        }

        const nuevoEvento = {
            ...req.body,
            user: uid
        }

        const eventoActualizado = await Event.findByIdAndUpdate(eventoId, nuevoEvento, { new: true });

        res.json({
            ok: true,
            evento: eventoActualizado
        });


    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }

}

const eliminarEvento = async (req: CustomRequest, res: Response) => {

    const eventoId = req.params.id;
    const uid = req.uid;

    try {

        const evento = await Event.findById(eventoId);

        if (!evento) {
            return res.status(404).json({
                ok: false,
                msg: 'Evento no existe por ese id'
            });
        }

        if (evento.user.toString() !== uid.toString()) {
            return res.status(401).json({
                ok: false,
                msg: 'No tiene privilegio de eliminar este evento'
            });
        }


        await Event.findByIdAndDelete(eventoId);

        res.json({ ok: true });


    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }

}


export {
    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento
}