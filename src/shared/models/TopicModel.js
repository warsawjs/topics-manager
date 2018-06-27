import {UserModel} from './UserModel';

export default class TopicModel {
    title;
    description;
    likes;
    trainers;
    members;

    static fromBackendData(backendData) {
        const topic = Object.assign(new TopicModel(), backendData);
        topic.members = backendData.members ? backendData.members.map(member => Object.assign(new UserModel(), member)) : [];
        topic.trainers = backendData.trainers ? backendData.trainers.map(trainer => Object.assign(new UserModel(), trainer)) : [];
        return topic;
    }
}
