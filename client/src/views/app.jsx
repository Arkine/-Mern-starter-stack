import React from 'react';
import {ThemeProvider} from 'styled-components';
import {Router} from 'react-router-dom';
import {Provider} from "react-redux";

import history from 'app/services/history';
import store from 'app/services/store';

import theme from './appTheme';

import Header from 'app/components/common/Header';
import Footer from 'app/components/common/Footer';
import Body from 'app/components/common/Body';

import Routes from 'app/components/routes/Routes';

import {LoadingSpinner} from 'app/components/loading';

import BaseStyles from 'app/components/common/BaseStyles'
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

	renderBodyContent() {
		if (this.state.loading) {
			return  <LoadingSpinner isLoading={true} />;
		}

		return (
			<React.Fragment>
				<Normalize />
				<BaseStyles />

				<Header />
				<Body>
					<Routes childProps={this.state} />
				</Body>
				<Footer />
			</React.Fragment>
		)
	}

    render() {
        return (
			<Router history={history}>
				<Provider store={store}>
					<ThemeProvider theme={theme}>
						{this.renderBodyContent()}
					</ThemeProvider>
				</Provider>
			</Router>
        );
    }
}