import React, { Component } from 'react';
import styled from 'styled-components';

import Text from './Text';
import Section from './Section';

class Header extends Component {
    render() {
        return (
            <Section>
                <Centered>
                    <Text type="header" margin="30px">
                        Stwórz Workshop!
                    </Text>
                    <Text type="secondary" margin="0 50px 40px">
                        Scratch the furniture i like big cats and i can not lie.
                        Making sure that fluff gets into the owner’s eyes ask
                        for petting then cats take over the world and need to
                        chase tail, jump launch to pounce upon little yarn
                        mouse, bare fangs at toy run hide in litter box until
                        treats are fed. Flex claws on the humans belly and purr
                        like a lawnmower meow to be let out, drink water out of
                        the faucet. I’m going to lap some water out of my
                        master’s cup meow lick yarn hanging out of own butt so
                        cough yet i’m going to lap some water out of my master’s
                        cup meow all of a sudden cat goes crazy.
                    </Text>
                </Centered>
            </Section>
        );
    }
}

const Centered = styled.div`
    text-align: center;
`;

export default Header;
