import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Teste se o topo da aplicação contém links de navegação', () => {
  test('O primeiro link deve possuir o texto Home.', () => {
    renderWithRouter(<App />);
    const linkHome = screen.getByText(/home/i);
    expect(linkHome).toBeInTheDocument();
  });
  test('O segundo link deve possuir o texto About.', () => {
    renderWithRouter(<App />);
    const linkAbout = screen.getByText(/about/i);
    expect(linkAbout).toBeInTheDocument();
  });
  test('O teceiro link deve possuir o texto Favorite Pokémons.', () => {
    renderWithRouter(<App />);
    const linkAbout = screen.getByText(/Favorite Pokémons/i);
    expect(linkAbout).toBeInTheDocument();
  });
});

// describe('Teste se a aplicação é redirecionada', () => {
//   test('Ao clicar no link Home da barra de navegação.', () => {
//     <MemoryRouter>
//       <App />
//     </MemoryRouter>,
//   });
// });

