import React from 'react';
import { render, screen } from '@testing-library/react';
import StockCard from './components/StockCard';

test('renders StockCard with symbol and price', () => {
  const symbol = 'AAPL';
  const price = 150.25;
  const data = [145, 148, 150.25];
  const priceClass = 'top';
  const arrow = priceClass === 'top' ? '↑' : '↓';

  render(<StockCard symbol={symbol} price={price} data={data} priceClass={priceClass} />);
  
  expect(screen.getByText(symbol)).toBeInTheDocument();
  expect(screen.getByText(`R$ ${price.toFixed(2)}${arrow}`)).toBeInTheDocument();
});

test('does not render StockCard if price is not provided', () => {
  const symbol = 'AAPL';
  const data = [145, 148, 150.25];
  const priceClass = 'top';

  const { container } = render(<StockCard symbol={symbol} data={data} priceClass={priceClass} />);
  
  expect(container).toBeEmptyDOMElement();
});
