import Evento, { IEvento } from '../models/evento';

export const saveMethod = () => {
  return 'Hola'; // endpoint de bienvenida / comprobación
};

export const createEvento = async (data: IEvento) => {
  const ev = new Evento(data);
  return await ev.save();
};

export const getAllEventos = async () => {
  return await Evento.find().sort({ createdAt: -1 });
};

export const getEventoById = async (id: string) => {
  return await Evento.findById(id);
};

export const updateEvento = async (id: string, updateData: Partial<IEvento>) => {
  // Si prefieres el documento actualizado en la respuesta, usa findByIdAndUpdate con { new: true }
  return await Evento.updateOne({ _id: id }, { $set: updateData });
  // return await Evento.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });
};

export const deleteEvento = async (id: string) => {
  return await Evento.deleteOne({ _id: id });
};
