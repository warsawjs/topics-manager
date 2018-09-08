import React, { SFC } from 'react';
import styled from 'styled-components';
import { User } from '../shared/models/user';
import Text, { TextType } from './Text';

export interface TrainerProps {
    trainer: User,
    important?: boolean,
}

const Trainer: SFC<TrainerProps> = ({ trainer, important = false }) => (
    <StyledTrainer>
        <Text
            type={TextType.Basic}
            style={{ display: 'inline', textDecoration: (important ? 'underline' : 'none') }}>
            {trainer.name}
        </Text>
    </StyledTrainer>
);

const StyledTrainer = styled.li`
    margin: 15px 0;
`;

export default Trainer;
