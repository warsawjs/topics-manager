import auth0 from 'auth0-js';
import { GithubUserModel } from '../models/GithubUserModel';

export default class OAuthProvider {
    static auth0 = new auth0.WebAuth({
        domain: 'kamilg.eu.auth0.com',
        clientID: 'K1pbndlGaXtCaOay4b3XgaivZGBp4gJm',
        redirectUri: 'http://localhost:3000/callback',
        responseType: 'token id_token',
    });

    static login() {
        this.auth0.authorize();
    }

    static handleAuthentication() {
        return new Promise((resolve, reject) => {
            this.auth0.parseHash((err, authResult) => {
                if (
                    authResult &&
                    authResult.accessToken &&
                    authResult.idToken
                ) {
                    const user = GithubUserModel.fromOAuth0(
                        authResult.idTokenPayload
                    );
                    this.setSession(authResult, user);
                    resolve(user);
                } else if (err) {
                    reject(err);
                }
                resolve();
            });
        });
    }

    static setSession(authResult, user) {
        // Set the time that the Access Token will expire at
        let expiresAt = JSON.stringify(
            authResult.expiresIn * 1000 + new Date().getTime()
        );
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
        localStorage.setItem('user', JSON.stringify(user));
    }

    static isLogged(user) {
        return new Date().getTime() / 1000 < user.exp;
    }

    static getCurrentUser() {
        return GithubUserModel.fromOAuth0(
            JSON.parse(localStorage.getItem('user'))
        );
    }

    static logout() {
        //this.auth0.logout(); //looking for a hint; it should be done to force auth0 to clear data but it reloads the page
        localStorage.clear();
    }
}
