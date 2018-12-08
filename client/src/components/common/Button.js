import styled from 'styled-components';

import {NavLink} from 'react-router-dom';

export const Button = styled.button`
	background-color: ${props => props.theme.colors.primary};
	padding: 1rem;
	min-width: 150px;

	color: #fff;
	transition: all 0.2s ease-in;

	border-radius: 4px;

	&:hover {
		cursor: pointer;

		background-color: ${props => props.theme.colors.hover};
		color: #fff;
	}
`;

Button.Link = styled(NavLink)`
	display: inline-block;

	border: 2px solid ${props => props.theme.colors.primary};
	padding: 1rem;
	min-width: 100px;

	border-radius: 4px;

	color: ${props => props.theme.colors.primary};
	transition: all 0.2s ease-in;

	text-decoration: none;
	text-align: center;

	&:hover {
		cursor: pointer;

		background-color: ${props => props.theme.colors.hover};
		color: #fff;
	}
`;