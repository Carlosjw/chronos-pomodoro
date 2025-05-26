import './styles/theme.css'
import './styles/global.css'

import { Container } from './components/Container'
import { Logo } from './components/Logo'
import { Menu } from './components/Menu'
import { CountDown } from './components/CountDown'
import { DefaultInput } from './components/DefaultInput'
import { Cycles } from './components/Cycles'
import { SendButton } from './components/SendButton'
import { CirclePlay } from 'lucide-react'
import { Footer } from './components/Footer'
import { Heading } from './components/Heading'
import { useState } from 'react'

export function App() {
    const [numero, setNumero] = useState(0);

    function handleClick() {
        setNumero(numero + 1)
    }

    return (
        <>

            <Heading>Número: {numero}</Heading>
            <button onClick={handleClick}>Aumenta</button>

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
                        <DefaultInput
                            labelText="Tarefa"
                            id='inputDefault'
                            type='text'
                            placeholder='Ex: estudar para a prova'
                        />
                    </div>

                    <div className="formRow">
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>

                    <div className="formRow">
                        <Cycles />
                    </div>

                    <div className="formRow">
                        <SendButton icon={<CirclePlay />} color='green' />
                    </div>
                </form>
            </Container>

            <Container>
                <Footer />
            </Container>

        </>
    )
}

