import { useState } from 'react'
import './styles/App.css'

import AuthPage from './pages/Auth';
import MenuPage from './pages/Menu';
import CartPage from './pages/Cart';
import { Panel, Flex, Typography } from '@maxhub/max-ui';

type Screen = 'auth' | 'menu' | 'cart';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('auth');

  return (
    <Panel className='auth-screen'>
        <h1 style={{letterSpacing:'6%', fontSize:'clamp(24px, 4vw, 40px)', textAlign:'center', marginBottom:20, fontFamily:'Inter, bold'}}>
          Авторизация</h1>

        <div className="box">
            <p style={{fontSize:16, color:'var(--font-color)', fontFamily:'Inter'}}>
              Введите свой ID:
            </p>
            <input type="text" />
        </div>
    </Panel>
  )
}

export default App
