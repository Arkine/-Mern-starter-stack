import styled, {css} from 'styled-components';

const sizes = {
	desktop: 992,
	tablet: 768,
	mobile: 576
}

const media = Object.keys(sizes).reduce((acc, label) => {
	acc[label] = (...args) => css`
		@media (max-width: ${sizes[label] / 16}em) {
			${css(...args)}
		}
	`;

	return acc;
}, {});

export default media;