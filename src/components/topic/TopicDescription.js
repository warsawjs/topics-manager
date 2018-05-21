import React from 'react';
import Colors from '../../styles/Colors';
import Text from '../Text';
import styled from 'styled-components';

const TopicDescription = props => (
    <StyledTopicDescription>
        <Text type="secondary" margin="0 0 0.5em 0" color={ Colors.red }>
            Kind of JavaScript
        </Text>
        <Text>
            Scratch the furniture i like big cats and i can not lie. Making
            sure that fluff gets into the owner's eyes ask for petting then cats
            take over the world and need to chase tail, jump launch to pounce
            upon little yarn mouse, bare fangs at toy run hide in litter box
            until treats are fed. Flex claws on the human's belly and purr like
            a lawnmower meow to be let out, drink water out of the faucet. I'm
            going to lap some water out of my master's cup meow lick yarn
            hanging out of own butt so cough yet i'm going to lap some water out
            of my master's cup meow all of a sudden cat goes crazy.
        </Text>
    </StyledTopicDescription>
);

const StyledTopicDescription = styled.figure`
    flex: 2;
`;

export default TopicDescription;
