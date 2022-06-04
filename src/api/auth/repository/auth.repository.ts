import {BaseRepository} from "../../../commons/baseRepository";
import { IUser } from "../types/types";
import User from "../models/auth.model";


export class UserRepository extends BaseRepository<IUser>{
  static readonly _collectionName:string = "User";

//   async find(item: User): Promise<User[]> {
//     throw new Error("Method no implemented")
//   }

  async create(user:IUser): Promise<IUser>{
    const res = user.save()
    return res;
  }

  async findOne(email:string): Promise<IUser | null>{
    return User.findOne({email})!;
  }

  async update(id:string, item:IUser): Promise<IUser>{
    throw new Error("Method no implemented")
  }
}
