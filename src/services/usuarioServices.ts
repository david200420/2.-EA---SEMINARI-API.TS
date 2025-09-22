import { Usuario, IUsuario } from '../models/usuario';
import { Types } from 'mongoose';

export class UserService {
    // Crear un nuevo usuario y si hay algun error que lo lanza
    async createUser(user: Partial<IUsuario>): Promise<IUsuario | null> {
        try {
          const newUser = new Usuario(user);
          return await newUser.save();
        } catch (error) {
          throw new Error('ERROR AL CREAR EL USUARIO: ' + (error as Error).message);
        }
      }
      
// Obtener todos los usuarios
    async getAllUsers(): Promise<IUsuario[]> {
        if ((await Usuario.countDocuments()) === 0) {
            throw new Error('NO HAY USUARIOS EN LA BASE DE DATOS');
        }
      return await Usuario.find();
    }

// Obtener un usuario por ID
    async getUserById(id: string): Promise<IUsuario | null> {
      if (!Types.ObjectId.isValid(id)) {
        throw new Error('NO HAY NINGUN USUARIO CON ESE ID');
      }
      return await Usuario.findById(id);
    }

// Buscar usuario por username
async getUserByUsername(username: string): Promise<IUsuario | null> {
    if (!username) {
      throw new Error('USERNAME NO PROPORCIONADO O INCORRECTO');
    }
    return await Usuario.findOne({ username });
  }

// Actualizar un usuario por ID
    async updateUserById(id: string, user: Partial<IUsuario>): Promise<IUsuario | null> {
      if (!Types.ObjectId.isValid(id)) {
        throw new Error('NO HAY NINGUN USUARIO CON ESE ID');
      }
      return await Usuario.findByIdAndUpdate(id, user, { new: true });
    }
// Actualizar un usuario por username
    async updateUserByUsername(username: string, user: Partial<IUsuario>): Promise<IUsuario | null> {
        if (!username) {
            throw new Error('USERNAME NO PROPORCIONADO O INCORRECTO');
          }
        return await Usuario.findOneAndUpdate({ username }, user, { new: true });
    }


// Eliminar un usuario por ID
    async deleteUserById(id: string): Promise<IUsuario | null> {
      if (!Types.ObjectId.isValid(id)) {
        throw new Error('NO HAY NINGUN USUARIO CON ESE ID');
      }
      return await Usuario.findByIdAndDelete(id);
    }

    // Eliminar un usuario por username
    async deleteUserByUsername(username: string): Promise<IUsuario | null> {
        if (!username) {
            throw new Error('USERNAME NO PROPORCIONADO O INCORRECTO');
          }
        return await Usuario.findOneAndDelete({ username });
    }



}