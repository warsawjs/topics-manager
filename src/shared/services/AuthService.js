import OAuthProvider from './OAuthProvider';

export class AuthService {
    
    static signIn() {
        return new Promise(resolve => resolve(OAuthProvider.login()));
    }
    
    static handleAuthentication() {
        return OAuthProvider.handleAuthentication();
    }
    
    static async isLogged() {
        return OAuthProvider.isLogged();
    }
    
    static async signOut() {
        return OAuthProvider.logout();
    }
    
    static async getUser() {
        return OAuthProvider.getCurrentUser();
    }
    
}
