import React from 'react';

import { Container } from './AboutStyled';

export default class About extends React.Component {
	render() {
		return (
			<Container>
				<h1>About</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac sem nibh. Pellentesque sed iaculis mi. Morbi hendrerit vel metus eu commodo. Nullam malesuada fringilla ex non tristique. In id mattis arcu, vitae ullamcorper ipsum. Pellentesque ac fringilla leo. Etiam quam nulla, porta a pretium at, congue ac mauris. Maecenas pellentesque libero at ligula eleifend, a malesuada justo dapibus. Aenean accumsan neque non ligula molestie egestas. Praesent tristique metus nisi, vitae egestas lacus consequat vitae. Ut scelerisque lacus augue, nec mattis quam accumsan porta. Vestibulum fermentum orci lacus, a facilisis est eleifend nec. Aenean facilisis augue eu vestibulum ornare. Pellentesque viverra lectus non eleifend sodales.</p>
			</Container>
		);
	}
}