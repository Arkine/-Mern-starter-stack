import React from 'react';

import styled from 'styled-components';

import media from 'app/helpers/mediaQuery';

const Body = styled.main`
	margin: 0 auto;

	width: 100%;
	max-width: ${props => props.theme.body.rowWidth};

	${media.max.desktop`
		width: auto;
	`}
`;

export default props => {
	return (
		<Body>{props.children}</Body>
	)
}