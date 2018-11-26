import React from 'react';
import styled from 'styled-components';

import {FormConsumer} from './Form';

const Container = styled.div``;
Container.Error = styled.span`
	padding: 0.25rem;
	background-color: ${props => props.theme.colors.error};
	color: #fff;
`;

Container.Input = styled.input`
	border: 1px solid ${props => props.err ? props.theme.colors.error : props.theme.colors.gray};
`;

export default class TextInput extends React.PureComponent {
	render() {
		return(
			<FormConsumer>
				{({errors, values, setValue}) => {
					return (
						<Container>
							<Container.Input
								value={values[this.props.name]}
								onChange={(e) => {
									e.preventDefault();
									setValue(this.props.name, e.target.value);
								}}
								{...this.props}
							/>
							{errors[this.props.name] && <Container.Error>{errors[this.props.name]}</Container.Error>}
						</Container>
					)
				}}
			</FormConsumer>
		);
	}
}