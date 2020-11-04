import styled from "styled-components";

export const PromptText = styled.div`
  color: white;
  font-family: "Beaufort for LOL", NotoSans-Medium, serif;
  font-weight: 800;
  text-align: center;
  font-size: 30px;
`;

export const SummonerBarContainer = styled.div`
  border: 0;
  padding: 0;
  margin-bottom: 12px !important;
  margin-top: 12px !important;
  box-sizing: border-box;
`;

export const SummonerBar = styled.input`
  transition: 0.5s;
  appearance: none;
  background: #FFFFFF;
  box-shadow: 0 1px 4px 0 rgba(34, 34, 34, 0.1) inset;
  border-style: solid;
  border-width: 1px;
  border-radius: 6px;
  color: #222222;
  display: block;
  font-size: 16px;
  line-height: 28px;
  height: 48px;
  outline: none;
  padding-top: 9px;
  padding-bottom: 9px;
  padding-left: 12px;
  padding-right: 12px;
  width: 100%;
  min-width: 0;
  box-sizing: border-box;

  &:hover {
    transition: box-shadow 0.5s;
    box-shadow: 0 1px 8px 0 #888888;
  }

  &:focus {
    outline: black;
  }
`;

export const SearchButton = styled.button`
  float: left;
  width: 100%;
  padding: 10px;
  background: #2196F3;
  color: white;
  font-size: 17px;
  border: 1px solid grey;
  border-left: none; /* Prevent double borders */
  cursor: pointer;

  &:hover {
    background: #0b7dda;
  }
`;