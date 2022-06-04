import { Request, Response, NextFunction } from "express";
import crypto from "crypto";
import { CounterRepository } from "../repositories/counterRepository";
import { ICounter, IUrl } from "../types/types";
import { currentDate, dateToISOString } from "../../../utils/dateTimeUtils";
import {UrlRepository} from "../repositories/urlRepository";

const _counterRepository = new CounterRepository();
const _urlRepository = new UrlRepository();


export const handleGenerateUrl = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let hash;
  let counter:number;
  let response = await _counterRepository.findOne();
  if (response!.counter === null) {
    counter = 0;
    hash = crypto.createHash("md5").update("0").digest("hex");
  } else {
    counter = response!.counter! + 1;
    hash = crypto.createHash("md5").update(counter.toString()).digest("hex");
  }
  const payload: IUrl = {
    original_url: req.body.url,
    url_hash: hash.substring(0, 7),
    expires_at: dateToISOString(currentDate(90)),
  } as IUrl;
  await _urlRepository.create(payload);
  await _counterRepository.create({counter} as ICounter);
  return res.status(200).json({ msg: "success" });
};


