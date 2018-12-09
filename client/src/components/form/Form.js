import React from 'react';
import styled from 'styled-components';

import media from 'app/helpers/mediaQuery';

import {
	ValuesContext,
	ErrorsContext,
	SetValueContext
} from './FormContexts';

const Container = styled.form`
	position: relative;

	border-radius: 4px;

	padding: 1rem;

	width: auto;

	min-width: 500px;
	max-width: 750px;

	${media('max').tablet`
		min-width: 250px;
	`}

	button {
		margin-top: 1rem;
	}
`;

/**
 * Form Component
 */
export default class Form extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			errors: {},
			values: {}
		}

		this._formEl = React.createRef();
	}

	handleFieldChange = e => {
		this.updateField(e.target.name, e.target.value);
	}

	updateField = (field, val) => {
		this.setState({
			values: {
				...this.state.values,
				[field]: val
			}
		});
	}

	onSubmit = e => {
		e.preventDefault();
		const validation = this.validate();
		const {values} = this.state;

		if (validation.isValid) {
			this.props.onSubmit({errors: validation.errors, values}, e);	
		}
	}

	validate() {
		let errors = {};
		let isValid = true;
		isValid = this._formEl.current.checkValidity();

		if (this.props.validator) {
			errors = this.props.validator(this.state.values);
			
			this.setState({
				errors
			});
		}

		return {
			isValid,
			errors
		};
	}

	render() {
		const {onSubmit, ...rest} = this.props;
		return (
			<ValuesContext.Provider value={this.state.values}>
				<ErrorsContext.Provider value={this.state.errors}>
					<SetValueContext.Provider value={this.updateField}>
						<Container onSubmit={this.onSubmit} {...rest} ref={this._formEl}>
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