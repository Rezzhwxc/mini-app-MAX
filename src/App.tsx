import { useState } from 'react'
import './styles/App.css'

import AuthPage from './pages/Auth';
import MenuPage from './pages/Menu';
import CartPage from './pages/Cart';
import { Panel } from '@maxhub/max-ui';

type Screen = 'auth' | 'menu' | 'cart';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('auth');

  return (
    <Panel className='auth-screen'>
      <h1 style={{letterSpacing:'6%', fontSize:24, textAlign:'center', margin:20}}>Авторизация</h1>
    </Panel>
  )
}

export default App
