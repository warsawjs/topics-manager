import React from 'react';
import styled from 'styled-components';

const Participants = props => (
    <StyledParticipants>
        <img src="chart.PNG" alt="chart"/>
    </StyledParticipants>
);

const StyledParticipants = styled.figure`
    flex: 1;
    img {
        width: 100px;
    }
`;

export default Participants;
