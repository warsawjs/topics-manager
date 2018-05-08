import React from 'react';
import styled from 'styled-components';

const Participants = props => (
    <StyledParticipants>
        <img src="../../../public/chart.PNG" alt=""/>
    </StyledParticipants>
);

const StyledParticipants = styled.figure`
    flex: 1;
    img {
        width: 100px;
        height: 100%;
    }
`

export default Participants;
