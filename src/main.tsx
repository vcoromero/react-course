import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'sonner'
import './index.css'

import { InstagromApp } from './07-useOptimistic/InstagromApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster />
    {/* <PokemonPage /> */}
    {/* <FocusScreen /> */}
    {/* <TasksApp/> */}
    {/* <ScrambleWords /> */}
    {/* <MemoHook /> */}
    {/* <MemoCounter /> */}
    <InstagromApp />
  </StrictMode>,
)
