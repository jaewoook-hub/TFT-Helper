import React from 'react';
import Champions from './Champions.jsx';
import ChampionBuild from './ChampionBuild.jsx';
import ItemBuild from './ItemBuild.jsx';

class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <div id={this.props.id}>
        <ChampionBuild champion={this.props.championData.name}></ChampionBuild>
        <br></br>
        <br></br>
        <ItemBuild item={this.props.itemData.name}></ItemBuild>
      </div>
    )
  }
}

export default Board;


