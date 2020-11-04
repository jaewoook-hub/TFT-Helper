import React from 'react';
import { BuildContainer } from '../Styled/ChampionBuild.js';

function ChampionBuild(props) {
  if(props.champion === "Aatrox") {
    return <BuildContainer>
              <div>{props.champion}</div>
              <div>Best Build: Chosen Dusks</div>
           </BuildContainer>
  } else if(props.champion === "Ahri") {
    return <BuildContainer>
              <div>{props.champion}</div>
              <div>Best Build: Vanguard Mystics</div>
            </BuildContainer>
  } else if(props.champion === "Akali") {
    return <BuildContainer>
              <div>{props.champion}</div>
              <div>Best Build: Chosen Assassins</div>
            </BuildContainer>
  } else {
    return <div></div>
  }
}

export default ChampionBuild;