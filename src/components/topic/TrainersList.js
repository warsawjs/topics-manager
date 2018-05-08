import React from 'react';
import Text from "../Text";
import styled from 'styled-components';


const TrainersList = props => (
    <StyledTrainersList>
        <Text type="secondary" margin="0 0 0.5em 0">Trenerzy</Text>
        <Text>
            <ul>
                <li>Piotr Zientara</li>
                <li>Ula Kaźmierczyk</li>
                <li>Kamil Gajowy</li>
            </ul>
        </Text>
    </StyledTrainersList>
);

const StyledTrainersList = styled.figure`
    flex: 1;
    padding: 0 2em;
`

export default TrainersList;