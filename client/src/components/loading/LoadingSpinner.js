import React from 'react';
import styled, {keyframes} from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSpinner} from '@fortawesome/free-solid-svg-icons';


const spin = keyframes`
	from {transform: rotate(0deg);}
	to { transform: rotate(360deg);}
`;

const Container = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	z-index: 10;

	display: flex;
	justify-content: center;
	align-items: center;

	height: 100%;
	width: 100%;

	background-color: ${props => props.theme.colors.primary};

	visibility: ${props => props.isLoading ? 'visible' : 'hidden'};
`;

Container.Content = styled.div`
	font-size: 2rem;
	color: #fff;
`;

const Spinner = styled(FontAwesomeIcon)`
	animation: ${spin} 3s linear infinite;
`;

export default class LoadingSpinner extends React.Component {
	render() {
		return (
			<Container {...this.props}>
				<Container.Content>
					Loading... <Spinner icon={faSpinner} />
				</Container.Content>
			</Container>
		);
	}
}