import express from 'express';
import * as dotenv from 'dotenv' ;


async function startServer(){
  dotenv.config();

  if(!process.env.PORT){
    console.log("No env file found");
    process.exit(1);
  }
  
  const app = express();


  await require('./loaders').default({ expressApp : app });
}

startServer();

