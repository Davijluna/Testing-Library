import React from 'react';
import { screen } from '@testing-library/react';
import NotFound from '../components/NotFound';
import renderWithRouter from './renderWithRouter';

describe('Teste o componente <NotFound.js />', () => {
  test('Página contém um heading h2 com o texto Page requested not found 😭;', () => {
    renderWithRouter(<NotFound />);
    const text = screen.getByRole('heading', { name: /page requested not/i });
    expect(text).toBeInTheDocument();
  });

  test('Teste se a página mostra a imagem', () => {
    renderWithRouter(<NotFound />);
    const imgPokemon = screen.getByRole(
      'img', { name: /pikachu crying because the page requested was not found/i },
    );
    expect(imgPokemon).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
