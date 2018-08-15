import TopicModel from '../models/TopicModel';

export default class TopicService {

    //TODO: add tests when backend is "added" (called paths)
    //temp
    static people = [
        {email: 'john@doe.com', name: 'John Doe 1'},
        {email: 'john_alpha@doe.com', name: 'John Doe 2'},
        {email: 'john_omega@doe.com', name: 'John Doe 3'}
    ];

    static topics = [
        TopicModel.fromBackendData(
            {
                title: 'React Basic',
                describe: 'Lorem ipsum',
                trainers: TopicService.people,
                members: TopicService.people,
                likes: 10,
            }),
        TopicModel.fromBackendData({
            title: 'React Native Basic',
            describe: 'Lorem ipsum',
            trainers: TopicService.people,
            members: TopicService.people,
            likes: 39,
        }),
        TopicModel.fromBackendData({
            title: 'React + Redux',
            describe: 'Lorem ipsum',
            trainers: TopicService.people,
            members: TopicService.people,
            likes: 13,
        }),
        TopicModel.fromBackendData({
            title: 'React + Redux + Thunk',
            describe: 'Lorem ipsum',
            trainers: TopicService.people,
            members: TopicService.people,
            likes: 0,
        }),
    ];

    static async getSubmittedTopics() {
        return this.topics;
    }

    static async getPastTopics() {
        return this.topics;
    }

    static async submitTopic(topic) {
        this.topics.push(topic);
        return topic;
    }
}
