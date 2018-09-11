import { find, reject as filterOut } from 'lodash-es';
import { db } from './firebase.service';

// TODO move to i18n if ever supported
export const ALREADY_ATTENDING = 'You are already attending this topic!';
export const ALREADY_TRAINER =
    'You cannot be a trainer and a member at the same time!';
export const ALREADY_AUTHOR =
    'You cannot me a mentor and a member at the same time!';

export default class TopicService {
    static submitTopic(topic, author) {
        const newTopicKey = db
            .ref()
            .child('topics')
            .push().key;
        // temp; uncomment to push something to realtime database
        db.ref('topics/' + newTopicKey).set({
            ...topic,
            author: author.strip(),
            trainers: [],
            members: [],
            id: newTopicKey,
        });
    }

    // kept it in async as it should be a part of `attend` - see comments within it
    static async throwIfCannotAttend(topic, member) {
        const { trainers, members, author } = topic;
        const foundAsMember = find(members, { email: member.email });
        if (foundAsMember) throw ALREADY_ATTENDING;

        const foundAsTrainer = find(trainers, { email: member.email });
        if (foundAsTrainer) throw ALREADY_TRAINER;

        if (author.email === member.email) throw ALREADY_AUTHOR;
    }

    static async attend(topic, member) {
        // cannot find a neat way to mock firebase, thus..
        await this.throwIfCannotAttend(topic, member);

        return new Promise((resolve, reject) => {
            db.ref(`topics/${topic.id}`).set(
                {
                    ...topic,
                    members: [...topic.members, member],
                },
                err => {
                    if (err) return reject(err);
                    resolve();
                },
            );
        });
    }

    static async signUpAsTrainer(topic, trainer) {
        // cannot find a neat way to mock firebase, thus..
        await this.throwIfCannotAttend(topic, trainer);

        return new Promise((resolve, reject) => {
            db.ref(`topics/${topic.id}`).set(
                {
                    ...topic,
                    trainers: [...topic.trainers, trainer],
                },
                err => {
                    if (err) return reject(err);
                    resolve();
                },
            );
        });
    }

    static async leave(topic, member) {
        return new Promise((resolve, reject) => {
            db.ref(`topics/${topic.id}`).set(
                {
                    ...topic,
                    members: filterOut(topic.members, { email: member.email }),
                },
                err => {
                    if (err) return reject(err);
                    resolve();
                },
            );
        });
    }

    static async signOffTrainer(topic, trainer) {
        return new Promise((resolve, reject) => {
            db.ref(`topics/${topic.id}`).set(
                {
                    ...topic,
                    trainers: filterOut(topic.trainers, {
                        email: trainer.email,
                    }),
                },
                err => {
                    if (err) return reject(err);
                    resolve();
                },
            );
        });
    }
}
