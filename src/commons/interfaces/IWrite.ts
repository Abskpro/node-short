export interface IWrite<T>{
  create(item:T): Promise<T | void>;
  update(id:string, item:T):Promise<T | void>;
  delete(id:string):Promise<T | void>
}
