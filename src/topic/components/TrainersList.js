import React from 'react';
import Text from '../../components/Text';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {UserModel} from '../../shared/models/UserModel';
import Trainer from '../../components/Trainer';

const TrainersList = ({trainers, author}) => (
    <StyledTrainersList>
        <Text type="secondary" margin="0 0 0.5em 0">Trenerzy</Text>
        <Trainer trainer={author} important/>
        {trainers.map((trainer, index) => <Trainer key={index} trainer={trainer}/>)}
        <button onClick={() => {}}>Chcę być trenerem</button>
    </StyledTrainersList>
);

TrainersList.propTypes = {
    trainers: PropTypes.arrayOf(PropTypes.instanceOf(UserModel)).isRequired,
    author: PropTypes.instanceOf(UserModel).isRequired
};

TrainersList.defaultProps = {
    trainers: [],
    author: UserModel.fromBackend({})
};

const StyledTrainersList = styled.figure`
    flex: 1;
    padding: 0 2em;
`;

export default TrainersList;
