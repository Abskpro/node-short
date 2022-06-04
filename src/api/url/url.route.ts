import express from 'express';
import { handleGenerateUrl } from './controllers/url.controller';


const UrlRouter= () => {
  const router = express.Router()
  router.route('/short').post(handleGenerateUrl);
  return router
}

export default UrlRouter;
