import React from 'react';
import styled, {keyframes, css} from 'styled-components';

import {Button} from '../common/Button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSpinner} from '@fortawesome/free-solid-svg-icons';


const spin = keyframes`
	from {transform: rotate(0deg);}
	to { transform: rotate(360deg);}
`;

const SpinnerButton = styled(Button)`
    ${props => props.loading && css`
        ${SpinnerButton.Spinner} {
            display: block;

            margin: 0 auto;
        }

        ${SpinnerButton.Text} {
            display: none;
        }
    `}
`;

SpinnerButton.Spinner = styled(FontAwesomeIcon)`
    display: none;
    margin-left: 1rem;

    color: #fff;
    font-size: 1.5rem;

    animation: ${spin} 1s infinite;
`;

SpinnerButton.Text = styled.span``;


export default class FormButton extends React.PureComponent {
    static defaultProps = {
        loading: false
    }

    render() {

        return (
            <SpinnerButton {...this.props}>
                <SpinnerButton.Text>{this.props.text}</SpinnerButton.Text>
                <SpinnerButton.Spinner icon={faSpinner}  />
            </SpinnerButton>
        );
    }
}