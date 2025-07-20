import { Route, Routes } from 'react-router-dom';

import { Home } from './pages/home';
import { Register } from './pages/register';
import { Login } from './pages/login';
import { VerifyEmail } from './pages/verify-email';
import { RecoverAccount } from './pages/recover-account';

import { GenericToaster } from './widgets/toast/parts';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/verify-email' element={<VerifyEmail />} />
      <Route path='/recover-account' element={<RecoverAccount />} />
    </Routes>
    <GenericToaster />
    </>
  )
}

export default App
