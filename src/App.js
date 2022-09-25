import './App.css';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import { Box, Container } from '@mui/material';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container maxWidth="xl">
        <Box sx={{ height: '100vh', marginTop:'20px'}} >
          <Outlet />
        </Box>
      </Container>
    </div>
  );
}

export default App;
