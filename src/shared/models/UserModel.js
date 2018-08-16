export class UserModel {
    email;
    name;
    nickname;
    picture;

    static fromBackend(userData) {
        return Object.assign(new UserModel(), {
            email: userData.email,
            name: userData.name,
            nickname: userData.nickname,
            picture: userData.picture,
        });
    }

    strip() {
        return {
            email: this.email,
            name: this.name,
            nickname: this.nickname,
            picture: this.picture,
        };
    }
}
