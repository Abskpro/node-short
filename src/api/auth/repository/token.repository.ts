import { BaseRepository } from "../../../commons/baseRepository";
import Token from '../models/token.model';
import {IToken} from '../types/types';


export class TokenRepository extends BaseRepository<IToken>{

  async create(payload:IToken): Promise<IToken>{
    const token = new Token({
      ...payload
    }) 
    return token.save();
  }

  async findOne(id:string): Promise<IToken | null>{
    const token = await Token.findOne({user_id: id})
    return token;
  }

  async update(user_id:string, item:IToken): Promise<void>{
    await Token.findByIdAndUpdate(user_id, item);
  }
}
