import React from 'react';
import axios from 'axios';

import {Container} from './LoginStyled';
import {
	Form,
	FormGroup,
	TextInput,
	FormButton
} from 'app/components/form';
import { LoadingSpinner } from '../../components/loading';

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

		this.setState({
			isLoading: true
		});

		try {
			const {data} = await axios.post('/auth/login', values);
			const delay = () => new Promise(resolve => setTimeout(() => resolve(), 1000));

			// Simulate a longer delay for the button anim
			await delay();

			if (data.success) {

			}
		} catch(e) {
			console.error('there was an error fetcing')
		}

		this.setState({
			isLoading: false
		});
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
				<Form onSubmit={this.handleFormSubmit} validator={this.validateForm} isLoading={this.state.isLoading}>
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
					<FormButton type="submit" text="Submit" loading={this.state.isLoading} />
				</Form>
			</Container>
		);
	}
}