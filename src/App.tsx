import { Heading } from './components/Heading';

import './styles/theme.css'
import './styles/global.css'
import { TimerIcon } from 'lucide-react';

export function App() {
    return (
        <>
            <Heading>
                Olá mundo!
                <button><TimerIcon /></button>
            </Heading>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore necessitatibus sequi minus dicta nesciunt explicabo voluptates quae quod, maiores aliquam vel aspernatur quisquam natus fugit architecto autem exercitationem voluptatem error?
            </p>
        </>
    )
}

