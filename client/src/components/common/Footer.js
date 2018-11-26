import React from 'react';

import styled from 'styled-components';

const Footer = styled.footer`
	background-color: ${props => props.theme.colors.primary};
`;

export default props => {
	return (
		<Footer>Footer</Footer>
	)
}