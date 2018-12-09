import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	height: 100%;
	width: 100%;
`;

Container.Content = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;


Container.Text = styled.h1`
	display: flex;
	flex-flow: column;

	font-size: 1.8rem;
`;

const Code = styled.div`
	font-size: 5rem;
	text-align: center;
`;

export default props => {
	return (
		<Container>
			<Container.Content>
				<Container.Text>
					<Code>404</Code>
					<div>Oops, page not found!</div>
				</Container.Text>
			</Container.Content>
		</Container>
	)
}