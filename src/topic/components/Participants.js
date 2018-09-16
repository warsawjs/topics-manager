import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import PieChart from 'react-svg-piechart';
import Colors from '../../styles/colors';
import { VOTES_NEEDED } from '../../settings';
import BecomeMemberContainer from '../BecomeMemberContainer';
import Topic from '../../shared/models/topic';

const Participants = ({ likes, topic }) => {
    const missingVotes = VOTES_NEEDED - likes;
    const chartData = [
        { title: 'Liczba głosów', value: likes, color: Colors.yellow },
        { title: 'Brakujące Głosy', value: missingVotes, color: Colors.red },
    ];
    return (
        <StyledParticipants>
            <PieChart
                data={chartData}
                expandOnHover
                onSectorHover={(d, i, e) => {
                    if (d) {
                        // eslint-disable-next-line no-console
                        console.log(
                            'Mouse enter - Index:',
                            i,
                            'Data:',
                            d,
                            'Event:',
                            e
                        );
                    } else {
                        // eslint-disable-next-line no-console
                        console.log('Mouse leave - Index:', i, 'Event:', e);
                    }
                }}
            />
            <BecomeMemberContainer topic={topic} />
        </StyledParticipants>
    );
};

Participants.propTypes = {
    topic: PropTypes.instanceOf(TopicModel).isRequired,
    likes: PropTypes.number,
};

const StyledParticipants = styled.figure`
    flex: 1;
`;

export default Participants;
