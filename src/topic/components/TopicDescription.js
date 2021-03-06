import React from 'react';
import PropTypes from 'prop-types';
import Colors from '../../styles/Colors';
import Text from '../../components/Text';
import styled from 'styled-components';

const TopicDescription = props => (
    <StyledTopicDescription>
        <Text type="primary" margin="0 0 5px 0" color={Colors.red}>
            {props.title}
        </Text>
        <Text type="basic">{props.description}</Text>
    </StyledTopicDescription>
);

const StyledTopicDescription = styled.figure`
    flex: 2;
`;

TopicDescription.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default TopicDescription;
