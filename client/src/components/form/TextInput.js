import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;
Container.Error = styled.span`
	background-color: ${props => props.theme.colors.error};
`;

export default class TextInput extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			errorMsg: null
		}
	}

	onInvalid() {
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


	render() {
		return(
			<Container>
				<input
					type="text"
					onInvalid={this.onInvalid}
					{...this.props}
				/>
				{this.state.errorMsg && <Container.Error>{this.state.errorMsg}</Container.Error>}
			</Container>
		);
	}
}