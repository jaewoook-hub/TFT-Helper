import React from 'react';
import { PageTitle } from '../Styled/Title.js';

class Title extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
      }
  }

  render () {
    return (
      <div id={this.props.id}>
        <PageTitle>TEAMFIGHT TACTICS: FATES</PageTitle>
      </div>
    )
  }
}

export default Title;