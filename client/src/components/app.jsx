import React from 'react';
import {ThemeProvider} from 'styled-components';

import Page from 'app/components/Page';

import theme from './appTheme';

export default class App extends React.Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Page />
            </ThemeProvider>
        );
    }
}