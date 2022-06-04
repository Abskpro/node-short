import Config from '../config/index';
import mongoose, { ConnectOptions } from "mongoose"

const InitiateMongoServer = async() => {
  // return await mongoose.connect(`mongodb+srv://absk:${Config.dbPassword}@shortly.v7aaufr.mongodb.net/?retryWrites=true&w=majority`,{
  return await mongoose.connect(`mongodb://127.0.0.1:27017/shortly`,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // ssl:true,
    // sslValidate:true,
    // sslCA: `cert.pem`,
    // authMechanism:'MONGODB-X509'
  } as ConnectOptions).then(() => {
    console.log("Mongodb connected")
  }).catch(e => console.log("ERROR", e));
}

export default InitiateMongoServer;
