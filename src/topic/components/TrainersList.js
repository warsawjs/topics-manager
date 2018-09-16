import React from 'react';
import Text from '../../components/Text';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { UserModel } from '../../shared/models/user';
import Trainer from '../../components/Trainer';
import Topic from '../../shared/models/topic';
import BecomeTrainerContainer from '../BecomeTrainerContainer';
import Colors from '../../styles/colors';

const TrainersList = ({ trainers, author, topic }) => (
    <StyledTrainersContainer>
        <Text type="primary" margin="0 0 0.5em 0">
            Trenerzy
        </Text>
        <StyledTrainersList>
            <Trainer trainer={author} important />
            {trainers.map((trainer, index) => (
                <Trainer key={index} trainer={trainer} />
            ))}
        </StyledTrainersList>
        <BecomeTrainerContainer topic={topic} />
    </StyledTrainersContainer>
);

TrainersList.propTypes = {
    trainers: PropTypes.arrayOf(PropTypes.instanceOf(UserModel)).isRequired,
    topic: PropTypes.instanceOf(TopicModel).isRequired,
    author: PropTypes.instanceOf(UserModel).isRequired,
};

TrainersList.defaultProps = {
    trainers: [],
    author: UserModel.fromBackend({}),
};

const StyledTrainersContainer = styled.figure`
    flex: 1;
    padding: 0 2em;
`;

const StyledTrainersList = styled.ul`
    li::before {
        margin-right: 15px;
        content: '•';
        color: ${Colors.yellow};
    }
`;

export default TrainersList;
