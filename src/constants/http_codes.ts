export const HTTP_STATUS = {
  INTERNAL_SERVER_ERROR: {code: 500, status: "Internal Server Error"},
  RESOURCE_NOT_FOUND: {code: 404, status: "Resource Not Found"},
  BAD_REQUEST: {code: 400, status: "Bad Request"},
  SUCCESS: {code: 200, status: "Succcess"},
  AUTHENTICATION_ERROR: {
    HEADER_NOT_FOUND: {
      code:401,
      status:"Unauthorized",
      message: "email and password not matching"
    },
    AUTHORIZATION_TOKEN_EXPIRED:{
      code: 401,
      status: "Unauthorized",
      message: "Token expired Re-Login"
    },
  },
  USER_EXISTS:{
    code: 409,
    status: "User already exist",
    message: "User is already registered"
  },
  REQUEST_FULLFILLED: {
    code: 204,
    status: ""
  }
}
