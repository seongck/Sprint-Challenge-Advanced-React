import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import Player from './components/Player';
import PlayerList from './components/PlayerList';

it('renders without crashing', () => {
  rtl.render(<App />);
});

it('renders "Women\'s World Cup" text', () => {
  const wrapper = rtl.render(<App />);

  expect(wrapper.getByText(/women\'s world cup/i));
});

it('renders name, country and searches', () => {
  const wrapper = rtl.render(<Player name="User" country="Userland" searches='0'/>);
  expect(wrapper.getByText('User'));
  expect(wrapper.getByText('Userland'));
  expect(wrapper.getByText('0'));
});


it('renders Player components with name, country and search values', () => {
  const wrapper = rtl.render(
    <PlayerList
      players={[
        {
          id: 2,
          name: 'Marta',
          country: 'Brazil',
          searches: '18'
        },
        {
          id: 0,
          name: 'Alex Morgan',
          country: 'United States',
          searches: '100'
        }
      ]}
    />
  );

  expect(wrapper.getByText('Marta'));
  expect(wrapper.getByText('Brazil'));
  expect(wrapper.getByText('Alex Morgan'));
  expect(wrapper.getByText('United States'));
});



