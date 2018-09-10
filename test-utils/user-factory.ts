import { Topic } from '../src/shared/models/topic';
import { TopicMetadata } from '../src/shared/models/topic-metadata';
import { User } from '../src/shared/models/user';

export const user = (data = {}): User => ({
    email: 'john@doe.com', name: 'John Doe', nickname: 'JohDoie', picture: '',
    ...data,
});

export const topicMetadata = (data = {}): TopicMetadata => ({
    title: 'React is cool!', description: 'React is my love!',
    ...data,
});

export const topic = (data = {}): Topic => ({
    id: 'QWERTY',
    trainers: [],
    members: [],
    author: user(),
    ...topicMetadata(data),
    ...data,
});
