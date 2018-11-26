import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

export const Navigation = styled.nav``;

Navigation.Link = styled(NavLink)`
	padding: 1rem;
	color: ${props => props.theme.colors.secondary};
`;