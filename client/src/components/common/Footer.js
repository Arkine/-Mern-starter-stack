import React from 'react';

import styled from 'styled-components';

const Footer = styled.footer`
	background-color: ${props => props.theme.colors.primary};
	padding: 1rem;
`;

Footer.Content = styled.div`
	width: 100%;
	max-width: ${props => props.theme.body.rowWidth};
	margin: 0 auto;
`;

export default props => {
	return (
		<Footer>
			<Footer.Content>Footer</Footer.Content>
		</Footer>
	)
}