import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';

import { BrowserRouter } from 'react-router-dom';
import { Container } from './styles';
import Header from '../Header/index';
import Router from '../../Router';
import ToastContainer from '../Toast/ToastContainer';


function App() {
  return (
   <BrowserRouter>
    <ThemeProvider theme={defaultTheme}>
      <Container>
         <Header/>
       <Router />
      </Container>
      <ToastContainer/>
      <GlobalStyles />
    </ThemeProvider>
   </BrowserRouter>
  );
}

export default App;
