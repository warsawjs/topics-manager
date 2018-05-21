import React, { Component } from 'react';
import styled from 'styled-components';
import Button from './Button';
import { connect } from 'react-redux';
import { login, logout } from './../actions';
import Text from './Text';
import Colors from '../styles/Colors';

class TopBar extends Component {

    constructor(props) {
        super();
    }

    render() {
        const { loggedUser, login, logout } = this.props;
        const buttonAction = loggedUser ? logout : login;
        const buttonText = loggedUser ? 'Wyloguj' : 'Zaloguj';
        return (
            <TopBarWrapper>
                <Text type="basic" color={ Colors.white } display={ 'inline' }>
                    Zaloguj się przez GitHub
                </Text>
                <Button marginLeft='10px' onClick={ buttonAction }
                        type="primary">
                    { buttonText }
                </Button>
            </TopBarWrapper>
        );
    }

}

const mapStateToProps = state => ({
    loggedUser: state.loggedUser
});

const mapDispatchToProps = dispatch => ({
    login: () => dispatch(login()),
    logout: () => dispatch(logout())
});

const TopBarWrapper = styled.section`
    width: 100%;
    background-color: ${Colors.black};
    color: ${Colors.white};
    padding: 7px;
`;

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
