import React from 'react';
import styled from 'styled-components';

import PrimaryNavigation from '../navigation/PrimaryNavigation';

const Header = styled.header`
	display: flex;
	justify-content: flex-end;

	background-color: ${props => props.theme.colors.primary};
	padding: 1rem;
`;

export default props => {
	return (
		<Header>
			<PrimaryNavigation />
		</Header>
	)
}