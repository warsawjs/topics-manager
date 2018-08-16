import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '../components/Text';
import { UserModel } from '../shared/models/UserModel';

const Trainer = ({ trainer, important }) => (
    <StyledTrainer>
        <Text
            type="basic"
            display="inline"
            decoration={important ? 'underline' : ''}
        >
            {trainer.name}
        </Text>
    </StyledTrainer>
);

Trainer.propTypes = {
    trainer: PropTypes.instanceOf(UserModel).isRequired,
    important: PropTypes.bool,
};

const StyledTrainer = styled.li`
    margin: 15px 0;
    font-weight: ${props => props.weight};
`;

export default Trainer;
