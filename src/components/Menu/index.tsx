import { HistoryIcon, HomeIcon, MoonIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';

// DEFININDO TEMAS PADRÃO
type AvailableThes = 'dark' | 'light';

export function Menu() {

    const [theme, setTheme] = useState<AvailableThes>(() => {
        const storageTheme =
            (localStorage.getItem('theme') as AvailableThes) || 'dark';
        return storageTheme;
    });

    // CRIANDO UMA LOOK AT TABLE COM OS ÍCONES
    const nextThemeIcon = {
        dark: <SunIcon />,
        light: <MoonIcon />
    }

    function changeTheme(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        event.preventDefault(); // 'Não segue o link'
        setTheme(prevTheme => {
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
            return nextTheme;
        });

    };

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);

        // SALVANDO TEMA NO LOCALSTORAGE
        localStorage.setItem('theme', theme);

    }, [theme]); // passando uma dependência qualquer

    return (<nav className={styles.menu}>

        <a className={styles.menuLink}
            href="#"
            aria-label='Home'
            title='Home'
        >
            <HomeIcon />
        </a>
        <a className={styles.menuLink}
            href="#"
            aria-label='Histórico'
            title='Histórico'
        >
            <HistoryIcon />
        </a>
        <a className={styles.menuLink}
            href="#"
            aria-label='Configurações'
            title='Configurações'
        >
            <SettingsIcon />
        </a>
        <a className={styles.menuLink}
            href="#"
            aria-label='Alterar Tema'
            title='Alterar Tema'
            onClick={changeTheme}
        >
            {/* CHAMANDO ÍCONE DO THEMA ATUAL */}
            {nextThemeIcon[theme]}
        </a>
    </nav>
    )
}