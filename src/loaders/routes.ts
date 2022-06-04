import express from 'express';
import {AuthRouter, UrlRouter} from '../api';

const routes = ({app}:{app:express.Application}) => {
  app.use("/auth", AuthRouter()); 
  app.use("/url", UrlRouter()); 
  return app;
}

export default routes;
