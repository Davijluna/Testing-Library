import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Teste o componente <PokemonDetails.js />', () => {
  test('A página deve conter um texto Details, onde é o nome do pokémon', () => {
    renderWithRouter(<App />);

    const linkDetalhes = screen.getByRole('link', { name: /more details/i });
    userEvent.click(linkDetalhes);

    const locationPokemon = screen.getByRole(
      'heading', { name: /game locations of pikachu/i },
    );
    expect(locationPokemon).toBeInTheDocument();

    const mapLocation = screen.getAllByRole('img', { name: /Pikachu location/i });
    expect(mapLocation[0]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
    expect(mapLocation[1]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');

    const pokemonDetails = screen.getByText(/pikachu details/i);
    expect(pokemonDetails).toBeInTheDocument();

    const texto = screen.getByRole('heading', { name: /summary/i });
    expect(texto).toBeInTheDocument();

    const textFavorito = screen.getByText(/pokémon favoritado\?/i);
    expect(textFavorito).toBeInTheDocument();

    const titulocentral = screen.getByText(
      /this intelligent pokémon roasts hard berries with electricity/i,
    );
    expect(titulocentral).toBeInTheDocument();
  });
});
