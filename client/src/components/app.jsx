import React from 'react';
import {ThemeProvider} from 'styled-components';
import {Router} from 'react-router-dom';

import history from 'app/services/history';

import theme from './appTheme';

import Header from './common/Header';
import Footer from './common/Footer';
import Body from './common/Body';


import Routes from './routes/Routes';

import {LoadingSpinner} from './loading';

import BaseStyles from './common/BaseStyles'
import {Normalize} from 'styled-normalize'

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true,
			userAuthenticated: false,
			appAuthenticated: false,
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
							<Routes childProps={this.state} />
						</Body>
						<Footer />
					</React.Fragment>
				</ThemeProvider>
			</Router>
        );
    }
}