import styled, {css} from 'styled-components';

const sizes = {
	desktop: 992,
	tablet: 768,
	mobile: 576
}

const media = (limit) => (
	Object.keys(sizes).reduce((acc, label) => {
		acc[label] = (...args) => css`
			@media (${limit}-width: ${sizes[label] / 16}rem) {
				${css(...args)}
			}
		`;
		return acc;
	}, {})
)

export default media;