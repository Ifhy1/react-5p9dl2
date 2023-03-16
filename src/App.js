import React,{ useState } from 'react';
import './style.css'

function App() {
  const [value,setValue] = useState(0)

  return (
    <>
    <div>
      <h1> Counter</h1>
      <p>{value}</p>
      <button className='btn' onClick={() => setValue(value + 1)}>Increment
      </button>
      <button className='btn' onClick={() => setValue(value - 1)}>Decrement
      </button>
      <button className='btn' onClick={() => setValue(0)}>Reset
      </button>

      </div>
      </>



  );
}

export default App;