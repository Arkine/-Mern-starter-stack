import React from 'react';

import styled from 'styled-components';

const Header = styled.header`
	background-color: ${props => props.theme.colors.primary};
`;

export default props => {
	return (
		<Header>Header</Header>
	)
}