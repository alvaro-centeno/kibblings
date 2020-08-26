import React from 'react';
import NavBar from './components/NavBar'
import Btn from './components/Button'
import Forms from './components/Form'

function App() {
  return (
    <div className="App">
      <NavBar
        link1='#adopt' link1Title='Adopt'
        link2='#login' link2Title='Login'
        link3='#register' link3Title='Register' />

      {/* JumboTron Section??? */}

      <Forms
        className='mr-sm-2'
        placeholder='Search for a pet'
        btnSubmitText='Pet Search'
      />

      <Btn text="Submit"
        variant="primary">
      </Btn>
    </div>
  );
}

export default App;