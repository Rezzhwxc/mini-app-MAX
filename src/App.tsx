import { useState } from 'react'
import './styles/App.css'

import AuthPage from './pages/Auth';
import MenuPage from './pages/Menu';
import CartPage from './pages/Cart';
import { Panel,} from '@maxhub/max-ui';

type Screen = 'auth' | 'menu' | 'cart';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('auth');

  return (
    <Panel className='auth-screen'>

        <h1>Авторизация</h1>

        <div className="middle">
            <p>Введите свой ID:</p>

            <input type="text" id='ID_user' placeholder='ID сотрудника'/>
        </div>

        <button id='confirmId'>Войти</button>

    </Panel>
  )
}

export default App
