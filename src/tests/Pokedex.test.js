import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Teste o componente <App.js />', () => {
  test('Teste se a página contém um heading h2 com o texto Encountered pokémons.', () => {
    renderWithRouter(<App />);
    const text = screen.getByRole('heading', { name: /encountered pokémons/i });
    expect(text).toBeInTheDocument();
  });
  test('O botão deve conter o texto Próximo pokémon', () => {
    renderWithRouter(<App />);
    const buttonProximo = screen.getByRole('button', { name: /próximo pokémon/i });
    expect(buttonProximo).toBeInTheDocument();
    userEvent.click(buttonProximo);
  });
  test('Teste se a Pokédex tem os botões de filtro', () => {
    renderWithRouter(<App />);
    const buttonFiltro = screen.getAllByTestId('pokemon-type-button');
    expect(buttonFiltro[1]).toBeInTheDocument();

    const buttonAll = screen.getByRole('button', { name: 'All' });
    expect(buttonAll).toHaveTextContent('All');
    const buttonAll2 = screen.getByRole('button', { name: /all/i });
    expect(buttonAll2).toBeInTheDocument();
    userEvent.click(buttonAll2);
    expect(buttonAll2).toBeInTheDocument();
  });
  test('Ao carregar a página, o filtro selecionado deverá ser All', () => {
    renderWithRouter(<App />);
    const typeButton = screen.getByRole('button', { name: /electric/i });
    expect(typeButton).toBeInTheDocument();
    userEvent.click(typeButton);
  });
});
