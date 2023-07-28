import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Inventory } from './Components/Inventory';
import { Weapons } from './Components/Weapons';
import { Shields } from './Components/Shields';
import { Armor } from './Components/Armor';
import { Character } from './Components/Character';


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/Character' elemenT={<Character />} />
        <Route path='/' element={<Inventory />}>

          <Route path='Weapons' element={<Weapons />} />
          <Route path='Shield' element={<Shields />} />
          <Route path='Armor' element={<Armor />} />

        </Route>
      </Routes> 
    </BrowserRouter>      
  )
}

export default App;
