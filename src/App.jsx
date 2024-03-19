import { useState } from 'react';
import Sidebar from './Sidebar';
import Body from './Body';


function App() {
  const [menuIcon, setMenuIcon] = useState(true);

  return (
    <div className='flex'>
      <Sidebar menuIcon={menuIcon} setMenuIcon={setMenuIcon}></Sidebar>

      <Body setMenuIcon={setMenuIcon} menuIcon={menuIcon}></Body>
    </div>
  )
}

export default App
