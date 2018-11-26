import React from 'react';
import {ThemeProvider} from 'styled-components';
import {Router, Switch, Route} from 'react-router-dom';

import history from 'app/services/history';

import {Home} from '../views';

import theme from './appTheme';

import Header from './common/Header';
import Footer from './common/Footer';
import Body from './common/Body';
import BaseStyles from './common/BaseStyles'

export default class App extends React.Component {
    render() {
        return (
			<Router history={history}>
				<ThemeProvider theme={theme}>
					<React.Fragment>
						<BaseStyles />
						<Header />
						<Body>
							<Switch>
								<Route exact path="/" component={Home} />
							</Switch>
						</Body>
						<Footer />
					</React.Fragment>
				</ThemeProvider>
			</Router>
        );
    }
}