import React from 'react';
import Button from './Button';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Text from './Text';
import Colors from '../styles/Colors';
import PropTypes from 'prop-types';
import { requestLogin, requestLogout } from '../actions/auth.actions';
import ActivityIndicator from '../shared/components/ActivityIndicator';
import Section from './Section';

//TODO make some AppError model and HelloGHError model (extends AppError)
class TopBar extends React.Component {
    onClick = () => {
        const { logged, requestLogout, requestLogin } = this.props;
        const onPressAction = logged ? requestLogout : requestLogin;
        onPressAction();
    };

    render() {
        const { logged, pending, user, error } = this.props;
        const buttonText = logged ? 'Wyloguj' : 'Zaloguj';
        return (
            <Section background={Colors.black}>
                <SpaceBetweenContainer>
                    <Text type="logo" margin="0 20px 0 0" display="inline">
                        Warsaw<strong>JS</strong>
                    </Text>
                    <MenuList>
                        <MenuLink>Meetup</MenuLink>
                        <MenuLink>Worhshop</MenuLink>
                        <MenuLink>Praca</MenuLink>
                        <MenuLink>O nas</MenuLink>
                        <MenuLink>Archiwum</MenuLink>
                        <MenuLink>Formularz</MenuLink>
                        <MenuLink>Kontakt</MenuLink>
                        <MenuLink>Blog</MenuLink>
                    </MenuList>
                    <Text type="basic" color={Colors.white} display="inline">
                        {logged && user && user.email}
                    </Text>
                    {pending && <ActivityIndicator />}
                    {error && <p>Błąd: {JSON.stringify(error)}</p>}
                    <Button
                        marginLeft="10px"
                        onClick={this.onClick}
                        type="primary"
                    >
                        {buttonText}
                    </Button>
                </SpaceBetweenContainer>
            </Section>
        );
    }
}

const MenuLink = styled.li`
    color: white;
    &:hover {
        color: ${Colors.red};
        padding: 5px 0;
        cursor: pointer;
        border-bottom: solid 1px ${Colors.white};
    }
`;
const SpaceBetweenContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const MenuList = styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;
    margin: 0 10px;
`;

TopBar.propTypes = {
    logged: PropTypes.bool,
    pending: PropTypes.bool,
    error: PropTypes.any,
    user: PropTypes.any,
    requestLogin: PropTypes.func,
    requestLogout: PropTypes.func,
};

const mapStateToProps = state => ({
    logged: state.auth.logged,
    pending: state.auth.pending,
    user: state.auth.user,
    error: state.auth.error,
});

const mapDispatchToProps = dispatch => ({
    requestLogin: () => dispatch(requestLogin()),
    requestLogout: () => dispatch(requestLogout()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TopBar);
