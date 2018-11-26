import React from 'react';

import styled from 'styled-components';

const Body = styled.main`
	max-width: ${props => props.theme.body.rowWidth};
	margin: 0 auto;
`;

export default props => {
	return (
		<Body>{props.children}</Body>
	)
}