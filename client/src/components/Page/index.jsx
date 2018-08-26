import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';

export default class Page extends React.Component {
    render() {
        return(
            <React.Fragment>
                <header>
                    <Header />
                </header>
                <main>
                    <Body />
                </main>
                <footer>
                    <Footer />
                </footer>
            </React.Fragment>
        );
    }
}