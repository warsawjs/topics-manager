import React from 'react';
import TopicDescription from "./TopicDescription";
import TrainersList from "./TrainersList";
import styled from 'styled-components';
import Participants from "./Participants";

const Topic = props => (
    <RowWrapper>
        <TopicDescription/>
        <TrainersList/>
        <Participants/>
    </RowWrapper>
);

const RowWrapper = styled.li`
    display: flex;
`

export default Topic;
