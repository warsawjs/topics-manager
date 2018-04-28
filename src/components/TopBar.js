import React, { Component } from 'react';
import styled from 'styled-components';
import Button from "./Button";

class TopBar extends Component {

    render() {
        return (
            <TopBarWrapper>
                <h2>Zaloguj się przez GitHub</h2>
                <Button type={'primary'}>Zaloguj</Button>
            </TopBarWrapper>
        );
    }

}

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



export default TopBar;