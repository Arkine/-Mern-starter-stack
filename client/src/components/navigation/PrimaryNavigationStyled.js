import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

export const Navigation = styled.nav``;

Navigation.Link = styled(NavLink)`
	padding: 1rem;
	text-decoration: none;
	color: ${props => props.active ? '#fff' : props.theme.colors.secondary};

	transition: all 0.2s ease-in;

	background-color: ${props => props.active ? props.theme.colors.hover : 'initial'};

	&:hover {
		background-color: ${props => props.theme.colors.hover};
		color: #fff;
	}
`;