import React from 'react';
import TopicsList from './components/TopicsList';
import TopicService from '../shared/services/TopicService';

class TopicContainer extends React.Component {
    
    state = {
        topics: []
    };
    
    async componentDidMount() {
        //TODO in next PR: convert to Redux and add tests
        const topics = await TopicService.getSubmittedTopics();
        this.setState({
            topics
        });
    }
    
    render() {
        const { topics } = this.state;
        return (
            <TopicsList topics={topics}/>
        );
    }
}

export default TopicContainer;
