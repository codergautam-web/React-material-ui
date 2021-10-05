import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from './ui/Footer';
import Header from './ui/Header';
import MainPage from './ui/MainPage';
import CardData from './ui/CardData';

const theme = createTheme();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main>
        <MainPage />
        <CardData />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
