import { NextFunction, Request, Response } from "express";
import { HTTP_STATUS } from "../../constants/http_codes";
import { compareHash, hashData } from "../../utils/argonHash";
import AuthUtils from "../../utils/auth";
import { currentDate, dateToISOString } from "../../utils/dateTimeUtils";
import User from "./models/auth.model";
import { UserRepository } from "./repository/auth.repository";
import { TokenRepository } from "./repository/token.repository";
import { IToken } from "./types/types";

const userRepository = new UserRepository();
const tokenRepository = new TokenRepository();

export const handleLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;
  const result = await userRepository.findOne(email);
  if (!result || result === null) {
    next(HTTP_STATUS.RESOURCE_NOT_FOUND);
  } else {
    if (await compareHash(result.password!, password)) {
      const AuthHeaders = AuthUtils.generateHeaders({
        id: result._id,
        email: result.email,
      });
      const tokenPayload: IToken = {
        refresh_token: AuthHeaders.refresh_token!,
        access_token: AuthHeaders.access_token!,
        user_id: result.id, expires_at: dateToISOString(currentDate(90)),
      } as IToken;

      await setTokenInDb(res, tokenPayload);

      res.setHeader("Content-Type", "application/json");
      res.setHeader("access-token", AuthHeaders.access_token!);
      res.setHeader("refresh-token", AuthHeaders.refresh_token!);

      const response = {
        name: result.name,
        id: result._id,
        email: result.email,
      };

      res.status(200).json(response);
    }
  }
};

export const handleRegister = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, email, password } = req.body;
  const user = await userRepository.findOne(email);
  if (user) {
    next(HTTP_STATUS.USER_EXISTS);
  } else {
    console.log(req.body);
    const hashedPassword = await hashData(password);
    const signUpCred = new User({
      name,
      email,
      password: hashedPassword,
    });
    await userRepository.create(signUpCred);
  }
};

const setTokenInDb = async (
  res: Response,
  tokenPayload: IToken
): Promise<void> => {
  const token = await tokenRepository.findOne(tokenPayload.user_id!);
  !!token ? handleUpdateToken(tokenPayload) : handleStoreToken(tokenPayload);
};

async function handleUpdateToken(tokenPayload: IToken): Promise<void> {
  await tokenRepository.update(tokenPayload.user_id!, tokenPayload);
}

async function handleStoreToken(tokenPayload: IToken): Promise<void> {
  await tokenRepository.create(tokenPayload);
}
