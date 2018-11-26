import React from 'react';
import {ThemeProvider} from 'styled-components';
import {Router, Switch, Route} from 'react-router-dom';

import history from 'app/services/history';

import {
	Home,
	About
} from '../views';

import theme from './appTheme';

import Header from './common/Header';
import Footer from './common/Footer';
import Body from './common/Body';
import {LoadingSpinner} from './loading';

import BaseStyles from './common/BaseStyles'
import {Normalize} from 'styled-normalize'

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true
		}
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({
				loading: false
			});
		}, 1500);
	}

    render() {
        return (
			<Router history={history}>
				<ThemeProvider theme={theme}>
					<React.Fragment>
						{this.state.loading && <LoadingSpinner isLoading={true} />}
						<Normalize />
						<BaseStyles />

						<Header />
						<Body>
							<Switch>
								<Route exact path="/" component={Home} />
								<Route path="/about" component={About} />
							</Switch>
						</Body>
						<Footer />
					</React.Fragment>
				</ThemeProvider>
			</Router>
        );
    }
}