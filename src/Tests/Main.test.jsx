import React from 'react';
import {
  act,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import App from '../App';
import covidCasesData from './data.json';

describe('Testa o componente Main.jsx, que faz parte da tela inicial', () => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: () => Promise.resolve({ OWID_WRL: { data: covidCasesData } }),
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('Verifica se na página tem um header nível 1 com o texto "Como estarão os casos de COVID-19 no mundo?"', async () => {
    await act(async () => { render(<App />); });
    const h1 = screen.getAllByRole('heading', { level: 1 });
    expect(h1[0]).toBeInTheDocument();
    expect(h1[0]).toHaveTextContent('Como estarão os casos de COVID-19 no mundo?');
  });

  it('Verifica se após o retorno da API, uma tabela é renderizada', async () => {
    await act(async () => { render(<App />); });
    expect(global.fetch).toHaveBeenCalled();
    const table = screen.getByRole('table');
    await waitFor(() => expect(table).toBeInTheDocument());
  });

  it('Verifica se ao haver um erro na requisição, um alerta é disparado', async () => {
    jest.spyOn(global, 'fetch').mockRejectedValue({ message: 'Erro ao carregar dados' });
    jest.spyOn(window, 'alert').mockImplementation(() => {});

    await act(async () => { render(<App />); });
    expect(global.fetch).toHaveBeenCalled();
    expect(global.alert).toHaveBeenCalled();
  });
});
