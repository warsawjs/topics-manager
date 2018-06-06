import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Colors from '../../styles/Colors';

function commonStyle(props) {
    return `
        background-color: ${props.backgroundColor};
        color: black;
    `;
}

const DivContainer = styled.div`
    ${props => commonStyle(props)}
`;

const HeaderContainer = styled.header`
    ${props => commonStyle(props)}
`;

const SectionContainer = styled.section`
    ${props => commonStyle(props)}
`;

const FooterContainer = styled.footer`
    ${props => commonStyle(props)}
`;

const InnerContainer = styled.div`
    margin: auto;
    padding: 30px;
    max-width: 600px;
`;

const OuterContainer = props => {
    const { children, type, backgroundColor } = props;
    const allowedTags = {
        div: DivContainer,
        header: HeaderContainer,
        footer: FooterContainer,
        section: SectionContainer
    };

    if ( allowedTags[type] ) {
        const CustomContainer = allowedTags[type];
        return <CustomContainer backgroundColor={backgroundColor}>{children}</CustomContainer>;
    } else {
        return <DivContainer backgroundColor={backgroundColor}>{children}</DivContainer>;
    }
};

const Container = props => {
    const { type, backgroundColor, children, inner } = props;

    return (
        <OuterContainer type={type} backgroundColor={backgroundColor}>
            {inner === false
                ? <React.Fragment>{ children }</React.Fragment>
                : <InnerContainer>{ children }</InnerContainer>
            }
        </OuterContainer>
    );
};

Container.propTypes = {
    children: PropTypes.node.isRequired,
    backgroundColor: PropTypes.string,
    type: PropTypes.string,
    inner: PropTypes.bool
};

Container.defaultProps = {
    backgroundColor: Colors.white,
    inner: true
};


export default Container;
