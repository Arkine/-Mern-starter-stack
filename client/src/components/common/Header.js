import React from 'react';
import styled from 'styled-components';

import PrimaryNavigation from '../navigation/PrimaryNavigation';

const Header = styled.header`
	background-color: ${props => props.theme.colors.primary};
	padding: 1rem;
`;

Header.Content = styled.div`
	margin: 0 auto;

	width: 100%;
	max-width: ${props => props.theme.body.rowWidth};
`;

export default props => {
	return (
		<Header>
			<Header.Content>
				<PrimaryNavigation />
			</Header.Content>
		</Header>
	)
}