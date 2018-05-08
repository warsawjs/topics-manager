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
    width: 100%;
    margin-top: 2em;
    display: flex;
    flex: start;
    justify-content: space-between;
    text-align: left;
`;

export default Topic;
