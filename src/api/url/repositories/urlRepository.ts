import {BaseRepository} from "../../../commons/baseRepository";
import Url from "../models/url.model";
import { IUrl } from "../types/types";


export class UrlRepository extends BaseRepository<IUrl>{
    
  async create(url:IUrl): Promise<IUrl>{
    const newUrl = new Url({...url});
    return newUrl.save();
  }

  async findOne(url:string): Promise<IUrl | null>{
    return Url.findOne({url})!;
  }

}
