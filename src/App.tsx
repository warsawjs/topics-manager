import React, { Component } from 'react';
import { injectGlobal } from 'styled-components';
import Header from './components/Header';
import TopBar from './components/TopBar';

import AuthCallbackContainer from './shared/components/AuthCallbackContainer';
import Database from './shared/components/Database';
import WorkshopContainer from './submit/WorkshopContainer';
import TopicContainer from './topic/TopicContainer';

class App extends Component {
    public render() {
        return (
            <React.Fragment>
                <TopBar/>
                <Header/>
                <main>
                    <WorkshopContainer/>
                    <TopicContainer/>
                </main>
                <AuthCallbackContainer/>
                <Database/>
            </React.Fragment>
        );
    }
}

// tslint:disable-next-line
injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Lato:300,400');
    @import url('https://fonts.googleapis.com/css?family=Fira+Sans:300');
    
    html {
        box-sizing: border-box;
    }

    *,
    *:after,
    *:before {
        box-sizing: inherit;
    }

    body {
        font-family: 'Lato', sans-serif;
    }
`;

export default App;
