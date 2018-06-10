import { UserModel } from './UserModel';
export class GithubUserModel extends UserModel {
    static fromOAuth0(idTokenPayload) {
        return Object.assign(new GithubUserModel(), idTokenPayload);
    }
}
