/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import {
  act,
  render,
  screen,
  waitFor,
  fireEvent,
} from '@testing-library/react';
import App from '../App';
import covidCasesData from './data.json';

describe('Testa o componente SearchOptions.jsx, que faz parte da tela inicial quando os dados são baixados com sucesso', () => {
  beforeEach(() => {
    window.alert = jest.fn();
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: () => Promise.resolve({ OWID_WRL: { data: covidCasesData } }),
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('Verifica se a página tem um botão com o texto "Buscar"', async () => {
    await act(async () => { render(<App />); });
    await waitFor(() => {
      expect(screen.getByText('Buscar')).toBeInTheDocument();
    });
  });

  it('Verifica se na página tem um input do tipo "number" e que seu range é de 1 até N (N = Número de dias da pandemia da COVID-19)', async () => {
    await act(async () => { render(<App />); });
    await waitFor(() => {
      const inputNumber = screen.getByTestId('day-input');
      screen.getByTestId('day-input');
      expect(inputNumber).toBeInTheDocument();
      expect(inputNumber).toHaveAttribute('type', 'number');
      expect(inputNumber).toHaveAttribute('min', '1');
      expect(inputNumber).toHaveAttribute('max', covidCasesData.length.toString());
    });
  });

  it('Verifica se ao inserir um número maior ou igual a 1 e clicar no botão "Buscar", um dado aparece na tabela', async () => {
    await act(async () => { render(<App />); });
    const inputNumber = screen.getByTestId('day-input');
    fireEvent.change(inputNumber, { target: { value: '1' } });

    await waitFor(() => {
      fireEvent.click(screen.getByText('Buscar'));
      expect(screen.getByTestId('covid-daily-data')).toBeInTheDocument();
    });
  });

  it('Verifica se ao inserir valores incompatíveis, um alerta é disparado com a mensagem "Dia Inválido! Digite dias entre 1 e N"', async () => {
    jest.spyOn(global, 'alert').mockImplementation(() => {});
    await act(async () => { render(<App />); });

    await waitFor(() => {
      const inputNumber = screen.getByTestId('day-input');
      fireEvent.change(inputNumber, { target: { value: '0' } });
      fireEvent.click(screen.getByText('Buscar'));
    });
    expect(window.alert).toHaveBeenCalledTimes(1);
    expect(window.alert).toHaveBeenCalledWith(`Dia inválido! Digite dias entre 1 e ${covidCasesData.length}`);
  });
});
