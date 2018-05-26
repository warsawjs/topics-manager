export default class TopicModel {
    title;
    description;
    
    static fromBackendData(backendData) {
        return Object.assign(new TopicModel(), backendData);
    }
}
