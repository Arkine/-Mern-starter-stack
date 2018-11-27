import styled from 'styled-components';

export const Button = styled.button`
	background-color: ${props => props.theme.colors.primary};
	padding: 1rem;
	min-width: 150px;

	color: #fff;
`;