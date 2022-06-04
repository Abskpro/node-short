import {Schema, model} from 'mongoose';
import { IUrl } from '../types/types';

const UrlSchema= new Schema<IUrl>({
  original_url: {
    type: String,
    required: true,
  },
  url_hash: {
    type: String,
    unique: true,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
  expires_at: {
    type:Date
  },
  user_id:{
    type:String
  }
});

const Url = model<IUrl>("Url", UrlSchema);

export default Url
