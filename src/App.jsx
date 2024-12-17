import './App.css';
import { Routes, Route } from "react-router-dom";
import { URI } from './Constants'
  import { Theme } from './Theme';
import { ThemeProvider } from '@mui/material/styles';
import Home from './app/home/Home';

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Routes>
          <Route path={URI + "/"} element={<Home />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
