import React from 'react';

import {Container} from './SignupStyled';
import {Button} from 'app/components/common/Button';

import {
	Form,
	FormGroup,
	TextInput
} from 'app/components/form';

export default class Signup extends React.PureComponent {
	render() {
		return (
			<Container>
				<Form>
					<h1>Signup</h1>
					<FormGroup>
						<TextInput
							type="text"
							name="username"
							label="Username"
							required
						/>

						<TextInput
							type="password"
							name="password"
							label="Password"
							required
						/>

						<TextInput
							type="password"
							name="confirm-password"
							label="Confirm-Password"
							required
						/>
					</FormGroup>
					<Button type="submit">Submit</Button>
				</Form>
			</Container>
		);
	}
}