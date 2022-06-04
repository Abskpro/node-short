import argon2 from 'argon2';

//hash any string of text
export const hashData = async (plainText: any) => {
  try {
     return await argon2.hash(plainText);
  } catch (err) {
    throw(err);
  } 
}

//check if string and hash is equal
export const compareHash = async(hash:string, plainText:string ) => {
  return await argon2.verify(hash, plainText)
}
