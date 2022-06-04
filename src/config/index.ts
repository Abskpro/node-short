import dotenv from 'dotenv';

const envFound = dotenv.config();

if(envFound.error){
  throw new Error("Couldn't find .env file")
}

export default {
  port:parseInt(process.env.PORT as string, 10),
  jwtSecret: process.env.JWT_SECRET,
  mongoUrl: process.env.DATABASE_URL,
  dbUser: process.env.DATABASE_USER,
  dbPassword: process.env.DATABASE_PASSWORD
}
