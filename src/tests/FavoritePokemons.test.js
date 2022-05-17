import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FavoritePokemons from '../components/FavoritePokemons';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Teste se é exibida na tela a mensagem caso tenha pokémons favoritos', () => {
  test('Teste se é exibida na tela favorite pokemon found.', () => {
    renderWithRouter(<FavoritePokemons />);
    const notFound = screen.getByText(/No favorite pokemon found/i);
    expect(notFound).toBeInTheDocument();
  });

  test('Teste se são exibidos todos os cards de pokémons favoritados.', () => {
    renderWithRouter(<App />);
    const detalhesPokemon = screen.getByRole('link', { name: /more details/i });
    expect(detalhesPokemon).toBeInTheDocument();
    userEvent.click(detalhesPokemon);

    const pokemonsCheck = screen.getByLabelText(/Pokémon favoritado?/i);
    expect(pokemonsCheck).toBeInTheDocument();
    userEvent.click(pokemonsCheck);

    const favoritos = screen.getByRole('link', { name: /Favorite Pokémons/i });
    expect(favoritos).toBeInTheDocument();
    userEvent.click(favoritos);

    const pokemonId = screen.getByTestId('pokemon-name');
    expect(pokemonId).toBeInTheDocument();
  });
});
