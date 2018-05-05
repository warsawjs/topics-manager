import React, {Component} from 'react';
import styled from 'styled-components';
import Button from "./Button";
import {connect} from 'react-redux'
import {login, logout} from './../actions'

class TopBar extends Component {

    constructor(props) {
        super();
    }

    render() {
        const {loggedUser, login, logout} = this.props;
        console.log(loggedUser);
        const buttonAction = loggedUser ? logout : login;
        console.log('🦑buttonAction', buttonAction);
        console.log('🦑logout', logout);
        const buttonText = loggedUser ? 'Wyloguj' : 'Zaloguj';
        return (
            <TopBarWrapper>
                <h2>Zaloguj się przez GitHub</h2>
                <Button onClick={buttonAction} type="primary">{buttonText}</Button>
            </TopBarWrapper>
        );
    }
}

const mapStateToProps = state => ({
    loggedUser: state.loggedUser
})

const mapDispatchToProps = dispatch => ({
    login: () => dispatch(login()),
    logout: () => dispatch(logout())
})

const TopBarWrapper = styled.section`
  width: 100%;
  background-color: #000;
  color: #fff;
  
  h2 {
    font-size: 16px;
    display: inline;
    margin: 0 10px;
  }
`;

export default connect(mapStateToProps, mapDispatchToProps)(TopBar)
