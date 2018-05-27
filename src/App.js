import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import TopBar from './components/TopBar';
import WorkshopForm from './components/WorkshopForm';
import Header from './components/Header';
import TopicContainer from './topic/TopicContainer';


class App extends Component {
    render() {
        return (
            <Main className="App">
                <TopBar/>
                <Header/>
                <WorkshopForm/>
                <TopicContainer/>
            </Main>
        );
    }
}

const Main = styled.main`
    text-align: center;
    box-sizing: border-box;
    * {
        box-sizing: inherit;
    }
`;

/* eslint no-unused-expressions: 0 */
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Lato');
  
  body {
    font-family: 'Lato', Sans-Serif;
  }
`;

export default App;
