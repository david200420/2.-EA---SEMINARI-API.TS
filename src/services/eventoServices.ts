import e from 'express';
import Evento, { IEvento } from '../models/evento';

export const createEvento = async (data: IEvento) => {
  const ev = new Evento(data);
  return await ev.save();
};
/*
export const getAllEventos = async () => {
  return await Evento.find().sort({ createdAt: -1 });
};
*/

//getAllEventos
export const getAllEventos = async () => {
  return await Evento.find();
};


export const getEventoById = async (id: string) => {
  return await Evento.findById(id);
};

export const updateEvento = async (id: string, data: Partial<IEvento>) => {
  return await Evento.findByIdAndUpdate(id, data, { new: true });
};

export const deleteEvento = async (id: string) => {
  return await Evento.deleteOne({ _id: id });
};

export const addUsuarioToEvento = async (eventoId: string, usuarioId: string) => {
  return await Evento.findByIdAndUpdate( // Basicamente esta funcion lo que hace  el primer compentnte
    //es a quien busca POR EL ID y el segundo componente es lo que le quieres hacer, 
    eventoId,
    { $addToSet: { ids: usuarioId } }, // $addToSet evita duplicados
    { new: true }
  );
}

export const removeUsuarioFromEvento = async (eventoId: string, usuarioId: string) => {
  return await Evento.findByIdAndUpdate(
    eventoId,
    { $pull: { ids: usuarioId } },
    { new: true }
  );
}

export const getUsuariosbyEvento = async (eventoId: string) => {// el sync se usa para esperar
  //a que se complete la operacion asincrona, en este caso la busqueda de la bbdd, hasta que
  //no se complete no continua con la siguiente instruccion
  return await Evento.findById(eventoId).populate('ids'); // populate es para traer los datos completos
  //de los usuarios referenciados en el array ids
}


