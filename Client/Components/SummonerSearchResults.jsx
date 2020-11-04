import React from 'react';
import { PromptText } from '../Styled/Board.js';

function SummonerSearchResults(props) {
  if(props.summonerInfo === "") {
    return <div></div>
  } else {
    return <div>
              <PromptText>{props.summonerInfo.tier + ' ' + props.summonerInfo.rank}</PromptText>
              <PromptText>Wins: {props.summonerInfo.wins}</PromptText>
              <PromptText>Losses: {props.summonerInfo.losses}</PromptText>
           </div>
  }
}

export default SummonerSearchResults;