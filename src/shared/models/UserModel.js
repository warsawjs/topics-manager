export class UserModel {
    email;
    name;
    nickname;

    static fromBackend(userData) {
        return Object.assign(new UserModel(), {
            email: userData.email,
            name: userData.name,
            nickname: userData.nickname
        });
    }
}
