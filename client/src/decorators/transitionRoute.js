import React from 'react'
import {Transition} from 'react-transition-group'

/**
 * Animates a route in from the top
 * @param {Object} transitionProps: properties for gsap
 * @param {Object} additionalProps: custom transition properties
 */
const transitionRoute = (transitionProps = () => {}, additionalProps = {}) => WrappedComponent => (
  class extends React.Component {
    constructor (props) {
      super(props)

      this.state = {
        mounted: false
      }
    }
    componentDidMount () {
      this.setState({
        mounted: true
      });
    }

    render () {
      return (
        <Transition
          unmountOnExit
          timeout={15000}
          in={this.state.mounted}
          {...transitionProps(this.state)}
          {...additionalProps}
        >
          <WrappedComponent {...this.props} />
        </Transition>
      )
    }
  }
)
export default transitionRoute