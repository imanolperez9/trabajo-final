import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterApp } from './Router/RouterApp'
import  { UserProvider} from './Context/UserContext'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
    <RouterApp />
    </UserProvider>
  </StrictMode>,
)
