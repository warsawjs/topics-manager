import { User } from './user';

export interface GithubUser extends User {
    idTokenPayload: string;
}
