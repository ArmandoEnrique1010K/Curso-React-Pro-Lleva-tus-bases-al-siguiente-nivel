import { Document, Types, Schema, model } from 'mongoose';

export interface IEvento extends Document {
    title: string;
    notes?: string;
    start: Date;
    end: Date;
    user: Types.ObjectId;
}

const EventoSchema = new Schema<IEvento>({
    title: {
        type: String,
        required: true
    },
    notes: {
        type: String,
    },
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }
});

// Opcional: personalizar JSON
EventoSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    (object as any).id = _id;
    return object;
});

export const Event = model<IEvento>("Event", EventoSchema);
