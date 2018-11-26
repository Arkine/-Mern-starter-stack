import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

export const Navigation = styled.nav``;

Navigation.Link = styled(NavLink)`
	color: ${props => props.theme.colors.secondary};
`;