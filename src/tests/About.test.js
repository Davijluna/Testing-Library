import React from 'react';
import { screen } from '@testing-library/react';
import About from '../components/About';
import renderWithRouter from './renderWithRouter';

describe('Teste se a página contém as informações sobre a Pokédex.', () => {
  test('Teste se a página contém um heading h2 com o texto About Pokédex.', () => {
    renderWithRouter(<About />);
    const textAbout = screen.getByRole('heading', { name: /about pokédex/i });
    expect(textAbout).toBeInTheDocument();
  });
  test('Teste se a página contém dois parágrafos com texto sobre a Pokédex.', () => {
    renderWithRouter(<About />);
    const paragrafo1 = screen.getByText(/This application simulates a Pokédex/i);
    expect(paragrafo1).toBeInTheDocument();
    const paragrafo2 = screen.getByText(/One can filter Pokémons by type/i);
    expect(paragrafo2).toBeInTheDocument();
  });
  test('Teste se a página contém a imagem de uma Pokédex', () => {
    renderWithRouter(<About />);
    const imgPokedex = screen.getByRole('img', { name: /pokédex/i });
    expect(imgPokedex).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
// Para buscar por imagem src peguei informação deste link:https://stackoverflow.com/questions/60509527/jestreact-native-testing-library-how-to-test-an-image-src
