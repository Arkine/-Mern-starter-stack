import styled from 'styled-components';

import {NavLink} from 'react-router-dom';

export const Button = styled.button`
	background-color: ${props => props.theme.colors.primary};
	padding: 1rem;
	min-width: 150px;

	color: #fff;
	transition: all 0.2s ease-in;

	border: 2px solid transparent;

	border-radius: 4px;

	&:hover {
		cursor: pointer;

		background-color: ${props => props.theme.colors.hover};
		color: #fff;
	}
`;

Button.Link = styled(NavLink)`
	display: inline-block;

	padding: 1rem;
	margin-top: 1rem;
	
	min-width: 100px;

	border: 2px solid ${props => props.theme.colors.primary};
	border-radius: 4px;

	color: ${props => props.theme.colors.primary};
	transition: all 0.2s ease-in;

	text-decoration: none;
	text-align: center;

	&:hover {
		cursor: pointer;

		background-color: ${props => props.theme.colors.hover};
		border-color: transparent;
		color: #fff;
	}
`;