import {BaseRepository} from "../../../commons/baseRepository";
import Counter from "../models/counter.model";
import {ICounter} from '../types/types';


export class CounterRepository extends BaseRepository<ICounter>{
    
  async create(counter:ICounter): Promise<void>{
    const counterPayload = new Counter({...counter})
    await counterPayload.save();
  }

  async findOne(url:string): Promise<ICounter | null>{
    return Counter.findOne({url})!;
  }

}

