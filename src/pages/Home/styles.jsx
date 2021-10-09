import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  max-height: 100vh;
  height: 100vh;
  align-items: center;
  justify-content: center;
  transition: all 0.9s;
  background: ${(props) =>
    props.gradientA || props.gradientB
      ? `linear-gradient(0.15turn, ${props.gradientA}, #ebf8e1, ${props.gradientB})`
      : "#FBEEE6"};
  border: solid blue 1px;
  padding: 0;
  margin: 0;
  outline: none;
  border: 0;
  box-sizing: border-box;
`;

export const Content = styled.div`
  align-items: center;
  justify-content: space-around;
  padding: 22px;
  margin: 0;
`;

export const Section = styled.section`
  text-align: center;
`;

export const ImgLogo = styled.img`
  height: 18vmin;
  pointer-events: none;
`;

export const ImgPokemon = styled.img`
  pointer-events: none;
  margin: 18px 0;
  max-width: 330px;
  height: 300px;
  object-fit: contain;
`;

export const TextInfo = styled.span`
  color: #2874a6;
  font-size: ${(props) => props.size || 16}px;
  font-weight: bold;
  margin-right: ${(props) => props.mRight || 0}px;
`;

export const CardInfo = styled.div`
  border: none;
  background-color: #fff;
  border-radius: 12px;
  margin: 8px 0;
  padding: 8px 0;
`;

export const ButtomNext = styled.div`
  border: solid #ffff 2px;
  cursor: pointer;
  margin-top: 32px;
  padding: 12px;
  border-radius: 12px;
  background-color: #049974;
  text-align: center;
  color: #ffff;
  font-weight: bold;
`;
