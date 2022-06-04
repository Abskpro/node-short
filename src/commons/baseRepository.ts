import {IWrite}from "./interfaces/IWrite";
import { IRead } from "./interfaces/IRead";

export abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {
  find(item: T): Promise<T[]> {
    throw new Error("Method not implemented.");
  }
  findOne(id: string): Promise<T | null> {
    throw new Error("Method not implemented.");
  }
  create(item: T): Promise<void | T> {
    throw new Error("Method not implemented.");
  }
  update(id: string, item: T): Promise<void | T> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<void | T> {
    throw new Error("Method not implemented.");
  }
}
