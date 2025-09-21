import mongoose from "mongoose";

const eventoSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    schedule: { type: String, required: true, trim: true }, // p.ej. "16:30 - 17:30"
    address: { type: String, trim: true }                    // opcional
  },
  { timestamps: true, versionKey: false }
);

export interface IEvento {
  name: string;
  schedule: string;
  address?: string;
}

const Evento = mongoose.model('Evento', eventoSchema);
export default Evento;
