import React from 'react';
import styled from 'styled-components';

import FormLabel from './FormLabel';

import {FormConsumer} from './Form';

const Container = styled.div`
	display: flex;
	flex-flow: column;

	margin-bottom: 1rem;
`;

Container.Error = styled.span`
	padding: 0.25rem;
	background-color: ${props => props.theme.colors.error};
	color: #fff;
	border-bottom: 1px solid #fff;
`;

Container.Input = styled.input`
	border: 1px solid ${props => props.hasError ? props.theme.colors.error : props.theme.colors.gray};
`;

Container.Label = styled(FormLabel)`
	color: ${props => props.hasError ? props.theme.colors.error : 'initial'};
`;

export default class TextInput extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			errorMsg: null
		};
	}
	onInvalid = e => {
		e.preventDefault();

		const validity = e.target.validity;

		const errors = {
			valueMissing: 'This field is required',
			typeMismatch: `Invalid ${e.target.type}`,
			tooLong: 'Too Long',
			tooShort: 'Too Short',
			rangeUnderflow: `Must be greater than ${e.target.min}`,
			patternMismatch: 'Invalid format',
			rangeOverflow: `Must be less than ${e.target.max}`,
			stepMismatch: `Invalid increment`,
			badInput: `Bad input`,
		}

		let errorMsg = 'Invalid';
		for (const key of Object.keys(errors)) {
			if (validity[key]) {
				if (this.props.errors && this.props.errors[key]) {
					errorMsg = this.props.errors[key];
				} else {
					errorMsg = errors[key];
				}
			}
		}

		if (this.props.onError) {
			this.props.onError(errorMsg);
		}

		this.setState({
			errorMsg,
		});
	}

	updateField = e => {
		this.setState({
			errorMsg: null
		});
	}

	render() {
		return(
			<FormConsumer>
				{({errors, values, setValue}) => {
					return (
						<Container>
							{this.props.label && <Container.Label htmlFor={this.props.name} hasError={!!this.state.errorMsg || !!this.props.error}>{this.props.label}</Container.Label>}
							<Container.Input
								value={values[this.props.name] || ''}
								onInvalid={this.onInvalid}
								hasError={!!this.state.errorMsg || !!this.props.error}
								onChange={(e) => {
									e.preventDefault();

									this.updateField(e);
									setValue(this.props.name, e.target.value);
								}}
								{...this.props}
							/>
							{this.state.errorMsg && <Container.Error>{this.state.errorMsg}</Container.Error>}
							{this.props.error && <Container.Error>{this.props.error}</Container.Error>}
						</Container>
					)
				}}
			</FormConsumer>
		);
	}
}