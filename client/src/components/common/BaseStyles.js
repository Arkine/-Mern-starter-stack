import {createGlobalStyle} from 'styled-components';

/**
 * Base styling for the app
 */
export default createGlobalStyle`
	html {
		font-size: 16px;
		height: 100%;
	}

	body {
		position: relative;
		font-family: Roboto, sans-serif;
		line-height: 1.5;
		height: 100%;
	}

	#root {
		display: flex;
		flex-direction: column;

		height: 100%;
	}

	main {
		padding: 1rem;
		flex-grow: 1;
	}
`;