import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/module/Home/Home';
import FormatLayout from './components/layout/FormatLayout/FormatLayout';

function App() {

  return (
    <FormatLayout>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </FormatLayout>
  )
}

export default App
