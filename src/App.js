import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

// 컴포넌트 가져오기
import Navbar from './components/Navbar';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <main className="App-content">
          <AppRoutes />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
