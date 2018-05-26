import TopicModel from '../models/TopicModel';
export default class TopicService {
    
    //TODO: add tests when backend is "added" (called paths)
    //temp
    static topics = [
        TopicModel.fromBackendData({ title: 'React Basic', describe: 'Lorem ipsum' }),
        TopicModel.fromBackendData({ title: 'React Native Basic', describe: 'Lorem ipsum' }),
        TopicModel.fromBackendData({ title: 'React + Redux', describe: 'Lorem ipsum' }),
        TopicModel.fromBackendData({ title: 'React + Redux + Thunk', describe: 'Lorem ipsum' }),
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
