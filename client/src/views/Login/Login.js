import React from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {login} from 'app/ducks/auth';

import {Container} from './LoginStyled';
import {
	Form,
	FormGroup,
	TextInput,
	FormButton
} from 'app/components/form';

const mapStateToProps = state => {
	return {
		auth: state.auth
	}
}

const mapDispatchToProps = dispatch => (bindActionCreators({
	login
}, dispatch));


@connect(mapStateToProps, mapDispatchToProps)
export default class Login extends React.Component {
	constructor(props) {
		super(props);


		this.state = {
			errors: {},
			isLoading: false
		}
	}

	handleFormSubmit = async ({errors, values}) => {

		if (Object.keys(errors).length) {
			this.setState({
				errors,
			});

			return;
		}

		await this.props.login(values);
	}

	validateForm = values => {
		const keys = Object.keys(values);
		const minLen = 5;

		const errors = {};
		for (let i=0; i<keys.length; i++) {
			const val = values[keys[i]];
		
			if (val.length < minLen) {
				errors[keys[i]] = `${keys[i]} must be at least ${minLen} characters in length`;
			}
		}

		return errors;
	}

	render() {
		return (
			<Container>
				<Form onSubmit={this.handleFormSubmit} validator={this.validateForm} isLoading={this.props.auth.isFetching}>
					<h1>Login</h1>
					<FormGroup>
						<TextInput
							type="text"
							name="username"
							error={this.state.errors['username']}
							label="Username"
							disabled={this.state.isLoading}
							required
						/>

						<TextInput
							type="password"
							name="password"
							error={this.state.errors['password']}
							label="Password"
							disabled={this.state.isLoading}
							required
						/>
					</FormGroup>
					<FormButton type="submit" text="Submit" loading={this.props.auth.isFetching} />
				</Form>
			</Container>
		);
	}
}