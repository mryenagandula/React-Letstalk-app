import './App.css';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import { Container } from '@mui/material';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container maxWidth="xl" sx={{ flexDirection: "row" }}>
        <Outlet />
      </Container>
    </div>
  );
}

export default App;
