import React, { useState } from "react";

import imgLogo from "../../img/pokemon-logo.png";
import imgdefault from "../../img/pokemon-default.jpg";
import imgLoading from "../../img/gif_loading.gif";

import * as S from "./styles";

export const Home = () => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);

  const typePokemonStyle = (type) =>
    ({
      normal: "#E5E8E8",
      fighting: "#2E86C1",
      flying: "#3498DB",
      poison: "#7D3C98",
      ground: "#A6ACAF",
      rock: "#4D5656",
      bug: "#7B7D7D",
      ghost: "#ECF0F1",
      steel: "#5D6D7E",
      fire: "#CB4335",
      water: "#AED6F1 ",
      grass: "#196F3D",
      electric: "#F4D03F",
      psychic: "#F39C12",
      ice: "#AED6F1",
      dragon: "#6E2C00",
      dark: "#17202A",
      fairy: "#58D68D",
      unknown: "#FAD7A0",
      shadow: "#424949",
    }[type] || "");

  const randorInt = () => parseInt(Math.random() * (1118 - 1) + 1);

  const getPokemon = async () => {
    setLoading(true);
    setPokemon(null);
    const intPokemon = randorInt();
    try {
      const result = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${intPokemon}`
      );
      const person = await result.json();
      setLoading(false);
      return setPokemon(person);
    } catch (error) {
      getPokemon();
    }
  };

  return (
    <S.Container
      gradientA={typePokemonStyle(pokemon?.types?.[0].type?.name)}
      gradientB={typePokemonStyle(
        pokemon?.types?.[1]?.type?.name || pokemon?.types?.[0]?.type?.name
      )}
    >
      <S.Content>
        <S.Section>
          <S.ImgLogo src={imgLogo} alt="Logo" />
        </S.Section>
        <S.Section>
          {!loading && (
            <>
              <S.ImgPokemon
                src={
                  pokemon?.sprites?.other?.dream_world?.front_default ||
                  pokemon?.sprites?.other["official-artwork"]?.front_default ||
                  imgdefault
                }
              />
              {pokemon && (
                <S.CardInfo>
                  <S.TextInfo size={32}>
                    {pokemon?.species?.name || ""}
                  </S.TextInfo>
                </S.CardInfo>
              )}
              {pokemon && (
                <S.CardInfo>
                  <S.TextInfo size={12} mRight={18}>
                    {"TIPO:"}
                  </S.TextInfo>
                  <S.TextInfo size={12} mRight={6}>
                    {pokemon?.types?.[0].type?.name || ""}
                  </S.TextInfo>
                  {pokemon?.types?.[1]?.type?.name && (
                    <S.TextInfo size={12}>
                      {`/ ${pokemon?.types?.[1]?.type?.name || ""}`}
                    </S.TextInfo>
                  )}
                </S.CardInfo>
              )}
            </>
          )}
          {loading && (
            <>
              <S.ImgLoading src={imgLoading} />
            </>
          )}
        </S.Section>
        <S.Section>
          <S.ButtomNext onClick={getPokemon} disabled={loading}>
            {"Busque um Pokémon!!"}
          </S.ButtomNext>
        </S.Section>
      </S.Content>
    </S.Container>
  );
};
