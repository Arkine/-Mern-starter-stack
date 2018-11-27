import React from 'react';

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

	handleFormSubmit = ({errors, values}) => {
		console.log({errors})
		this.setState({
			errors,
		});
	}

	validateForm = values => {
		console.log('VALIDATOR HERE DOG', values)
		const keys = Object.keys(values);
		for (let i=0; i<keys.length; i++) {
			console.log('VALUES HERE', values[keys[i]]);
		}

		return {};
	}

	render() {
		return (
			<Container>
				<Form onSubmit={this.handleFormSubmit} validator={this.validateForm}>
					<h1>Login</h1>
					<FormGroup>
						<TextInput
							type="number"
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