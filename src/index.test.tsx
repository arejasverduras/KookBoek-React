import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import renderWithRouter from './test-utils';
import App from './App';

test("should render Feed me! button", ()=>{
    const {user} = renderWithRouter(
        <Provider store={store}>
            <App />
        </Provider>
  
    )
    screen.getByLabelText('Feed me!')
})