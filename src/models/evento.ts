import mongoose, { Types } from "mongoose";


const eventoSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    schedule: { type: String, required: true, trim: true }, // p.ej. "16:30 - 17:30"
    address: { type: String, trim: true },                  //(Latitud y Longitud, para usar geojson)
    ids: [{ type: Types.ObjectId, ref: 'Usuario' }],        // Vector de ids (referencia a usuarios)
  },
  { timestamps: false, versionKey: false }
);

export interface IEvento {
  _id: Types.ObjectId;
  name: string;
  schedule: string;
  address?: string;
  ids?: Types.ObjectId[]; // Vector de ids, el objectId es el tipo que usa mongoose para los ids
                         // (referencia a usuarios)
}

const Evento = mongoose.model('Evento', eventoSchema);
export default Evento;
