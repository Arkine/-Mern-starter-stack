import React from 'react';
import axios from 'axios';

import {Container} from './LoginStyled';

import {Button} from 'app/components/common/Button';

import {
	Form,
	FormGroup,
	TextInput
} from 'app/components/form';

export default class Login extends React.Component {
	constructor(props) {
		super(props);


		this.state = {
			errors: {}
		}
	}

	handleFormSubmit = async ({errors, values}) => {
		// const resp = await axios.post('/auth/login', values);

		console.log({errors, state: this.state})
		
		this.setState({
			errors,
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
				// this.setState(prevState => ({
				// 	errors: {
				// 		...prevState.errors,
				// 		[keys[i]]: `${keys[i]} must be at least ${minLen} characters in length`
				// 	}
				// }), () => {
				// 	console.log(this.state)
				// });
			}
		}

		return errors;
	}

	render() {
		return (
			<Container>
				<Form onSubmit={this.handleFormSubmit} validator={this.validateForm}>
					<h1>Login</h1>
					<FormGroup>
						<TextInput
							type="text"
							name="username"
							error={this.state.errors['username']}
							label="Username"
							required
						/>

						<TextInput
							type="password"
							name="password"
							error={this.state.errors['password']}
							label="Password"
							required
						/>
					</FormGroup>
					<Button type="submit">Submit</Button>
				</Form>
			</Container>
		);
	}
}