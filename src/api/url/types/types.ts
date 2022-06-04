import {Document} from "mongoose";

export interface IUrl extends Document{
  original_url?:string,
  url_hash?:string,
  created_at?:string,
  user_id?: string,
  expires_at?:string;
}

export interface ICounter extends Document{
  counter?: number,
}
