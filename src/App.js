import React, {Component} from 'react';
import styled from 'styled-components';
import TopBar from "./components/TopBar";
import WorkshopForm from "./components/WorkshopForm";
import Header from "./components/Header";
import TopicsList from "./components/topic/TopicsList";

class App extends Component {
    render() {
        return (
            <Main className="App">
                <TopBar/>
                <Header/>
                <WorkshopForm/>
                <TopicsList/>
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
`

export default App;
