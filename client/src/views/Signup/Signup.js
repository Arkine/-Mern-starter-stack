import React from 'react';

import {Container} from './SignupStyled';
import {
	Form,
	FormGroup,
	TextInput,
	FormButton
} from 'app/components/form';

export default class Signup extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			errors: {},
			isLoading: false
		};
	}

	handleFormSubmit = e => {
		console.log(e);
	}

	validate = values => {
		return {};
	}

	render() {
		return (
			<Container>
				<Form
					onSubmit={this.handleFormSubmit}
					validator={this.validate}
				>
					<h1>Signup</h1>
					<FormGroup>
						<TextInput
							type="text"
							name="username"
							label="Username"
							error={this.state.errors['username']}
							required
						/>

						<TextInput
							type="password"
							name="password"
							label="Password"
							error={this.state.errors['password']}
							required
						/>

						<TextInput
							type="password"
							name="confirm-password"
							label="Confirm-Password"
							error={this.state.errors['confirm-password']}
							required
						/>
					</FormGroup>
					<FormButton type="submit" text="Submit" isLoading={this.state.isLoading} />
				</Form>
			</Container>
		);
	}
}