import {IToken} from "../types/types";
import {Schema, model} from 'mongoose';

const TokenSchema= new Schema<IToken>({
  access_token: {
    type: String,
    required: true,
  },
  refresh_token: {
    type: String,
    unique: true,
    required: true,
  },
  user_id: {
    type: String,
    required: true,
  },
  expires_at: {
    type: Date,
  },
});

const Token = model<IToken>("Token", TokenSchema) ;

export default Token
