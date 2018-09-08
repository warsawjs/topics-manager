import { UserModel } from './user';
import { find } from 'lodash';

export default class TopicModel {
    title;
    description;
    likes;
    trainers;
    members;
    author; //GithubUser
    id;

    static fromBackendData(backendData) {
        const topic = Object.assign(new TopicModel(), backendData);
        topic.members = backendData.members
            ? backendData.members.map(member =>
                Object.assign(new UserModel(), member)
            )
            : [];
        topic.trainers = backendData.trainers
            ? backendData.trainers.map(trainer =>
                Object.assign(new UserModel(), trainer)
            )
            : [];
        return topic;
    }

    amIAttending(myself) {
        return Boolean(myself && find(this.members, { email: myself.email }));
    }

    amITrainer(myself) {
        return Boolean(
            myself &&
                (this.author.email === myself.email ||
                    find(this.trainers, { email: myself.email }))
        );
    }
}
