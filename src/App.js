import React from 'react'
import Slot from './Slot'
 
const App = () => {
  return (
    <>
      <h1 className='heading_style'>
        🎰 Welcome to{" "} 
        <span style={{fontWeight:'bold'}}>Slot machine game</span>
      </h1>
      <div className='slotMachine'>
        <Slot x="😄" y="😄" z="😄"/>
        <Slot x="😄" y="😄" z=" 🎰 " />
        <Slot x="😄" y="😄" z=" 👍" />
      </div>
      
    </>
  )
}

export default App
