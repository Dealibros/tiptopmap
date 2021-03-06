import { serialize } from 'cookie';
import Cookies from 'js-cookie';

// To parse anything we get returned from the library js-cookie
// set or get function
// getParsed to convert fron the string to an Object (get)=obtain
// setParsed Stringify to convert from the object to a JSON string (set)=create

export function getParsedCookie(key) {
  try {
    return JSON.parse(Cookies.get(key));
  } catch (err) {
    return undefined;
  }
}

export function setParsedCookie(key, value) {
  if (typeof window !== 'undefined') {
    Cookies.set(key, JSON.stringify(value));
  }
}

// ------------------------------------------------------------
// Issue here!
export function createSerializedRegisterSessionTokenCookie(token) {
  // check if we are in production e.g. Heroku
  const isProduction = process.env.NODE_ENV === 'production';

  // Save the token in a cookie on the user's machine
  // (cookies get sent automatically to the server every time
  // a user makes a request)
  const maxAge = 600 * 5; // 5 minutes

  return serialize('sessionToken', token, {
    maxAge: maxAge,

    expires: new Date(Date.now() + maxAge * 1000),

    // Important for security
    httpOnly: true,
    // Important for security
    // Set secure cookies on production (eg. Heroku)
    secure: isProduction,
    path: '/',
    // Be explicit about new default behavior
    // in browsers
    // https://web.dev/samesite-cookies-explained/
    sameSite: 'lax',
  });
}
