import React from 'react';
import Text from '../../components/Text';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from '../../components/Button';
import { UserModel } from '../../shared/models/UserModel';
import Trainer from '../../components/Trainer';
import Colors from '../../styles/Colors';

const TrainersList = ({ trainers, author }) => (
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
        <Button type="primary">Chcę być trenerem</Button>
    </StyledTrainersContainer>
);

TrainersList.propTypes = {
    trainers: PropTypes.arrayOf(PropTypes.instanceOf(UserModel)).isRequired,
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
