import React from 'react';
import {createRoot} from 'react-dom/client';
import './styles.css';
import reportWebVitals from './reportWebVitals';
import AppRouting from './AppRouting';
import { CssBaseline } from '@mui/material';
import MatTheme from './components/MatTheme';
import ContextProvider from './components/ContextProvider';
import { Provider } from 'react-redux';
import store from './store/store';

const app = (
  <Provider store={store}>
      <ContextProvider>
        <MatTheme>
          <CssBaseline/>
          <AppRouting />
        </MatTheme>
      </ContextProvider>
  </Provider>
);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(app);
reportWebVitals();
