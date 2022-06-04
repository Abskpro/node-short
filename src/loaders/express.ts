import cors from 'cors';
import express, {Request, RequestHandler, Response} from 'express';
import {json, urlencoded} from 'body-parser';
import InitiateMongoServer from '../db/mongoose';
import routes from './routes';
import {AuthRouter} from '../api';
import {errorHandler} from '../middleware/error.middleware';
import {notFoundHandler} from '../middleware/notFoundMiddleware';



export default async({app}: {app: express.Application}) => {

  //global middlewares
  app.enable("trust proxy");
  app.use(urlencoded({extended:false}))
  app.use(json());
  app.use(cors({credentials:true, origin:true}))
  app.use(express.json())

  //load all routes
  routes({app})
  
  //mongoose connection
  await InitiateMongoServer()

  app.listen(process.env.PORT,() =>{
    console.log(`Server listening on port ${process.env.PORT}`)
  })

  app.use(errorHandler);
  app.use(notFoundHandler);

  //check app status
  app.get("/status", (req:Request,res:Response) => {
    console.log("called")
    // res.status(200).end();
    res.json("All good").status(200)
  })
}

