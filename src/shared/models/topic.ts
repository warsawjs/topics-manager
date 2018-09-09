import { find } from 'lodash';
import { TopicMetadata } from './topic-metadata';
import { User } from './user';

export interface Topic extends TopicMetadata {
    trainers: User[];
    members: User[];
    author: User;
    id: string;
}

export const isAttending = (topic: Topic, user: User) => {
    return Boolean(user && find(topic.members, { email: user.email }));
};

export const isTrainer = (topic: Topic, user: User) => {
    return Boolean(
        user &&
            (topic.author.email === user.email ||
                find(topic.trainers, { email: user.email }))
    );
};
