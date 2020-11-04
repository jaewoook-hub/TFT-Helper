import React from 'react';
import Champions from './Champions.jsx';
import ChampionBuild from './ChampionBuild.jsx';
import ItemBuild from './ItemBuild.jsx';
import SummonerSearchResults from './SummonerSearchResults.jsx';
import {SummonerBarContainer, PromptText, SummonerBar, SearchButton} from '../Styled/Board.js';
import $ from 'jquery';

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
        <br></br>
        <SummonerBarContainer>
          <PromptText>Enter Summoner Name:</PromptText>
          <form>
            <SummonerBar type="text" onChange={this.props.handleSummonerName}></SummonerBar>
          </form>
          <SearchButton onClick={this.props.getSummonerId}>Search</SearchButton>
        </SummonerBarContainer>
        <br></br>
        <br></br>
        <br></br>

        <SummonerSearchResults summonerInfo={this.props.summonerInfo}></SummonerSearchResults>
      </div>
    )
  }
}

export default Board;


