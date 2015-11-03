/**
 * JWT Token
 * Header:
 * {
 *   "alg": "HS256",
 *   "typ": "JWT"
 * }
 * Payload:
 * {
 *   "id": "123",
 *   "firstName": "Robert",
 *   "lastName": "Long"
 * }
 * Secret: secret
 **/
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMyIsImZpcnN0TmFtZSI6IlJvYmVydCIsImxhc3ROYW1lIjoiTG9uZyJ9.B3eyyq6gXkeNUb_m6WuvA0pha8KI4uE9bkvYT5EDYK4';

export default class Farmbot {
  constructor(options) {
    this.options = {
      token: null,
      ...options,
    };
  }

  static login(/* userName, password */) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ token: TOKEN });
      }, 200);
    });
  }

  static signup(/* email, username, password, passwordConfirmation */) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ token: TOKEN });
      }, 200);
    });
  }
}
