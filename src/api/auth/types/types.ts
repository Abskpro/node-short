import {Document} from "mongoose";

export interface IUser extends Document{
  name?:string; 
  email?:string;
  password?:string;
  created_at?: string;
  last_login?: string;
}

export interface IToken extends Document{
  access_token?:string,
  refresh_token?:string,
  user_id?:string,
  id?: string,
  expires_at?:string;
}
