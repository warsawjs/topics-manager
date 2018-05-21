import React from 'react';
import Text from '../Text';
import styled from 'styled-components';


const TrainersList = props => (
    <StyledTrainersList>
        <Text type="secondary" margin="0 0 0.5em 0">Trenerzy</Text>
        <ul>
            <li>
                <Text>Piotr Zientara</Text>
            </li>
            <li>
                <Text>Ula Kaźmierczyk</Text>
            </li>
            <li>
                <Text>Kamil Gajowy</Text>
            </li>
        </ul>
    </StyledTrainersList>
);

const StyledTrainersList = styled.figure`
    flex: 1;
    padding: 0 2em;
`;

export default TrainersList;
