import OauthProvider from './oauth-provider';

export class AuthService {
    static signIn() {
        return new Promise(resolve => resolve(OAuthProvider.login()));
    }

    static handleAuthentication() {
        return OAuthProvider.handleAuthentication();
    }

    static async isLogged(user) {
        return OAuthProvider.isLogged(user);
    }

    static async signOut() {
        return OAuthProvider.logout();
    }

    static async getUser() {
        return OAuthProvider.getCurrentUser();
    }
}
