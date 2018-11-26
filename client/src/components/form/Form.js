import React from 'react';
import styled from 'styled-components';

import {
	ValuesContext,
	ErrorsContext,
	SetValueContext
} from './FormContexts';

const Container = styled.form`
	border-radius: 4px;
	padding: 1rem;
`;


export default class Form extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			errors: {},
			values: {}
		}
	}

	handleFieldChange = e => {
		this.updateField(e.target.name, e.target.value);
	}

	updateField = (field, val) => {
		this.setState({
			fields: {
				...this.state.fields,
				[field]: val
			}
		});
	}

	onSubmit = e => {
		e.preventDefault();

		const isValid = this.validate();

		this.props.onSubmit({errors, values}, e);
	}

	validate() {
		let errors = this.props.validator(this.state.values);

		// If there are errors
		if (errors.length) {
			this.setState({errors});

			return false;
		}

		return true;
	}

	render() {
		return (
			<ValuesContext.Provider value={this.state.values}>
				<ErrorsContext.Provider value={this.state.errors}>
					<SetValueContext.Provider value={this.updateField}>
						<Container>
							{this.props.children}
						</Container>
					</SetValueContext.Provider>
				</ErrorsContext.Provider>
			</ValuesContext.Provider>
		);
	}
}

export const FormConsumer = ({children}) => {
	return (
		<ErrorsContext.Consumer>
			{errors => (
				<ValuesContext.Consumer>
					{values => (
						<SetValueContext.Consumer>
							{setValue => children({errors, values, setValue})}
						</SetValueContext.Consumer>
					)}
				</ValuesContext.Consumer>
			)}
		</ErrorsContext.Consumer>
	);
}