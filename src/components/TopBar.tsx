import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { requestLogin as loginAction, requestLogout as logoutAction } from '../actions/auth.actions';
import ActivityIndicator from '../shared/components/ActivityIndicator';
import { BackgroundImage } from '../shared/components/BackgroundImage';
import { User } from '../shared/models/user';
import Colors from '../styles/Colors';
import Button, { ButtonType } from './Button';
import Section from './Section';
import Text, { TextType } from './Text';

export interface TopBarProps {
    logged: boolean,
    pending: boolean,
    error?: any,
    user: User,
    requestLogin: () => undefined,
    requestLogout: () => undefined,
}

const ButtonPosition = styled.div`
    margin-left: 15px
`;

class TopBar extends React.Component<TopBarProps> {
    public onClick = () => {
        const { logged, requestLogout, requestLogin } = this.props;
        const onPressAction = logged ? requestLogout : requestLogin;
        onPressAction();
    };

    public render() {
        const { logged, pending, user, error } = this.props;
        const buttonText = logged ? 'Wyloguj' : 'Zaloguj';
        return (
            <Section backgroundColor={Colors.black}>
                <SpaceBetweenContainer>
                    <BackgroundImage url={'http://'}/>
                    <Text kind={TextType.Default}/>
                    <Text kind={TextType.Logo} style={{margin: "0 20px 0 0"}}>
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
                    <Text kind={TextType.Basic} color={Colors.white}>
                        {logged && user && user.email}
                    </Text>
                    {pending && <ActivityIndicator/>}
                    {error && <p>Błąd: {JSON.stringify(error)}</p>}

                    <ButtonPosition>
                        <Button
                            onClick={this.onClick}
                            kind={ButtonType.Primary}>
                            {buttonText}
                        </Button>
                    </ButtonPosition>
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

const mapStateToProps = state => ({
    logged: state.auth.logged,
    pending: state.auth.pending,
    user: state.auth.user,
    error: state.auth.error,
});

const mapDispatchToProps = dispatch => ({
    requestLogin: () => dispatch(loginAction()),
    requestLogout: () => dispatch(logoutAction()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TopBar);
