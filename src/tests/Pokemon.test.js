import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Teste se o topo da aplicação contém links de navegação', () => {
  test('O primeiro link deve possuir o texto Home.', () => {
    renderWithRouter(<App />);
    const textPokemon = screen.getByText(/pikachu/i);
    expect(textPokemon).toBeInTheDocument();
  });
  test('O tipo correto do pokémon deve ser mostrado na tela', () => {
    renderWithRouter(<App />);
    const tipoPokemon = screen.getByTestId('pokemon-type');
    expect(tipoPokemon).toHaveTextContent(/electric/i);
  });
  test('O tipo correto do pokémon deve ser mostrado na tela', () => {
    renderWithRouter(<App />);
    const linkDetalhes = screen.getByRole('link', { name: /more details/i });
    expect(linkDetalhes.href).toContain('/pokemons/25');
  });
  test('O ícone deve ser uma imagem /star-icon.svg;', () => {
    renderWithRouter(<App />);

    const linkDetalhes = screen.getByRole('link', { name: /more details/i });
    userEvent.click(linkDetalhes);

    const checkBox = screen.getByText(/pokémon favoritado\?/i);
    userEvent.click(checkBox);

    const faviconStar = screen.getByRole(
      'img', { name: /pikachu is marked as favorite/i },
    );
    expect(faviconStar).toHaveAttribute('src', '/star-icon.svg');
    expect(faviconStar.alt).toContain('Pikachu is marked as favorite');
  });
  test('Teste se a página mostra a imagem', () => {
    renderWithRouter(<App />);
    const imgPokemon = screen.getByRole('img', { name: /pikachu sprite/i });
    expect(imgPokemon).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  });
});
