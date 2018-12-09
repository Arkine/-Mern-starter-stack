import React from 'react';
import styled from 'styled-components';

import PrimaryNavigation from '../navigation/PrimaryNavigation';

const Header = styled.header`
	background-color: ${props => props.theme.colors.primary};
	padding: 1rem;
`;

Header.Content = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;

	margin: 0 auto;

	width: 100%;
	max-width: ${props => props.theme.body.rowWidth};
`;

/**
 * Header component
 */
export default props => {
	return (
		<Header>
			<Header.Content>
				<PrimaryNavigation />
			</Header.Content>
		</Header>
	)
}