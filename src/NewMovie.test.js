import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import NewMovie from './NewMovie';

afterEach(cleanup);

test('<NewMovie />', () => {
  const { debug } = render(<NewMovie />);
  debug();
});

test('<NewMovieTwo />', () => {
  const { debug } = render(<NewMovie />);
  debug();
});
