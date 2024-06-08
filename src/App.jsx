import { useState } from 'react'
import { Instructions } from './components/Instructions'
import './App.css'

function App() {
  const [showAlert, setShowAlert] = useState(true);
  const [showProceed, setShowProceed] = useState(true);

  const handleProceedClick = () => {
    setShowAlert(false);
    setShowProceed(true);
  };

  const handleDeleteClick = () => {
    setShowAlert(false);
    setShowProceed(false);
  }

  return (
    <>
      <section id='instructions'>
        <Instructions/>
      </section>
      
      <div>
        {showAlert && (
          <div data-testid="alert" id="alert">
            <h2>Are you sure?</h2>
            <p>These changes can't be reverted!</p>
            {showProceed && <button Onclick={handleProceedClick}>Proceed</button>}
          </div>
        )}

        {!showProceed && showAlert && <div style={{marginTop: '20px'}}><h2>Are you sure?</h2><p>These changes can't be reverted!</p></div>}
        <button onClick={handleDeleteClick}>Delete</button>
      </div>    
    </>
  )
}

export default App
