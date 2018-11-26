import React from 'react';

export default (importComponent, fallback) => (
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