import { useState } from 'react'
import styled from 'styled-components'
import GlobalStyles from '../src/styles/GlobalStyles'
import Advice from './Advice'
function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
    <GlobalStyles/>
<Advice/>
    
    </>
  )
}

export default App
