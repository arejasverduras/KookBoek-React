import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import renderWithRouter from './test-utils';
import App from './App';


test('renders div containg App', () => {
    const {user} = renderWithRouter(
    
        <Provider store={store}>
            <App />
      </Provider>
    )
        screen.getAllByLabelText("App")
});

// test('renders Feed Me Button', () => {
//     const {user} = renderWithRouter(
    
//         <Provider store={store}>
//             <App />
//       </Provider>
//     )
//         screen.getByText("Feed me!")
// });
