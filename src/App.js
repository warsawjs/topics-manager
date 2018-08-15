import React, { Component } from 'react';
import { injectGlobal } from 'styled-components';
import TopBar from './components/TopBar';
import Header from './components/Header';
import TopicContainer from './topic/TopicContainer';

import AuthCallbackContainer from './shared/components/AuthCallbackContainer';
import Database from './shared/components/Database';
import WorkshopContainer from './submit/WorkshopContainer';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <TopBar />
                <Header />
                <main>
                    <WorkshopContainer/>
                    <TopicContainer />
                </main>
                <AuthCallbackContainer/>
                <Database/>
            </React.Fragment>
        );
    }
}

/* eslint no-unused-expressions: 0 */
injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Lato');

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
