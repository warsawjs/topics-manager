import React, { SFC } from 'react';
import PieChart from 'react-svg-piechart';
import styled from 'styled-components';
import { VOTES_NEEDED } from '../../settings';
import { Topic } from '../../shared/models/topic';
import Colors from '../../styles/colors';
import BecomeMemberContainer from '../BecomeMemberContainer';

interface OwnProps {
    likes: number
    topic: Topic
}

const Participants: SFC<OwnProps> = ({ likes, topic }) => {
    const missingVotes = VOTES_NEEDED - likes;
    const chartData = [
        { title: 'Liczba głosów', value: likes, color: Colors.yellow },
        { title: 'Brakujące Głosy', value: missingVotes, color: Colors.red },
    ];
    return (
        <StyledParticipants>
            <PieChart
                data={chartData}
                expandOnHover={true}
            />
            <BecomeMemberContainer topic={topic}/>
        </StyledParticipants>
    );
};

const StyledParticipants = styled.figure`
    flex: 1;
`;

export default Participants;
