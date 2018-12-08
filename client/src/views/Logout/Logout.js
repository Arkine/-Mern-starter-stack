import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {logout} from 'app/ducks/auth';

import { Container } from './StyledLogout';

const mapDispatchToProps = dispatch => (bindActionCreators({
	logout
}, dispatch));

@connect(null, mapDispatchToProps)
export default class Logout extends React.PureComponent {
    componentDidMount() {
        const {logout, history} = this.props;

        logout();

        history.push('/login');
    }

    render() {
        return (
            <Container>
                Logging Out...
            </Container>
        )
    }
}