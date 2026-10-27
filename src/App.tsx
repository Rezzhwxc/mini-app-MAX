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
        <h1 style={{letterSpacing:'8%', fontSize:'clamp(24px, 4vw, 40px)',
          textAlign:'center', margin:'10px 0px', fontFamily:'Inter', fontWeight:700}}
          >Авторизация</h1>

        <div className="middle">
            <p style={{width:"100%", fontSize:18, color:'var(--font-color)', fontFamily:'Inter', textAlign:'left'}}>
              Введите свой ID:
            </p>
            <input type="text" placeholder='ID сотрудника' />
        </div>

        <button id='confirmId' style={{
          width:'100%', height:'56px',
          background:'transparent', outline:'none',
          border:'1px solid var(--font-color)', borderRadius:'12px',

          fontSize:'clamp(20px, 2.5vw, 28px)',  fontFamily:'Inter', fontWeight:'500',
          letterSpacing:'3%', color:'var(--font-color)'
        }}>
          Войти
        </button>
    </Panel>
  )
}

export default App
