import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import PieChart from 'react-svg-piechart';
import Colors from '../../styles/Colors';
import {VOTES_NEEDED} from '../../settings';

const Participants = ({likes}) => {
    const missingVotes = VOTES_NEEDED - likes;
    const chartData = [
        {title: 'Liczba głosów', value: likes, color: Colors.yellow},
        {title: 'Brakujące Głosy', value: missingVotes, color: Colors.red},
    ];

    return (<StyledParticipants>
        <PieChart
            data={chartData}
            expandOnHover
            onSectorHover={(d, i, e) => {
                if (d) {
                    // eslint-disable-next-line no-console
                    console.log('Mouse enter - Index:', i, 'Data:', d, 'Event:', e);
                } else {
                    // eslint-disable-next-line no-console
                    console.log('Mouse leave - Index:', i, 'Event:', e);
                }
            }}
        />

    </StyledParticipants>
    );
};

const StyledParticipants = styled.figure`
    flex: 1;
`;

Participants.propTypes = {
    likes: PropTypes.number,
};

export default Participants;
