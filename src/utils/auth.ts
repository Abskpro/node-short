import * as jwt from "jsonwebtoken";

const { sign, verify , decode} = jwt;

export default class AuthUtils {
  public static generateAccessToken = (payload: any) => {
    try {
      return sign(payload, process.env.ACCESS_TOKEN_SECRET!, {expiresIn: '1d'});
    } catch (err) {
      console.log(err);
    }
  };

  public static generateRefreshToken = (payload: any) => {
    try {
      return sign(payload, process.env.REFRESH_TOKEN_SECRET!,{expiresIn: '90d'});
    } catch (err) {
      console.log(err);
    }
  };

  public static generateHeaders = (payload:any) => {
    return{
      refresh_token: this.generateRefreshToken(payload),
      access_token: this.generateAccessToken(payload)
    } 
  }

  public static decodeJWT = (token: string): jwt.Jwt => {
   return decode(token, {complete:true})! 
  }
}
