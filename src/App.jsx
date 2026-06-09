import AppRoutes from './routes/AppRoutes';
import './App.css'
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <AppRoutes />
      </main>
    </>
  )
}

export default App
