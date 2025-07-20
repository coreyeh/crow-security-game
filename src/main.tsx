import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Authenticator } from '@aws-amplify/ui-react'
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import App from './App.tsx'

import { Amplify } from 'aws-amplify'
import outputs from '@@/amplify_outputs.json'

Amplify.configure(outputs)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Authenticator.Provider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Authenticator.Provider>
  </StrictMode>,
)
