import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	flex-grow: 1;
`;

Container.ButtonGroup = styled.div`
	button {
		& + * {
			margin-left: 1rem;
		}
	}
`;