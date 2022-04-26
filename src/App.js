import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import skeleton from './assets/skeleton.png';
import Navbar from './components/Navbar.js';
import Main from './components/Main.js';




function App() {
  const [stateEnter, setStateEnter] = useState(true);
  const contContainer = useRef(null);

  function waitforme(milisec) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, milisec);
    })
}
 


    
  const onChange = () =>{
    setStateEnter(false);
  } 





  return ( 
     <div className= 'spaceBackground' >
        <div className='line'></div>
        <div className='background'></div>
        <Navbar 
            btnClick = {onChange} 
            buttonName ={stateEnter ? 'enter' : 'enter active'} 
            name={stateEnter ? 'navbar' : 'navbar active'}

        />
        <Main  name ={stateEnter ? 'maincont' : 'maincont active'}>
        </Main>
     </div>
  );
}

export default App;
