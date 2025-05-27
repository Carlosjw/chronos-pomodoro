import { HistoryIcon, HomeIcon, SettingsIcon, Sun } from 'lucide-react';
import styles from './styles.module.css';
import { useState } from 'react';

// DEFININDO TEMAS PADRÃO
type AvailableThes = 'dark' | 'light';

export function Menu() {

    const [theme, setTheme] = useState<AvailableThes>('dark');

    function changeTheme(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        event.preventDefault(); // 'Não segue o link'
        setTheme(prevTheme => {
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
            return nextTheme;
        });

        document.documentElement.setAttribute('data-theme', theme);
    }

    return (<nav className={styles.menu}>
        <h1>{theme}</h1>

        <a className={styles.menuLink}
            href="#"
            aria-label='Home'
            title='Home'>
            <HomeIcon />
        </a>
        <a className={styles.menuLink}
            href="#"
            aria-label='Histórico'
            title='Histórico'>
            <HistoryIcon />
        </a>
        <a className={styles.menuLink}
            href="#"
            aria-label='Configurações'
            title='Configurações'>
            <SettingsIcon />
        </a>
        <a className={styles.menuLink}
            href="#"
            aria-label='Alterar Tema'
            title='Alterar Tema'
            onClick={changeTheme} // chamando função que altera o tema
        >
            <Sun />
        </a>
    </nav>
    )
}