import auth0, { Auth0DecodedHash, AuthOptions, WebAuth } from 'auth0-js';
import { User } from '../models/user';

export default class OAuthProvider {

    public static login() {
        this.auth0.authorize();
    }

    public static handleAuthentication() {

        return new Promise((resolve, reject) => {
            this.auth0.parseHash((err, authResult: Auth0DecodedHash) => {
                if (
                    authResult &&
                    authResult.accessToken &&
                    authResult.idToken
                ) {
                    const user = {
                        ...authResult.idTokenPayload,
                    };
                    this.setSession(authResult, user);
                    resolve(user);
                } else if (err) {
                    reject(err);
                }
                resolve();
            });
        });
    }

    public static setSession(authResult, user: User) {
        // Set the time that the Access Token will expire at
        const expiresAt = JSON.stringify(
            authResult.expiresIn * 1000 + new Date().getTime(),
        );
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
        localStorage.setItem('user', JSON.stringify(user));
    }

    public static isLogged(user) {
        return new Date().getTime() / 1000 < user.exp;
    }

    public static getCurrentUser(): User {
        return JSON.parse(localStorage.getItem('user'));
    }

    public static logout() {
        // this.auth0.logout(); // looking for a hint; it should be done to force auth0 to clear data but it reloads the page
        localStorage.clear();
    }

    private static auth0: WebAuth = new auth0.WebAuth({
        domain: 'kamilg.eu.auth0.com',
        clientID: 'K1pbndlGaXtCaOay4b3XgaivZGBp4gJm',
        redirectUri: 'http://localhost:3000/callback',
        responseType: 'token id_token',
    } as AuthOptions);
}
