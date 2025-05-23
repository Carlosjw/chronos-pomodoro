import './styles/theme.css'
import './styles/global.css'

import { Container } from './components/Container'
import { Logo } from './components/Logo'
import { Menu } from './components/Menu'
import { CountDown } from './components/CountDown'
import { CirclePlay } from 'lucide-react'
import { DefaultInput } from './components/DefaultInput'

export function App() {
    return (
        <>
            <Container>
                <Logo />
            </Container>
            <Container>
                <Menu />
            </Container>
            <Container>
                <CountDown />
            </Container>
            <Container>
                <form action="" className="form">
                    <div className="formRow">
                        <DefaultInput labelText='task' id='inputDefault' type='text' />
                    </div>

                    <div className="formRow">
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>

                    <div className="formRow">
                        <p>Ciclos</p>
                        <p>0 0 0 0 0 0 0 0</p>
                    </div>

                    <div className="formRow">
                        <button className='sendButton'><CirclePlay /></button>
                    </div>
                </form>
            </Container>

        </>
    )
}

