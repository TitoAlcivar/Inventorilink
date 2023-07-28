import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Inventory } from './Components/Inventory';
import { Character } from './Components/Character';
import Context from './Components/Context';


function App() {
  return (
    <Context>

      <BrowserRouter>

        <Routes>

          <Route path='/' element={<Inventory />}>

          <Route path='Character' element={<Character />} />

          </Route>

        </Routes>

      </BrowserRouter>


    </Context>
  )
}

export default App;
