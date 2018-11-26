import React from 'react';
import {ThemeProvider} from 'styled-components';
import {Router, Switch, Route} from 'react-router-dom';

import history from 'app/services/history';

import Page from 'app/components/Page';


import {Home} from '../views';

import theme from './appTheme';

export default class App extends React.Component {
    render() {
        return (
			<ThemeProvider theme={theme}>
				<Router history={history}>
					<Switch>
						<Route exact path="/" component={Home} />
					</Switch>
				</Router>
            </ThemeProvider>
        );
    }
}