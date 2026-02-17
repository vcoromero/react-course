import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'sonner'
import './index.css'

import { GifApp } from './GifApp'
import { MyCounterApp } from './counter/components/MyCounterApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster />
    <GifApp />
    {/* <MyCounterApp /> */}
  </StrictMode>,
)
