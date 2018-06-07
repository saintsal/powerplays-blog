import React from 'react'
import Link from 'gatsby-link'

import profilePic from './logo.png'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={this.props.author}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          {this.props.line}{' '}
          <a href={this.props.subscribeUrl}>
            Subscribe here.
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
