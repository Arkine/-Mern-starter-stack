import React from 'react';

import styled from 'styled-components';

const Body = styled.main`
	display: flex;
	flex-flow: column;

	margin: 0 auto;
	width: 100%;
	max-width: ${props => props.theme.body.rowWidth};
`;

export default props => {
	return (
		<Body>{props.children}</Body>
	)
}