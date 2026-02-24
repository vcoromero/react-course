import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'sonner'
import './index.css'

import { ClientInformation } from './08-use-suspense/ClientInformation'
import { getUserAction } from './08-use-suspense/api/get-user.action'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster />
    {/* <PokemonPage /> */}
    {/* <FocusScreen /> */}
    {/* <TasksApp/> */}
    {/* <ScrambleWords /> */}
    {/* <MemoHook /> */}
    {/* <MemoCounter /> */}
    {/* <InstagromApp /> */}
    <Suspense fallback={
      <div className='bg-gradient flex flex-col gap-4'>
        <h1 className='text-2xl'> cargando </h1>
      </div>
    }>
      <ClientInformation getUser={getUserAction(1000)} />
    </Suspense>
  </StrictMode>,
)
