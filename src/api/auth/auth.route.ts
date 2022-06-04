import express from 'express';
import {handleLogin, handleRegister} from './auth.controller';


const AuthRouter = () => {
  const router = express.Router()
  router.route('/register').post(handleRegister);
  router.route('/login').post(handleLogin);
  return router
}

export default AuthRouter;
