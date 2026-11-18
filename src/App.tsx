import { useState } from 'react'
import './styles/App.css'

import AuthPage from './pages/Auth';
import MenuPage from './pages/Menu';
import CartPage from './pages/Cart';
import { Panel,} from '@maxhub/max-ui';

import {validEmployeeId} from './utils/validators'

type Screen = 'auth' | 'menu' | 'cart';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('auth');

  
  const [id, setId] = useState('');

  return (
    <Panel className='auth-screen'>

        <h1>Авторизация</h1>

        <div className="middle">
            <p>Введите свой ID:</p>

            <input type="text" id='ID_user' placeholder='ID сотрудника'
            value={id} onChange={(e) => setId(e.target.value)}/>
        </div>

        <button id='confirmId' onClick={() => validEmployeeId(id)}>Войти</button>

    </Panel>
  )
}

export default App
