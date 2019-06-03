import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class Mascot extends PureComponent {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
  }

  render () {
    const {width, height} = this.props

    return (
      <div id="#metamask-mascot-container">
        <img
          src="/images/logo/metamask-logo-horizontal.svg"
          width={width}
        />
      </div>
    )
  }
}
