import decode from 'jwt-decode';
import auth0 from 'auth0-js';

const ID_TOKEN_KEY = 'id_token';
const ACCESS_TOKEN_KEY = 'access_token';

const CLIENT_ID = 'eMpLssdovFz0Q0JgYvHSfUka7m7eq390';
const CLIENT_DOMAIN = 'coffeefinder.auth0.com';
const AUDIENCE = 'https://coffeefinder.auth0.com/userinfo'
const REDIRECT = 'http://localhost:3000/dashboard';

var auth = new auth0.WebAuth({
    clientID: CLIENT_ID,
    domain: CLIENT_DOMAIN
});

export function login() {
    auth.authorize({
        responseType: 'token id_token',
        redirectUri: REDIRECT,
        audience: AUDIENCE,
        scope: 'openid'
    });
}

// Logout function. Will remove tokens from localstorage
// then push those changes to the browser history of of the path '/' to 'deauthenticate' the user
export function logout() {
    clearIdToken();
    clearAccessToken();
    auth.logout({
        returnTo: 'http://localhost:3000/',
        clientID: CLIENT_ID
    });
}

// function that will run each time a path is attempted to be accesses that requires authentication
export function requireAuth(nextState, replace) {
    if (!isLoggedIn()) {
        // if the user is not authenticated then redirect back to '/'
        replace({pathname: '/'});
    }
}

// get id_token from local storage
export function getIdToken() {
    return localStorage.getItem(ID_TOKEN_KEY);
}

// get access_token from local storage
export function getAccessToken() {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
};

// clear id_token from local storage
function clearIdToken() {
    localStorage.removeItem(ID_TOKEN_KEY);
}

// clear access_token from local storage
function clearAccessToken() {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
}

// helper function to extract the tokens.
// two regex expressions. the first is finding the hashed path location and the second is replacing '+' with whitespace
function getParameterByName(name) {
    let match = RegExp('[#&]' + name + '=([^&]*)').exec(window.location.hash);
    console.log(match);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

// Store access_token in local storage
export function setAccessToken() {
    let accessToken = getParameterByName('access_token');
    localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
};

// Store id_token in local storage
export function setIdToken() {
    let idToken = getParameterByName('id_token');
    localStorage.setItem(ID_TOKEN_KEY, idToken);
};

// function to check if user is logged in
// I DONT THINK THIS IS NECESSARY
export function isLoggedIn() {
    const idToken = getIdToken();
    return !!idToken && !isTokenExpired(idToken);
}

// function to get a new expiration date for the users tokens
// DO I NEED THE TOKEN EXIPIRATION DATA FUNCTION?
function getTokenExpirationDate(encodedToken) {
    // first decode the token
    const token = decode(encodedToken);
    // if the token is not expired (!token.exp) return null. (uses built in .exp claim in JWT)
    if (!token.exp) { return null; }

    // if the token is expired then set a new date
    // give the constant date the value of a Data Constructor (new Date())
    // then set the date into UTCSeconds and set that to the token
    const date = new Date(0);
    date.setUTCSeconds(token.exp);
    // return date after after the new date is set.
    return date;
}

// function to check if token is expired
function isTokenExpired(token) {
    const expirationDate = getTokenExpirationDate(token);
    return expirationDate < new Date();
}