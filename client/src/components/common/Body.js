import React from 'react';

import styled from 'styled-components';

import media from 'app/helpers/mediaQuery';

const Body = styled.main`
	display: flex;
	flex-flow: column;

	margin: 0 auto;

	max-width: ${props => props.theme.body.rowWidth};

	${media.desktop`
		width: 100%;
	`}

	${media.mobile`
		width: auto;
	`}
`;

export default props => {
	return (
		<Body>{props.children}</Body>
	)
}