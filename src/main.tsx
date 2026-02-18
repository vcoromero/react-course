import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PokemonPage } from './03-examples/PokemonPage'
import './index.css'
import { FocusScreen } from './04-useRef/FocusScreen'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <PokemonPage /> */}
    <FocusScreen />
  </StrictMode>,
)
