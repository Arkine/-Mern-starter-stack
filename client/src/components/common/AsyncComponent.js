import React from 'react';

/**
 * Asynchronously loads a React component and displayes a fallback in its place
 * @var	{Object} importComponent import() function with component
 * @var {Object} fallback Fallback component to display while it is being fetched
 */
export default (importComponent, fallback = null) => (
	class AsyncComponent extends React.Component {
		constructor(props) {
			super(props);

			this.state = {
				component: null
			}
		}

		async componentDidMount() {
			const {default: component} = await importComponent();

			this.setState({
				component
			});
		}

		render() {
			const {component: C} = this.state;
			const loading = fallback ? fallback : <h2>Loading...</h2>;

			return C ? <C {...this.props} /> : loading;
		}
	}
)