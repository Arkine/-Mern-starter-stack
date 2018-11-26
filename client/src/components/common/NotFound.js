import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	/* display: flex;
	justify-content: center;
	align-items: center; */

	height: 100%;
	width: 100%;
	border: 1px solid red;
`;

Container.Content = styled.div``;


export default props => {
	return (
		<Container>
			<Container.Content>
				<h3>Oops, page not found!</h3>
			</Container.Content>
		</Container>
	)
}